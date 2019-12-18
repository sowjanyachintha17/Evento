package com.datafoundry.evento.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.datafoundry.evento.model.EventFeedback;
import com.datafoundry.evento.service.EventFeedbackService;

@RestController //It is used to create Restful web services
@RequestMapping("/EventFeedback") //It is used to map web request or used to create base uri
public class EventFeedbackController {
 
	//Autowired is used for connection between two classes//
	@Autowired
	private EventFeedbackService service;
	
	//post mapping is used to insert the new data
	@PostMapping("/createEventFeedback")
	public String save(@RequestBody EventFeedback feedback) {
	service.save(feedback);
	return "saved successfully";
	}
	
	@RequestMapping(value="/getAll",method=RequestMethod.GET)
	public List<EventFeedback> getAllFeedback(){
		return service.findAll();
	}
	
	//Get mapping is used to get the data
	@GetMapping("/getEventFeedbackById/{id}")
	public EventFeedback getEventFeedbackbyId(@PathVariable String id) {
		return service.findByid(id);
	}
	
	 //@pathvariable is used for data passed in the uri
	@GetMapping("/getEventfeedbackByParticipantId/{participants}")
	public List<EventFeedback> getEventFeedbackByUser(@PathVariable String participants) {
		return service.findByUser(participants);
	}
	
	@GetMapping("/getEventFeedbackByEventId/{event}")
	public List<EventFeedback> getEventFeedbackByEvent(@PathVariable String event) {
		return service.findByEvent(event);
	}
}
