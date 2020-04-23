import React , {useEffect} from 'react'
import { Table, Form, Button, Modal, Spinner } from 'react-bootstrap'
import '../App.css'
import CarouselAdd from './CarouselAdd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../action/carousel'
import { FaTrash, FaEdit } from 'react-icons/fa';

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}
function mapStateToProps(state) {
    return {
        token: "somehash",
        carousels: state.carousel.carousel,
        isFetching: state.carousel.isFetching,
        error: state.carousel.error,
    }
}


function CarouselEdit(props) {
    const [modalShow, setModalShow] = React.useState(false);
    const [editableObject, setEditableObject] = React.useState(null);

    useEffect(() => {
        props && props.handleFetchCarousel(19)
        console.log("carousel content is ", props.carousels)

    }, [])

    return (
        <div className="container topSpacing" >
            <br />
            <div>
                <Button variant="warning" onClick={() => { setModalShow(true); setEditableObject(null) }}> Add Item</Button>
            </div> 
            <h2> Enter a number on the rank column to make it top when displayed </h2>
            <br />
            <MyVerticallyCenteredModal show={modalShow} carousel={editableObject} onHide={() => setModalShow(false)} />
            <div>
                {props.isFetching && <div className="center">   <Spinner animation="border" variant="primary" /></div>}
                {props.error && <div className="center"> <div className="warning"> {props.error}</div>  </div>}

                <Table responsive="md">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Icon</th>
                            <th>title</th>
                            <th>Description</th>
                            <th>Rank</th>
                        </tr>
                    </thead>
                    <tbody>

                        {props.carousels && props.carousels.map((item, index) => 
                            <tr key={index}>
                                <td> <Form.Check type="checkbox" /></td>
                                <td> <img src={item.image} className="icon-height" alt={item.title} /></td>

                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>
                                   {item.rank}
                                </td>
                                <td>
                                    <FaTrash onClick={() => props.handleDeleteCarousel(item._id)} variant="danger"> Delete</FaTrash>
                                </td>
                                <td>
                                    <FaEdit onClick={() => { setModalShow(true); setEditableObject(item) }} variant="info"> Edit</FaEdit>
                                </td>
                                
                            </tr> 
                        )}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

//Adding or editing carousel item
function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title className="center" id="contained-modal-title-vcenter">
                    {props.carousel ? "Editing Carousel Image" : "Add Image to Carousel"}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CarouselAdd editablecarousel={props.carousel} />
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    );
}



// edit modal 

function Edit(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title className="center" id="contained-modal-title-vcenter">
                    Add Image to Carousel
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CarouselAdd />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="warning" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(CarouselEdit);
