package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name="ScheduledClassDetails")
public class ScheduleClass {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@JsonProperty("teacher_id")
	private int scheduleId;
	@Column(length = 20)
	private String classname;
	@Column(length = 20)
	private String subject;
	@Column(length = 10 ,updatable = false)
	private String topic;
	@DateTimeFormat(pattern = "yyyy-MM-dd") 
	private LocalDate class_date;
	@Column(length = 50)
	private String class_Link;
	// @ManyToOne --> many classes can be scheduled by one teacher 
//	@JsonIgnore
	
	@ManyToOne
	@JoinColumn(name="user_id")
	@JsonIgnoreProperties("schedules")
	private TeacherDetails teacher;

	public ScheduleClass() {
		super();
	}

	public ScheduleClass(int schedule_id, String classname, String subject, String topic, LocalDate class_date,
			String class_Link, TeacherDetails teacher) {
		super();
		this.scheduleId = schedule_id;
		this.classname = classname;
		this.subject = subject;
		this.topic = topic;
		this.class_date = class_date;
		this.class_Link = class_Link;
		this.teacher = teacher;
	}

	

	public int getScheduleId() {
		return scheduleId;
	}

	public void setScheduleId(int scheduleId) {
		this.scheduleId = scheduleId;
	}

	public String getClassname() {
		return classname;
	}

	public void setClassname(String classname) {
		this.classname = classname;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getTopic() {
		return topic;
	}

	public void setTopic(String topic) {
		this.topic = topic;
	}

	public LocalDate getClass_date() {
		return class_date;
	}

	public void setClass_date(LocalDate class_date) {
		this.class_date = class_date;
	}

	public String getClass_Link() {
		return class_Link;
	}

	public void setClass_Link(String class_Link) {
		this.class_Link = class_Link;
	}

	public TeacherDetails getTeacher() {
		return teacher;
	}

	public void setTeacher(TeacherDetails teacher) {
		this.teacher = teacher;
	}

	@Override
	public String toString() {
		return "ScheduleClass [schedule_id=" +scheduleId + ", classname=" + classname + ", subject=" + subject
				+ ", topic=" + topic + ", class_date=" + class_date + ", class_Link=" + class_Link + "]";
	}

	
	
	
}
