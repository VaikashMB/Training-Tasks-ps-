package com.welcomeportal.welcomedeck.Repository;

import com.welcomeportal.welcomedeck.Entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository  extends JpaRepository<Employee,Integer> {




}
