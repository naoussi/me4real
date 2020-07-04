import React, {Component} from "react";
import PropTypes from "prop-types";
import {v4} from "uuid";
import {connect} from "react-redux";
import {apiDeleteVideo} from "../../action/videosActions";

const styles = {
    linkStyle: {
        color: "#2945ee",
        textDecoration: "underline",
        cursor: "pointer"
    }
};

class VideosTableView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videosData: [],
            deleteVideo: {
                _id: '',
                isDeleting: false,
                deleted: false,
                error: null
            }
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.deleteVideo && this.state.deleteVideo.isDeleting) {

            console.log("UPDATES DONE:", this.state);
            this.setState((prevState) => ({
                ...prevState,
                deleteVideo: {
                    ...nextProps.deleteVideo
                }
            }), () => {
                if (this.state.deleteVideo.deleted) {
                    this.props.videosRefreshHandler();
                }
            })
        }
    }

    componentDidMount() {
        this.setState((prevState) => ({
            ...prevState,
            videosData: [...this.props.videosData]
        }));
    }

    handleURLClick = (url) => {
       window.open(url);
    };

    handleVideoDelete = (evt, video) => {
        if (window.confirm(`Sure to delete video -- ${video.title}`)) {
            this.setState((prevState) => ({
                ...prevState,
                deleteVideo: {
                    ...prevState.deleteVideo,
                    _id: video["_id"],
                    isDeleting: true,
                }
            }), () => {
                this.props.apiDeleteVideo(video["_id"]);
            })
        }
    };

    render() {
        return (
            <>
                {
                    this.state.videosData.length === 0 ? (
                        <div className="alert alert-dark">
                            <div className="text-center">
                                <h5 className="font-weight-bold">
                                    {"No videos available".toUpperCase()}
                                </h5>
                            </div>
                        </div>
                    ) : (
                        <>
                            {
                                this.state.deleteVideo.isDeleting ? (
                                    <>
                                        <div className="spinner">
                                            <div className="bounce1"/>
                                            <div className="bounce2"/>
                                            <div className="bounce3"/>
                                        </div>
                                    </>
                                ) : null
                            }
                            <div className="zoomIn">
                                <table className="table table-sm">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Link</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Rank</th>
                                            <th scope="col">Edit</th>
                                            <th scope="col">Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.videosData.map((video) => (
                                                <tr key={v4()}>
                                                    <th scope="row">
                                                        <input type="checkbox"/>
                                                    </th>
                                                    <td>
                                                        <div className="card-title">{video.title}</div>
                                                    </td>
                                                    <td className="text-dark">
                                                        <div style={styles.linkStyle}
                                                             onClick={() => this.handleURLClick(video.link)}>
                                                            Video URL
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <div className="card-title">{new Date(video.date).toDateString()}</div>
                                                    </td>
                                                    <td>
                                                        <div className="card-title">{video.rank}</div>
                                                    </td>
                                                    <td>
                                                        <div className="card-title">
                                                            <button className="btn btn-outline-dark btn-sm">
                                                                edit
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="card-title">
                                                            <button className="btn btn-outline-danger btn-sm"
                                                                    onClick={(evt) => this.handleVideoDelete(evt, video)}>
                                                                delete
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )
                }

            </>
        );
    }
}

VideosTableView.propTypes = {
    videosData: PropTypes.array.isRequired,
    videosRefreshHandler: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    deleteVideo: state.newVideosUI.deleteVideo
});

const mapDispatchToProps = (dispatch) => ({
    apiDeleteVideo: (id) => dispatch(apiDeleteVideo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideosTableView);