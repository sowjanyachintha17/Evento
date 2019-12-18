package com.datafoundry.evento.model;

public class Sessions {
	private String welcome_activity;
	private String session1;
	private String session2;
	private String closing_activity;
	
	public Sessions(String welcome_activity, String session1, String session2, String closing_activity) {
		super();
		this.welcome_activity = welcome_activity;
		this.session1 = session1;
		this.session2 = session2;
		this.closing_activity = closing_activity;
	}
	public String getWelcome_activity() {
		return welcome_activity;
	}
	public void setWelcome_activity(String welcome_activity) {
		this.welcome_activity = welcome_activity;
	}
	public String getSession1() {
		return session1;
	}
	public void setSession1(String session1) {
		this.session1 = session1;
	}
	public String getSession2() {
		return session2;
	}
	public void setSession2(String session2) {
		this.session2 = session2;
	}
	public String getClosing_activity() {
		return closing_activity;
	}
	public void setClosing_activity(String closing_activity) {
		this.closing_activity = closing_activity;
	}
	
	
}
