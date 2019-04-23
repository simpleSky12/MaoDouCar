package Entity;

public class Car {
    private int id;
    private String cName;
    private double price;
    private String pic;
    private String Msg;
    private int typeId;
    public Car(int id, String cName, double price, String pic, String msg, int typeId) {
        super();
        this.id = id;
        this.cName = cName;
        this.price = price;
        this.pic = pic;
        Msg = msg;
        this.typeId = typeId;
    }
    public Car() {
        super();
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

    public String getPic() {
        return pic;
    }

    public void setPic(String pic) {
        this.pic = pic;
    }

    public String getMsg() {
        return Msg;
    }

    public void setMsg(String msg) {
        Msg = msg;
    }

    public int getTypeId() {
        return typeId;
    }

    public void setTypeId(int typeId) {
        this.typeId = typeId;
    }
}
