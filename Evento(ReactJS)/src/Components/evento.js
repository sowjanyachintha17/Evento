import React, { Component } from 'react';
import "./evento.css";

class Evento extends  Component{
  
  render (){

    return (

 <div>      
   <header id="header">
                    
                     <div id="topbar">
                         <div className="container">
                            <div className="social-links">
                                <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                                <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                                <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
                                <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
                            </div>
                         </div>
                     </div>
                    
                        <div className="container">
                    
                            <div className="logo float-left">
                            
                                <h1 className="text-light"><a href="#intro" className=" scrollto "><span> Evento</span></a></h1>
                           
                            </div>
                    
                          <nav className="main-nav float-right d-none d-lg-block">
                            <ul>
                                <li className="active"><a href="#intro"><i className="fa fa-home"> Home</i></a></li>
                                <li><a href="/homepage#about"><i className="fa fa-users"> About Us</i></a></li>
                                <li><a href="/homepage#services"><i className="fa fa-produt">Product</i></a></li>
                                <li><a href="/homepage#certificate"><i className="fa fa-certificate"> Certificate</i></a></li>
                                <li><a href="#"><i className="fa fa-ticket"> tickets</i></a></li>
                                <li><a href="/homepage#portfolio"><i className="fa fa-events">Events</i></a></li>
                                <li><a href="/Dashboard"><i className="fa fa-plus"> Event-Creation</i></a></li>
                                <li><a href="/login"><i className="fa fa-sign-in"> Login</i></a></li>
                                
                            </ul>
                         </nav>
                            
                     </div>
                </header><br />
             <section id="intro" className="clearfix">
                    <div className="container d-flex h-100">
                            <div className="row justify-content-center align-self-center">
                                        <div className="col-md-6 intro-info order-md-first order-last">
                                        <h2> Evento Solutions for Your <span> Events!</span></h2>
                                            <div>
                                                <a href="/Registration" className="btn-get-started scrollto">Register here</a>
                                            </div>
                                        </div>
                                <div className="col-md-6 intro-img order-md-last order-first">
                                <img src= {require('../Images/evetno2.png')} alt="" className="img-fluid" />
                                </div>
                            </div>
                    </div>    
                </section>
                </div>
    
      );
    }
}
export default Evento;