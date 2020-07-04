import React, {Component} from "react";
import PropTypes from "prop-types";
import {v4} from "uuid";
import {connect} from "react-redux";

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
            videosData: []
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
                                                                    onClick={(evt) => this.handleProjectDelete(evt, video)}>
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

export default VideosTableView;