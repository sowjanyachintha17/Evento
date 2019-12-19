package com.datafoundry.evento.service;

import java.util.List;
import com.datafoundry.evento.model.EventRegistration;

public interface EventRegistrationService {
//abstract methods //
	List<EventRegistration> findAll();

	EventRegistration findByid(String id);

	EventRegistration save(EventRegistration eventregistration);

	List<EventRegistration> findByUser(String participant);

	EventRegistration findByEventTitle(String title);

	List<EventRegistration> findByEvent(String event);


	

}
