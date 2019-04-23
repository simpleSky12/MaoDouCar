package Entity;

public class Page {
    private int pagenum;
    public Page() {
        super();
    }
    public Page(int pagenum, int pagesize) {
        super();
        this.pagenum = pagenum;
    }
    public int getPagenum() {
        return pagenum;
    }
    public void setPagenum(int pagenum) {
        this.pagenum = pagenum;
    }
}
