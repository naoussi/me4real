import React, {useState, useEffect } from 'react'
import { Button, Form, Spinner } from 'react-bootstrap'
import '../App.css'

import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../action/carousel'
function mapStateToProps(state) {
    return {
        isSaving: state.carousel.isSaving,
        carousel: state.carousel.carousel,
    }  
}
function  mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}
function CarouselAdd(props) {
    const [validated, setValidated] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState("");
    const [filename, setFileName] = useState("");
    //if there were some probs sent here perform editing instead
    useEffect(()=> {
        props.editablecarousel && setFile(props.editablecarousel.image)
        props.editablecarousel && setTitle(props.editablecarousel.title)
        props.editablecarousel && setDescription(props.editablecarousel.description)

    }, [])
    
    //check for selected file before llowing upload
    const handleSubmit = event => {
        console.log("editing ", props.editablecarousel)
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
        if(props.editablecarousel){
             console.log("eiditable carousel loggin", props.editablecarousel)
             props.handleAddCarousel({ image: file, title, description, filename, rank: 1, id: props.editablecarousel._id }, true)
        }
        else{
            console.log("generic posting of content")
            props.handleAddCarousel({ image: file, title, description, filename, rank: 1 }, false)

        }
        // props.handleAddCarousel({})
        
    };
    //check for fle type before uploading
   const  handleFile = e => {
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
            {props.isSaving && <div className="center">   <Spinner animation="border" variant="primary" /></div> }
            <div className="row justify-content-md-center ">
                <div className="off-set-2 col-md-8">

                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                            <Form.Control type="text" name="title" defaultValue={title} onChange={(e)=>setTitle(e.target.value)} placeholder="img title" />
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
                             :  <Button variant="warning" disabled>
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
export default connect(mapStateToProps, mapDispatchToProps) (CarouselAdd)