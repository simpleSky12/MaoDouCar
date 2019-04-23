package Biz;

import java.util.List;

import Entity.Car;


public interface ICarBiz {
	public List<Car> carlist() throws Exception;
	public List<Car> carlist(int pagenum) throws Exception;
	public int findtypeid(String typeName) throws Exception;
	public String findtype(int typeid) throws Exception;
 	public int addcar(String cName, double price, String msg, int typeId) throws Exception;
	public int delcar(int id) throws Exception;
	public int updcar(String cName, double price, String msg, int typeId, int id) throws Exception;
	public List<Car> findcar(String name, int typeid) throws Exception;
}
