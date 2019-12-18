package com.datafoundry.evento.model;

import lombok.Getter;

import lombok.Setter;

@Setter
@Getter
public class Address {

	private String door_no;
	private String building_name;
	private String street;
	private String locality;
	private String landmark;
	private String city;
	private String state;
	private String pincode;
	public Address(){
		
	}
	public Address(String door_no, String building_name, String street, String locality, String landmark, String city,
			String state, String pincode) {
		super();
		this.door_no = door_no;
		this.building_name = building_name;
		this.street = street;
		this.locality = locality;
		this.landmark = landmark;
		this.city = city;
		this.state = state;
		this.pincode = pincode;
	}
	public String getDoor_no() {
		return door_no;
	}
	public void setDoor_no(String door_no) {
		this.door_no = door_no;
	}
	public String getBuilding_name() {
		return building_name;
	}
	public void setBuilding_name(String building_name) {
		this.building_name = building_name;
	}
	public String getStreet() {
		return street;
	}
	public void setStreet(String street) {
		this.street = street;
	}
	public String getLocality() {
		return locality;
	}
	public void setLocality(String locality) {
		this.locality = locality;
	}
	public String getLandmark() {
		return landmark;
	}
	public void setLandmark(String landmark) {
		this.landmark = landmark;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getPincode() {
		return pincode;
	}
	public void setPincode(String pincode) {
		this.pincode = pincode;
	}
	
}
