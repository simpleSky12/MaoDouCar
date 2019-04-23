package Dao.Imp;

import Biz.IUserBiz;
import Dao.IUserDao;
import Entity.User;
import Util.JdbcUtil;

import java.sql.ResultSet;
import java.sql.SQLException;

public class UserDao implements IUserDao {

    public int findUser(String name) throws Exception {
        ResultSet rs = JdbcUtil.querySQL("select * from `user` where `uname`=? ", name);
        String uName = null;
        while (rs.next()){
            uName = rs.getString("uName");
        }
        if(uName!=null){
            return -2;
        }else {
            return -1;
        }
    }

    public int findUser(String name, String password) throws Exception {
        ResultSet rs = JdbcUtil.querySQL("select * from `user` where `uname`=? and `pwd`=?", name, password);
        String uName = null;
        String pwd = null;
        while (rs.next()){
            uName = rs.getString("uName");
            pwd = rs.getString("pwd");
        }
        if(pwd!=null && uName !=null){
            return 1;
        }else{
            return 0;
        }
    }

    public User getUser(String name) throws Exception {
        ResultSet rs = JdbcUtil.querySQL("select * from `user` where `uname`=? ",name);
        return fillUser(rs);
    }

    public boolean addUser(String name, String password,String address,String tel){
//        insert into `user` (`uname`,`pwd`,`address`,`tel`) values('张昭','1234','安徽合肥','17718155965')
        return JdbcUtil.updateSQL("insert into `user` (`uname`,`pwd`,`address`,`tel`) values(?,?,?,?)",name, password,address,tel)>0;
    }

    public User getUser(int id) throws Exception {
        User user = new User();
        ResultSet rs = JdbcUtil.querySQL("select * from `user` WHERE id=? ",id);
        while(rs.next()){
            user.setuName(rs.getString("uName"));
            user.setAddress(rs.getString("address"));
            user.setTel(rs.getString("tel"));
        }
        return user;
    }

    public User fillUser(ResultSet rs) throws SQLException {
        if(rs.next()){
            User user = new User();
            user.setId(rs.getInt("id"));
            user.setuName(rs.getString("uName"));
            user.setPwd(rs.getString("pwd"));
            user.setPower(rs.getInt("power"));
            return user;
        }
        return null;
    }

}
