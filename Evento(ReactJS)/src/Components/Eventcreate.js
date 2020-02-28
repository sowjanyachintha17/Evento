import React, { PureComponent } from 'react'
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
// import Upload from './upload';
import { Dropdown } from 'react-bootstrap';
import Dashboard from './Dashboard';
import TextArea from 'muicss/lib/react/textarea';
import { Button } from 'muicss/react';
import axios from 'axios';


class Eventcreate extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            // visible: '',
            title: '',
            event_type:'',
            event_category: '',
            organizer_name: '',
            summary: '',
            text: '',
            published: '',
            coordinates: '',
            tags: ''
        }
        this.title=this.title.bind(this);
        this.event_type=this.event_type.bind(this);
        this.event_category=this.event_category.bind(this);
        this.organizer_name=this.organizer_name.bind(this);
        this.summary=this.summary.bind(this);
        this.text=this.text.bind(this);
        this.published=this.published.bind(this);
        this.coordinates=this.coordinates.bind(this);
        this.tags=this.tags.bind(this);

        this.create=this.create.bind(this);
    }

    title(event){
        this.setState({title: event.target.value})
    }

    event_type(event){
        this.setState({ event_type: event.target.value})
    }
    
    event_category(event){
        this.setState({event_category: event.target.value})
    }

    organizer_name(event){
        this.setState({organizer_name: event.target.value})
    }

    summary(event){
        this.setState({summary: event.target.value})
    }

    text(event){
        this.setState({text: event.target.value})
    }

    published(event){
        this.setState({published: event.target.value})
    }

    coordinates(event){
        this.setState({coordinates: event.target.value})
    }

    tags(event){
        this.setState({tags: event.target.value})
    }

    create(event) {
        //alert('success')
        // var Event={

        //     title:this.state.title,
        //     event_type:this.state.event_type,
        //     event_category:this.state.event_category,
        //     organizer_name:this.state.organizer_name,
           
        //     summary:this.state.summary,
        //     text:this.state.text,
            
        //     published:this.state.published,
        //     coordinates:this.state.coordinates,
        //     tags:this.state.tags

        // }

        axios.post({method:'post',
            url:'http://localhost:1111/event/createEvent', 
            data:{
            title:this.state.title,
            event_type:this.state.event_type,
            event_category:this.state.event_category,
            organizer_name:this.state.organizer_name,
           
            summary:this.state.summary,
            text:this.state.text,
            
            published:this.state.published,
            coordinates:this.state.coordinates,
            tags:this.state.tags
            }
        })
        //  .then(function(response) {
        //      if(!response.ok) {
        //          alert("Submit Fail");
        //         throw new Error('Bad status from the server');
        //      }
        //       return response.json();
        //  })

        //  .then(function(responseData) {
        //      if(!(responseData.data && responseData.data.success)) {
        //         alert("Submit Successful");
        //          this.props.history.push('/Dashboard')
        //         window.location.href = '/Dashboard';
        //      }
        //  });
        .then(response => { 
            console.log(response)
        })
        .catch(error => {
            console.log(error.response)
        });
    }
    
    render() {
         const {title, event_type, event_category, organizer_name, summary, text, published, coordinates,tags}=this.state

        return (
            <div>
                {/* <Dashboard/> */}
                <div>
                    <Form>      
                        <div className="row">
                            <div className="col-md-3">
                                <label>Event Title:</label>
                            </div>
                            <Input onChange={this.title} placeholder="Enter title"/>

                            <div className="col-md-3">
                                <label>Event Category:</label>
                            </div>
                           <Input onChange={this.event_category}  placeholder="Enter Category"/>
                        </div><br></br>

                        <div className="row">
                            <div className="col-md-3">
                                <label>Organizer Name:</label>
                            </div>
                            <Input onChange={this.organizer_name}  placeholder="Enter org name "  />

                            <div className="col-md-3">
                                <label>Event Type:</label>
                            </div>
                            <Input onChange={this.event_type}  placeholder='Type of the Event' />
                        </div><br></br>
                        <div className="row">
                            <div className="col-md-3">
                                <label>Summary:</label>
                            </div>
                            <Input onChange={this.summary}  placeholder="Event Summary" />

                            <div className="col-md-3">
                                <label>Description:</label>
                            </div>
                            <TextArea onChange={this.text}  placeholder="Enter description " />
                        </div><br></br>
                        <div className="row">
                            <div className="col-md-3">
                                <label>Published:</label>
                            </div>
                            <Input onChange={this.published}  placeholder="True/false "  />

                            <div className="col-md-3">
                                <label>Co-ordinates:</label>
                            </div>
                            <Input onChange={this.coordinates}  placeholder='Enter co-ordinates' />
                        </div><br></br>
                        
                        <div className="row">
                            <div className="col-md-3">
                                <label>Tags:</label>
                            </div>
                            <Input onChange={this.tags}  placeholder="Enter tags "  />

                            <div className="col-md-3">
                                <label>Owner:</label>
                            </div>
                            <Input onChange={this.owner}  placeholder='Enter owner' />
                        </div><br></br>
                    </Form>
                </div>
                <Button className="btn btn-success" onClick={this.create}>Submit</Button>
            </div>
        )
    }
}

export default Eventcreate