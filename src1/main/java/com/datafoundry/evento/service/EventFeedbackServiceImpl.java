package com.datafoundry.evento.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.datafoundry.evento.model.EventFeedback;
import com.datafoundry.evento.repository.EventFeedbackRepository;

//In this business logic is present to perform crud operations//

@Service
public class EventFeedbackServiceImpl implements EventFeedbackService{

	@Autowired
	private EventFeedbackRepository repository;
	@Override
	public EventFeedback save(EventFeedback feedback) {
		return repository.save(feedback);
	}
	@Override
	public List<EventFeedback> findAll() {
		return repository.findAll();
	}
	@Override
	public EventFeedback findByEventTitle(String event_title) {
		return repository.findByEventTitle(event_title);
	}
	@Override
	public EventFeedback findByid(String id) {
		return repository.findByid(id);
	}
	@Override
	public List<EventFeedback> findByUser(String participants) {
		return repository.findByUser(participants);
	}
	@Override
	public List<EventFeedback> findByEvent(String event) {
		return repository.findByEvent(event);
	}

	
}
