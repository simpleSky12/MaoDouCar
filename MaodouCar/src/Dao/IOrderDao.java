package Dao;

import Entity.Order;
import Util.PageUtil;

import java.util.List;

public interface IOrderDao {
    // 获取所有订单信息
    public PageUtil<Order> orderList(int userId,int pageNum,int pageSize) throws Exception;
    public PageUtil<Order> orderList(int userId,int pageNum,int pageSize,int status) throws Exception;
//    public PageUtil<Order> orderList(int userId,int pageNum,int pageSize,int status) throws Exception;
    // 查看订单详情
    public Order showOrder(int itemId,int userId) throws Exception;
    public Order showOrder(int itemId) throws Exception;

    // 支付订单
    public boolean payOrder(int itemId);

    // 删除订单
    public boolean delOrder(int itemId);

    public PageUtil<Order> orderList(String cName,int pageNum,int pageSize) throws Exception;

    public boolean sendOrder(int send,int itemId);

    public boolean addOrder(int carId,int userId);
}
