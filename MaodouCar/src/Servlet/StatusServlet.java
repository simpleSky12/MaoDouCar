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

public class StatusServlet extends HttpServlet {
    private IOrderBiz orderBiz = new OrderBiz();
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json");
        PrintWriter out = resp.getWriter();
        ObjectMapper om = new ObjectMapper();
        User user = (User)req.getSession().getAttribute("user");
        int userId = user.getId();
        int pageNum = 5;
        if(req.getParameter("page")!=null){
            pageNum = Integer.parseInt(req.getParameter("page"));
        }
        int pageSize = Integer.parseInt(req.getParameter("rows"));
        int status = Integer.parseInt(req.getParameter("status"));
        try {
            PageUtil<Order> orderPage = orderBiz.orderList(userId, pageNum, pageSize,status);
            Map<String,Object> map = new HashMap<String,Object>();
            map.put("rows",orderPage.getPageData());
            map.put("total",orderPage.getTotalCount());
            om.setDateFormat(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"));
            System.out.println(om.writeValueAsString(map));
            out.write(om.writeValueAsString(map));
        } catch (Exception e) {
            e.printStackTrace();
        }
        out.close();
    }
}
