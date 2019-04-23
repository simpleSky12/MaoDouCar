package Servlet;

import Biz.IAreaBiz;
import Biz.Imp.AreaBiz;
import Entity.City;
import Entity.Province;
import com.fasterxml.jackson.databind.ObjectMapper;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

public class AreaServlet extends HttpServlet {
    private IAreaBiz areaBiz = new AreaBiz();
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter out = resp.getWriter();
        String action = req.getParameter("action");
        resp.setContentType("application/json");
        ObjectMapper om  = new ObjectMapper();
        if("province".equals(action)){
            try {
                List<Province> provinces = areaBiz.provinceList();
                out.print(om.writeValueAsString(provinces));
            } catch (Exception e) {
                e.printStackTrace();
            }
        }else if("city".equals(action)){
            int provinceId = Integer.parseInt(req.getParameter("provinceId"));
            try {
                List<City> cities = areaBiz.cityList(provinceId);
                out.print(om.writeValueAsString(cities));
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        out.close();
    }
}
