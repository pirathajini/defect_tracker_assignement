package com.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.Entity.Employee;
import com.springboot.repository.EmployeeRepostories;

@RestController
@RequestMapping("/api/v1")
public class EmployeeController {
	
	@Autowired
	EmployeeRepostories employeeRepostories;
	
	@PostMapping("/employee")
	public ResponseEntity<?> createNote(@RequestBody Employee employee)
	{
		employeeRepostories.save(employee);
		return new ResponseEntity<Object>(HttpStatus.OK);
	}
	
	@GetMapping("/employee")
	public List<Employee>getEmployee()
	{
		return employeeRepostories.findAll();
	}
	

}
