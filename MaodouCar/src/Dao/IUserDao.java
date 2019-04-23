package Dao;

import Entity.User;

public interface IUserDao {
    // 验证账号是否存在
    public int findUser(String name) throws Exception;
    // 验证账号和密码
    public int findUser(String name, String password) throws Exception;
    // 注册用户
    public boolean addUser(String name, String password,String address,String tel) throws Exception;
//     获取用户所有信息，用于存放Session
    public User getUser(String name) throws Exception;

    public User getUser(int id) throws Exception;
}
