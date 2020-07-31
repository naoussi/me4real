
import React, {Component} from "react";
import {connect} from 'react-redux';
import {getAllProjects} from "../action/programsAndProjects";
import {v4} from "uuid";

const styles = {
    imgStyles: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        objectFit: "cover",
        height: 200
    }
};


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
                        ) :
                        (this.state.projects.data) ? (

                            <div className="container">
                                <div className="row">
                                    {
                                        this.state.projects.data.map((project) => (
                                            <div className="col-md-4" key={v4()}>
                                                <div className="card mb-3">
                                                    <img style={styles.imgStyles} className="card-img-top" src={project.image} alt="Card image cap"/>
                                                    <div className="card-header">
                                                        <h6 className="card-title">{project.title}</h6>
                                                    </div>
                                                    <div className="card-body">
                                                        <p className="card-text">
                                                            {project.description}
                                                            {/*Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
                                                            {/*Ab consectetur consequuntur cumque deserunt ea eaque earum */}
                                                            {/*eos et ex facilis laudantium, magni nam perspiciatis, quae,*/}
                                                            {/*quia rem veritatis vero voluptatibus.*/}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                        ) : (
                            <div className="alert alert-danger">
                                <div className="text-center">
                                    <b>No projects Available contact admin</b>
                                </div>
                            </div>
                        )
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
});

export default connect(mapStateToProps, mapDispatchToProps)(ProgramAndProjects);