import React, { PureComponent } from 'react';
import { CollapsibleComponent, CollapsibleHead, CollapsibleContent } from 'react-collapsible-component'
import { Container } from 'react-bootstrap';
// import Form from 'muicss/lib/react/form';
// import Input from 'muicss/lib/react/input';
// import TextArea from 'muicss/lib/react/textarea';
// import { Dropdown } from 'react-bootstrap';
import { Button } from 'muicss/react';
// import Dashboard from './Dashboard.js';
import Eventcreate from './Eventcreate';
import Address from './Address';
import Details from './Details';

class Collapsible2 extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            // visible: '',
           
        }
        
        this.create = this.create.bind(this);
    }

   
    create(event) {
        //alert('success')

        return fetch('http://localhost:1111/event/createEvent', {
            method: 'POST',
            headers: {
                'content-Type' :'application/json'
            },
            body:JSON.stringify({

                title:this.state.title,
                event_type:this.state.event_type,
                event_category:this.state.event_category,
                organizer_name:this.state.organizer_name,
                day:this.state.day,
                end_date:this.state.end_date,
                summary:this.state.summary,
                text:this.state.text,
                ticket_type:this.state.ticket_type,
                number_of_tickets:this.state.number_of_tickets,
                ticket_price:this.state.ticket_price,
                register_start_date:this.state.register_start_date,
                register_end_date:this.state.register_end_date,
                published:this.state.published,
                coordinates:this.state.coordinates,
                tags:this.state.tags

            })
        })
         .then(function(response) {
             if(!response.ok) {
                alert("Submit Fail");
             }
             return response.json();
         })

         .then(function(responseData) {
             if(!(responseData.data && responseData.data.success)) {
                alert("Submit Successful");
                //  this.props.history.push('/Dashboard')
                window.location.href = '/Dashboard';
             }
         });
    }

    render() {
        const {title, event_type, event_category, organizer_name, day, end_date, summary, text, ticket_type, number_of_tickets, ticket_price, register_start_date, register_end_date, published, coordinates,tags}=this.state
        return (
            <Container style={{marginLeft:"23rem"}}>
                <div>
                 {/* <Dashboard /> */}
                    <legend style={{ textAlign:"center"}}>EVENT CREATION</legend>
                     {/* Collapsible Section Component React component to wrap content in Collapsible element with trigger to open and close  */}
                    <CollapsibleComponent >
                        <CollapsibleHead className="additionalClassForHead">EVENT DETAILS</CollapsibleHead>
                        <CollapsibleContent className="additionalClassForContent"> <br></br>
                            <Eventcreate/>
                        </CollapsibleContent>
                        <div>
                            <br></br>
                        </div>
                        
                        <CollapsibleHead >ADDRESS</CollapsibleHead>
                        <CollapsibleContent > <br></br>
                            <Address />
                            
                        </CollapsibleContent>
                        <div>
                            <br></br>
                        </div>
                        
                        <CollapsibleHead>DETAILS</CollapsibleHead>
                        <CollapsibleContent> <br></br>
                            <Details />
                        </CollapsibleContent>
                        <br/><br/>

                        <div className="row">
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                   
                    {/* <div className="col-md-1" style={{ marginRight: "1rem" }}> */}
                        </div>
                    {/* </div> */}
                        <div>
                            <br></br>
                        </div>
                        
                    </CollapsibleComponent>
                    <Button className='btn btn-success' onClick={this.create}>Submit</Button>
                </div>
            </Container>
        )
    }
}

export default Collapsible2