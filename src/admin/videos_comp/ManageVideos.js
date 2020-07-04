import React, {Component} from "react";
import $ from 'jquery';
import VideosTableView from "./VideosTableView";

const ManageVideosContainer = (ChildComponent) =>
    class ManageVideos extends Component {
        static VIEW_CREATE = "CREATE_VIEW";
        static VIEW_MANAGE = "MANAGE_VIEW";

        constructor(props) {
            super(props);
            this.state = {
                currentView: ManageVideos.VIEW_MANAGE,
                allVideos: {
                    isFetching: false,
                    data: [],
                    error: null
                },
                newVideoData: {
                    title: '',
                    link: '',
                    rank: ''
                },
                addVideos: {
                    isAdding: false,
                    data: null,
                    error: null
                }
            }
        }

        componentWillReceiveProps(nextProps, nextContext) {
            if (this.props.allVideos && this.state.allVideos.isFetching) {
                this.setState((prevState) => ({
                    ...prevState,
                    allVideos: {
                        isFetching: nextProps.allVideos.isFetching,
                        data: nextProps.allVideos.data,
                        error: nextProps.allVideos.error
                    }
                }))
            }
            if (nextProps.addVideos && this.state.addVideos.isAdding) {
                this.setState((prevState) => ({
                    ...prevState,
                    addVideos: {
                        ...nextProps.addVideos,
                    }
                }), () => {
                    console.log("UPDATED__ADD_VIDEOS:", this.state.addVideos)
                })
            }
        }

        componentDidMount() {

            $(function () {
                $('div#video-modal').modal({
                    backdrop: 'static',
                    keyboard: false,
                    show: false
                });
            });
        }

        showVideoModal = () =>  {
            const self = this;
            $(function () {
                $('div#video-modal').modal("show");
                self.setState((prevState) => ({
                    ...prevState,
                    allVideos: {
                        ...prevState.allVideos,
                        isFetching: true
                    }
                }), () => {

                    self.props.fetchAllVideos(100);

                })
            })
        };

        handleViewChange = (newView) => {
            if (newView === ManageVideos.VIEW_MANAGE) {
                this.setState((prevState) => ({
                    ...prevState,
                    currentView: ManageVideos.VIEW_MANAGE
                }), () => {

                    this.handleVideosViewRefresh();

                })
            } else {
                this.setState((prevState) => ({
                    ...prevState,
                    currentView: ManageVideos.VIEW_CREATE
                }))
            }
        };

        handleVideosViewRefresh = () => {
            this.setState((prevState) => ({
                ...prevState,
                allVideos: {
                    ...prevState.allVideos,
                    isFetching: true,
                }
            }), () => {
                this.props.fetchAllVideos(100);
            })
        };

        handleVideosView = (videos) => {
            return (
                <div className="container">

                    {
                        videos.isFetching ? (
                            <div className="text-center">
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <br/>
                                <span>
                                    <b className='small font-weight-bold'>Loading videos ...</b>
                                </span>
                            </div>
                        ) :
                        videos.data && videos.data.length > 0 ? (
                            <>
                                <VideosTableView
                                    videosData={videos.data}
                                    videosRefreshHandler={this.handleVideosViewRefresh}
                                />
                            </>
                        ) : (
                            <div className='alert alert-dark text-center zoomIn'>
                                <h4 className='text-center'>No videos available</h4>
                                <button className='btn btn-sm border-dark btn-outline-dark mt-2'
                                        onClick={this.handleVideosViewRefresh}>
                                    Refresh
                                </button>
                            </div>
                        )
                    }

                </div>
            )
        };

        handleVideoCreateInputFieldChange = (evt) => {
            const name = $(evt.target).attr("name");
            const value = $(evt.target).val();

            this.setState((prevState) => ({
                ...prevState,
                newVideoData: {
                    ...prevState.newVideoData,
                    [name]: value
                }
            }));
        };

        handleVideoSubmission = (evt) => {
            evt.preventDefault();
            const {title, link, rank} = this.state.newVideoData;

            this.setState((prevState) => ({
                ...prevState,
                addVideos: {
                    ...prevState.addVideos,
                    isAdding: true,
                }
            }), () => {
                console.log("Posting:", {title, link, rank});
                this.props.addVideo(title, link, rank);
            })
        };

        handleClearInfoMessage = () => {
            this.setState((prevState) => ({
                ...prevState,
                addVideos: {
                    isAdding: false,
                    data: null,
                    error: null
                }
            }))
        };

        handleVideosCreate = () => {
            return (
                <div className="container">

                    {
                        this.state.addVideos.isAdding ? (
                            <div className="text-center">
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Posting data ...</span>
                                </div>
                                <br/>
                                <span>
                                    <b className='small font-weight-bold'>Posting video data</b>
                                </span>
                            </div>
                        ) :
                        (this.state.addVideos.error) ? (

                            <div className='alert alert-danger border-danger text-center zoomIn'>
                                <h4>Post failed</h4>
                                <br/>
                                <button className="btn btn-sm btn-danger mt-2" onClick={this.handleClearInfoMessage}>
                                    Reset and input
                                </button>
                            </div>
                        ) : (this.state.addVideos.data) ? (

                            <div className='alert alert-success border-success text-center zoomIn'>
                                <h5>Posted new project to database</h5>
                                <button className="btn btn-sm btn-outline-success mt-2" onClick={this.handleClearInfoMessage}>
                                    Reset and input
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={this.handleVideoSubmission}>
                                <div className="form-group">
                                    <input type="text" className="form-control"
                                           placeholder="Enter project title"
                                           name="title"
                                           required="required"
                                           onChange={this.handleVideoCreateInputFieldChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control"
                                           placeholder="Enter video URL"
                                           name="link"
                                           required="required"
                                           onChange={this.handleVideoCreateInputFieldChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="number" className="form-control"
                                           placeholder="Enter rank"
                                           name="rank"
                                           required="required"
                                           onChange={this.handleVideoCreateInputFieldChange}
                                    />
                                </div>
                                <div className="row">
                                    <div className="col-md-3"/>
                                    <div className="col-md-6">
                                        <button type="submit" className="btn btn-block btn-primary btn-sm">
                                            Add video
                                        </button>
                                    </div>
                                    <div className="col-md-3"/>
                                </div>
                            </form>
                        )
                    }

                </div>
            )
        };

        render() {
            return (
                <>
                    <div id="video-modal" className="modal fade" tabIndex="-1" role="dialog"
                         aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content text">
                                <div className="modal-header bg-dark text-white text-center">
                                    <h5 className="modal-title">Manage Videos</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-6">
                                            <button className='btn btn-block btn-sm btn-dark'
                                                    onClick={() => this.handleViewChange(ManageVideos.VIEW_MANAGE)}>
                                                View all videos
                                            </button>
                                        </div>
                                        <div className="col-6">
                                            <button className='btn btn-block btn-sm btn-primary'
                                                    onClick={() => this.handleViewChange(ManageVideos.VIEW_CREATE)}>
                                                Create new video
                                            </button>
                                        </div>
                                    </div>
                                    <div className="container">
                                        {
                                            this.state.currentView === ManageVideos.VIEW_MANAGE ? (
                                                <>
                                                    {this.handleVideosView(this.state.allVideos)}
                                                </>
                                            ) : (
                                                <>
                                                    {this.handleVideosCreate()}
                                                </>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger btn-sm" data-dismiss="modal">
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ChildComponent showVideoModal={this.showVideoModal} {...this.props}/>
                </>
            );
        }
    };

export default ManageVideosContainer;
