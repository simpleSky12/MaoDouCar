package Servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

import Biz.Imp.CarBiz;
import Entity.Car;
import Entity.Page;
import Entity.User;

public class CarServlet extends HttpServlet {

	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		doPost(req, resp);
	}

	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		CarBiz carbiz = new CarBiz();
		PrintWriter out = resp.getWriter();
		ObjectMapper om = new ObjectMapper();
		String action = req.getParameter("action");
		// System.out.println(action);
		Page page = new Page();
		if ("carslist".equals(action)) {
			try {
				page.setPagenum(0);
				List<Car> carslist = carbiz.carlist(page.getPagenum());
				resp.setContentType("application/json");// 设置响应类型为json类型
				out.print(om.writeValueAsString(carslist));
				out.close();
			} catch (Exception e) {
				e.printStackTrace();
			}
		} else if ("allcar".equals(action)) {
			try {
				List<Car> allcar = carbiz.carlist();
				int total = allcar.size() / 8 + 1;
				resp.setContentType("application/json");// 设置响应类型为json类型
				out.print(om.writeValueAsString(total));
				out.close();
			} catch (Exception e) {
				e.printStackTrace();
			}

		} else if ("nextpage".equals(action)) {
			int faced = Integer.parseInt(req.getParameter("faced"));
			page.setPagenum(faced * 8);
			try {
				List<Car> allcar = carbiz.carlist();
				if (faced * 8 < allcar.size()) {
					List<Car> carslist = carbiz.carlist(page.getPagenum());
					resp.setContentType("application/json");// 设置响应类型为json类型
					out.print(om.writeValueAsString(carslist));
					out.close();
				} else {
					resp.setContentType("application/json");// 设置响应类型为json类型
					String end = "";
					out.print(om.writeValueAsString(end));
					out.close();
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		} else if ("lastpage".equals(action)) {
			int faced = Integer.parseInt(req.getParameter("faced"));
			page.setPagenum((faced - 2) * 8);
			try {
				List<Car> carslist = carbiz.carlist(page.getPagenum());
				resp.setContentType("application/json");// 设置响应类型为json类型
				out.print(om.writeValueAsString(carslist));
				out.close();
			} catch (Exception e) {
				e.printStackTrace();
			}
		} else if ("gopage".equals(action)) {
			String pagenum = req.getParameter("page");
			try {
				List<Car> allcar = carbiz.carlist();
				if (Integer.parseInt(pagenum) <= allcar.size() / 8 + 1) {
					page.setPagenum((Integer.parseInt(pagenum) - 1) * 8);
					List<Car> carslist = carbiz.carlist(page.getPagenum());
					resp.setContentType("application/json");// 设置响应类型为json类型
					out.print(om.writeValueAsString(carslist));
					out.close();
				} else {
					resp.setContentType("application/json");// 设置响应类型为json类型
					int end = allcar.size() / 8 + 1;
					out.print(om.writeValueAsString(end));
					out.close();
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		} else if ("find".equals(action)) {
			int typeid = -1;
			String name = req.getParameter("name");
			String type = req.getParameter("type");
			try {
				if (!"请选择".equals(type)) {
					typeid = carbiz.findtypeid(type);
					List<Car> cars = carbiz.findcar(name, typeid);
					resp.setContentType("application/json");// 设置响应类型为json类型
					out.print(om.writeValueAsString(cars));
					out.close();
				} else {
					List<Car> cars = carbiz.findcar(name, typeid);
					resp.setContentType("application/json");// 设置响应类型为json类型
					out.print(om.writeValueAsString(cars));
					out.close();
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		} else if ("addCar".equals(action)) {
			String addcName = req.getParameter("addcName");
			double addprice = Double.parseDouble(req.getParameter("addprice"));
			String addmsg = req.getParameter("addmsg");
			try {
				int typeId = carbiz.findtypeid(req.getParameter("addtype"));
				if (carbiz.addcar(addcName, addprice, addmsg, typeId) > 0) {
					resp.setContentType("application/json");// 设置响应类型为json类型
					out.print(om.writeValueAsString("插入成功!"));
					out.close();
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		} else if ("delCar".equals(action)) {
			int id = Integer.parseInt(req.getParameter("id"));
			try {
				if (carbiz.delcar(id) > 0) {
					resp.setContentType("application/json");// 设置响应类型为json类型
					out.print(om.writeValueAsString("删除成功!"));
					out.close();
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
			} else if ("updCar".equals(action)) {
			int updcarid = Integer.parseInt(req.getParameter("updcarid"));
			String updcName = req.getParameter("updcName");
			double updprice = Double.parseDouble(req.getParameter("updprice"));
			String updmsg = req.getParameter("updmsg");
			String updtype = req.getParameter(" updtype");
			try {
				int udptypeid = carbiz.findtypeid(updtype);
				if (carbiz.updcar(updcName, updprice, updmsg, udptypeid, updcarid) > 0) {
					resp.setContentType("application/json");// 设置响应类型为json类型
					out.print(om.writeValueAsString("修改成功!"));
					out.close();
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		} else if ("carmsg".equals(action)) {
			User user = (User) req.getSession().getAttribute("user");
			resp.setContentType("application/json");
			if (user == null) {
				out.print("-1");
			} else {
				out.print("1");
				String carid = req.getParameter("carid");
				String price = req.getParameter("price");
				String cName = req.getParameter("cName");
				String msg = req.getParameter("msg");
				req.getSession().setAttribute("carid", carid);
				req.getSession().setAttribute("price", price);
				req.getSession().setAttribute("cName", cName);
				req.getSession().setAttribute("msg", msg);
			}
			out.close();
		} else if ("logout".equals(action)) {
			out.print(om.writeValueAsString("注销成功!"));
			out.close();
			req.getSession().invalidate();
		}
	}
}
