package com.springboot.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.Entity.Project;
import com.springboot.repository.ProjectRepostories;
@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class ProjectController {
	@Autowired
	ProjectRepostories projectRepostories;
		
	@PostMapping(value = "/project")
	public ResponseEntity<?> createNote(@RequestBody Project project) {
		projectRepostories.save(project);
		return new ResponseEntity<Object>(HttpStatus.OK);
	}
	@GetMapping("/project")
	  public List<Project> getProject() {
		return projectRepostories.findAll();
	}
	
	@DeleteMapping("/project/{id}")
	public Map<String,Boolean>deleteproject(@PathVariable(value="id")Long id)
	throws ResourceNotFoundException{
		Project project=projectRepostories.findById(id)
		.orElseThrow(()->new ResourceNotFoundException("Project not found for this id::"+id));
		projectRepostories.delete(project);
		Map<String,Boolean>response= new HashMap<>();
		response.put("deleted",Boolean.TRUE);
		return response;
		
	
	}
	@GetMapping("/geProjectById/{id}")
	public ResponseEntity<Project> getProjectById(@PathVariable("id") Long id){
	return new ResponseEntity<Project>(projectRepostories.findByid(id), HttpStatus.OK);
	}
	@PutMapping("/updateproject/{id}")
	public ResponseEntity<Object> updateProject(@RequestBody Project project, @PathVariable long id) {

	Optional<Project> projectOptional = projectRepostories.findById(id);

	if (!projectOptional.isPresent())
	return ResponseEntity.notFound().build();

	project.setId(id);

	projectRepostories.save(project);

	return ResponseEntity.noContent().build();
	}

	
}

