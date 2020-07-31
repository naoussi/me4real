import React from 'react'
import './style.css'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import marked from 'marked'

function NewsListing(props) {
    return (
        <section style={{cursor: 'pointer'}} onClick={() => window.location = `/news/${props.id._id}`}>
            <div className="container">
                <div className="row event-container">
                    <div className="col-md-5 height event-image-left" >
                        <Image src={props.id.image} style={{ height: '292px', padding: '' }} fluid />
                    </div>
                    <div className="col-md-5 height event-side-right">
                        <div className="event-title">
                            <h3 style={{ color: 'rgb(146, 143, 143)'}}> {props.id.title}</h3>
                            {/*<Link to={`/news/${props.id._id}`} >*/}
                            {/*    */}
                            {/*</Link>*/}
                        </div>
                        <div className='container'>
                            <div className="event-text">
                                <div dangerouslySetInnerHTML={{ __html: marked(props.id.description.length <= 400 ? props.id.description :  props.id.description.substring(0, 400), { sanitize: true }) }} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default NewsListing