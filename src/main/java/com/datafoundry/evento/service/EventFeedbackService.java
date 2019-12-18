package com.datafoundry.evento.service;

import java.util.List;
import com.datafoundry.evento.model.EventFeedback;


public interface EventFeedbackService {

	//abstract methods //
	EventFeedback save(EventFeedback feedback);

	List<EventFeedback> findAll();

	EventFeedback findByEventTitle(String event_title);

	EventFeedback findByid(String id);

	List<EventFeedback> findByUser(String participants);

	List<EventFeedback> findByEvent(String event);

}
