import React, {Component, useState} from 'react';
import '../App.css'
import { Image, Button, Modal, Form,Col, Spinner } from 'react-bootstrap'
import GoogleMapReact from 'google-map-react'
import EventCard from "../common/EventCard";
import {getEvents} from "../action/eventActions";
import {connect} from "react-redux";

class EventDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventID: null,
            allEvents: {
                isFetching: false,
                data: null,
                error:null
            },
            modalShow: false
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.allEvents && this.state.allEvents.isFetching) {
            let eventData = null;
            if (Array.isArray(nextProps.allEvents.data)) {
                eventData = nextProps.allEvents.data.filter((event) => event._id === this.state.eventID)
            }
            this.setState((prevState) => ({
                ...prevState,
                allEvents: {
                    ...nextProps.allEvents,
                    data: eventData
                }
            }), () => {
               console.log("After fetching data:", this.state)
            });
        }
    }

    setModalShow = (boolVal) => {
        this.setState((prevState) => ({
            ...prevState,
            modalShow: boolVal
        }))
    };

    componentDidMount() {
        const eventID = this.props.match.params["event_id"];
        this.setState((prevState) => ({
            ...prevState,
            eventID: eventID,
            allEvents: {
                ...prevState.allEvents,
                isFetching: true
            }
        }), () => {

            this.props.getEvents(100);

        })
    }

    render() {
        const eventData = this.state.allEvents.data && this.state.allEvents.data[0];
        return (
            <div style={{paddingTop: "75px"}}>
                {
                    this.state.allEvents.isFetching ? (
                        <>
                            <div className="spinner mt-3 mb-3">
                                <div className="bounce1"/>
                                <div className="bounce2"/>
                                <div className="bounce3"/>
                            </div>
                        </>
                    ) :
                    (this.state.allEvents.error) ? (
                        <div className="alert alert-warning text-center">
                            <div className="font-weight-bold">
                                {"Technical Issues. Contact Admin.".toUpperCase()}
                            </div>
                        </div>
                    ) :
                    (!this.state.allEvents.data || this.state.allEvents.data.length === 0) ? (
                        <div className="container mt-3">
                            <div className="alert alert-dark text-center">
                                <div className="font-weight-bold">
                                    {"No upcoming events.".toUpperCase()}
                                </div>
                            </div>>
                        </div>
                    ):
                    (this.state.allEvents.data && this.state.allEvents.data.length > 0) ? (
                        <>
                            <section>
                                <div className="site-primary-bg-color" style={{ textAlign: 'center', padding: 60 }} >
                                    <p className="large-text">{eventData.title}</p>
                                    <p className="small-text"> {eventData.time}  |  {eventData.location}</p>
                                    <br />
                                    <Button variant="warning" onClick={() => this.setModalShow(true)} > RSVP</Button>
                                </div>
                                {/* <div className=" center-items justify-content-md-center" > */}
                                <div className=" justify-content-md-center mt-5" >

                                    <div className="row">
                                        <div className="col-md-8 offset-2">

                                            <div className="title">
                                                <h4>Time and Location</h4>
                                                <p>
                                                    {eventData.time}
                                                </p>

                                                <p>
                                                    {eventData.location}
                                                </p>
                                            </div>
                                            <div>
                                                <h4>
                                                    About The Event
                                                </h4>
                                                <p>
                                                    {eventData.description}
                                                </p>

                                                <Button variant="warning" onClick={() => this.setModalShow(true)}> RSVP</Button>
                                            </div>
                                            <div style={{paddingTop: '20px'}}>
                                                <div style={{ height: '50vh', width: '100%' }}>
                                                    <GoogleMapReact
                                                        bootstrapURLKeys={{ key: "" }}
                                                        defaultCenter={[34.0522, -118.2437]}
                                                        defaultZoom={10}
                                                    >
                                                    </GoogleMapReact>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <EventForm
                                    show={this.state.modalShow}
                                    onHide={() => this.setModalShow(false)}
                                />
                            </section>
                        </>
                    ) : (
                        <div className="alert alert-warning text-center">
                            <div className="font-weight-bold">
                                {"Technical Issues. Contact Admin.".toUpperCase()}
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }

}

// function EventDetail(params) {
//     console.log("EVENTS_PARAMS:", params);
//     const [modalShow, setModalShow] = useState(false);
//
//     return (
//         <div style={{ marginTop: '75px' }} >
//             <section>
//                 <div className=" site-primary-bg-color" style={{ textAlign: 'center', padding: 20, height: '240px' }} >
//                     <a href="/"><p className="large-text">Lecture: The Gender</p>
//                         <p className="large-text">Pay Gap</p>
//                     </a>
//                     <p className="small-text"> ma 19 dec.  |  San Francisco</p>
//                     <br />
//                     <Button variant="warning" onClick={() => setModalShow(true)} > RSVP</Button>
//                 </div>
//                 {/* <div className=" center-items justify-content-md-center" > */}
//                 <div className=" justify-content-md-center" >
//
//                 <div className="row">
//                     <div className="col-md-8 offset-2">
//
//                         <div className="title">
//                             <h1>Tijd en locatie</h1>
//                             <p>
//                                 19 dec. 2022 20:00
//                             </p>
//
//                             <p>
//                                 San Francisco, San Francisco, CA, USA
//                             </p>
//                         </div>
//                         <div>
//                             <h3>
//                                 Over het evenement
//                             </h3>
//                             <p>
//                                 I’m an event description.
//                                 Click here to open up the Event Editor and change my text.
//                                 Simply click me, Manage Event and start editing your event.
//                                 I’m a great place for you to say a little more about your upcoming event.
//                             </p>
//
//                                 <Button variant="warning" onClick={() => setModalShow(true)}> RSVP</Button>
//                         </div>
//                         <div style={{paddingTop: '20px'}}>
//                                 <div style={{ height: '50vh', width: '100%' }}>
//                                     <GoogleMapReact
//                                         bootstrapURLKeys={{ key: "" }}
//                                         defaultCenter={[34.0522, -118.2437]}
//                                         defaultZoom={10}
//                                     >
//                                     </GoogleMapReact>
//                                 </div>
//                         </div>
//                     </div>
//
//                 </div>
//                 </div>
//                 <EventForm
//                     show={modalShow}
//                     onHide={() => setModalShow(false)}
//                 />
//             </section>
//         </div>
//     )
// }

function EventForm(props) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [processing, setProcessing] = useState(false)
    const [validated, setValidated] = useState(false)

     const submit = event => {

         const form = event.currentTarget;
         if (form.checkValidity() === false) {
             event.preventDefault();
             event.stopPropagation();
            }
            
        setProcessing(true)
        setValidated(true);
        fetch(`http://ec2-3-18-187-103.us-east-2.compute.amazonaws.com/api/event/register/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({ firstName, lastName, email, event: 1, phone }),
        })
            .then((response) => response.json())
            .then(resp => {
                setProcessing(false)
                setFirstName("")
                setLastName("")
                setEmail("")
                console.log("response is ", resp)
                props.onHide()

            })
            .catch(err => {
                setProcessing(false)
                console.log("rrr ", err)

            })
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        > 
         <Form noValidate validated={validated} onSubmit={submit}>

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Your Details
                    {processing && <div className="center">   <Spinner animation="border" variant="primary" /></div>}

        </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>First Name</Form.Label>
                            <Form.Control required
                                type="text" defaultValue={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter first name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Last Name</Form.Label>
                            <Form.Control required
                                type="text" defaultValue={lastName} onChange={(e) => setLastName(e.target.value)}  placeholder="last name" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label> Phone</Form.Label>
                            <Form.Control required
                                type="text" defaultValue={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter phone num" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Email</Form.Label>
                            <Form.Control required
                                defaultValue={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="johndoe@gmail.com" />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid email.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>



            </Modal.Body>
            <Modal.Footer>
                <Button variant="warning" type="submit">Submit</Button>
            </Modal.Footer>
            </Form>

        </Modal>
    )
}


const mapStateToProps = (state) => ({
    allEvents: state.newEvents.allEvents
});

const mapDispatchToProps = (dispatch) => ({
    getEvents: (max) => dispatch(getEvents(max))
});


export default connect(mapStateToProps, mapDispatchToProps) (EventDetail)