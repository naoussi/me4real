import React, {useEffect} from 'react'
import { Button, CardColumns, Spinner} from 'react-bootstrap'
import NewsCard from '../common/NewsCard'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../action/news'
import { Link } from 'react-router-dom'
import '../App.css'

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}
function mapStateToProps(state) {
    return {
        token: "somehash",
        news: state.news.news,
        isFetching: state.news.isFetching,
        error: state.news.fail
    }
}
function LatestNews(props){
    useEffect(() => {
        props.handleFetchNews(3)
    }, [])
    return (
        <div className="container">
            <h2 className="latest-news-h2"> Latest News</h2>

            <div className="card-container">
                {
                    props.isFetching &&
                    <div className="center">
                        <Spinner animation="border" variant="primary" />
                    </div>
                }
                <div className='row'>
                    <div className='card-deck'>
                        {
                            props.news && props.news.map((newsItem,key) => (
                                <NewsCard  newsItem={newsItem} key={key}/>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="readmore">

                <Button variant="warning" size="lg">
                    <Link to="/news">Read more </Link>
            </Button>
            </div>

        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(LatestNews)