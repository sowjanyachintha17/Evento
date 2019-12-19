package com.datafoundry.evento.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
@Data
@Document(collection="test")
public class Test {
	@Id
	private String id;
	private String name;
	private String regdno;
	private int age;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getRegdno() {
		return regdno;
	}
	public void setRegdno(String regdno) {
		this.regdno = regdno;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public Test(String id, String name, String regdno, int age) {
		super();
		this.id = id;
		this.name = name;
		this.regdno = regdno;
		this.age = age;
	}
	
	
}
