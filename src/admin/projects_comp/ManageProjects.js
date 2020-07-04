import React, {Component} from "react";
import $ from 'jquery';
import ProjectsTableView from "./ProjectsTableView";

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
                },
                imageUpload: {
                    isLoading: false,
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
                            <>
                                <ProjectsTableView projectsData={projects.data}/>
                            </>

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

        handleClearInfoMessage = () => {
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
                               <button className="btn btn-sm btn-danger mt-2" onClick={this.handleClearInfoMessage}>
                                   Reset and input
                               </button>
                           </div>

                       ) : (this.state.posting.success) ? (

                           <div className='alert alert-success border-success text-center zoomIn'>
                               <h5>Posted new project to database</h5>
                               <button className="btn btn-sm btn-outline-success mt-2" onClick={this.handleClearInfoMessage}>
                                   Reset and input
                               </button>
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
                                   <div className="row">
                                       <div className="col-md-8">
                                           <input type="file" placeholder="Choose image" className="form-control-file"
                                                  id="exampleFormControlFile1"
                                                  required='required'
                                                  name='file'
                                                  onChange={this.handleInputFieldsChange}
                                           />
                                       </div>
                                       <div className="col-md-4">
                                           <div className="ml-2">
                                               {
                                                   this.state.imageUpload.isLoading ? (
                                                       <span className="badge badge-primary">Uploading image ...</span>
                                                   ) : (
                                                       <></>
                                                   )
                                               }
                                           </div>
                                       </div>
                                   </div>


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

            if (name === "file") {
                let reader = new FileReader();
                reader.readAsDataURL(evt.target.files[0]);
                this.setState((prevState) => ({
                    ...prevState,
                    imageUpload: {
                        ...prevState.imageUpload,
                        isLoading: true,
                    }
                }), () => {

                    reader.onload = (evt) => {
                        this.setState((prevState) => ({
                            ...prevState,
                            newProject: {
                                ...prevState.newProject,
                                [name]: evt.target.result
                            },
                            imageUpload: {
                                ...prevState.imageUpload,
                                isLoading: false,
                            }
                        }));
                    }

                })
            } else {
                this.setState((prevState) => ({
                    ...prevState,
                    newProject: {
                        ...prevState.newProject,
                        [name]: value
                    }
                }), () => {
                    // console.log("New projects state:", this.state.newProject, "Name:", name, "Value:", value);
                });
            }



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
                    currentView: ManageProjects.VIEW_MANAGE,
                    projects: {
                        isFetching: true,
                        data: [],
                        error: null
                    }
                }), () => {

                    // Refresh the projects view every time the button is clicked.
                    this.props.getAllProjects(10);

                })
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