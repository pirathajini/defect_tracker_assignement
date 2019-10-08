package com.springboot.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;



@Entity

public class Employee {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long employeeid;
	private String Employeename;
	private String EmployeeAddress;
	private String Email;
	
	@ManyToOne
	@JoinColumn(name="project_id")
	private Project project;

	public Long getEmployeeid() {
		return employeeid;
	}

	public void setEmployeeid(Long employeeid) {
		this.employeeid = employeeid;
	}

	public String getEmployeename() {
		return Employeename;
	}

	public void setEmployeename(String employeename) {
		Employeename = employeename;
	}

	public String getEmployeeAddress() {
		return EmployeeAddress;
	}

	public void setEmployeeAddress(String employeeAddress) {
		EmployeeAddress = employeeAddress;
	}

	public String getEmail() {
		return Email;
	}

	public void setEmail(String email) {
		Email = email;
	}

	public Project getProject() {
		return project;
	}

	public void setProject(Project project) {
		this.project = project;
	}

	
	
	
	

}
