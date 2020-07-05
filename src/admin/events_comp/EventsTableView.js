import React, {Component} from "react";
import PropTypes from "prop-types";
import {v4} from "uuid";
import {connect} from "react-redux";

class EventsTableView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventsData: [],
            eventsDeletion: {
                _id: '',
                isDeleting: false,
                deleted: null,
                error: null
            }
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {

    }

    componentDidMount() {
        this.setState((prevState) => ({
            ...prevState,
            eventsData: [...this.props.eventsData]
        }))
    }

    render() {
        const {eventsData} = this.state;
        return (
            <>
                {
                    eventsData.length === 0 ? (
                        <div className="alert alert-dark">
                            <div className="text-center">
                                <h5 className="font-weight-bold">
                                    {"No events available".toUpperCase()}
                                </h5>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="zoomIn">
                                <table className="table table-sm">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Time</th>
                                            <th scope="col">Longitude</th>
                                            <th scope="col">Latitude</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Location</th>
                                            <th scope="col">Rank</th>
                                            <th scope="col">Edit</th>
                                            <th scope="col">Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            eventsData.map((event) => (
                                                <tr key={v4()}>
                                                    <th scope="row">
                                                        <input type="checkbox"/>
                                                    </th>
                                                    <td>
                                                        <div className="card-title">{event.title}</div>
                                                    </td>
                                                    <td>
                                                        <div className="card-title">{event.time}</div>
                                                    </td>
                                                    <td>
                                                        <div className="card-title">{event.longitude}</div>
                                                    </td>
                                                    <td>
                                                        <div className="card-title">{event.latitude}</div>
                                                    </td>
                                                    <td>
                                                        <div className="card-title">{event.description}</div>
                                                    </td>
                                                    <td>
                                                        <div className="card-title">{event.location}</div>
                                                    </td>
                                                    <td>
                                                        <div className="card-title">{event.rank}</div>
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
                                                            <button className="btn btn-outline-danger btn-sm">
                                                                delete
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )
                }

            </>
        );
    }
}


EventsTableView.propTypes = {
    eventsData: PropTypes.array.isRequired,
    eventsRefreshHandler: PropTypes.func.isRequired
};

export default EventsTableView;