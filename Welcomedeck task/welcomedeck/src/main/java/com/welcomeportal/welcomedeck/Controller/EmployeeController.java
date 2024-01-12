package com.welcomeportal.welcomedeck.Controller;

import com.welcomeportal.welcomedeck.Entity.Employee;
import com.welcomeportal.welcomedeck.Service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/employee")
@CrossOrigin

public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/add")
    public String add(@RequestBody Employee employee){
        employeeService.saveEmployee(employee);
        return "New Employee is added";
    }

    @GetMapping("/get")
    public List<Employee> list(){
        return employeeService.getAllEmployees();
    }

}
