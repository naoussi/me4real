import React, {Component} from "react";
import PropTypes from "prop-types";
import {v4} from "uuid";
import {connect} from "react-redux";
import {deleteProject} from "../../action/programsAndProjects";

class ProjectsTableView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectsData: [],
            projectDeletion: {
                _id: '',
                isDeleting: false,
                deleted: null,
                error: null
            }
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.projectDeletion && this.state.projectDeletion.isDeleting) {
            this.setState((prevState) => ({
                ...prevState,
                projectDeletion: {
                    ...nextProps.projectDeletion
                }
            }), () => {

                if (this.state.projectDeletion.deleted) {
                    this.props.projectRefreshHandler();
                }

            });
        }
    }

    componentDidMount() {
        console.log("TABLE_VIEW_DATA:", this.props.projectsData);
        this.setState((prevState) => ({
            ...prevState,
            projectsData: [...this.props.projectsData]
        }))
    }

    handleProjectDelete = (evt, project) => {
        if (window.confirm(`Sure you wish to delete project -- ${project["title"]} ?`)) {
            this.setState((prevState) => ({
                ...prevState,
                projectDeletion: {
                    ...prevState.projectDeletion,
                    _id: project["_id"],
                    isDeleting: true,
                }
            }), () => {
                this.props.deleteProject(project["_id"]);
            });
        }
    };

    render() {
        return (
            <>
                {
                    this.state.projectsData.length === 0 ? (
                        <div className="alert alert-dark">
                            <div className="text-center">
                                <h5 className="font-weight-bold">
                                    {"No projects available".toUpperCase()}
                                </h5>
                            </div>
                        </div>
                    ) : (
                        <>
                            {
                                this.state.projectDeletion.isDeleting ? (
                                    <>
                                        <div className="spinner">
                                            <div className="bounce1"/>
                                            <div className="bounce2"/>
                                            <div className="bounce3"/>
                                        </div>
                                    </>
                                ) : null
                            }
                            <div className="zoomIn">
                                <table className="table table-sm">
                                    <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Rank</th>
                                        <th scope="col">Edit</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        this.state.projectsData.map((project) => (
                                            <tr key={v4()}>
                                                <th scope="row">
                                                    <input type="checkbox"/>
                                                </th>
                                                <td>
                                                    <img src={project.image} style={{width: 30, height: 30}} alt={"Project IMG"}/>
                                                </td>
                                                <td>
                                                    <div className="card-title">{project.title}</div>
                                                </td>
                                                <td>
                                                    <div className="card-title">{project.description}</div>
                                                </td>
                                                <td>
                                                    <div className="card-title">{project.rank}</div>
                                                </td>
                                                <td>
                                                    <div className="card-title">
                                                        <button className="btn btn-outline-dark btn-sm">
                                                            edit
                                                        </button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="card-title">
                                                        <button className="btn btn-outline-danger btn-sm"
                                                                onClick={(evt) => this.handleProjectDelete(evt, project)}>
                                                            delete
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                    </tbody>
                                    {/*<tr>*/}
                                    {/*    <th scope="row">1</th>*/}
                                    {/*    <td>Mark</td>*/}
                                    {/*    <td>Otto</td>*/}
                                    {/*    <td>@mdo</td>*/}
                                    {/*</tr>*/}
                                    {/*<tr>*/}
                                    {/*    <th scope="row">2</th>*/}
                                    {/*    <td>Jacob</td>*/}
                                    {/*    <td>Thornton</td>*/}
                                    {/*    <td>@fat</td>*/}
                                    {/*</tr>*/}
                                    {/*<tr>*/}
                                    {/*    <th scope="row">3</th>*/}
                                    {/*    <td>Larry</td>*/}
                                    {/*    <td>the Bird</td>*/}
                                    {/*    <td>@twitter</td>*/}
                                    {/*</tr>*/}
                                </table>
                            </div>
                        </>
                    )
                }
            </>
        );
    }
}

ProjectsTableView.propTypes = {
    projectsData: PropTypes.array.isRequired,
    projectRefreshHandler: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    projectDeletion: state.programsAndProjects.projectDeletion
});

const mapDispatchToProps = (dispatch) => ({
    deleteProject: (id) => dispatch(deleteProject(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsTableView);