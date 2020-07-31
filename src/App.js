import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './LandingPage'
import About from './component/About'
import Contact from './component/Contact'
import NewsDetail from './component/NewsDetail'
import Event from './component/Event'
import News from './component/News'
import VideoComponent from './component/VideoComponent'
import EventDetail from './component/EventDetail'
import Media from './component/Media'
import NavigationBar from './common/NavigationBar'
import Footer from './common/Footer'
import Dashboard from './admin/Dashboard'
import CarouselEdit from './admin/CarouselEdit'
import CarouselAdd from './admin/CarouselAdd'
import ManageNews from './admin/ManageNews'
import ManageTeam from './admin/ManageTeam'
import ManageBlog from './admin/ManageBlog'
import PodcastDetails from './component/PodcastDetails';
import err404 from './common/err404';
import ManageEvent from './admin/ManageEvent';
import SupportUs from './component/SupportUs';
import BlogDetails from './component/BlogDetails';
import Blog from './component/Blog';
import ManageVideo from './admin/ManageVideo';
import ProgramAndProjects from "./component/ProgramAndProjects";

function App() {
  const [galery, setGalery] = useState(true);
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <NavigationBar showGaleryOpacity={galery} />
        <Switch>

      <Route path='/' exact component={LandingPage} />
      <Route path='/about'  component={About} />
      <Route path='/support'  component={SupportUs} />
      <Route path='/contact'  component={Contact} />
      <Route path='/event' exact component={Event} />
      <Route path='/media' exact component={Media} />
      <Route path='/event/:event_id'  component={EventDetail} />
      <Route path='/news' exact component={News} />
      <Route path='/blog' exact component={Blog} />
      <Route path='/video' exact component={VideoComponent} />
      <Route path='/podcast/:pod_cast' exact component={PodcastDetails} />
      <Route path='/news/:news_id'  component={NewsDetail} />
      <Route path='/blog/:news_id'  component={BlogDetails} />
      <Route path='/dashboard'  component={Dashboard} />
      <Route path='/manage/carousel'  component={CarouselEdit} />
      {/* <Route path='/CarouselAdd'  component={CarouselAdd} /> */}
      <Route path='/manage/news'  component={ManageNews} />
      <Route path='/manage/team'  component={ManageTeam} />
      <Route path='/manage/event'  component={ManageEvent} />
      <Route path='/manage/blog'  component={ManageBlog} />
      <Route path='/manage/videos'  component={ManageVideo} />
      <Route path='/projects' component={ProgramAndProjects}/>
      <Route path="*" component={err404} />

      </Switch>

      <Footer />
      </BrowserRouter>
    </>

  );
}

export default App;
