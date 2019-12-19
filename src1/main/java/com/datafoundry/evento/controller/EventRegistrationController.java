package com.datafoundry.evento.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.datafoundry.evento.model.Event;
import com.datafoundry.evento.model.EventRegistration;
import com.datafoundry.evento.service.EventRegistrationService;

@RestController	//It is used to create Restful web services//
@RequestMapping("/eventRegistration")	//It is used to map web request or used to create base uri//
@CrossOrigin(origins="http://localhost:4200")
public class EventRegistrationController {

	//Autowired is used for connection between two classes//
	@Autowired
	private EventRegistrationService eventRegistrationService;
	
	  //post mapping is used to insert the new data//
	@PostMapping("/createEventRegistration")
	public String saveEventRegistration(@RequestBody EventRegistration eventregistration) {
		eventRegistrationService.save(eventregistration);
	return "saved successfully";
	}
	
	//Get mapping is used to get the data//
	@RequestMapping(value="/getAll",method=RequestMethod.GET)
	public List<EventRegistration> getAllEventRegistration(){
		return eventRegistrationService.findAll();
	}
	
	//@pathvariable is used for data passed in the uri//
	@GetMapping("/getEventRegistrationById/{id}")
	public EventRegistration getEventRegistrationbyId(@PathVariable String id) {
		return eventRegistrationService.findByid(id);
	}
	
	//Get mapping is used to retrive the data//
	@GetMapping("/getEventRegistrationByParticipantId/{participant}")
	public List<EventRegistration> getEventRegistrationByUser(@PathVariable String participant) {
		return eventRegistrationService.findByUser(participant);
	}
	
	@GetMapping("/getEventRegistrationByEventId/{event}")
	public List<EventRegistration> getEventRegistrationByEvent(@PathVariable String event) {
		return eventRegistrationService.findByEvent(event);
	}
//	
//	@GetMapping("/getEventRegistrationByEventTitle/{event}")
//	public List<EventRegistration> getEventRegistrationByEventTitle(@PathVariable String event) {
//		return eventRegistrationService.findByEvent(event);
//	}
	
	@GetMapping("/getEventRegistrationByEventTitle/{title}")
	  public EventRegistration getEventregistrationbyEvent(@PathVariable String title)
	  {
			return eventRegistrationService.findByEventTitle(title);
	  }
}
