package com.datafoundry.evento;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication  //same as @configuration, @EnableAutoConfiguration, @ComponentScan
public class EventoApplication {

	/*This will start the server that comes along with Spring Boot and runs your web application inside it*/
	public static void main(String[] args) {    
		SpringApplication.run(EventoApplication.class, args);
	}

}
