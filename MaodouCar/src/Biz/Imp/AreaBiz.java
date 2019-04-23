package Biz.Imp;

import Biz.IAreaBiz;
import Dao.IAreaDao;
import Dao.Imp.AreaDao;
import Entity.City;
import Entity.Province;

import java.util.List;

public class AreaBiz implements IAreaBiz {
    private IAreaDao areaDao = new AreaDao();
    public List<Province> provinceList() throws Exception{
        return areaDao.provinceList();
    };

    public List<City> cityList(int id) throws Exception{
        return areaDao.cityList(id);
    }
    public String getAddress(int provinceId,int cityId) throws Exception{
        return areaDao.getAddress(provinceId,cityId);
    }
}
