import React, {useEffect} from 'react'
import EventCard from '../common/EventCard'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../action/event'
import { Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../App.css'
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}
function mapStateToProps(state) {
    return {
        token: "somehash",
        events: state.event.events,
        isFetching: state.event.isFetching,
        error: state.event.fail
    }
}
function Event(props) {
    useEffect(() => {
        // props.handleFetchEvents(3)
    }, []);
    return (
        <div>
            <section>
                <div className="site-primary-bg-color fix-height"/>

                <div className=" mission-height site-primary-bg-color" style={{ textAlign: 'center', padding: 50 }}>
                    <a href="/"><p className="large-text" >All Events</p></a>
                </div>
            </section>
            <div className="container-fluid">
                <section>
                    {[1,2,3,4,5,6,7].map((value, key)=> <EventCard id={value} />)}
                </section>

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
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps) (Event)
