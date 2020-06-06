import React, {useEffect} from 'react'
import NewsListing from '../common/NewsListing'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../action/news'
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
function News(props) {
    useEffect(() => {
        props.handleFetchNews(20)
    }, [])
    return (
        <div>
            <section>
                <div className="site-primary-bg-color fix-height" ></div>

                <div className=" mission-height site-primary-bg-color" style={{ textAlign: 'center', padding: 50 }}>
                    <a href="/"><p className="large-text" >All News</p></a>
                </div>
            </section>

            <div className="container">
                {console.log("news is ", props.news)}
                {props.news && props.news.map((value, key) => <NewsListing id={value} />)}
                {props.news && props.news.map((value, key) => <NewsListing id={value} />)}

            </div>
        </div>
    )
}

export default  connect(mapStateToProps, mapDispatchToProps) (News)