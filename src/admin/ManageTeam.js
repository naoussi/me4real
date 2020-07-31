import React from 'react'
import './adminstyle.css'
import { Form, Button, Table, Spinner } from 'react-bootstrap'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../action/teams'
import { FaTrash, FaEdit } from 'react-icons/fa';
import AddTeam from './AddTeam'
import '../App.css'
function mapStateToProps(state) {
    return {
        isSaving: state.teams.isSaving,
        teams: state.teams.team,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

class ManageTeam extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            team: null,
            editable: false,
        }
    }
    setEditableTeam = (team) => {
        this.setState({ team: team, editable: true })
    }

    componentDidMount() {
        this.props.handleFetchTeam(20)
    }
    render() {
        return (
            <div className=" container topSpacing">
                <br />
                <Button variant="warning" onClick={() => this.setState({ editable: !this.state.editable })}> {this.state.editable ? "View" : "Add Team"}</Button>
                <br />
                <br />
                {
                    this.state.editable
                        ?
                        <AddTeam editableTeam={this.state.team} />
                        : <div>
                        <div >
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

                                    {this.props.teams && this.props.teams.map((item, index) =>
                                        <tr key={index}>
                                            <td> <Form.Check type="checkbox" /></td>
                                            <td> <img src={item.image} className="icon-height" alt={item.title} /></td>

                                            <td>{item.title}</td>
                                            <td>{item.description}</td>
                                            <td>
                                                {item.rank}
                                            </td>
                                            <td>
                                                <FaTrash onClick={() => this.props.handleDeleteTeam(item._id)} variant="danger"> Delete</FaTrash>
                                            </td>
                                            <td>
                                                <FaEdit onClick={() => this.setEditableTeam(item)} variant="info"> Edit</FaEdit>
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageTeam)