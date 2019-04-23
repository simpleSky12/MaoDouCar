package Dao.Imp;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import Dao.ICarDao;
import Entity.Car;
import Util.JdbcUtil;
import Util.PageUtil;

public class CarDao implements ICarDao {
	public List<Car> carsList() throws Exception {
		ResultSet rs = JdbcUtil.querySQL("select * from car ");
		List<Car> Cars = new ArrayList<Car>();
		while (rs.next()) {
			Car car = new Car();
			car.setcName(rs.getString("cName"));
			car.setId(Integer.parseInt(rs.getString("id")));
			car.setMsg(rs.getNString("msg"));
			car.setPic(rs.getString("pic"));
			car.setPrice(rs.getDouble("price"));
			car.setTypeId(rs.getInt("typeId"));
			Cars.add(car);
		}
		return Cars;
	}

	public List<Car> carsList(int pagenum) throws Exception {
		ResultSet rs = JdbcUtil.querySQL("select * from car limit ?,8", pagenum);
		List<Car> Cars = new ArrayList<Car>();
		while (rs.next()) {
			Car car = new Car();
			car.setcName(rs.getString("cName"));
			car.setId(Integer.parseInt(rs.getString("id")));
			car.setMsg(rs.getNString("msg"));
			car.setPic(rs.getString("pic"));
			car.setPrice(rs.getDouble("price"));
			car.setTypeId(rs.getInt("typeId"));
			Cars.add(car);
		}
		return Cars;
	}

	public List<Car> findcar(String name,int typeid) throws Exception {
		if (name != "" && typeid ==-1) {
			String s = "%" + name + "%";
			ResultSet rs = JdbcUtil.querySQL("SELECT * FROM car WHERE cName LIKE ?", s);
			List<Car> Cars = new ArrayList<Car>();
			while (rs.next()) {
				Car car = new Car();
				car.setcName(rs.getString("cName"));
				car.setId(Integer.parseInt(rs.getString("id")));
				car.setMsg(rs.getNString("msg"));
				car.setPic(rs.getString("pic"));
				car.setPrice(rs.getDouble("price"));
				car.setTypeId(rs.getInt("typeId"));
				Cars.add(car);
			}
			return Cars;
		} else if (name == "" && typeid != -1) {
			ResultSet rs = JdbcUtil.querySQL("SELECT * FROM car WHERE typeId=?", typeid);
			List<Car> Cars = new ArrayList<Car>();
			while (rs.next()) {
				Car car = new Car();
				car.setcName(rs.getString("cName"));
				car.setId(Integer.parseInt(rs.getString("id")));
				car.setMsg(rs.getNString("msg"));
				car.setPic(rs.getString("pic"));
				car.setPrice(rs.getDouble("price"));
				car.setTypeId(rs.getInt("typeId"));
				Cars.add(car);
			}
			return Cars;
		} else if (name != "" && typeid != -1) {
			String s = "%" + name + "%";
			ResultSet rs = JdbcUtil.querySQL("SELECT * FROM car WHERE cName like ? and typeId=?", s, typeid);
			List<Car> Cars = new ArrayList<Car>();
			while (rs.next()) {
				Car car = new Car();
				car.setcName(rs.getString("cName"));
				car.setId(Integer.parseInt(rs.getString("id")));
				car.setMsg(rs.getNString("msg"));
				car.setPic(rs.getString("pic"));
				car.setPrice(rs.getDouble("price"));
				car.setTypeId(rs.getInt("typeId"));
				Cars.add(car);
			}
			return Cars;
		} else {
			return null;
		}
	}

	public PageUtil<Car> carsList(int typeId, String cName, double price, int pageNumber, int pageSize) {
		return null;
	}

	public Car getCar(int id) {

		return null;
	}

	public int addcar(String cName, double price, String msg, int typeId) throws Exception {
		return JdbcUtil.updateSQL("insert into car(cName,price,msg,typeId) values (?,?,?,?)", cName, price, msg,
				typeId);
	}

	public int findtypeid(String typeName) throws Exception {
		ResultSet rs = JdbcUtil.querySQL("SELECT id FROM car_type WHERE typeName=?", typeName);
		int i = 0;
		if (rs.next()) {
			i = rs.getInt("id");
		}
		return i;
	}

	public int delcar(int id) throws Exception {
		return JdbcUtil.updateSQL("delete from car where id=?", id);
	}

	public int updcar(String cName, double price, String msg, int typeId, int id) throws Exception {
		return JdbcUtil.updateSQL("update car set cName=?,price=?,msg=?,typeId=? where id=?", cName, price, msg, typeId,
				id);
	}

	public String findtype(int typeid) throws Exception {
		ResultSet rs = JdbcUtil.querySQL("SELECT typeName FROM car_type WHERE id=?", typeid);
		String type = "";
		if (rs.next()) {
			type = rs.getString("typeName");
		}
		return type;
	}
}
