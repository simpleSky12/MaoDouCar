package Biz.Imp;

import Biz.IUserBiz;
import Dao.IUserDao;
import Dao.Imp.UserDao;
import Entity.User;

public class UserBiz implements IUserBiz {
    private IUserDao userDao = new UserDao();
    @Override
    public int findUser(String name) throws Exception {
        return userDao.findUser(name);
    }

    @Override
    public int findUser(String name, String password) throws Exception {
        return userDao.findUser(name,password);
    }

    @Override
    public boolean addUser(String name, String password,String address,String tel) throws Exception {
        return userDao.addUser(name,password,address,tel);
    }

    public User getUser(String name) throws Exception{
        return userDao.getUser(name);
    }
}
