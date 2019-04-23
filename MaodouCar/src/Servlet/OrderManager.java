package Servlet;

import Biz.IOrderBiz;
import Biz.Imp.OrderBiz;
import Entity.Order;
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
import java.util.HashMap;
import java.util.Map;

public class OrderManager extends HttpServlet {
    private IOrderBiz orderBiz = new OrderBiz();
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String cName = req.getParameter("name");
        resp.setContentType("application/json");
        String action = req.getParameter("action");
        ObjectMapper om = new ObjectMapper();
        PrintWriter out = resp.getWriter();
        User user = (User) req.getSession().getAttribute("user");
        int userId = user.getId();
        try {
            if("search".equals(action)){
                int pageNum = Integer.parseInt(req.getParameter("page"));
                int pageSize = Integer.parseInt(req.getParameter("rows"));
                PageUtil<Order> page = orderBiz.orderList(cName,pageNum,pageSize);
                Map<String,Object> map = new HashMap<String,Object>();
                map.put("total",page.getTotalCount());
                map.put("rows",page.getPageData());
                om.setDateFormat(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"));
                out.write(om.writeValueAsString(map));
            }else if("showOrder".equals(action)){
                int itemId = Integer.parseInt(req.getParameter("itemId"));
                System.out.println(itemId);
                Order order = orderBiz.showOrder(itemId);
                String json = om.writeValueAsString(order);
                System.out.println(json);
                out.print(json);
            }else if("sendOrder".equals(action)){
                int itemId = Integer.parseInt(req.getParameter("itemId"));
                int send = Integer.parseInt(req.getParameter("send"));
                System.out.println(send);
                if(send==-1){
                    out.write("-1");
                }else {
                    if(orderBiz.sendOrder(-1,itemId)){
                        out.write("1");
                    }
                }

            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        out.close();
    }
}
