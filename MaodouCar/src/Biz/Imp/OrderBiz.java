package Biz.Imp;

import Biz.IOrderBiz;
import Dao.IOrderDao;
import Dao.Imp.OrderDao;
import Entity.Order;
import Util.PageUtil;

import java.util.List;

public class OrderBiz implements IOrderBiz {
    private IOrderDao orderDao = new OrderDao();
    public PageUtil<Order> orderList(int userId,int pageNum,int pageSize) throws Exception{
        return orderDao.orderList(userId,pageNum,pageSize);
    }

//    @Override
    public PageUtil<Order> orderList(int userId, int pageNum, int pageSize,int status) throws Exception{
        return orderDao.orderList(userId,pageNum,pageSize,status);
    }
    public Order showOrder(int itemId,int userId) throws Exception{
        return orderDao.showOrder(itemId,userId);
    }
    public Order showOrder(int itemId) throws Exception{
        return orderDao.showOrder(itemId);
    }

    public boolean payOrder(int itemId){
        return orderDao.payOrder(itemId);
    }

    public boolean delOrder(int itemId){
        return orderDao.delOrder(itemId);
    }

    public PageUtil<Order> orderList(String cName,int pageNum,int pageSize) throws Exception{
        return orderDao.orderList(cName,pageNum,pageSize);
    }

    public boolean sendOrder(int send,int itemId){
        return orderDao.sendOrder(send,itemId);
    }

    public boolean addOrder(int carId,int userId){
        return orderDao.addOrder(carId,userId);
    }

}
