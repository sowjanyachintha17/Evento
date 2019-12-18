package com.datafoundry.evento.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.datafoundry.evento.model.User;

//It annotates classes at the persistence layer(DAO), which will act as a database repository//
@Repository
public interface UserRepository extends MongoRepository<User, String> {

	User findByEmail(String email);

	User save(String email);

}
