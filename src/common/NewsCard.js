import React from 'react'
import {NavLink } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const imgStyle = {
    imgStyle: {
        position: 'absolute',
        objectFit: 'cover',
        top: 0,
        left: 0,
        maxHeight: '280px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
    },
};

function NewsCard(props) {

    const {newsItem} = props;
    return (
        <NavLink to={`/news/${newsItem._id}`} >
            <Card title={newsItem.title}>
                <Card.Img variant="top" src={newsItem.image} style={{width: 363, height: '18rem' }} />
                <Card.Body>
                    <Card.Title>
                        <span className="font-weight-light" style={{ color: '#333333', fontSize: 15 }}>
                            { newsItem.title.length > 24 ? newsItem.title.substring(0, 40) + "..." : newsItem.title}
                        </span>
                    </Card.Title>
                    {/* <hr />
                    <Card.Text>
                        {newsItem.description}
                    </Card.Text>
                    <small className="text-muted">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                    </small> */}
                </Card.Body>
            </Card>
            {/*<div className="card" style={{width: 363, height: "18rem"}}>*/}
            {/*    <img className="card-img" style={imgStyle.imgStyle} src={newsItem.image} alt="Card image cap"/>*/}
            {/*    <div className="card-body">*/}
            {/*        <h5 className="card-title text-dark">*/}
            {/*            { newsItem.title.length > 24 ? newsItem.title.substring(0, 24) + "..." : newsItem.title}*/}
            {/*        </h5>*/}
            {/*        /!*<h5>*!/*/}
            {/*        /!*    {newsItem.description}*!/*/}
            {/*        /!*</h5>*!/*/}
            {/*        /!*<p className="card-text">This is a longer card with supporting text below as a natural lead-in*!/*/}
            {/*        /!*    to additional content. This content is a little bit longer.</p>*!/*/}
            {/*        /!*<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>*!/*/}
            {/*    </div>*/}
            {/*</div>*/}
        </NavLink>
    )
}

export default NewsCard;