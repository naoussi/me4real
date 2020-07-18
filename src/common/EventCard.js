import React, {useState} from 'react'
import '../App.css'
import {Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";

function EventCard(props) {
    const [ hover , setHover] = useState(true);

    const timeSections = props.eventData["time"].match(/\S+\s*/g);
    // console.log("TIME_SECTIONS:", timeSections);

    const goToEventsPage = (id) => {
        window.location = `/event/${id}`;
    };

    return(
        <div className="container">

            <div className="row">
                <div className="col-12">
                    <div className={hover ? "hover-date-container" :"date-container"} >
                        <div className="day mr-1">
                            {timeSections[0]}
                        </div>
                        <div className="month-container">
                            <div className="month" style={{ opacity: 0.5 }}> {timeSections[1]}</div>
                            <div className="month"> {timeSections[1]}</div>
                        </div>
                    </div>
                    <div className="_3qhs" >
                        <div className="_153IM"
                             onClick={() => goToEventsPage(props.eventData._id)}
                            // onMouseOver={() => { console.log("hovering"); setHover(true) }}
                            // onMouseLeave={() => setHover(false)}
                        >

                            <div className="event-item-title">
                                <p >{props.eventData["title"]}</p>
                            </div>
                            <div className="event-item-title"> &nbsp;/&nbsp;</div>
                            <div className="event-item-location">
                                {props.eventData["location"]}
                            </div>

                        </div>
                        {
                            hover && (
                                <div style={{ display: 'block' }}>
                                    <div>
                                        <span>{props.eventData["time"]}</span>
                                    </div>
                                    <span>{props.eventData["location"]}</span>
                                    <div style={{float: "right"}}>
                                        <Link to={`/event/${props.eventData._id}`} >

                                            <Button variant="warning" size="md">
                                                More Detials
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            )
                        }
                    </div>

                    <div className="_1eoat _2ipfx"  >
                        <div className="_5vofw" style={{ borderBottomWidth: '1px', borderColor: '#FFCC00', width: '100%' }}>


                            <div className="2giuh">

                                <div className="btn-right">

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

EventCard.propTypes = {
    eventData: PropTypes.object.isRequired
};
export default EventCard