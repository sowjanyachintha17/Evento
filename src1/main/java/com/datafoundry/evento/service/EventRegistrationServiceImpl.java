package com.datafoundry.evento.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.datafoundry.evento.model.Event;
import com.datafoundry.evento.model.EventRegistration;
import com.datafoundry.evento.repository.EventRegistrationRepository;


//In this business logic is present to perform crud operations//
@Service
public class EventRegistrationServiceImpl implements EventRegistrationService{

	@Autowired
	private EventRegistrationRepository repository;

	@Override
	public EventRegistration save(EventRegistration eventregistration) {
		return repository.save(eventregistration);
	}

	@Override
	public List<EventRegistration> findAll() {
		return repository.findAll();
	}

	@Override
	public EventRegistration findByid(String id) {
		return repository.findByid(id);
	}

	@Override
	public List<EventRegistration> findByUser(String participant) {
		return repository.findByUser(participant);
	}


	@Override
	public EventRegistration findByEventTitle(String title) {
	
		return repository.findByEventTitle(title);
	}

	@Override
	public List<EventRegistration> findByEvent(String event) {

		return repository.findByEvent(event);
	}

}