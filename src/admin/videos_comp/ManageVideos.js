import React, {Component} from "react";
import $ from 'jquery';

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
                            <div className="alert alert-info">
                                <div className="text-center">
                                    {"Data loaded".toUpperCase()}
                                </div>
                            </div>
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

        };

        handleVideosCreate = () => {
            return (
                <div className="container">

                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control"
                                    placeholder="Enter project title"
                                    name="title"
                                    required="required"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control"
                                    placeholder="Enter video URL"
                                    name="videoURL"
                                    required="required"
                            />
                        </div>
                    </form>

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
