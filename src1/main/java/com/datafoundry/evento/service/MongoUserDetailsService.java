//package com.datafoundry.evento.service;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Component;
//
//import com.datafoundry.evento.model.User;
//import com.datafoundry.evento.repository.UserRepository;
//
//@Component
//public class MongoUserDetailsService implements UserDetailsService {
//
//	@Autowired
//	private UserRepository userRepository;
//	
//	@Autowired
//	private PasswordEncoder bCryptPasswordEncoder;
//	
//	public User findUserByEmail(String email) {
//	    return userRepository.findByEmail(email);
//	}
//
//	@Override
//	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//		// TODO Auto-generated method stub
//		return null;
//	}
//	
//
//}
