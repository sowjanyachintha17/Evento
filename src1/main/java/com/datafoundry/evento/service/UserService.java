package com.datafoundry.evento.service;

import java.util.List;



import com.datafoundry.evento.model.User;

public interface UserService {
	//abstract methods//
	User save(User email);

	User findByEmail(String email);

	List<User> findAll();
}
