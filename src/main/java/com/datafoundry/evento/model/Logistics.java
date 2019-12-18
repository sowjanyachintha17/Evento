package com.datafoundry.evento.model;

public class Logistics {
private String accommodation;
private String welcome_kit;
private String communication;
private String transportation;
private String welcome_activity;
private String venue;
private String activities;
private String closing_ceremony;

public Logistics(String accommodation, String welcome_kit, String communication, String transportation,
		String welcome_activity, String venue, String activities, String closing_ceremony) {
	super();
	this.accommodation = accommodation;
	this.welcome_kit = welcome_kit;
	this.communication = communication;
	this.transportation = transportation;
	this.welcome_activity = welcome_activity;
	this.venue = venue;
	this.activities = activities;
	this.closing_ceremony = closing_ceremony;
}
public String getAccommodation() {
	return accommodation;
}
public void setAccommodation(String accommodation) {
	this.accommodation = accommodation;
}
public String getWelcome_kit() {
	return welcome_kit;
}
public void setWelcome_kit(String welcome_kit) {
	this.welcome_kit = welcome_kit;
}
public String getCommunication() {
	return communication;
}
public void setCommunication(String communication) {
	this.communication = communication;
}
public String getTransportation() {
	return transportation;
}
public void setTransportation(String transportation) {
	this.transportation = transportation;
}
public String getWelcome_activity() {
	return welcome_activity;
}
public void setWelcome_activity(String welcome_activity) {
	this.welcome_activity = welcome_activity;
}
public String getVenue() {
	return venue;
}
public void setVenue(String venue) {
	this.venue = venue;
}
public String getActivities() {
	return activities;
}
public void setActivities(String activities) {
	this.activities = activities;
}
public String getClosing_ceremony() {
	return closing_ceremony;
}
public void setClosing_ceremony(String closing_ceremony) {
	this.closing_ceremony = closing_ceremony;
}
@Override
public String toString() {
	return "Logistics [accommodation=" + accommodation + ", welcome_kit=" + welcome_kit + ", communication="
			+ communication + ", transportation=" + transportation + ", welcome_activity=" + welcome_activity
			+ ", venue=" + venue + ", activities=" + activities + ", closing_ceremony=" + closing_ceremony + "]";
}


}
