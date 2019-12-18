package com.datafoundry.evento.repository;

import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.datafoundry.evento.model.EventRegistration;

//It annotates classes at the persistence layer(DAO), which will act as a database repository//
@Repository
public interface EventRegistrationRepository extends MongoRepository<EventRegistration,String>{
	
	EventRegistration findByid(String id);

	@Query("{'participant.id':?0}")
	List<EventRegistration> findByUser(String participant);
	
	@Query("{'event.id':?0}")
	List<EventRegistration> findByEvent(String event);

}
