import React, {Component} from "react";
import PropTypes from "prop-types";
import $ from 'jquery';

class ProjectsTableView extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("TABLE_VIEW_DATA:", this.props.projectsData);
    }

    render() {
        return (
            <div className="zoomIn">
                <table className="table table-sm">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Rank</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.projectsData.map((project) => (
                                <tr>
                                    <th scope="row">
                                        <input type="checkbox"/>
                                    </th>
                                    <td>
                                        <img src={project.image} style={{width: 30, height: 30}} alt={"Project IMG"}/>
                                    </td>
                                    <td>
                                        <div className="card-title">{project.title}</div>
                                    </td>
                                    <td>
                                        <div className="card-title">{project.description}</div>
                                    </td>
                                    <td>
                                        <div className="card-title">{project.rank}</div>
                                    </td>
                                    <td>
                                        <div className="card-title">
                                            <button className="btn btn-outline-dark btn-sm">edit</button>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="card-title">
                                            <button className="btn btn-outline-danger btn-sm">delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                    {/*<tr>*/}
                    {/*    <th scope="row">1</th>*/}
                    {/*    <td>Mark</td>*/}
                    {/*    <td>Otto</td>*/}
                    {/*    <td>@mdo</td>*/}
                    {/*</tr>*/}
                    {/*<tr>*/}
                    {/*    <th scope="row">2</th>*/}
                    {/*    <td>Jacob</td>*/}
                    {/*    <td>Thornton</td>*/}
                    {/*    <td>@fat</td>*/}
                    {/*</tr>*/}
                    {/*<tr>*/}
                    {/*    <th scope="row">3</th>*/}
                    {/*    <td>Larry</td>*/}
                    {/*    <td>the Bird</td>*/}
                    {/*    <td>@twitter</td>*/}
                    {/*</tr>*/}
                </table>
            </div>
        );
    }
}

ProjectsTableView.propTypes = {
    projectsData: PropTypes.array.isRequired
};

export default ProjectsTableView;