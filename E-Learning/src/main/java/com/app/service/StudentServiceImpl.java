package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IStudentDao;
import com.app.pojos.StudentDetails;

@Service
@Transactional
public class StudentServiceImpl implements IStudentService {																					
	@Autowired
	private IStudentDao dao;
	
	@Override
	public StudentDetails addStudentDetails(StudentDetails tPOJO)
	{
		return dao.save(tPOJO);
	}
	@Override
	public StudentDetails validateStudentDetails(String Email,String pass)
	{
		return dao.findByEmailAndPassword(Email,pass);
	}
	@Override
	public boolean deleteStudentDetails(int Student_id)
	{
		Optional<StudentDetails> sc = dao.findById(Student_id);
		if (sc.isPresent()) {
			dao.deleteById(Student_id);
			return true;
		}
		return false;
	}

}
