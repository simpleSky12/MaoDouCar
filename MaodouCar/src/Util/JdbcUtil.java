package Util;

import java.sql.*;

//工具类通常全部为静态方法
public class JdbcUtil {

	private static Connection con =null;
	private static PreparedStatement pst =null;
	private static ResultSet rs =null;

	public static  String url="jdbc:mysql://localhost:3306/maodou?useSSL=false&useUnicode=true&characterEncoding=UTF-8";
	public static  String user="root";
	public static  String pwd="82538497";
	public static  String driver="com.mysql.jdbc.Driver";

	//静态代码块
	static{
		//加载数据库驱动
		try {
			Class.forName(driver);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
	}


	//	public static int updateSQL(String sql,Object[] paras){
	//可变参数，必须处于参数列表中最后一个
	public static int updateSQL(String sql,Object ... paras){

		int row=-1;
		try {
			//建立连接
			con = DriverManager.getConnection(url, user,pwd);
			//创建prepareStatement对象
			pst = con.prepareStatement(sql);
			//设置参数
			if(paras!=null && paras.length>0){
				for (int i = 0; i < paras.length; i++) {
					//参数索引从1开始
					pst.setObject(i+1, paras[i]);
				}
			}
			//执行
			row = pst.executeUpdate();

		} catch (Exception e) {
			e.printStackTrace();
		}finally{
			//释放资源
			closeAll();
		}
		return row;
	}

	public static void closeAll() {
		//释放资源
		try {
			if(rs!=null && !rs.isClosed()){
				rs.close();
			}
			if(pst!=null &&!pst.isClosed()){
				pst.close();
			}
			if (con!=null &&!con.isClosed()) {
				con.close();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	public static ResultSet querySQL(String sql,Object ... paras) throws Exception{

		//建立连接
		con =  DriverManager.getConnection(url, user,pwd);
		//创建prepareStatement对象
		pst = con.prepareStatement(sql);
		//设置参数
		if(paras!=null && paras.length>0){
			for (int i = 0; i < paras.length; i++) {
				//参数索引从1开始
				pst.setObject(i+1, paras[i]);
			}
		}
		//执行查询并返回结果集
		rs = pst.executeQuery();

		return rs;
	}
}
