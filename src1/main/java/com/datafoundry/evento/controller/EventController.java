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
import com.datafoundry.evento.service.EventService;

@RestController		//It is used to create Restful web services
@RequestMapping("/event")	//It is used to map web request or used to create base uri
@CrossOrigin(origins="http://localhost:4200")	//It is used to link with frontend 

public class EventController 
{
	//Autowired is used for connection between two classes//
	@Autowired
	private EventService eventService;
	
	
	//By using this get method we get all the data present in database.
	@RequestMapping(value = "/getAll", method = RequestMethod.GET)
	public List<Event> getAllEvent()
	{
		return eventService.findAll();
	}
	
		  	  
	//Here we pass the id parameter by using id we get the particular id data present in database.
	@RequestMapping(value = "/getEventById/{id}", method = RequestMethod.GET)
	public Event getEventById(@PathVariable("id") String id)
	{
		return eventService.findByid(id);
	}
		  
		  
	//Here we pass the title parameter based on the  particular title the data will retrive from database.
	//@pathvariable is used for data passed in the uri
	@RequestMapping(value = "/getEventByTitle/{title}", method = RequestMethod.GET)
	public Event getEventByTitle(@PathVariable("title") String title) 
	{
		return eventService.findBytitle(title);
	}
		  
		  
	//Get mapping is used to get the data
	//In this we pass the owner id as a parameter based on that id we get the event data.
	@GetMapping("/getEventByOwnerId/{id}")
	public List<Event> getEventbyUser(@PathVariable String id)
	{
		return eventService.findByUserid(id);
	}
		  
		  
	//By passing city parameter we get the data of particular event.
	@GetMapping("/getEventByVenue/{city}")
	public List<Event> getEventbyvenue(@PathVariable String city)
	{
		return eventService.findByCity(city);
    }	  
		  
	
	//PostMapping is used to create event
	@PostMapping("/createEvent")
	public String saveEventRegistration(@RequestBody Event event)
	{
		eventService.save(event);
		return "saved successfully";
	}


}
