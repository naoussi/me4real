import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../action/teams'
import { Card, Image } from 'react-bootstrap'
function mapStateToProps(state){
    return {
        teams: state.teams.team,
        isFetching: state.teams.isFetching,
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actions, dispatch)
}

function Teams(props){
    useEffect(() => {
        props.handleFetchTeam(20)
    }, [])

    return(
        <div className="container-fluid">
            <div className="center" style={{ paddingBottom: "20px", marginBottom: '20px' }}>
                <h2 className="latest-news-h2">Meet the Team</h2>
            </div> 
            <div className="row">
                {props.teams && props.teams.map((team, key) => 
                <div className="col-md-3">
                        <Card className="text-center" >
                            <div className="center" style={{ paddingTop: '20px' }}>
                                <Image src={team.image} height="210px" width="210px" className="center" roundedCircle />
                            </div>

                            <Card.Body>
                                <Card.Title>{team.title}</Card.Title>
                                <blockquote className="blockquote mb-0">
                                    <footer className="blockquote-footer">
                                        <cite title="Source Title">{team.description.length > 76 ? team.description.substring(0,73) +"..." : team.description }</cite>
                                    </footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                </div>
            )} 

            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Teams)