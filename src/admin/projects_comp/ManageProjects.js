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
                    file: '',
                    rank: '',
                },
                posting: {
                    isPosting: false,
                    success: false,
                    error: null
                }
            }
        }

        componentWillReceiveProps(nextProps, nextContext) {
            if (nextProps.projects && this.state.projects.isFetching) {
                this.setState((prevState) => ({
                    ...prevState,
                    projects: {
                        isFetching: nextProps.projects.isFetching,
                        data: nextProps.projects.data,
                        error: nextProps.projects.error
                    }
                }));
            }
            if (nextProps.posting && this.state.posting.isPosting) {
                this.setState((prevState) => ({
                    ...prevState,
                    posting: {
                        isPosting: nextProps.posting.isPosting,
                        success: nextProps.posting.success,
                        error: nextProps.posting.error
                    }
                }));
            }
        }

        handleProjectsViewRefresh = () => {
            this.setState((prevState) => ({
                ...prevState,
                projects: {
                    ...prevState.projects,
                    isFetching: true,
                }
            }), () => {
                this.props.getAllProjects(10);
            })
        };

        handleProjectsView = (projects) => {
            return (
                <div className='container'>
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
                            <div className='alert alert-success border-success zoomIn'>
                                <h4 className='text-center'>
                                    Data obtained!
                                </h4>
                            </div>

                        ) : (
                            <div className='alert alert-dark border-dark text-center zoomIn'>
                                <h4 className='text-center'>No projects available</h4>
                                <button className='btn btn-sm border-dark btn-outline-dark mt-2'
                                    onClick={this.handleProjectsViewRefresh}>
                                    Refresh
                                </button>
                            </div>
                        )
                    }
                </div>
            )
        };

        handleClearError = () => {
            this.setState((prevState) => ({
                ...prevState,
                posting: {
                    isPosting: false,
                    success: false,
                    error: null
                }
            }));
        };

        handleProjectsCreation = () => {
            const {error} = this.state.posting;
           return (
               <div className='container'>

                   {
                       this.state.posting.isPosting ? (
                           <div className="text-center">
                               <div className="spinner-border" role="status">
                                   <span className="sr-only">Posting data ...</span>
                               </div>
                               <br/>
                               <span>
                                    <b className='small font-weight-bold'>Posting data</b>
                                </span>
                           </div>
                       ) :

                       this.state.posting.error ? (

                           <div className='alert alert-danger border-danger text-center zoomIn'>
                               <h4>Post failed</h4>
                               <kbd>{error ? error.failed_msg : ''}</kbd>
                               <br/>
                               <button className="btn btn-sm btn-danger mt-2" onClick={this.handleClearError}>
                                   Reset and input
                               </button>
                           </div>

                       ) : (this.state.posting.success) ? (

                           <div className='alert alert-success border-success text-center zoomIn'>
                               <h4>Posted new project to database</h4>
                           </div>

                       ) : (
                           <form onSubmit={this.handleProjectSubmission} className="zoomIn">
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
                                   <input type="number" className="form-control"
                                          id="input-rank" required="required"
                                          name="rank"
                                          placeholder="Enter rank here"
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
                       )
                   }
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
                // console.log("New projects state:", this.state.newProject, "Name:", name, "Value:", value);
            });

        };

        handleProjectSubmission = (evt) => {
            evt.preventDefault();
            const {title, description, file, rank} = this.state.newProject;

            this.setState((prevState) => ({
                ...prevState,
                posting: {
                    ...prevState.posting,
                    isPosting: true
                }
            }), () => {
                this.props.addProject(title, description, file, rank);
            });

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
                                    <h5 className="modal-title">Manage Projects</h5>
                                    <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="row mt-0 p-2">
                                    <div className="col-6">
                                        <button className='btn btn-block btn-sm btn-dark'
                                                onClick={() => this.handleViewChange(ManageProjects.VIEW_MANAGE)}>
                                            View all projects
                                        </button>
                                    </div>
                                    <div className="col-6">
                                        <button className='btn btn-block btn-sm btn-primary'
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
            console.log("PROJECTS_MODAL props:", this.props);
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