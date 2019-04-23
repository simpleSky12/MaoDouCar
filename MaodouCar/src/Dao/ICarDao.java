package Dao;

import Util.PageUtil;
import Entity.Car;

import java.util.List;

public interface ICarDao {
	// 分页车辆信息
	public List<Car> carsList(int pagenum) throws Exception;
    //获取所有车辆信息
	public List<Car> carsList() throws Exception;
	//通过条件查找车辆
    public List<Car> findcar(String name, int typeid) throws Exception;
   	//插入车辆信息
   	public int addcar(String cName, double price, String msg, int typeId) throws Exception;
    //删除车辆信息
   	public int delcar(int id) throws Exception;
   	//修改车辆信息
    public int updcar(String cName, double price, String msg, int typeId, int id) throws Exception;
   	//通过系名查找系别typeid
	public int findtypeid(String typeName) throws Exception;
	//通过typeid查找系名
	public String findtype(int typeid) throws Exception;
	// 动态条件查询车辆信息
	public PageUtil<Car> carsList(int typeId, String cName, double price, int pageNumber, int pageSize);
	// 通过车辆Id获取车辆，加入购物车
	public Car getCar(int id);   
}
