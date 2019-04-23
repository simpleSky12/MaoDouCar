package Biz;

import Entity.City;
import Entity.Province;

import java.util.List;

public interface IAreaBiz {
    public List<Province> provinceList() throws Exception;

    public List<City> cityList(int id) throws Exception;

    public String getAddress(int provinceId,int cityId) throws Exception;
}
