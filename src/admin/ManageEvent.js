import React from 'react'
import './adminstyle.css'
import { Form, Button, Table, Spinner } from 'react-bootstrap'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../action/event'
import { FaTrash, FaEdit } from 'react-icons/fa';
import AddEvent from './AddEvent'
import '../App.css'
function mapStateToProps(state) {
    return {
        isSaving: state.event.isSaving,
        event: state.event.event,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

class ManageEvent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            event: null,
            editable: false,
        }
    }
    setEditableEvent = (event) => {
        this.setState({ event: event, editable: true })
    }

    componentDidMount() {
        this.props.handleFetchEvents(15)
    }
    render() {
        return (
            <div className=" container topSpacing">
                <br />
                <Button variant="warning" onClick={() => this.setState({ editable: !this.state.editable })}> {this.state.editable ? "View" : "Add Event"}</Button>

                {
                    this.state.editable
                        ?
                        <AddEvent eventItem={this.state.event} />
                        :
                        <div>
                            <Table responsive="md">
                                <thead>
                                    <tr>
                                        <th>Time</th>
                                        <th>Location</th>
                                        <th>title</th>
                                        <th>Description</th>
                                        <th>Longitude</th>
                                        <th>Latitude</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {this.props.event && this.props.event.map((item, index) =>
                                        <tr key={index}>
                                            <td> {item.time}</td>
                                            <td> {item.location}</td>
                                            <td>{item.title}</td>
                                            <td>{item.description}</td>
                                            <td>{item.longitude}</td>
                                            <td>{item.latitude}</td>

                                            <td>
                                                <FaTrash onClick={() => this.props.handleDeleteEvent(item._id)} variant="danger"> Delete</FaTrash>
                                            </td>
                                            <td>
                                                <FaEdit onClick={() => this.setEditableEvent(item)} variant="info"> Edit</FaEdit>
                                            </td>

                                        </tr>
                                    )}
                                </tbody>
                            </Table>

                        </div>

                }

            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageEvent)