package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.ITeacherDao;
import com.app.pojos.TeacherDetails;

@Service
@Transactional
public class TeacherServiceImpl implements ITeacherService {																					
	@Autowired
	private ITeacherDao dao;
	
	@Override
	public List<TeacherDetails> getAllTeacherDetails()
	{
		return dao.findAll();
	}
	@Override
	public TeacherDetails addTeacherDetails(TeacherDetails transientPOJO)
	{
		return dao.save(transientPOJO);
	}
	@Override
	public TeacherDetails validateTeacherDetails(String Email,String pass)
	{
		return dao.findByEmailAndPassword(Email,pass);
	}
	@Override
	public boolean deleteTeacherDetails(int Teacher_id)
	{
		Optional<TeacherDetails> sc = dao.findById(Teacher_id);
		if (sc.isPresent()) {
			dao.deleteById(Teacher_id);
			return true;
		}
		return false;
	}
}
