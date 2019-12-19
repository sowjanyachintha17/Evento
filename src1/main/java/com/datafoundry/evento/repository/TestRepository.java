package com.datafoundry.evento.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.datafoundry.evento.model.Test;

public interface TestRepository extends MongoRepository<Test, String> {
	

}
