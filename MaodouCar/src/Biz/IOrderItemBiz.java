package Biz;

import Entity.OrderItem;
import Util.PageUtil;

public interface IOrderItemBiz {
    public PageUtil<OrderItem> orderItemList(int orderId, int userId, int pageNum, int pageSize) throws Exception;
}
