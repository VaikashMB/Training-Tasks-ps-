import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class JDBCDemo {
    public static void main(String[] args) {
        String url="jdbc:mysql://localhost:3306/employe_ management";
        String username="root";
        String password="Welcome@123";

        try{
        Class.forName("com.mysql.cj.jdbc.Driver");

            Connection connection = DriverManager.getConnection(url,username,password);
            Statement statement=connection.createStatement();


            ResultSet resultSet=statement.executeQuery("select * from employee ");

            while (resultSet.next())
            {
                System.out.println(resultSet.getInt(1)  + " "+resultSet.getString(2) + " "+ resultSet.getInt(3) + " "+ resultSet.getString(4));
            }


            String newEmployeeNameInsert = "Anju";
            int newEmployeeAge = 20;
            String newEmployeePosition = "Developer";

            int rowsInserted = statement.executeUpdate("INSERT INTO employee (name, age, job_role) VALUES ('" + newEmployeeNameInsert + "', " + newEmployeeAge + ", '" + newEmployeePosition + "')");

            if (rowsInserted > 0) {
                System.out.println("New employee inserted successfully.");
            } else {
                System.out.println("Failed to insert a new employee.");
            }




            int idToDelete=0;
            int rowsAffected=statement.executeUpdate("DELETE FROM employee WHERE id="+idToDelete);
            if (rowsAffected > 0) {
                System.out.println("Employee with ID " + idToDelete + " deleted successfully.");
            } else {
                System.out.println("No employee found with ID " + idToDelete);
            }



            int idToUpdate = 2;
            String newEmployeeName = "kiran";

            int rowsUpdated = statement.executeUpdate("UPDATE employee SET name='" + newEmployeeName + "' WHERE id=" + idToUpdate);

            if (rowsUpdated > 0) {
                System.out.println("Employee with ID " + idToUpdate + " updated successfully.");
            } else {
                System.out.println("No employee found with ID " + idToUpdate);
            }

    connection.close();
    resultSet.close();
    statement.close();

    }
        catch (Exception e) {
            System.out.println(e);

        }
    }
}
