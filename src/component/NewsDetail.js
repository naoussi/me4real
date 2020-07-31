import React, {useEffect} from 'react'
import { Card, Button, Image} from 'react-bootstrap'
import './style.css'
import LatestNews from './LatestNews'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../action/news'

import { Route, withRouter } from 'react-router-dom';
import marked from 'marked'
function mapStateToProps(state) {
    return {
        isSaving: state.news.isSaving,
        news: state.news.news,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}
function NewsDetail(props) {
    let id = props.match.params.news_id
    const markdownnews = props.news && props.news.filter(item => item._id == id)
    console.log("NEWS DETAIL --> ", props.news, "news id:", id);
    useEffect(() => {
        window.scrollTo(0, 0)

    }, [props.location.pathname])
    return(
        <div>
        <section>
                <div className="site-primary-bg-color fix-height" ></div>

                <div className=" mission-height site-primary-bg-color" style={{ textAlign: 'center', padding: 50 }}>
                    <a href="/"><p className="large-text">{(markdownnews && markdownnews.length > 0) && markdownnews[0].title}</p></a>

                </div>
            </section>
            <div className="container-fluid ">
            <section>
                <div className="center-items justify-content-md-center" >
                    <div className="row">
                        { (markdownnews && markdownnews.length > 0) ?
                            <div className="col-md-8 offset-2">
                                { <img className='mb-4' src={markdownnews[0].image} width="100%" />}

                             <div dangerouslySetInnerHTML={{ __html: marked(markdownnews[0].description, { sanitize: true }) }} />

                        </div>
                        :
                        <h2>
                            Whoops something went wrong. Verify you are connected or have the right access to this page
                        </h2>
                        }
                    </div>
                </div>
            </section>
            {/* Latest news section */}
            <section>
                <LatestNews source={"DETAILS_PAGE"}/>
            </section>
        </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NewsDetail))
