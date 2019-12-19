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

//	@Query("{'event.title':?0}")
//	EventRegistration findByEventTitle(String title);

	//@Query("{'eventRegistration.title':?0}")
//	Query query = Query.query(new Criteria("event.title"));
//	EventRegistration test = MongoOperations.find(query, EventRegistration.class);
	
	//BasicQuery basicQuery = new BasicQuery(),addCriteria(new Criteria("event.title", "India IoT of the Day"))
	//@Query("{'event.title':?0}")
//	
	//BasicQuery query = new BasicQuery("{ event.title : 'India IoT of the Day' }");
	//EventRegistration eventRegistration = MongoOperations.find(query, List<EventRegistration>.class);
	//Event findBytitle(String title);
	
	//BasicQuery basicQuery = new BasicQuery(),addCriteria(new Criteria("event.title", "India IoT of the Day"))

	//EventRegistration findByeventTitle(String title);

	@Query("{'event.title':?0}")
	EventRegistration findByEventTitle(String title);

}
