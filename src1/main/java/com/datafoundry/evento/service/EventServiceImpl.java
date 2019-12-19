package com.datafoundry.evento.service;

import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.datafoundry.evento.model.Event;
import com.datafoundry.evento.repository.EventRepository;

//In this business logic is present to perform crud operations
@Service
public class EventServiceImpl implements EventService 
{

	@Autowired
	 private EventRepository repository;	
	
	@Override
	public List<Event> findAll()
	{
		return repository.findAll() ;
	}

	@Override
	public Event findByid(String id) 
	{
		return repository.findByid(id) ;
	}

	@Override
	public Event findBytitle(String title)
	{
		return repository.findBytitle(title);
	}

	@Override
	public List<Event> findByUserid(String id)
	{
		return repository.findByUserid(id);
	}

	@Override
	public List<Event> findByCity(String city)
	{
		return repository.findByCity(city);
	}

	@Override
	public Event save(@Valid Event event)
	{
		return repository.save(event);
	}

	
}
