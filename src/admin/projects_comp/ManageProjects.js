import React, {Component} from "react";
import $ from 'jquery'
import {getAllProjects} from "../../action/programsAndProjects";
import {connect} from 'react-redux';

const ManageProjectsContainer = (ChildComponent) =>
    class ManageProjects extends Component {

        static VIEW_CREATE = "CREATE_VIEW";
        static VIEW_MANAGE = "MANAGE_VIEW";

        constructor(props) {
            super(props);
            this.state = {
                currentView: ManageProjects.VIEW_MANAGE,
                projects: {
                    isFetching: false,
                    data: [],
                    error: null,
                },
                newProject: {
                    title: '',
                    description: '',
                    file: ''
                }
            }
        }

        componentWillReceiveProps(nextProps, nextContext) {
            if (nextProps.projects) {
                this.setState((prevState) => ({
                    ...prevState,
                    projects: {
                        isFetching: nextProps.projects.isFetching,
                        data: nextProps.projects.data,
                        error: nextProps.projects.error
                    }
                }));
            }
        }

        handleProjectsView = (projects) => {
            return (
                <>
                    {
                        projects.isFetching ? (
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

                        projects.data && projects.data.length > 0 ? (
                            <div className='alert alert-success border-success'>
                                <h4 className='text-center'>
                                    Data obtained!
                                </h4>
                            </div>

                        ) : (
                            <div className='alert alert-warning border-warning'>
                                <h4 className='text-center'>No projects available</h4>
                            </div>
                        )
                    }
                </>
            )
        };

        handleProjectsCreation = () => {
           return (
               <div className='container'>
                   <form onSubmit={this.handleProjectSubmission}>
                       <div className="form-group">
                           {/*<label htmlFor="formGroupExampleInput">Example label</label>*/}
                           <input type="text" className="form-control" id="formGroupExampleInput"
                                  placeholder="Enter project title" name='title' required='required'
                                    onChange={this.handleInputFieldsChange}/>
                       </div>
                       <div className="form-group">
                           {/*<label htmlFor="formGroupExampleInput2">Another label</label>*/}
                           <textarea type="text" className="form-control" id="formGroupExampleInput2"
                                    placeholder="Enter project description here" name='description'
                                    required='required'
                                    onChange={this.handleInputFieldsChange}
                           />
                       </div>
                       <div className="form-group">
                           <input type="file" placeholder="Choose image" className="form-control-file"
                                  id="exampleFormControlFile1"
                                  required='required'
                                  name='file'
                                  onChange={this.handleInputFieldsChange}
                           />
                       </div>
                       <button type='submit' className='btn btn-block btn-primary btn-sm'>
                           Create project
                       </button>
                   </form>
               </div>
           )
        };

        handleInputFieldsChange = (evt) => {

            const name = $(evt.target).attr('name');
            const value = $(evt.target).val();

            this.setState((prevState) => ({
                ...prevState,
                newProject: {
                    ...prevState.newProject,
                    [name]: value
                }
            }), () => {
                console.log("New projects state:", this.state.newProject, "Name:", name, "Value:", value);
            });

        };

        handleProjectSubmission = (evt) => {
            evt.preventDefault();
        };

        handleViewChange = (newView) => {
            if (newView === ManageProjects.VIEW_MANAGE) {
                this.setState((prevState) => ({
                    ...prevState,
                    currentView: ManageProjects.VIEW_MANAGE
                }))
            } else {
                this.setState((prevState) => ({
                    ...prevState,
                    currentView: ManageProjects.VIEW_CREATE
                }))
            }
        };

        MainProjectsModal = () => {
            return (
                <>
                    <div id='projects-modal' className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog"
                         aria-labelledby="myLargeModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content text">
                                <div className="modal-header bg-dark text-white text-center">
                                    <h5 className="modal-title text-center">Manage Projects</h5>
                                    <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="row mt-0 p-2">
                                    <div className="col-6">
                                        <button className='btn btn-block btn-sm btn-primary'
                                                onClick={() => this.handleViewChange(ManageProjects.VIEW_MANAGE)}>
                                            View all projects
                                        </button>
                                    </div>
                                    <div className="col-6">
                                        <button className='btn btn-block btn-sm btn-success'
                                                onClick={() => this.handleViewChange(ManageProjects.VIEW_CREATE)}>
                                            Create new project
                                        </button>
                                    </div>
                                </div>
                                <div className='container'>
                                    {
                                        this.state.currentView === ManageProjects.VIEW_MANAGE ? (
                                            <>
                                                {this.handleProjectsView(this.state.projects)}
                                            </>
                                        ) : (
                                            <>
                                                {this.handleProjectsCreation()}
                                            </>
                                        )
                                    }
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger btn-sm" data-dismiss="modal">Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        };

        showProjectsModal = () => {
            const self = this;
            $(function () {
                $("div#projects-modal").modal("show");
                self.setState((prevState) => ({
                    ...prevState,
                    projects: {
                        ...prevState.projects,
                        isFetching: true
                    }
                }), () => {
                    self.props.getAllProjects(10);
                });
            });
        };

        componentDidMount() {
            // console.log("PROJECTS_MODAL props:", this.props);
            $(function () {
                $('div#projects-modal').modal({
                    backdrop: 'static',
                    keyboard: false,
                    show: false
                });
            });
        }

        render() {
            const MainProjectsModal = this.MainProjectsModal();
            return (
                <>
                    {MainProjectsModal}
                    <ChildComponent showProjectsModal={this.showProjectsModal} {...this.props}/>
                </>
            );
        }

    };

export default ManageProjectsContainer;