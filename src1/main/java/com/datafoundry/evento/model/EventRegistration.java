package com.datafoundry.evento.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

//@Document to define a “collection name” where you save this object in mongodb//
//In this case, when “eventRegistration” object saves, it will save into “eventRegistration” collection//
@Document(collection="eventRegistration")
public class EventRegistration {
	@Id	//Act as a primary Identifier
	private String id;
	private String course;
	private String branch;
	private String year;
	private Date register_date;
	private double amount_paid;
	private String shortlist_status;
	private String comments;
	private String ticket_id;
	private String registration_type;
	@DBRef		//stores to a document, rather than embedding it directly in the parent document//
	private Event event;
	@DBRef
	private User participant;

	public EventRegistration()
	{}

	//create constructor to store the values in a particular variable//
	public EventRegistration(String id, String course, String branch, String year, Date register_date, double amount_paid,
			String shortlist_status, String comments, String ticket_id, String registration_type, Event event,
			User participant) {
		super();
		this.id = id;
		this.course = course;
		this.branch = branch;
		this.year = year;
		this.register_date = register_date;
		this.amount_paid = amount_paid;
		this.shortlist_status = shortlist_status;
		this.comments = comments;
		this.ticket_id = ticket_id;
		this.registration_type = registration_type;
		this.event = event;
		this.participant = participant;
	}
	
	//create getter and setter method//
		//getter() reads the value of the variable//
		//setter() sets or update value for variable//
		

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getCourse() {
		return course;
	}

	public void setCourse(String course) {
		this.course = course;
	}

	public String getBranch() {
		return branch;
	}

	public void setBranch(String branch) {
		this.branch = branch;
	}

	public String getYear() {
		return year;
	}

	public void setYear(String year) {
		this.year = year;
	}

	public Date getRegister_date() {
		return register_date;
	}

	public void setRegister_date(Date register_date) {
		this.register_date = register_date;
	}

	public double getAmount_paid() {
		return amount_paid;
	}

	public void setAmount_paid(double amount_paid) {
		this.amount_paid = amount_paid;
	}

	public String getShortlist_status() {
		return shortlist_status;
	}

	public void setShortlist_status(String shortlist_status) {
		this.shortlist_status = shortlist_status;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public String getTicket_id() {
		return ticket_id;
	}

	public void setTicket_id(String ticket_id) {
		this.ticket_id = ticket_id;
	}

	public String getRegistration_type() {
		return registration_type;
	}

	public void setRegistration_type(String registration_type) {
		this.registration_type = registration_type;
	}

	public Event getEvent() {
		return event;
	}

	public void setEvent(Event event) {
		this.event = event;
	}

	public User getParticipant() {
		return participant;
	}

	public void setParticipant(User participant) {
		this.participant = participant;
	}

	//To String method is used to return the useful information//
	@Override
	public String toString() {
		return "EventRegistration [id=" + id + ", course=" + course + ", branch=" + branch + ", year=" + year
				+ ", register_date=" + register_date + ", amount_paid=" + amount_paid + ", shortlist_status="
				+ shortlist_status + ", comments=" + comments + ", ticket_id=" + ticket_id + ", registration_type="
				+ registration_type + ", event=" + event + ", participant=" + participant + "]";
	}
}
