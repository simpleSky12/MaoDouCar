package Dao.Imp;

import Dao.IOrderDao;
import Entity.*;
import Util.JdbcUtil;
import Util.PageUtil;
import com.mysql.jdbc.StringUtils;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class OrderDao implements IOrderDao {
// 买家订单
    public PageUtil<Order> orderList(int userId,int pageNum,int pageSize) throws Exception {
        List<Object> paras = new ArrayList<Object>();
        List<Order> orders = new ArrayList<Order>();
        PageUtil<Order> page = new PageUtil<Order>();
        paras.add(userId);
        String sql = " item.id itemId,car.cName,car.price,u.uName ,u.address ,u.tel ,item.orderTime ,item.`status`,item.send FROM item,`user` u,car WHERE  item.carId = car.id AND item.userId = u.id  AND u.id=? ";

//SELECT car.cName 商品,car.price 价格,u.uName 姓名,u.address 地址,u.tel 电话号码,item.num 商品数量,o.orderTime 下单时间,o.`status` 订单状态   FROM orders o,orderitem item,`user` u,car WHERE o.id = item.orderId AND o.userId = u.id AND u.id=4 AND item.carId = car.id;
        // 获取所有的订单信息
        ResultSet rs = JdbcUtil.querySQL("SELECT count(*) total,"+sql,paras.toArray());
        while (rs.next()){
            page.setTotalCount(rs.getInt("total"));
        }
        paras.add((pageNum-1)*pageSize);
        paras.add(pageSize);
        // 获取总记录数

        rs = JdbcUtil.querySQL("SELECT " + sql + " ORDER BY item.orderTime DESC LIMIT ? ,?",paras.toArray());
        while (rs.next()){
            Order order = new Order();
            order.setItemId(rs.getInt("itemId"));
            order.setcName(rs.getString("cName"));
            order.setPrice(rs.getDouble("price"));
            order.setuName(rs.getString("uName"));
            order.setAddress(rs.getString("address"));
            order.setTel(rs.getString("tel"));
            order.setOrderTime(new Date(rs.getDate("orderTime").getTime()));
            order.setStatus(rs.getInt("status"));
            order.setSend(rs.getInt("send"));
            orders.add(order);
        }
        page.setPageData(orders);
        rs.close();
        JdbcUtil.closeAll();
        return page;
    }

//    用来动态查询订单是否支付
    public PageUtil<Order> orderList(int userId,int pageNum,int pageSize,int status) throws Exception {
        List<Object> paras = new ArrayList<Object>();
        List<Order> orders = new ArrayList<Order>();
        PageUtil<Order> page = new PageUtil<Order>();
        paras.add(userId);
        String sql = " item.id itemId,car.cName,car.price,u.uName ,u.address ,u.tel ,item.orderTime ,item.`status` FROM item,`user` u,car WHERE  item.carId = car.id AND item.userId = u.id  AND u.id=? ";

        ResultSet rs = JdbcUtil.querySQL("SELECT count(*) total,"+sql,paras.toArray());
        while (rs.next()){
            page.setTotalCount(rs.getInt("total"));
        }
        paras.add((pageNum-1)*pageSize);
        paras.add(pageSize);

        if(status==1||status==0){
            sql += " AND item.`status`=? ";
            paras.add(status);
        }
        // 获取所有的订单信息
        rs = JdbcUtil.querySQL("SELECT "+sql+ " ORDER BY item.orderTime DESC LIMIT ? ,?",paras.toArray());
        while (rs.next()){
            Order order = new Order();
            order.setItemId(rs.getInt("itemId"));
            order.setcName(rs.getString("cName"));
            order.setPrice(rs.getDouble("price"));
            order.setuName(rs.getString("uName"));
            order.setAddress(rs.getString("address"));
            order.setTel(rs.getString("tel"));
            order.setOrderTime(new Date(rs.getDate("orderTime").getTime()));
            order.setStatus(rs.getInt("status"));
            order.setSend(rs.getInt("send"));
            orders.add(order);
        }

        paras.add((pageNum-1)*pageSize);
        paras.add(pageSize);
        // 获取总记录数
        ResultSet rs1 = JdbcUtil.querySQL("SELECT count(*) total,"+sql +" LIMIT ?,? ",paras.toArray());
        while (rs1.next()){
            page.setTotalCount(rs1.getInt("total"));
        }

        page.setPageData(orders);
        rs.close();
        JdbcUtil.closeAll();
        return page;
    }

    // 查看
    public Order showOrder(int itemId,int userId) throws Exception {
        Order order = new Order();
        ResultSet rs = JdbcUtil.querySQL("SELECT item.id itemId,car.cName,car.price,u.uName ,u.address ,u.tel ,item.orderTime ,item.`status` FROM item,`user` u,car WHERE  item.carId = car.id AND item.carId = car.id AND item.userId = u.id AND u.id=? AND item.id=? ",userId,itemId);
        return fillOrder(rs);
    }
    public Order showOrder(int itemId) throws Exception {
        Order order = new Order();
        ResultSet rs = JdbcUtil.querySQL("SELECT item.id itemId,car.cName,car.price,u.uName ,u.address ,u.tel ,item.orderTime ,item.`status` FROM item,`user` u,car WHERE  item.carId = car.id AND item.carId = car.id AND item.userId = u.id  AND item.id=?",itemId);
        return fillOrder(rs);
    }

    // 删除
    @Override
    public boolean delOrder(int id) {
        return JdbcUtil.updateSQL("DELETE from item where id = ?",id) > 0;
    }

//    付款
    public boolean payOrder(int itemId){
        return JdbcUtil.updateSQL("UPDATE item SET  status = 1 WHERE id = ?",itemId)>0;
    }

//    卖家订单
    public PageUtil<Order> orderList(String cName,int pageNum,int pageSize) throws Exception {
        List<Object> paras = new ArrayList<Object>();
        String sql = " FROM `item`,`user` u,car WHERE  item.carId = car.id AND item.userId = u.id ";

        if(!StringUtils.isNullOrEmpty(cName)) {
            paras.add("%"+cName+"%");
            sql += " AND car.cName LIKE ? ";
        }

        PageUtil<Order> page = new PageUtil<Order>();
        ResultSet rs = JdbcUtil.querySQL("SELECT COUNT(*) "+sql,paras.toArray());
        if(rs.next()){
            page.setTotalCount(rs.getInt(1));
        }
        paras.add((pageNum-1)*pageSize);
        paras.add(pageSize);
        rs = JdbcUtil.querySQL(" SELECT item.id itemId,u.uName,u.address,u.tel,car.cName,car.price,item.`status`,item.send,item.orderTime " +sql+ " ORDER BY item.orderTime DESC LIMIT ?,?",paras.toArray());
        List<Order> orders = new ArrayList<Order>();
        while (rs.next()){
            Order order = new Order();
            order.setItemId(rs.getInt("itemId"));
            order.setuName(rs.getString("uName"));
            order.setAddress(rs.getString("address"));
            order.setTel(rs.getString("tel"));
            order.setcName(rs.getString("cName"));
            order.setPrice(rs.getDouble("price"));
            order.setStatus(rs.getInt("status"));
            order.setSend(rs.getInt("send"));
            order.setOrderTime(new Date(rs.getDate("orderTime").getTime()));
            orders.add(order);
        }
        page.setPageData(orders);
        rs.close();
        JdbcUtil.closeAll();
        return page;
    }

//    发货 send=-1、收货 send=1、拒收 send=0
    public boolean sendOrder(int send,int itemId){
        return JdbcUtil.updateSQL("UPDATE item item SET send = ? WHERE item.id = ?",send,itemId)>0;
    }

// 增加订单
//INSERT INTO item(carId,userId,orderTime) values (7,4,'2019-04-19 14:56:45')
    public boolean addOrder(int carId,int userId){
        java.sql.Date orderTime = new java.sql.Date(new Date().getTime());
        return JdbcUtil.updateSQL("INSERT INTO item(carId,userId,orderTime) values (?,?,?)",carId,userId,orderTime)>0;
    }


    public Order fillOrder(ResultSet rs) throws SQLException {
        Order order = new Order();
        while(rs.next()){
            order.setcName(rs.getString("cName"));
            order.setPrice(rs.getDouble("price"));
            order.setuName(rs.getString("uName"));
            order.setAddress(rs.getString("address"));
            order.setTel(rs.getString("tel"));
            order.setOrderTime(new Date(rs.getDate("orderTime").getTime()));
            order.setStatus(rs.getInt("status"));
        }
        return order;
    }
}
