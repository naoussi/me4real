import React from 'react'
import './adminstyle.css'
import { Form, Button, Table, Spinner } from 'react-bootstrap'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../action/news'
import { FaTrash, FaEdit } from 'react-icons/fa';
import AddNews from './AddNews'
import '../App.css'
function mapStateToProps(state) {
    return {
        isSaving: state.news.isSaving,
        news: state.news.news,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

 class ManageNews extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            news: null,
            editable: false,
        }
    }
    setEditableNews = (news) => {
        this.setState({news: news, editable: true})
    }
    
    componentDidMount(){
        this.props.handleFetchNews(15)
    }
    render() {
        return (
            <div className=" container topSpacing"> 
            <br />
            <Button variant="warning" onClick={() => this.setState({ editable: !this.state.editable })}> {this.state.editable ? "View" : "Add News"}</Button>

                {
                    this.state.editable
                    ? 
                        <AddNews  newsItem={this.state.news}/> 
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

                                    {this.props.news && this.props.news.map((item, index) =>
                                        <tr key={index}>
                                            <td> <Form.Check type="checkbox" /></td>
                                            <td> <img src={item.image} className="icon-height" alt={item.title} /></td>
                                            <td>{item.title}</td>
                                            <td>{item.description}</td>
                                            <td>
                                                {item.rank}
                                            </td>
                                            <td>
                                                <FaTrash onClick={() => this.props.handleDeleteNews(item._id)} variant="danger"> Delete</FaTrash>
                                            </td>
                                            <td>
                                                <FaEdit onClick={() => this.setEditableNews(item)} variant="info"> Edit</FaEdit>
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageNews)