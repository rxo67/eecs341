<%@page language="java" import="java.sql.*"%>
<% Driver DriverRecordset1 = (Driver) Class.forName("com.mysql.jdbc.Driver").newInstance();
Connection Conn = DriverManager.getConnection("db",
"username","pass");
Statement StatementRecordset1 = Conn.createStatement();
String caseid=request.getParameter("caseid");
String pword=request.getParameter("pword");
StatementRecordset1.executeQuery("use cap;");
ResultSet Recordset1 = StatementRecordset1.executeQuery("Select * From USERS WHERE username = " + caseid + " and pass = " + pword;);
ResultSetMetaData rsmd = Recordset1.getMetaData();
int columnCount = rsmd.getColumnCount();
if (columnCount == 1) {
  %><td> Success </td> <%
}

Recordset1.close();
Conn.close();
%>