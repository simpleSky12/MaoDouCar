package Biz;

import Entity.User;

public interface IUserBiz {
    // 验证账号是否存在
    public int findUser(String name) throws Exception;
//    验证账号密码是否匹配
    public int findUser(String name, String password) throws Exception;
//    注册账号
    public boolean addUser(String name, String password,String address,String tel) throws Exception;

    public User getUser(String name) throws Exception;
}
