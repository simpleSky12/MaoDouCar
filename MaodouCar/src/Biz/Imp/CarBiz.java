package Biz.Imp;

import java.util.List;

import Biz.ICarBiz;
import Dao.Imp.CarDao;
import Entity.Car;
import Util.JdbcUtil;

public class CarBiz implements ICarBiz {
	CarDao cdao = new CarDao();
	public List<Car> carlist() throws Exception {
		return cdao.carsList();
	}
	public List<Car> carlist(int pagenum) throws Exception {
		return cdao.carsList(pagenum);
	}
	public int addcar(String cName, double price, String msg, int typeId) throws Exception {
		return cdao.addcar(cName, price, msg, typeId);
	}
	public int findtypeid(String typeName) throws Exception {
		return cdao.findtypeid(typeName);
	}
	public int delcar(int id) throws Exception {
		return cdao.delcar(id);
	}
	public int updcar(String cName, double price, String msg, int typeId, int id) throws Exception {
		return cdao.updcar(cName, price, msg, typeId, id);
	}
	public String findtype(int typeid) throws Exception {
		return cdao.findtype(typeid);
	}
	public List<Car> findcar(String name, int typeid) throws Exception {
		return cdao.findcar(name, typeid);
	}
}
