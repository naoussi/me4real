import news from  './news'
import event from './event'
import carousel from './carousel'
import teams from './teams'
import blog from './blog'
import video from './video'
import {programsAndProjects} from "./programsAndProjects";
import {newVideosUI} from "./newVideosUI";
import {combineReducers}  from 'redux';

export default combineReducers({
    news,
    event,
    carousel,
    teams,
    blog,
    video,
    programsAndProjects,
    newVideosUI
})