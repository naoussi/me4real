import React, { useState, useEffect } from 'react'
import { Button, Form, Spinner } from 'react-bootstrap'
import '../App.css'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../action/teams'
function mapStateToProps(state) {
    return {
        isSaving: state.teams.isSaving,
        teams: state.teams.teams,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}
function AddTeam(props) {
    const [validated, setValidated] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState("");
    const [filename, setFileName] = useState("");
    const [rank, setRank] = useState(1);

    //if there were some probs sent here perform editing instead
    useEffect(() => {
        props.editableTeam && setFile(props.editableTeam.image)
        props.editableTeam && setTitle(props.editableTeam.title)
        props.editableTeam && setDescription(props.editableTeam.description)

    }, [props.editableTeam])

    //check for selected file before llowing upload
    const handleSubmit = event => {
        console.log("image is ", file)
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        setValidated(true);

        // let reader = new FileReader()
        // reader.readAsDataURL(file)
        // reader.rea
        // let data = new FormData()
        // data.append('file', file)
        // reader.onload = e => console.log("targeted result is ",{file: e.target.result, title, description, filename})
        if (props.editableTeam) {
            props.handleAddTeam({ image: file, title, description, filename, rank, id: props.editableTeam._id }, true)
        }
        else {
            props.handleAddTeam({ image: file, title, description, filename, rank }, false)

        }
        // props.handleAddCarousel({})

    };
    //check for fle type before uploading
    const handleFile = e => {
        setFileName(e.target.files[0].name)
        setFile(e.target.files[0])
        let reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        // let data = new FormData()
        // data.append('file', e.target.files[0])
        // console.log('data is ', data)
        reader.onload = e => setFile(e.target.result)
    }
    return (
        <div className="container">
            {props.isSaving && <div className="center">   <Spinner animation="border" variant="primary" /></div>}
            <div className="row justify-content-md-center ">
                <div className="off-set-2 col-md-8">

                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" name="title" defaultValue={title} onChange={(e) => setTitle(e.target.value)} placeholder="img title" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" defaultValue={description} name="description" onChange={(e) => setDescription(e.target.value)} rows="3" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.imageupload">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" onChange={handleFile} placeholder="img" />
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
            </div>
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(AddTeam)