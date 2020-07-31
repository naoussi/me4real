import React, { useState, useEffect } from 'react'
import { Button, Form, Spinner } from 'react-bootstrap'
import '../App.css'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../action/event'
import GoogleMapReact from 'google-map-react';

function mapStateToProps(state) {
    return {
        isSaving: state.event.isSaving,
        event: state.event.event,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}
function AddEvent(props) {
    const [validated, setValidated] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [time, setTime] = useState("");
    const [location, setLocation] = useState("");
    const [longitude, setLongitude] = useState("");
    const [latitude, setLatitude] = useState("");

    //if there were some probs sent here perform editing instead
    useEffect(() => {
        props.editableEvent && setTime(props.editableEvent.time)
        props.editableEvent && setLocation(props.editableEvent.location)
        props.editableEvent && setTitle(props.editableEvent.title)
        props.editableEvent && setDescription(props.editableEvent.description)
        props.editableEvent && setLatitude(props.editableEvent.latitude)
        props.editableEvent && setLongitude(props.editableEvent.longitude)
        
    }, [props.editableEvent])

    //check for selected file before llowing upload
    const handleSubmit = event => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        setValidated(true);
        if (props.editableEvent) {
            props.handleAddEvent({ time, title, description, longitude, latitude, location, id: props.editableEvent._id }, true)
        }
        else {
            props.handleAddEvent({ time, title, description, longitude, latitude, location }, false)

        }

    };

    return (
        <div className="container">
            {props.isSaving && <div className="center">   <Spinner animation="border" variant="primary" /></div>}
            <div className="row justify-content-md-center ">
                <div className="col-md-6">

                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control required type="text" name="title" defaultValue={title} onChange={(e) => setTitle(e.target.value)} placeholder="img title" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" required defaultValue={description} name="description" onChange={(e) => setDescription(e.target.value)} rows="3" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.time">
                            <Form.Label>Time</Form.Label>
                            <Form.Control type="text" onChange={(e) => setTime(e.target.value)} placeholder="time" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.location">
                            <Form.Label>location</Form.Label>
                            <Form.Control required type="text" onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.longitude">
                            <Form.Label>Longitude</Form.Label>
                            <Form.Control type="text" onChange={(e) => setLongitude(e.target.value)} placeholder="Longitude" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.latitude">
                            <Form.Label>Latitude</Form.Label>
                            <Form.Control type="text" onChange={(e) => setLatitude(e.target.value)} placeholder="Latitude" />
                        </Form.Group>
                        <div className="pull-right">
                            {!props.isSaving ?
                                <Button type="submit" variant="warning" className="pull-right">Submit form</Button>
                                : <Button variant="warning" disabled>
                                    <Spinner
                                        as="span"
                                        animation="grow"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />
                                    Uploading...
                                </Button>
                            }
                        </div>

                    </Form>
                </div>
                <div className="col-md-6"> 
                    <SimpleMap />
                </div>
            </div>
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(AddEvent)


const AnyReactComponent = ({ text }) => <div>{text}</div>;

function SimpleMap(props){
    const defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={[34.0522, -118.2437]}
                    defaultZoom={10}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
}

