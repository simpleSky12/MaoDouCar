package Dao;

import Entity.City;
import Entity.Province;

import java.util.List;

public interface IAreaDao {
    public List<Province> provinceList() throws Exception;

    public List<City> cityList(int id) throws Exception;

    public String getAddress(int provinceId,int cityId) throws Exception;
}
