import React, {Component, useEffect} from 'react';
import EventCard from '../common/EventCard'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../action/event'
import { Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../App.css'
import {getEvents} from "../action/eventActions";
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(actions, dispatch)
// }
// function mapStateToProps(state) {
//     return {
//         token: "somehash",
//         events: state.event.events,
//         isFetching: state.event.isFetching,
//         error: state.event.fail
//     }
// }

class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allEvents: {
                isFetching: false,
                data: null,
                error:null
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

            this.props.getEvents(100);

        })
    }

    render() {
        return (
            <>
                <section>
                    <div className="site-primary-bg-color fix-height"/>

                    <div className=" mission-height site-primary-bg-color" style={{ textAlign: 'center', padding: 50 }}>
                        <a href="/"><p className="large-text" >All Events</p></a>
                    </div>
                </section>
                <div className="container-fluid">

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
                               <section className="mt-5">
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

                    {/* Badge section */}
                    <section>

                        <div className="row mission-height site-secondary-bg-color middle" >
                            <br />
                            <p style={{ textAlign: 'center', paddingTop: '30px',  }}>
                            <span className="badge-section-text" style={{ fontWeight: 'bold' }}>We Need your support today <br />
                            </span>
                                <Button variant="dark" style={{ textAlign: 'center', marginTop: '10px' }}>
                                    <Link to="/support"> Get Involved </Link>
                                </Button>

                            </p>
                        </div>

                    </section>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    allEvents: state.newEvents.allEvents
});

const mapDispatchToProps = (dispatch) => ({
    getEvents: (max) => dispatch(getEvents(max))
});

// function Event(props) {
//     useEffect(() => {
//         // props.handleFetchEvents(3)
//     }, []);
//     return (
//         <div>
//             <section>
//                 <div className="site-primary-bg-color fix-height"/>
//
//                 <div className=" mission-height site-primary-bg-color" style={{ textAlign: 'center', padding: 50 }}>
//                     <a href="/"><p className="large-text" >All Events</p></a>
//                 </div>
//             </section>
//             <div className="container-fluid">
//                 <section>
//                     {[1,2,3,4,5,6,7].map((value, key)=> <EventCard id={value} />)}
//                 </section>
//
//                 {/* Badge section */}
//                 <section>
//
//                     <div className="row mission-height site-secondary-bg-color middle" >
//                         <br />
//                         <p style={{ textAlign: 'center', paddingTop: '30px',  }}>
//                             <span className="badge-section-text" style={{ fontWeight: 'bold' }}>We Need your support today <br />
//                             </span>
//                         <Button variant="dark" style={{ textAlign: 'center', marginTop: '10px' }}>
//                             <Link to="/support"> Get Involved </Link>
//                         </Button>
//
//                         </p>
//                     </div>
//
//                 </section>
//             </div>
//         </div>
//     )
// }

export default connect(mapStateToProps, mapDispatchToProps) (Event)
