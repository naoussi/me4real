import React, { useEffect } from 'react'
import BlogListing from '../common/BlogListing'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../action/blog'
import '../App.css'

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}
function mapStateToProps(state) {
    return {
        token: "somehash",
        blogs: state.blog.blog,
        isFetching: state.blog.isFetching,
        error: state.blog.fail
    }
}
function Blog(props) {
    useEffect(() => {
        props.handleFetchBlog(20)
    }, [])
    return (
        <div>
            <section>
                <div className="site-primary-bg-color fix-height" ></div>

                <div className=" mission-height site-primary-bg-color" style={{ textAlign: 'center', padding: 50 }}>
                    <a href="/"><p className="large-text"> All Blogs</p></a>
                </div>
            </section>
            <div className="container">
                {console.log("blog is ", props.blog)}
                {
                    props.blog ? props.blog.map((value, key) => <BlogListing id={value} />) 
                    : <div style={{textAlign: "center"}}>No blogs exist</div>
                }

            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)