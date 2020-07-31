import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchAllVideos} from "../action/videosActions";

class VideoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allVideos: {
                isFetching: false,
                data: null,
                error: null
            }
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.allVideos && this.state.allVideos.isFetching) {
            this.setState((prevState) => ({
                ...prevState,
                allVideos: {
                    ...nextProps.allVideos
                }
            }), () => {
                // console.log("All videos:", this.state.allVideos.data);
            });
        }
    }

    componentDidMount() {
        this.setState((prevState) => ({
            ...prevState,
            allVideos: {
                ...prevState.allVideos,
                isFetching: true
            }
        }), () => {
            this.props.fetchAllVideos(100);
        });
    }

    render() {
        return (
            <>
                <section>
                    <div className="site-primary-bg-color fix-height" ></div>

                    <div className=" mission-height site-primary-bg-color" style={{ textAlign: 'center', padding: 50 }}>
                        <a href="/"><p className="large-text">Videos</p></a>
                    </div>
                </section>
                <div className="container">
                    {
                        this.state.allVideos.isFetching ? (
                                <div className="spinner mt-3">
                                    <div className="bounce1"/>
                                    <div className="bounce2"/>
                                    <div className="bounce3"/>
                                </div>
                            ) :
                            (this.state.allVideos.error) ? (
                                    <div className='alert alert-danger text-center zoomIn'>
                                        <h4>{"No videos available".toUpperCase()}</h4>
                                        <br/>
                                        <button className="btn btn-sm btn-danger mt-2" onClick={this.handleClearInfoMessage}>
                                            Try again
                                        </button>
                                    </div>
                                ) :
                                (this.state.allVideos.data) ? (

                                    <>
                                        <div className="row">
                                            {
                                                this.state.allVideos.data.map((video) => (

                                                    <div>
                                                        <h5 className="card-title">{video.title}</h5>
                                                        <iframe width="505" height="310" style={{padding: '10px'}}
                                                                src={video.link}
                                                                frameBorder="0"
                                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                                allowFullScreen
                                                        />
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </>

                                ) : (
                                    <div className='alert alert-danger border-danger text-center zoomIn'>
                                        <h4>{"Something, wrong. Please contact Admin."}</h4>
                                        <br/>
                                        <button className="btn btn-sm btn-danger mt-2" onClick={this.handleClearInfoMessage}>
                                            Try again
                                        </button>
                                    </div>
                                )
                    }
                </div>

                {/*<section>*/}
                {/*    <div className="site-primary-bg-color fix-height" ></div>*/}

                {/*    <div className=" mission-height site-primary-bg-color" style={{ textAlign: 'center', padding: 50 }}>*/}
                {/*        <a href="/"><p className="large-text">Videos</p></a>*/}
                {/*    </div>*/}
                {/*</section>*/}

                {/*<div className="container">*/}
                {/*    <div className="row">*/}
                {/*        {[1,2,3,4,5].map((item, key)=>*/}

                {/*            <iframe width="505" height="310" style={{padding: '10px'}} src="https://www.youtube.com/embed/LeuMS4q3v_U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>*/}
                {/*        )}*/}
                {/*    </div>*/}
                {/*</div>*/}
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    allVideos: state.newVideosUI.allVideos
});

const mapDispatchToProps = (dispatch) => ({
    fetchAllVideos: (max) => dispatch(fetchAllVideos(max))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoComponent);


    // < div style = {{ position: 'relative', paddingBottom: '56.24%', paddingTop: 20, height: 0 }}>
    //     <iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    //         src="https://www.youtube.com/embed/LeuMS4q3v_U"
    //         frameborder="0"
    //         allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    //         allowfullscreen>

    //     </iframe>
    //             </div >