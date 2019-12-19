package com.datafoundry.evento.controller;

import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.datafoundry.evento.model.Event;
import com.datafoundry.evento.model.EventRegistration;
import com.datafoundry.evento.service.EventRegistrationService;
import com.datafoundry.evento.service.EventService;
import com.datafoundry.evento.service.UserService;

@RestController
@RequestMapping("/attendance")

public class AttendanceController 
{
	@Autowired
	private UserService userService;
		
	@Autowired
	private EventService eventService;
	
	@Autowired
	private EventRegistrationService eventRegistrationService;
	
	//Get mapping is used to get the event registration data present in database
	@RequestMapping(value="/eventRegistration/getAll",method=RequestMethod.GET)
	public List<EventRegistration> getAllEventRegistration()
	{
		return eventRegistrationService.findAll();
	}
	
		
	//It is used to get all the event data present in database
	@RequestMapping(value = "/event/getAll", method = RequestMethod.GET)
	public List<Event> getAllEvent()
	{
		return eventService.findAll();
	}
		  
		  
	//It is used to get the particular data based on eventRegistration id
	@GetMapping("/getAttendanceByEventId/{id}")
	public Event getEventById(@PathVariable("id") String id)
	{
		return eventService.findByid(id);
	}
	  
	
	//It is used to get the data based on event id 
	@GetMapping("/getAttendanceByEventRegistrationId/{id}")
	public EventRegistration getEventRegistrationbyId(@PathVariable String id) 
	{
		return eventRegistrationService.findByid(id);
	}
	
	
	//PutMapping is used to update the data 
	@PutMapping("/updateAttendanceByEventRegistration/{id}")
	public void updateAttendance(@PathVariable("id") String id, @Valid @RequestBody EventRegistration eventRegistration)
	{
		eventRegistration.setId(id);
		eventRegistrationService.save(eventRegistration);
	}
		 
}
	


