
import React, {Component} from "react";
import {connect} from 'react-redux';
import {getAllProjects} from "../action/programsAndProjects";

class ProgramAndProjects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: {
                isFetching: false,
                data: null,
                error: null
            }
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState((prevState) => ({
            ...prevState,
            projects: {
                ...nextProps.projects
            }
        }))
    }

    componentDidMount() {
        this.setState((prevState) => ({
            ...prevState,
            projects: {
                ...prevState.projects,
                isFetching: true
            }
        }), () => {
            this.props.getAllProjects(5);
        })
    }

    render() {
        return (
            <>
                <div className='jumbotron jumbotron-fluid text-white' style={{height: 200, backgroundColor: 'black'}}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col'/>
                            <div className='col-4 text-center mt-4'>
                                <h2>Programs and Projects</h2>
                            </div>
                            <div className='col'/>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    {
                        this.state.projects.isFetching ? (
                            <div className="text-center">
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <br/>
                                <span>
                                    <b className='small font-weight-bold'>Loading projects ...</b>
                                </span>
                            </div>
                        ) : null
                    }
                    <hr/>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    projects: state.programsAndProjects.projects
});

const mapDispatchToProps = (dispatch) => ({
    getAllProjects: (max) => dispatch(getAllProjects(max))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProgramAndProjects);