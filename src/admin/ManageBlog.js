import React from 'react'
import './adminstyle.css'
import { Form, Button, Table, Spinner } from 'react-bootstrap'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../action/blog'
import { FaTrash, FaEdit } from 'react-icons/fa';
import AddBlog from './AddBlog'
import '../App.css'
function mapStateToProps(state) {
    return {
        isSaving: state.blog.isSaving,
        blogs: state.blog.blog,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

class ManageBlog extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            blog: null,
            editable: false,
        }
    }
    setEditableBlog = (blog) => {
        this.setState({ blog: blog, editable: true })
    }

    componentDidMount() {
        this.props.handleFetchBlog(15)
    }
    render() {
        return (
            <div className=" container topSpacing">
                <br />
                <Button variant="warning" onClick={() => this.setState({ editable: !this.state.editable })}> {this.state.editable ? "View" : "Create Blog"}</Button>

                {
                    this.state.editable
                        ?
                        <AddBlog blogItem={this.state.blog} />
                        :
                        <div>
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

                                    {this.props.blogs && this.props.blogs.map((item, index) =>
                                        <tr key={index}>
                                            <td> <Form.Check type="checkbox" /></td>
                                            <td> <img src={item.image} className="icon-height" alt={item.title} /></td>
                                            <td>{item.title}</td>
                                            <td>{item.description}</td>
                                            <td>
                                                {item.rank}
                                            </td>
                                            <td>
                                                <FaTrash onClick={() => this.props.handleDeleteBlog(item._id)} variant="danger"> Delete</FaTrash>
                                            </td>
                                            <td>
                                                <FaEdit onClick={() => this.setEditableBlog(item)} variant="info"> Edit</FaEdit>
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageBlog)