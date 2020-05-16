import React, {useState} from 'react'
import '../App.css'
import {Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function EventCard(props) {
    const [ hover , setHover] = useState(false)
    return(
        <div style={{ display: "flex", justifyContent: 'center' }}>

        <div className="_1eoat _2ipfx"  >
                <div className="_5vofw" style={{ borderBottomWidth: '1px', borderColor: '#FFCC00', justifyContent: 'center' }}>

                <div className={hover ? "hover-date-container" :"date-container"} >
                    <div className="day">
                        20
                        </div>
                    <div className="month-container">
                        <div className="month" style={{ opacity: 0.5 }}> Jan</div>
                        <div className="month"> Jan</div>
                    </div>
                </div>
                <div className="_3qhs" >
                        <div className="_153IM" onMouseDown={() => { console.log("hovering"); setHover(true) }} onMouseLeave={() => setHover(false)}>
                        <div className="event-item-title"> <p >Lecture: The gender play gap</p></div>
                        <div className="event-item-title"> &nbsp;/&nbsp;</div>
                        <div className="event-item-location"> San Francisco</div>
                    </div>
                        {hover && <div style={{ display: 'block' }}>
                            <div><span>Dec 19, 2022, 8:00 PM </span> </div>
                            <span>San Francisco, San Francisco, CA, USA</span>
                                </div>
                        }
                </div>
                <div className="2giuh">

                    <div className="btn-right">
                    <Link to={`/event/${props.id}`} >

                        <Button variant="warning" size="md">
                            More Detials
                                </Button>
                    </Link>
                    </div>
                </div>

            </div>
        </div>
        </div>
    )
}
export default EventCard