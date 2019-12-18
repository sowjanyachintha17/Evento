package com.datafoundry.evento.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

//@Document to define a “collection name” where you save this object in mongodb//
//In this case, when “eventRegistration” object saves, it will save into “eventRegistration” collection//
@Document(collection="eventFeedback")
public class EventFeedback {

	@Id//Act as a primary Identifier
	private String id;
	private String event_feedback;
	private Sessions sessions;
	private String comments;
	private String suggestions;
	private String helpfull;
	private String key_learned;
	private String feedback_logistics;
	private Logistics logistics;
	@DBRef  //stores to a document, rather than embedding it directly in the parent document//
	private Event event;
	@DBRef
	private User participants;
	
	//create constructor to store the values in a particular variable//
	public EventFeedback(String id, String event_feedback, Sessions sessions, String comments, String suggestions,
			String helpfull, String key_learned, String feedback_logistics, Logistics logistics, Event event,
			User participants) {
		super();
		this.id = id;
		this.event_feedback = event_feedback;
		this.sessions = sessions;
		this.comments = comments;
		this.suggestions = suggestions;
		this.helpfull = helpfull;
		this.key_learned = key_learned;
		this.feedback_logistics = feedback_logistics;
		this.logistics = logistics;
		this.event = event;
		this.participants = participants;
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


	public String getEvent_feedback() {
		return event_feedback;
	}


	public void setEvent_feedback(String event_feedback) {
		this.event_feedback = event_feedback;
	}


	public Sessions getSessions() {
		return sessions;
	}


	public void setSessions(Sessions sessions) {
		this.sessions = sessions;
	}


	public String getComments() {
		return comments;
	}


	public void setComments(String comments) {
		this.comments = comments;
	}


	public String getSuggestions() {
		return suggestions;
	}


	public void setSuggestions(String suggestions) {
		this.suggestions = suggestions;
	}


	public String getHelpfull() {
		return helpfull;
	}


	public void setHelpfull(String helpfull) {
		this.helpfull = helpfull;
	}


	public String getKey_learned() {
		return key_learned;
	}


	public void setKey_learned(String key_learned) {
		this.key_learned = key_learned;
	}


	public String getFeedback_logistics() {
		return feedback_logistics;
	}


	public void setFeedback_logistics(String feedback_logistics) {
		this.feedback_logistics = feedback_logistics;
	}


	public Logistics getLogistics() {
		return logistics;
	}


	public void setLogistics(Logistics logistics) {
		this.logistics = logistics;
	}


	public Event getEvent() {
		return event;
	}


	public void setEvent(Event event) {
		this.event = event;
	}


	public User getParticipants() {
		return participants;
	}


	public void setParticipants(User participants) {
		this.participants = participants;
	}

	//To String method is used to return the useful information//
	@Override
	public String toString() {
		return "EventFeedback [id=" + id + ", event_feedback=" + event_feedback + ", sessions=" + sessions
				+ ", comments=" + comments + ", suggestions=" + suggestions + ", helpfull=" + helpfull
				+ ", key_learned=" + key_learned + ", feedback_logistics=" + feedback_logistics + ", logistics="
				+ logistics + ", event=" + event + ", participants=" + participants + "]";
	}
	
	
	
}
