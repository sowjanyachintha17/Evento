import React, { Component } from 'react';
// import { Container } from 'react-bootstrap/lib/Tab';
import { Table } from 'react-bootstrap';


 class GetFeedback extends Component {
    constructor(props){
        super(props);
        this.state = {
            events:[],
            feedbacks:[],
            isLoaded: false,

        }
    }

    componentDidMount(){

        fetch('http://localhost:1111/EventFeedback/getAll')
               
        .then(res=> res.json())
        .then(json=>{
        this.setState({
            isLoaded: true,
            feedbacks:json,
        })
        })
        fetch('http://localhost:1111/attendance/event/getAll')
               
        .then(res=> res.json())
        .then(json=>{
        this.setState({
            isLoaded: true,
             events:json,
        })
        })


    }
    render(){
        var {isLoaded, feedbacks}=this.state;
        var {isLoaded, events}=this.state;
                if(!isLoaded){
                return <div>Loading...</div>
                }
        
        return (
<div className="col-md-6" style= {{marginLeft : "30rem"}}>
    <Table striped bordered hover size="md">
        <thead>
            <tr > 
                <h4 className="card-title" style={{color:"darkblue"}} >Events 
                <select  >
                { (events.length > 0) ? events.map (event => {
            return (
                    // <option key={event.index}></option>
                    <option key={event.index}>{event.title}</option>
                    )
                }) : <tr><td colSpan="5">Loading...</td></tr> }  
                 </select>
                </h4>
            </tr>
            
            <tr>
                <th>s.no</th>
                <th>Event Feedback</th>
                <th>Sessions</th>
                <th>Helpfull</th>
                <th>Key Learned</th>
                <th>Logistics</th>
                <th>Feedback For Logistics</th>
                <th>Comments</th>
                <th>Suggestions</th>
            </tr>
                  <tr></tr>
        </thead>
        <tbody>
        { (feedbacks.length > 0) ? feedbacks.map (feedback => {
            return (
            <tr key={feedback.index } >
                <td></td>
                <td>{feedback.event_feedback}</td>
                <td>{feedback.sessions.session1}</td>
                <td>{feedback.helpfull}</td>
                <td>{feedback.key_learned}</td>
                <td>{feedback.logistics.transportation}</td>
                <td>{feedback.feedback_logistics}</td>
                <td>{feedback.comments}</td>
                <td>{feedback.suggestions}</td>
                         
            </tr>
            )
        }) : <tr><td colSpan="5">Loading...</td></tr> }            
        </tbody>
    </Table>
</div>
 

            
//  <div className="content-wrapper" style={{minHeight: "1416.81px"}}>
//     <section className="content-header">
//             <div className="container-fluid">
//                     <div className="row mb-2">
//                             <div className="col-sm-6">
//                                     <h1></h1>
//                             </div>
                            
//                     </div>
//             </div>
//     </section>
//     <section className="content">
//         <form >
//             <div hidden="submitted">
//                 <div className="row">
//                     <div className="col-md-12">
//                         <div className="card card-info">
//                             <div className="card-header">
//                                 <h3 className="card-title">Events 
//                                     <select style={{color:"black"}}>                                    
//                                         <option>{event.title}</option>
//                                         <option>event</option>
//                                     </select>
//                                 </h3>
//                                     <div className="card-tools">
//                                         <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">-
//                                         </button>
//                                     </div>
//                             </div>
                                                                                    
//                             <div className="card-body">
//                                 <div className="row">
//                                     <div className="col-sm-12">
//                                         <div className="card-tools" align="right">
//                                             <table className="table table-hover">
//                                                 <thead>
//                                                     <tr>
//                                                         <th>s.no</th>
//                                                         <th>Event Feedback</th>
//                                                         <th>Sessions</th>
//                                                         <th>Helpfull</th>
//                                                         <th>Key Learned</th>
//                                                         <th>Logistics</th>
//                                                         <th>Feedback For Logistics</th>
//                                                         <th>Comments</th>
//                                                         <th>Suggestions</th>
//                                                     </tr>
//                                                     <tr></tr>
//                                                 </thead>
//                                                 <tbody>
//                                                     <tr >
//                                                         <td>{i+1}</td>
//                                                         <td>{feedback.event_feedback}</td>
//                                                         <td>{feedback.sessions.session1}</td>
//                                                         <td>{feedback.helpfull}</td>
//                                                         <td>{feedback.key_learned}</td>
//                                                         <td>{feedback.logistics.transportation}</td>
//                                                         <td>{feedback.feedback_logistics}</td>
//                                                         <td>{feedback.comments}</td>
//                                                         <td>{feedback.suggestions}</td>
                                                            
//                                                     </tr>
                                                          
//                                                 </tbody>
//                                             </table>
                                            
//                                         </div>
                                            
                                            
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </form>
//     </section>
// </div> 





                                                   

        );
}
}

export default GetFeedback