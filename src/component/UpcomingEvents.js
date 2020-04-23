import React, {useEffect} from 'react'
import { Card, Button, CardDeck } from 'react-bootstrap'
import EventCard from '../common/EventCard'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../action/event'
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
function UpcomingEvents() {
    useEffect(() => {
        // props.handleFetchEvents(3)
    }, [])
    return (
        <div className="contiainer-fluid">
            <h2 className="latest-news-h2"> Upcoming Events</h2>

            <div className="card-container">

     { [1, 2, 3].map((i, key) => 
                    <EventCard key={key} />
                    )}
               
            </div>
         
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps) (UpcomingEvents)