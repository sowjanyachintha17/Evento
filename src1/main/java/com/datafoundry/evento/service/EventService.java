package com.datafoundry.evento.service;

import java.util.List;
import javax.validation.Valid;
import com.datafoundry.evento.model.Event;

public interface EventService {

	//Abstract Methods
	List<Event> findAll();

	Event findByid(String id);

	Event findBytitle(String title);

	List<Event> findByUserid(String id);
	
	List<Event> findByCity(String city);

	Event save(@Valid Event event);
	
}
