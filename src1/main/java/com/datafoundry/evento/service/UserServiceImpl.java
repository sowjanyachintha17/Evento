package com.datafoundry.evento.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.datafoundry.evento.model.User;
import com.datafoundry.evento.repository.UserRepository;

//In this business logic is present to perform crud operations//
@Service
public class UserServiceImpl implements UserService{
	@Autowired
	 private UserRepository repository;

	@Override
	public User save(User email) {
		return repository.save(email);
	}

	@Override
	public User findByEmail(String email) {
		return repository.findByEmail(email);
	}

	@Override
	public List<User> findAll() {
		return repository.findAll();
	}	
}
