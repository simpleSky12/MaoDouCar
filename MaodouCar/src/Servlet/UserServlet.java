package Servlet;

import Biz.IAreaBiz;
import Biz.IUserBiz;
import Biz.Imp.AreaBiz;
import Biz.Imp.UserBiz;
import Entity.User;
import Util.JdbcUtil;
import com.fasterxml.jackson.databind.ObjectMapper;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.ParseException;
import java.util.HashMap;
import java.util.Map;

public class UserServlet extends HttpServlet {
    private IUserBiz userBiz = new UserBiz();
    private IAreaBiz areaBiz = new AreaBiz();
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        resp.setContentType("application/json");
        String action = req.getParameter("action");
        PrintWriter out = resp.getWriter();
        ObjectMapper om = new ObjectMapper();
        try {
            // 登录
            if ("login".equals(action)) {
                String name = req.getParameter("name");
                String psw = req.getParameter("psw");
                int index = userBiz.findUser(name);
                if(index!=-1){
                    index = userBiz.findUser(name,psw);
                 }
                User user = userBiz.getUser(name);
                req.getSession().setAttribute("user",user);

                Map<String,Object> map = new HashMap<String,Object>();
                map.put("index",index);
                map.put("user",user);
                out.print(om.writeValueAsString(map));
            }
//            注销
            else if("logout".equals(action)){
                req.getSession().invalidate();
                out.write("1");
            }
//            注册
            else if("register".equals(action)){
                String name = req.getParameter("name");
                String psw = req.getParameter("psw");
                String tel = req.getParameter("tel");
//                int provinceId = Integer.parseInt(req.getParameter("province"));
//                int cityId = Integer.parseInt(req.getParameter("city"));
//                String address = areaBiz.getAddress(provinceId,cityId);
                String address = req.getParameter("address");
                System.out.println(name+"  "+psw+"  "+address+"  "+tel);
                int index = userBiz.findUser(name);
                if(index==-1){
                    if(userBiz.addUser(name,psw,address,tel)){
                        index = 1; // 注册成功
                    }else{
                        index = 0; // 注册失败
                    }
                }
                out.print(index); // index =-2 该账号已存在
            }
//            修改用户信息
            else if("edit".equals(action)){

            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        out.close();
    }

    // 填充 user 实体类
    private User fillUser(HttpServletRequest req) throws ParseException {
        User user = new User();
        user.setuName(req.getParameter("cName"));
        user.setId(Integer.parseInt(req.getParameter("id")));
        user.setPwd(req.getParameter("pwd"));
        return user;
    }
}
