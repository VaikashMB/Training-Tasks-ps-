package com.welcomeportal.welcomedeck.Service;

import com.welcomeportal.welcomedeck.Entity.Employee;

import java.util.List;

public interface EmployeeService {
    public Employee saveEmployee(Employee employee);
    public List<Employee> getAllEmployees();
}
