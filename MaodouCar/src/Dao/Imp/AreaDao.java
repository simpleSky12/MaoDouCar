package Dao.Imp;

import Dao.IAreaDao;
import Entity.City;
import Entity.Province;
import Util.JdbcUtil;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class AreaDao implements IAreaDao {
    public List<Province> provinceList() throws Exception {
        List<Province> provinces = new ArrayList<Province>();
        ResultSet rs = JdbcUtil.querySQL("SELECT * FROM `province`");
        while (rs.next()){
            Province province = new Province();
            province.setId(rs.getInt("id"));
            province.setName(rs.getString("name"));
            provinces.add(province);
        }
        JdbcUtil.closeAll();
        return provinces;
    }

    public List<City> cityList(int id) throws Exception {
        List<City> cities = new ArrayList<City>();
        ResultSet rs = JdbcUtil.querySQL("SELECT c.* FROM province p,city c where c.provinceId = p.id and p.id = ?",id);
        while(rs.next()){
            City city = new City();
            city.setId(rs.getInt("id"));
            city.setName(rs.getString("name"));
            city.setProvinceId(rs.getInt("provinceId"));
            cities.add(city);
        }
        JdbcUtil.closeAll();
        return cities;
    }

    public String getAddress(int provinceId,int cityId) throws Exception {
        ResultSet rs = JdbcUtil.querySQL("SELECT p.`name`,c.`name` cname FROM province p,city c where p.id = ? AND c.id = ?",provinceId,cityId);
        String address="";
        while (rs.next()){
            address += rs.getString("name");
            address += rs.getString("cname");
        }
        JdbcUtil.closeAll();
        return address;
    }
}
