import React, {useState} from 'react'
import '../App.css'
import { Image, Button, Modal, Form,Col, Spinner } from 'react-bootstrap'
import GoogleMapReact from 'google-map-react'
function EventDetail(params) {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div style={{ marginTop: '75px' }} >
            <section>
                <div className=" site-primary-bg-color" style={{ textAlign: 'center', padding: 20, height: '240px' }} >
                    <a href="/"><p className="large-text">Lecture: The Gender</p>
                        <p className="large-text">Pay Gap</p>
                    </a>
                    <p className="small-text"> ma 19 dec.  |  San Francisco</p>
                    <br />
                    <Button variant="warning" onClick={() => setModalShow(true)} > RSVP</Button>
                </div>
                {/* <div className=" center-items justify-content-md-center" > */}
                <div className=" justify-content-md-center" >

                <div className="row">
                    <div className="col-md-8 offset-2">

                        <div className="title">
                            <h1>Tijd en locatie</h1>
                            <p>
                                19 dec. 2022 20:00
                            </p>

                            <p>
                                San Francisco, San Francisco, CA, USA
                            </p>
                        </div>
                        <div>
                            <h3>
                                Over het evenement 
                            </h3>
                            <p>
                                I’m an event description. 
                                Click here to open up the Event Editor and change my text. 
                                Simply click me, Manage Event and start editing your event.
                                I’m a great place for you to say a little more about your upcoming event.
                            </p>

                                <Button variant="warning" onClick={() => setModalShow(true)}> RSVP</Button>
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
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </section>
        </div>
    )
}

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
export default EventDetail