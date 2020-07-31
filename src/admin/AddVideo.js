import React, { useState, useEffect } from 'react'
import { Button, Form, Spinner } from 'react-bootstrap'
import '../App.css'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../action/video'
function mapStateToProps(state) {
    return {
        isSaving: state.video.isSaving,
        video: state.video.video,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}
function AddVideo(props) {
    const [validated, setValidated] = useState(false);
    const [title, setTitle] = useState("");
    const [video, setVideo] = useState("");
    const [file, setFile] = useState("");

    //if there were some probs sent here perform editing instead
    useEffect(() => {
        props.editableVideo && setTitle(props.editableVideo.title)
        props.editableVideo && setVideo(props.editableVideo.video)

    }, [props.editableVideo])

    //check for selected file before llowing upload
    const handleSubmit = event => {
        console.log("video is ", file)
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        setValidated(true);
        if (props.editableTeam) {
            props.handleAddVideo({ video: file, title, id: props.editableVideo._id }, true)
        }
        else {
            props.handleAddVideo({ video: file, title}, false)

        }

    };
    //check for fle type before uploading
    const handleFile = e => {
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
                       
                        <Form.Group controlId="exampleForm.imageupload">
                            <Form.Label>Video</Form.Label>
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
export default connect(mapStateToProps, mapDispatchToProps)(AddVideo)