import React, {Component} from "react";
import $ from 'jquery';
import {funcAddEvent} from "../../action/eventActions";
import {connect} from "react-redux";

const ManageEventsContainer = (ChildComponent) =>
    class ManageEvents extends Component {

        static VIEW_CREATE = "CREATE_VIEW";
        static VIEW_MANAGE = "MANAGE_VIEW";

        constructor(props) {
            super(props);
            this.state = {
                currentView: ManageEvents.VIEW_MANAGE,
                allEvents: {
                    isFetching: false,
                    data: null,
                    error: null
                },
                newEvent: {
                    title: '',
                    description: '',
                    location: '',
                    time: '',
                    latitude: '',
                    longitude: '',
                    rank: ''
                },
                addEvent: {
                    isAdding: false,
                    added: null,
                    error: null,
                }
            }
        }

        componentWillReceiveProps(nextProps, nextContext) {
            if (nextProps.allEvents && this.state.allEvents.isFetching) {
                this.setState((prevState) => ({
                    ...prevState,
                    allEvents: {
                        ...nextProps.allEvents
                    }
                }));
            }
            if (nextProps.addEvent && this.state.addEvent.isAdding) {
                this.setState((prevState) => ({
                    ...prevState,
                    addEvent: {
                        ...nextProps.addEvent,
                    }
                }));
            }
        }

        componentDidMount() {
            $(function () {
                $('div#events-modal').modal({
                    backdrop: 'static',
                    keyboard: false,
                    show: false
                });
            });
        }

        showEventsModal = () => {
            const self = this;
            $(function () {
                $("div#events-modal").modal("show");
                self.setState((prevState) => ({
                    ...prevState,
                    allEvents: {
                        ...prevState.allEvents,
                        isFetching: true
                    }
                }), () => {

                    self.props.getEvents(100);

                })
            })
        };

        handleEventsViewRefresh = () => {
            this.setState((prevState) => ({
                ...prevState,
                allEvents: {
                    ...prevState.allEvents,
                    isFetching: true
                }
            }), () => {
                this.props.getEvents(100);
            })
        };

        handleEventsView = (events) => {
            return (
                <div className="container">
                    {
                        events.isFetching ? (
                            <div className="text-center">
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <br/>
                                <span>
                                    <b className='small font-weight-bold'>Loading events ...</b>
                                </span>
                            </div>
                        ) :
                        events.data && events.data.length > 0 ? (
                            <>
                                <div className="alert alert-info">
                                    <div className="text-center">
                                        DATA LOADED
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="alert alert-dark text-center zoomIn">
                                <h4 className='text-center'>No events available</h4>
                                <button className='btn btn-sm border-dark btn-outline-dark mt-2'
                                        onClick={this.handleEventsViewRefresh}>
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
                addEvent: {
                    isAdding: false,
                    data: null,
                    error: null
                }
            }))
        };

        handleInputFieldChange = (evt) => {
            const name = $(evt.target).attr("name");
            const value = $(evt.target).val();

            this.setState((prevState) => ({
                ...prevState,
                newEvent: {
                    ...prevState.newEvent,
                    [name]: value
                }
            }));
        };

        handleEventSubmission = (evt) => {
            evt.preventDefault();
            const {title, description, location, time,
                    latitude, longitude, rank} = this.state.newEvent;
            this.setState((prevState) => ({
                ...prevState,
                addEvent: {
                    ...prevState.addEvent,
                    isAdding: true
                }
            }), () => {

                this.props.funcAddEvent(title, description, location, time,
                    latitude, longitude, rank);

            });
        };

        handleEventsCreation = () => {
            return (
                <div className="container">
                    {
                        this.state.addEvent.isAdding ? (
                            <div className="text-center">
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Posting data ...</span>
                                </div>
                                <br/>
                                <span>
                                    <b className='small font-weight-bold'>Posting event data</b>
                                </span>
                            </div>
                        ) :
                        (this.state.addEvent.error) ? (
                            <div className='alert alert-danger border-danger text-center zoomIn'>
                                <h4>Post failed</h4>
                                <br/>
                                <button className="btn btn-sm btn-danger mt-2" onClick={this.handleClearInfoMessage}>
                                    Reset and input
                                </button>
                            </div>
                        ) : (this.state.addEvent.added) ? (
                            <div className='alert alert-success border-success text-center zoomIn'>
                                <h5>Posted new event to database</h5>
                                <button className="btn btn-sm btn-outline-success mt-2" onClick={this.handleClearInfoMessage}>
                                    Reset and input
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={this.handleEventSubmission}>
                                <div className="form-group">
                                    <input type="text" className="form-control"
                                            placeholder="Enter event title"
                                            name="title"
                                            required="required"
                                            onChange={this.handleInputFieldChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control"
                                            placeholder="Enter event location"
                                            name="location"
                                            required="required"
                                            onChange={this.handleInputFieldChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea type="text" className="form-control"
                                            placeholder="Enter event description"
                                            name="description"
                                            required="required"
                                            onChange={this.handleInputFieldChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control"
                                           placeholder="Enter event time"
                                           name="time"
                                           required="required"
                                           onChange={this.handleInputFieldChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control"
                                           placeholder="Enter event rank"
                                           name="rank"
                                           required="required"
                                           onChange={this.handleInputFieldChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control"
                                           placeholder="Enter event latitude"
                                           name="latitude"
                                           required="required"
                                           onChange={this.handleInputFieldChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control"
                                           placeholder="Enter event longitude"
                                           name="longitude"
                                           required="required"
                                           onChange={this.handleInputFieldChange}
                                    />
                                </div>

                                <div className="row">
                                    <div className="col-3"/>
                                    <div className="col-6">
                                        <button className="btn btn-block btn-primary btn-sm">
                                            Add Event
                                        </button>
                                    </div>
                                    <div className="col-3"/>
                                </div>
                            </form>
                        )
                    }
                </div>
            )
        };

        handleViewChange = (newView) => {
            if (newView === ManageEvents.VIEW_MANAGE) {
                this.setState((prevState) => ({
                    ...prevState,
                    currentView: ManageEvents.VIEW_MANAGE,
                    allEvents: {
                        isFetching: true,
                        data: null,
                        error: null,
                    }
                }), () => {

                    // Refresh the events view every time the button is clicked.
                    this.props.getEvents(100);

                });
            } else {
                this.setState((prevState) => ({
                    ...prevState,
                    currentView: ManageEvents.VIEW_CREATE
                }));
            }
        };

        render() {
            return (
                <>
                    <div className="modal fade" id="events-modal" tabIndex="-1" role="dialog"
                         aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content text">
                                <div className="modal-header bg-dark text-white text-center">
                                    <h5 className="modal-title">Manage Events</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <button className="btn btn-block btn-sm btn-dark"
                                                    onClick={() => this.handleViewChange(ManageEvents.VIEW_MANAGE)}>
                                                View all videos
                                            </button>
                                        </div>
                                        <div className="col-md-6">
                                            <button className="btn btn-block btn-sm btn-primary"
                                                    onClick={() => this.handleViewChange(ManageEvents.VIEW_CREATE)}>
                                                Create new video
                                            </button>
                                        </div>
                                    </div>
                                    <div className="container">

                                        {
                                            this.state.currentView === ManageEvents.VIEW_MANAGE ? (
                                                <>
                                                    {this.handleEventsView(this.state.allEvents)}
                                                </>
                                            ) : (
                                                <>
                                                    {this.handleEventsCreation()}
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
                    <ChildComponent {...this.props} showEventsModal={this.showEventsModal}/>
                </>
            );
        }
    };

export default ManageEventsContainer;