import React, { Component } from 'react';
import {Card, CardDeck, CardColumns} from 'react-bootstrap';
import { Button} from 'react-bootstrap';

 class ListofEvents extends Component {
    constructor(props){
        super(props);
        this.state={
           event:[],
            img:0,
            isLoaded: false

        }
        this.img = this.img.bind(this);
    }
    img(e){
        this.setState({ img : this.state.img + 1})
    }

    componentDidMount(){

        fetch('http://localhost:1111/event/getAll')
               
        .then(res=> res.json())
        .then(json=>{
        this.setState({
            isLoaded: true,
            event:json,
        })
        })
    }
    
    render(){
        var {isLoaded,event}=this.state;
                if(!isLoaded){
                return <div>Loading...</div>
                }
        
        return (
            // <div className="container">
            //     <div  style={{width:"60%",textAlign:"center", marginLeft: "20%"}}>
            //         <div className="gallery" >
            //         { (event.length > 0) ?event.map (eve => {
            //             return (
                           
            //                 <div key={eve.i } > 
            //                     <a>
            //                         <img src={require('../Images/events/{i+1}.jpg')} alt="image" style={{width: "200px", height: "150px"}} />
            //                     </a>   
            //                     <div className="desc" key={eve.index}>
            //                         {eve.title}<br></br>
            //                         {eve.event_type}<br></br>
            //                         {eve.event_category}<br></br>
            //                         {eve.day}<br></br>
            //                         <button className="btn btn-primary">Register here</button><br></br>
            //                     </div>
            //             </div>
            //             )
            //                 }) :<label>Loading...</label>}
            //             <div clssName="desc">
            //                 Special Event<br/>
            //                 Datafoundry<br />
            //                 jwgfscvxnb cvbdhuytrdszxcvbnmbn
            //             </div>
            //         </div>

            //     </div>
            // </div>
    <div style={{width:"50%",textAlign:"center", marginLeft: "10%", marginRight:"10%" }}>
        <CardColumns>
            { (event.length > 0) ?event.map (eve => {
                return (
           
            <Card style={{ width: '18rem',height:'35rem' }}>
                {/* <Card.Img variant="top" src="../Images/events/5.jpg" style={{width: "180px", height: "150px"}}  /> */}
                <Card.Img variant="top" src={require('../Images/evetno2.png')} style={{width: "180px", height: "150px"}}  />
                <Card.Body>
               
                    <div key={eve.i }>
                    <Card.Title><b>{eve.title}</b></Card.Title>
                    <Card.Text>
                        {/* {eve.title}<br></br> */}
                        {eve.event_type}<br></br>
                        {eve.event_category}<br></br>
                        {eve.day}<br></br>
                    </Card.Text>
                    </div>
                    <Button variant="primary">Register Here</Button>
                </Card.Body>
            </Card>
            )
        }) :<label>Loading...</label>}
        </CardColumns>
      </div>      

        );
}
}

export default ListofEvents