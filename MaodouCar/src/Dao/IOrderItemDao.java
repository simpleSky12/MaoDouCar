package Dao;

import Entity.OrderItem;
import Util.PageUtil;

public interface IOrderItemDao {
    public PageUtil<OrderItem> orderItemList(int orderId, int userId, int pageNum, int pageSize) throws Exception;
}
