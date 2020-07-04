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
            <>
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </table>
            </>
        );
    }
}

ProjectsTableView.propTypes = {
    projectsData: PropTypes.array.isRequired
};

export default ProjectsTableView;