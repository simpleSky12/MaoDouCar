package Biz;

import Entity.Order;
import Util.PageUtil;

import java.util.List;

public interface IOrderBiz {
    public PageUtil<Order> orderList(int userId,int pageNum,int pageSize) throws Exception;
    public PageUtil<Order> orderList(int userId,int pageNum,int pageSize,int status) throws Exception;

    public Order showOrder(int itemId,int userId) throws Exception;
    public Order showOrder(int itemId) throws Exception;

    public boolean payOrder(int itemId);

    public boolean delOrder(int itemId);

    public PageUtil<Order> orderList(String cName,int pageNum,int pageSize) throws Exception;

    public boolean sendOrder(int send,int itemId);

    public boolean addOrder(int carId,int userId);

}
