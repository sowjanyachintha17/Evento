package com.datafoundry.evento.model;

import java.util.Date;
import java.util.List;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

//@Document to define a “collection name” when you save this object in mongodb.
//In this case, when “event” object saves, it will save into “event” collection

@Document(collection="user")
public class User {
	@Id		//Act as a primary Identifier
	private String id;
	private String first_name;
	private String last_name;
	private String gender;
	private String email;
	private String phone_no;
	private String password;
	private Address address;
	private Date last_login;
	private List<String> intrests;
	private String token;
	private String status;
	private boolean is_active;
	
	public User() {
		
	}

	//create constructor to store the values in a particular variable//
	public User(String id, String first_name, String last_name, String gender, String email, String phone_no,
			String password, Address address, Date last_login, List<String> intrests, String token, String status,
			boolean is_active) {
		super();
		this.id = id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.gender = gender;
		this.email = email;
		this.phone_no = phone_no;
		this.password = password;
		this.address = address;
		this.last_login = last_login;
		this.intrests = intrests;
		this.token = token;
		this.status = status;
		this.is_active = is_active;
	}

	
	//create getter and setter method
	//getter() reads the value of the variable
	//setter() sets or update value for variable
		
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone_no() {
		return phone_no;
	}

	public void setPhone_no(String phone_no) {
		this.phone_no = phone_no;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public Date getLast_login() {
		return last_login;
	}

	public void setLast_login(Date last_login) {
		this.last_login = last_login;
	}

	public List<String> getIntrests() {
		return intrests;
	}

	public void setIntrests(List<String> intrests) {
		this.intrests = intrests;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public boolean isIs_active() {
		return is_active;
	}

	public void setIs_active(boolean is_active) {
		this.is_active = is_active;
	}
	
	//To String method is used to return the useful information//
	@Override
	public String toString() {
		return "User [id=" + id + ", first_name=" + first_name + ", last_name=" + last_name + ", gender=" + gender
				+ ", email=" + email + ", phoneno=" + phone_no + ", password=" + password + ", address=" + address
				+ ", last_login=" + last_login + ", intrests=" + intrests + ", token=" + token + ", status=" + status
				+ ", is_active=" + is_active + "]";
	}

	
	
}
