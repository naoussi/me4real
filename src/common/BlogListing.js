import React from 'react'
import './style.css'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import marked from 'marked'

function BlogListing(props) {
    return (
        <section>
            <div className="container">
                <div className="row event-container">
                    <div className="col-md-4 height event-image-left" >
                        <Image src={props.id.image} style={{ height: '292px', padding: '' }} fluid />
                    </div>
                    <div className="col-md-4 height event-side-right">
                        <div className="event-title">
                            <Link to={`/blog/${props.id._id}`} >
                                <h3> {props.id.title}</h3>
                            </Link>
                        </div>
                        <div className="event-text">
                            <div dangerouslySetInnerHTML={{ __html: marked(props.id.description.length <= 400 ? props.id.description : props.id.description.substring(0, 400), { sanitize: true }) }} />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default BlogListing