import React, {useEffect} from 'react'
import { Card, CardColumns} from 'react-bootstrap'
import '../App.css'
import { NavLink } from 'react-router-dom'
import ManageNews from './ManageNews'
import ManageProjectsContainer from "./projects_comp/ManageProjects";
import {addProject, getAllProjects} from "../action/programsAndProjects";
import {connect} from 'react-redux';
import ManageVideosContainer from "./videos_comp/ManageVideos";
import {fetchAllVideos} from "../action/videosActions";

function Dashboard(props) {
    useEffect(() => {
        window.scrollTo(0, 0)

    }, [])
    return(
        <div className="container topSpacing" >
            <br />
            <h2> What are you interested in doing </h2>
            <hr /> 
            <div> 
                <CardColumns>
                    <NavLink to='/manage/news'  >
                        <Card className="text-center" bg="warning">
                            <Card.Body>
                                <Card.Title>Manage News</Card.Title>
                                <Card.Text>
                                    View and manage everything that has to do with News
                       </Card.Text>
                                <Card.Text>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </NavLink>

                    <NavLink to='/manage/carousel'  >
                        <Card className="text-center" bg="warning">
                            <Card.Body>
                                <Card.Title>Carousels</Card.Title>
                                <Card.Text>
                                    View and manage everything that has to do with Carousels
                       </Card.Text>
                                <Card.Text>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </NavLink>

                    <NavLink to='/manage/team'  >
                        <Card className="text-center" bg="warning">
                            <Card.Body>
                                <Card.Title>Teams</Card.Title>
                                <Card.Text>
                                    View and manage everything that has to do with teams
                       </Card.Text>
                                <Card.Text>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </NavLink>
                    <div onClick={props.showVideoModal} style={{cursor: "pointer"}}>
                        <Card className="text-center" bg="warning">
                            <Card.Body>
                                <Card.Title>Videos</Card.Title>
                                <Card.Text>
                                    View and manage everything that has to do with Videos
                       </Card.Text>
                                <Card.Text>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <NavLink to='/manage/event'  >
                        <Card className="text-center" bg="warning">
                            <Card.Body>
                                <Card.Title>Events</Card.Title>
                                <Card.Text>
                                    View and manage everything that has to do with event
                       </Card.Text>
                                <Card.Text>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </NavLink>
                    <NavLink to='/manage/blog'  >
                        <Card className="text-center" bg="warning">
                            <Card.Body>
                                <Card.Title>Blogs</Card.Title>
                                <Card.Text>
                                    View and manage everything that has to do with blogs
                       </Card.Text>
                                <Card.Text>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </NavLink>
                    <div onClick={props.showProjectsModal} style={{cursor: "pointer"}}>
                        <Card className="text-center" bg="warning">
                            <Card.Body>
                                <Card.Title>Projects</Card.Title>
                                <Card.Text>
                                    View and manage everything that has to do with projects
                                </Card.Text>
                                <Card.Text>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
            </CardColumns>
           </div>

        </div>
    )
}

const mapStateToProps = (state) => ({
    projects: state.programsAndProjects.projects,
    posting: state.programsAndProjects.posting,
    allVideos: state.newVideosUI.videos
});

const mapDispatchToProps = (dispatch) => ({
    getAllProjects: (max) => dispatch(getAllProjects(max)),
    addProject: (title, description, image, rank) => dispatch(addProject(title, description, image, rank)),
    fetchAllVideos: (max) => dispatch(fetchAllVideos(max))
});

let finalExport = ManageProjectsContainer(Dashboard);
finalExport = ManageVideosContainer(finalExport);

export default connect(mapStateToProps, mapDispatchToProps)(finalExport);