import React, { useState } from 'react'
import '../App.css'
import { Form, Col, Button, Spinner } from 'react-bootstrap'
import GoogleMapReact from 'google-map-react'

function Contact(props) {
    const [name, setName] = useState("")
    const [subject, setSubject] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [processing, setProcessing] = useState("")
    const [validated, setValidated] = useState(false)

    const submit = event => {

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setProcessing(true)
        setValidated(true);
        fetch(`http://ec2-3-18-187-103.us-east-2.compute.amazonaws.com/api/contact/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, subject, email,  message }),
        })
            .then((response) => response.json())
            .then(resp => {
                setProcessing(false)
                setName("")
                setMessage("")
                setSubject("")
                setEmail("")
                console.log("response is ", resp)

            })
            .catch(err => {
                setProcessing(false)
                console.log("rrr ", err)

            })
    }
    return (
        <div >
            <section>
                <div className="site-primary-bg-color fix-height" ></div>

                <div className=" mission-height site-primary-bg-color" style={{ textAlign: 'center', padding: 50 }}>
                    <a href="/"><p className="large-text">Contact</p></a>

                </div>
            </section>


            <div className="container-fluid">


            {/* about us image section image on the right Our mission*/}
            <section style={{paddingBottom: "60px"}}>
                <div className="row">
                    <div className="col-md-6" style={{ backgroundColor: 'white', height: '525px', }}>
                        <div className="section-image-side-text">
                            <h3 >Get in Touch</h3>
                        <p style={{textAlign: 'center'}}>
                                    Monte Jouvence, Yaounde Cameroon <br />
                                info@me4realinternational.org  |   (+237)651621861
                        </p>
                                {processing && <div className="center">   <Spinner animation="border" variant="primary" /></div>}

                        <div  className="container"> 
                                    <Form validated={validated} onSubmit={submit}>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridEmail">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Name" />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridPassword">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" placeholder="Email" />
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Group controlId="formGridAddress1">
                                        <Form.Label>Subject</Form.Label>
                                        <Form.Control placeholder=" Inquiry Main St" />
                                    </Form.Group>

                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Message </Form.Label>
                                        <Form.Control as="textarea" rows="3" />
                                    </Form.Group>
 

 

                                    <Button variant="warning" type="submit">
                                        Send
                                    </Button>
                                </Form>


                        </div>
                        </div>
                    </div>
                    <div className="col-md-6" style={{ height: '600px', padding: 0 }}>
                        <img src="generic.png" height='680px' width="100%" />
                    </div>

                </div>
            </section>
            {/* Badge section */}
            <br /> 
            <section>

                <div className="row mission-height site-secondary-bg-color middle" >
                    <br />
                    <p style={{ textAlign: 'center', paddingTop: '30px', }}>
                            <span className="badge-section-text">An individual's ability to impact and influence others is <br />
                                proportional to their ability to impact and influence self.
                        </span>
                        DMF
                    </p>
                </div>

            </section>
            <section>
                    <div style={{ paddingTop: '20px' }}>
                        <div style={{ height: '100vh', width: '100%' }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "" }}
                                defaultCenter={[34.0522, -118.2437]}
                                defaultZoom={10}
                            >
                            </GoogleMapReact>
                        </div>
                    </div>
            </section>
        </div>
        </div>
    )
}

export default Contact