package Servlet;

import Biz.IOrderBiz;
import Biz.Imp.OrderBiz;
import Entity.Order;
import Entity.OrderItem;
import Entity.User;
import Util.PageUtil;
import com.fasterxml.jackson.databind.ObjectMapper;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class OrderServlet extends HttpServlet {
    private IOrderBiz orderBiz = new OrderBiz();
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json");
        ObjectMapper om = new ObjectMapper();
        String action = req.getParameter("action");
        PrintWriter out = resp.getWriter();
        User user = (User) req.getSession().getAttribute("user");
        int userId = user.getId();
//        int status = Integer.parseInt(req.getParameter("status"));
        try {
            if("query".equals(action)) {
                int pageNum = Integer.parseInt(req.getParameter("page"));
                int pageSize = Integer.parseInt(req.getParameter("rows"));
                PageUtil<Order> orderPage = orderBiz.orderList(userId, pageNum, pageSize);
                Map<String,Object> map = new HashMap<String,Object>();
                map.put("rows",orderPage.getPageData());
                map.put("total",orderPage.getTotalCount());
                om.setDateFormat(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"));
                out.write(om.writeValueAsString(map));
            }
            else if("showOrder".equals(action)){
                int itemId = Integer.parseInt(req.getParameter("itemId"));
                Order order = orderBiz.showOrder(itemId,userId);
                String json = om.writeValueAsString(order);
                out.print(json);
            }
            else if("payOrder".equals(action)){
                int itemId = Integer.parseInt(req.getParameter("itemId"));
                int status = Integer.parseInt(req.getParameter("status"));
                if(status==1){
                    out.write("-1");
                }else {
                    if(orderBiz.payOrder(itemId)){
                        out.write("1");
                    }else {
                        out.write("0");
                    }
                }

            }
            else if("delOrder".equals(action)){
                int itemId = Integer.parseInt(req.getParameter("itemId"));
                if(orderBiz.delOrder(itemId)){
                    out.write("1");
                }else {
                    out.write("0");
                }
            }
            else if("acceptOrder".equals(action)){
                int  itemId = Integer.parseInt(req.getParameter("itemId"));
                int send = Integer.parseInt(req.getParameter("send"));
                if(send == 1){
                    out.write("-1");
                }else {
                    if(orderBiz.sendOrder(1,itemId)){
                        out.write("1");
                    }
                }
            }
            else if("refuseOrder".equals(action)){
                int  itemId = Integer.parseInt(req.getParameter("itemId"));
                int send = Integer.parseInt(req.getParameter("send"));
                if(send == 0){
                    out.write("-1");
                }else {
                    if(orderBiz.sendOrder(0,itemId)){
                        out.write("1");
                    }
                }
            }
            else if("addOrder".equals(action)){
                int carId = Integer.parseInt(req.getParameter("carId"));
                if(orderBiz.addOrder(carId,userId)){
                    out.write("1");
                }else{
                    out.write("-1");
                }
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        out.close();

    }
}