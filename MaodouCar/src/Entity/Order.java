package Entity;

import java.util.Date;
import java.util.List;

public class Order {
    private int id;
    private String cName;
    private double price;
    private String uName;
    private String address;
    private String tel;
    private int num;
    private Date orderTime;
    private int status;
    private int itemId;
    private int send;

    public int getSend() {
        return send;
    }

    public void setSend(int send) {
        this.send = send;
    }

    public int getItemId() {
        return itemId;
    }

    public void setItemId(int itemId) {
        this.itemId = itemId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getcName() {
        return cName;
    }

    public void setcName(String cName) {
        this.cName = cName;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getuName() {
        return uName;
    }

    public void setuName(String uName) {
        this.uName = uName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public int getNum() {
        return num;
    }

    public void setNum(int num) {
        this.num = num;
    }

    public Date getOrderTime() {
        return orderTime;
    }

    public void setOrderTime(Date orderTime) {
        this.orderTime = orderTime;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Order{" +
                "id=" + id +
                ", cName='" + cName + '\'' +
                ", price=" + price +
                ", uName='" + uName + '\'' +
                ", address='" + address + '\'' +
                ", tel='" + tel + '\'' +
                ", num=" + num +
                ", orderTime=" + orderTime +
                ", status=" + status +
                ", itemId=" + itemId +
                '}';
    }
}
