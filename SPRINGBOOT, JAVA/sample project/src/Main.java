import java.util.ArrayList;
import java.util.HashSet;

class Employee{
    String empName;
    int sickLeave;
    Employee(String empName, int sickLeave){
        this.empName=empName;
        this.sickLeave=sickLeave;

    }
}

public class Main{
    public static void main(String[] args) {
        ArrayList<Employee> emp=new ArrayList<>();
        emp.add(new Employee("Arjun",0));
        emp.add(new Employee("Aswin",7));
        emp.add(new Employee("Krishna",1));
        emp.add(new Employee("Radhika",3));

        HashSet<Employee> empl= new HashSet<>();
        empl.add(new Employee("raju",6));
        empl.add(new Employee("anju",1));
        empl.add(new Employee("jes",0));
        empl.add(new Employee("raju",0));
        empl.add(new Employee("kiran",5));



        for(Employee e: emp){
            if(e.sickLeave==0){
                System.out.println(e.empName + " is eligible for bonus");
            }
            else System.out.println(e.empName + " is not having bonus");
        }
        for(Employee e: empl){
            if(e.sickLeave==0){
                System.out.println(e.empName + " is eligible for bonus");
            }
            else System.out.println(e.empName + " is not having bonus");
        }
    }}


