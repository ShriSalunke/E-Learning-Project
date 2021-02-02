package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.StudentDetails;
import com.app.service.StudentServiceImpl;

@RestController 
@RequestMapping("/student")
@CrossOrigin(origins = "http://localhost:4200")

public class StudentController {
	@Autowired
	public StudentServiceImpl service;
	@PostMapping
	public ResponseEntity<?> addStudentDetails(@RequestBody StudentDetails s)
	{
		System.out.println("in addStudentDetails"+ s );
		try {
			StudentDetails savedStudentDetails= service.addStudentDetails(s);
			return new ResponseEntity<>(savedStudentDetails, HttpStatus.OK);
		
		}catch (RuntimeException e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR );
		}
	}
	@PostMapping("/login")
	public StudentDetails validateStudentDetails(@RequestBody StudentDetails s) {
		System.out.println("in validateStudentDetails");
		String em=s.getEmail();
		String pass=s.getPassword();
		StudentDetails Students = service.validateStudentDetails(em, pass);
		return Students;
	}
	@DeleteMapping("delete/{Student_id}")
	public ResponseEntity<?> deleteStudentDetails(@PathVariable int Student_id) {
		System.out.println("in delete " + Student_id );
		try {
			boolean deleteStudentDetails = service.deleteStudentDetails(Student_id);
			return new ResponseEntity<>(deleteStudentDetails, HttpStatus.OK);
		} catch (RuntimeException e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
