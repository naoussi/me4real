import React from 'react'
import './adminstyle.css'
import { Form, Button, Table, Spinner } from 'react-bootstrap'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../action/video'
import { FaTrash, FaEdit } from 'react-icons/fa';
import AddVideo from './AddVideo'
import '../App.css'
function mapStateToProps(state) {
    return {
        isSaving: state.video.isSaving,
        video: state.video.video,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

class ManageVideo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            video: null,
            editable: false,
        }
    }
    setEditableVideo = (video) => {
        this.setState({ video: video, editable: true })
    }

    componentDidMount() {
        this.props.handleFetchVideo(20)
    }
    render() {
        return (
            <div className=" container topSpacing">
                <br />
                <Button variant="warning" onClick={() => this.setState({ editable: !this.state.editable })}> {this.state.editable ? "View" : "Add Video"}</Button>
                <br />
                <br />
                {
                    this.state.editable
                        ?
                        <AddVideo editableVideo={this.state.video} />
                        : <div>
                            
                        <div >
                                <Table responsive="md">
                                    <thead>
                                        <tr>
                                            <th>title</th>
                                            <th>video</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {this.props.video && this.props.video.map((item, index) =>
                                            <tr key={index}>

                                                <td>{item.title}</td>
                                                <td>{item.video}</td>

                                                <td>
                                                    <FaTrash onClick={() => this.props.handleDeleteVideo(item._id)} variant="danger"> Delete</FaTrash>
                                                </td>
                                                <td>
                                                    <FaEdit onClick={() => this.setEditableVideo(item)} variant="info"> Edit</FaEdit>
                                                </td>

                                            </tr>
                                        )}
                                    </tbody>
                                </Table>

                            </div>
                        </div>


                }
            </div>

        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageVideo)