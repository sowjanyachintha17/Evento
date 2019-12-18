package com.datafoundry.evento.repository;

import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;
import com.datafoundry.evento.model.EventFeedback;

//It annotates classes at the persistence layer(DAO), which will act as a database repository//
@Repository
public interface EventFeedbackRepository extends MongoRepository<EventFeedback,String>{

	EventFeedback findByEventTitle(String event_title);

	EventFeedback findByid(String id);
	
	@Query("{'participant.id':?0}")
	List<EventFeedback> findByUser(String participants);

	@Query("{'event.id':?0}")
	List<EventFeedback> findByEvent(String event);

}
