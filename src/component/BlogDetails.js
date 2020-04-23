import React, { useEffect } from 'react'
import { Card, Button, Image } from 'react-bootstrap'
import './style.css'
import LatestNews from './LatestNews'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../action/blog'

import { Route, withRouter } from 'react-router-dom';
import marked from 'marked'
function mapStateToProps(state) {
    return {
        isSaving: state.blog.isSaving,
        blogs: state.blog.blog,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}
function BlogDetails(props) {
    let id = props.match.params.news_id
    const markdownblog = props.blogs && props.blogs.filter(item => item._id == id)
    useEffect(() => {
        window.scrollTo(0, 0)

    }, [props.location.pathname])
    return (
        <div className="container topSpacing">
            <section>
                <div className="center-items justify-content-md-center" >
                    <div className="row">
                        {(markdownblog && markdownblog.length > 0) ? <div className="col-md-8 offset-2">
                            <h1>{markdownblog[0].title}</h1>
                            {<img src={markdownblog[0].image} width="100%" />}
                            <div dangerouslySetInnerHTML={{ __html: marked(markdownblog[0].description, { sanitize: true }) }} />

                        </div>
                            :
                            <h2>
                                Whoops ma guy How ever you got here go back that same way
                        </h2>
                        }
                    </div>


                </div>
            </section>

        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BlogDetails))
