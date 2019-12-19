 package com.datafoundry.evento.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.datafoundry.evento.model.User;
import com.datafoundry.evento.service.UserService;

@RestController		//It is used to create Restful web services//
@RequestMapping("/user")	//It is used to map web request or used to create base uri//
@CrossOrigin(origins="http://localhost:4200")
public class UserController {
	
	//Autowired is used for connection between two classes//
	@Autowired
	private UserService userService;
	
	@RequestMapping(value = "/getAll", method = RequestMethod.GET)
	  public List<User> getAllUser()
	  {
	    return userService.findAll();
	  }
	
	//post mapping is used to insert the new data//
	@PostMapping("/createUser")
	public String saveUser(@RequestBody User user) {
		userService.save(user);
		return "User Saved Sucessfully........";
		}
	
	//Get mapping is used to get the data//
	@GetMapping("/getUserByEmail/{email}")
	public User getEmail(@PathVariable String email){
		return userService.findByEmail(email);
	}

	//logic for login//
	@PostMapping("/login")
	@ResponseBody
	public String getlogin(@RequestParam("email") String email,@RequestParam("password") String password) {
		System.out.println(email+" "+password);
		User user=userService.findByEmail(email);
		if(user==null)
	   {
		   return "Invalid Username or Password";    
	   }
		else if(user.getEmail().equals(email) && user.getPassword().equals(password)) {
			   return "login is successfull";
		   }
		 return "login";
	}
}

