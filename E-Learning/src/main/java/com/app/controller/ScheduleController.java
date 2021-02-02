package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.ScheduleClass;
import com.app.service.IScheduleService;

@RestController
@RequestMapping("/schedule")
public class ScheduleController {
	@Autowired
	public IScheduleService service;
	// -----------------------this will add data in to schedule table
	@PostMapping("/add")
	public ResponseEntity<?> addClassDetails(@RequestBody ScheduleClass s)
	{
		System.out.println("in addClassDetails"+ s );
		try {
			ScheduleClass savedScheduleDetails= service.addClassByTeacher(s);
			return new ResponseEntity<>(savedScheduleDetails, HttpStatus.OK);
		
		}catch (RuntimeException e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR );
		}
	}
	// Student will give classname & subject and he will get desired output
	@GetMapping("/find/{classname}/{subject}")
	public ResponseEntity<?> listAllScheduleDetails(@PathVariable String classname, @PathVariable String subject) {
		System.out.println("in list all Schedule:"+classname+"->"+subject);
		List<ScheduleClass> schedules = service.getClassesAvailableByClassAndSubject(classname, subject);
		if (schedules.isEmpty())
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		// in case of non empty list : OK, send the list
		return new ResponseEntity<>(schedules, HttpStatus.OK);
	}
	
	@PutMapping("update/{schedule_id}")
	public ResponseEntity<?> updateScheduleDetails(@PathVariable int schedule_id, @RequestBody ScheduleClass s) {
		System.out.println("in update " + schedule_id + " " + s);
		try {
			ScheduleClass updatedDetails = service.updateScheduleDetails(schedule_id, s);
			return new ResponseEntity<>(updatedDetails, HttpStatus.OK);
		} catch (RuntimeException e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	@DeleteMapping("delete/{schedule_id}")
	public ResponseEntity<?> deleteScheduleDetails(@PathVariable int schedule_id) {
		System.out.println("in delete " + schedule_id );
		try {
			boolean deleteDetails = service.deleteScheduleDetails(schedule_id);
			return new ResponseEntity<>(deleteDetails, HttpStatus.OK);
		} catch (RuntimeException e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
}
