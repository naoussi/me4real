import React, {Component, useEffect} from 'react';
import { Card, Button, CardDeck } from 'react-bootstrap'
import EventCard from '../common/EventCard'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../action/event'
import '../App.css'
import {getEvents} from "../action/eventActions";

class UpcomingEvents extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allEvents: {
                isFetching: false,
                data: null,
                error: null
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
    }

    componentDidMount() {
        this.setState((prevState) => ({
            ...prevState,
            allEvents: {
                ...prevState.allEvents,
                isFetching: true
            }
        }), () => {
            this.props.getEvents(3);
        })
    }


    render() {
        return (
            <div className="container-fluid">
                <h2 className="latest-news-h2">Upcoming Events</h2>
                <div className="card-container">

                    {
                        this.state.allEvents.isFetching ? (
                            <>
                                <div className="spinner mt-3 mb-3">
                                    <div className="bounce1"/>
                                    <div className="bounce2"/>
                                    <div className="bounce3"/>
                                </div>
                            </>
                        ) :
                        (this.state.allEvents.error) ? (
                            <div className="alert alert-warning text-center">
                                <div className="font-weight-bold">
                                    {"Technical Issues. Contact Admin.".toUpperCase()}
                                </div>
                            </div>
                        ) :
                        (!this.state.allEvents.data || this.state.allEvents.data.length === 0) ? (
                            <div className="container mt-3">
                                <div className="alert alert-dark text-center">
                                    <div className="font-weight-bold">
                                        {"No upcoming events.".toUpperCase()}
                                    </div>
                                </div>>
                            </div>
                        ):
                        (this.state.allEvents.data && this.state.allEvents.data.length > 0) ? (
                            <>
                                <section>
                                    {
                                        this.state.allEvents.data.map((event) => (
                                            <EventCard eventData={event}  />
                                        ))
                                    }
                                </section>
                            </>
                        ) : (
                            <div className="alert alert-warning text-center">
                                <div className="font-weight-bold">
                                    {"Technical Issues. Contact Admin.".toUpperCase()}
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    allEvents: state.newEvents.allEvents
});

const mapDispatchToProps = (dispatch) => ({
    getEvents: (max) => dispatch(getEvents(max))
});

// function UpcomingEvents() {
//     useEffect(() => {
//         // props.handleFetchEvents(3)
//     }, [])
//     return (
//         <div className="contiainer-fluid">
//             <h2 className="latest-news-h2"> Upcoming Events</h2>
//
//             <div className="card-container">
//
//      {/*{ [1, 2, 3].map((i, key) => */}
//      {/*               <EventCard key={key} />*/}
//      {/*               )}*/}
//
//             </div>
//
//         </div>
//     )
// }

export default connect(mapStateToProps, mapDispatchToProps) (UpcomingEvents)