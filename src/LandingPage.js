import React, { useEffect, useState, useRef } from 'react';
import {Carousel, Container, Image, Button, Card} from 'react-bootstrap'
import LatestNews from './component/LatestNews'
import UpcomingEvents from './component/UpcomingEvents'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './action/carousel'
import './App.css'
import {Link} from 'react-router-dom'
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import testimonialA from "./images/testimonial-1.jpg";
import testimonialB from "./images/kum_rogers.jpg";
import testimonialC from "./images/phebe.jpg";
import joinUsImg from "./images/IMG-1482.jpg";

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}
function mapStateToProps(state) {
    return {
        token: "somehash",
        carousels: state.carousel.carousel,
        isFetching: state.carousel.isFetching,
        error: "no error"
    }
}
function LandingPage(props) {

    const styles = {
        mainPageStyles: {
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: 0
        },
        carouselStyle: {
            height: '800px'
        },
        carouselImg: {
            position: 'absolute',
            objectFit: 'cover',
            top: 0,
            left: 0,
            minHeight: '890px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
        },
        captionStyles: {
            backgroundColor: 'black',
            opacity: 0.8,
            padding: 10,
            borderRadius: 10,
            marginBottom: 100
        },
        fourElementsStyle: {
            marginTop: -20,
            // width: '100%'
        },
        testimonialStyle: {
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            objectFit: "cover"
        }
    }

    const element = useRef(null)
    useEffect(()=>{
        // scrollToBottom()

    }, [])
    useEffect(()=>{
        props && props.handleFetchCarousel(3)
        console.log("carousel content is ", props)

    }, [])

    // useEffect(() => {
    //         window.scrollTo(0, 0)

    // }, [props.location.pathname])
    const scrollToBottom = () => {
        element.current.scrollIntoView({ behavior: "auto" });
    }
    return (
        <div style={styles.mainPageStyles}>
            <div id="carouselHomeAppIndicators" className='jumbotron-fluid carousel slide' data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselHomeAppIndicators" data-slide-to="0" className="active"/>
                    <li data-target="#carouselHomeAppIndicators" data-slide-to="1"/>
                    <li data-target="#carouselHomeAppIndicators" data-slide-to="2"/>
                </ol>
                <div className='carousel-inner' style={styles.carouselStyle}>
                    {
                        props.carousels && props.carousels.map((item, key) => (
                            <div key={key} className={`carousel-item ${key === 0 ? 'active' : ''}`} style={styles.carouselStyle}>
                                <img className='d-block w-100'
                                        src={item.image}
                                        style={styles.carouselImg}
                                        alt={`Slide #${key}`}/>
                                <div className='carousel-caption d-none d-md-block' style={styles.captionStyles}>
                                    <h3>{item.title}</h3>
                                    <p className='text-center'>{item.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <a className="carousel-control-prev" href="#carouselHomeAppIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"/>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselHomeAppIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"/>
                    <span className="sr-only">Next</span>
                </a>

            </div>
            {/*<div className="jumbotron-fluid" ref={element}>*/}
            {/*    {console.log("carousel content is ", props)}*/}



            {/*    <Carousel>*/}
            {/*        {*/}
            {/*            props.carousels &&  props.carousels.map((item, key) =>*/}
            {/*                <Carousel.Item key={key}>*/}
            {/*                    <img style={{ width: '100% !important', height: '200px !important'}}*/}
            {/*                        className="d-block w-100"*/}
            {/*                         src={item.image}*/}
            {/*                         alt="First slide"*/}
            {/*                    />*/}
            {/*                    <Carousel.Caption>*/}
            {/*                        <h3>{item.title}</h3>*/}
            {/*                        <p>{item.description}</p>*/}
            {/*                    </Carousel.Caption>*/}
            {/*                </Carousel.Item>*/}
            {/*            )*/}
            {/*        }*/}
            {/*    </Carousel>*/}
            {/*</div>*/}
            <div className='jumbotron-fluid' style={styles.fourElementsStyle}>
                <div className="row" >
                    <div className="col-md-3 col-sm-3 mission-height-landing site-secondary-bg-color" >
                        <div style={{paddingTop: 20}} >
                            <a href="/about"><p className="large-text">Our Mission</p></a>
                            <p className="small-text">Our Goal, Vision & Commitment</p>
                        </div>

                    </div>
                    <div className="col-md-3 col-sm-3 mission-height-landing site-tertiary-bg-color" >
                        <div style={{ paddingTop: 20 }} >
                            <a href="/projects"><p className="large-text">Projects</p></a>
                            <p className="small-text"> View Our Projects</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 mission-height-landing site-suppliment-bg-color" >
                        <div style={{ paddingTop: 20 }} >
                            <a href="/event"><p className="large-text text-dark"> Our Events</p></a>
                            <p className="small-text text-dark">Register & Help Make Change</p>
                        </div>

                    </div>
                    <div className="col-md-3 mission-height-landing site-primary-bg-color"  >
                        <div style={{ paddingTop: 20 }} >
                            <a href="/support"><p className="large-text">Get Involved</p></a>
                            <p className="small-text"> Volunteer, Participate, or Donate</p>
                        </div>
                    </div>
                </div>
            </div>

                {/* Latest news section */}
            <div className='container'>
                <section>
                    <LatestNews source={"LANDING_PAGE"}/>
                </section>
            </div>
            <div>

                {/* Badge section */}
                <section className='jumbotron jumbotron-fluid site-primary-bg-color text-white'>
                    <br />
                    <p  style={{textAlign: 'center'}}>
                        <span className="badge-section-text">Our Uniqueness for a better World.</span>
                        <br/>
                        <br/>
                        <span className=""> me4real Motto</span>
                    </p>
                    {/*<div className="row mission-height site-primary-bg-color" >*/}
                    {/*</div>*/}
                </section>
                {/* up coming events section */}
                <section>
                    <div className="container-fluid">
                        <UpcomingEvents />

                    </div>
                </section>
                {/* Testimonails */}
                <section style={{ paddingBottom: "20px", marginBottom: '20px' }}>
                    <div className="center" style={{paddingBottom: "20px", marginBottom: '20px'}}>
                        <h2 className="latest-news-h2">Testimonials</h2>
                    </div>
                    <div className="card-container">

                        <div className="row" >
                            <div className="col-md-4"><Card className="text-center" >
                                <div className="center" style={{paddingTop: '20px'}}>
                                    <Image src={testimonialB} style={styles.testimonialStyle} height="210px"  width="210px" className="center" roundedCircle />
                                </div>

                                <Card.Body>
                                    <Card.Title>Kum Rogers - me4real club 2009-2010</Card.Title>
                                    <blockquote className="blockquote mb-0">

                                        <footer className="blockquote-footer">
                                            At first I did not understand what they meant by 'me4real' until I attended a
                                            club meeting organized by the coordinator. While at the seminar reflecting on
                                            the phrase "me for real", I realized that I was actually speaking  to my own very-self,
                                            telling myself who I am and suddenly confidence and boldness came upon me like a rushing
                                            stream and overpowered the timidity that was inside of me.
                                            What completely  made me whole was when  I moved up to the coordinator complaining
                                            of my family financial situation which was a hindrance to me getting admission into
                                            P&T (National Institute of Post and Telecommunications) school. The coordinator said,
                                            "Rogers do not worry about what only God can handle. Do your part - worry about your
                                            own duty i.e. how you will write and pass the entrance."  This phrase changed my
                                            mentality and now I am a graduate of P&T school knowing who I am, and what to do.
                                            Thank God for ME4REAL.
                                        </footer>
                                    </blockquote>
                                </Card.Body>
                            </Card> </div>
                            <div className="col-md-4">
                                <Card className="text-center">
                                    <div className="center" style={{ paddingTop: '20px' }}>
                                        <Image src={testimonialA} style={styles.testimonialStyle} height="210px" width="210px" className="center rounded-circle"/>
                                    </div>

                                    <Card.Body>
                                        <Card.Title>Edwige Sofack</Card.Title>

                                        <blockquote className="blockquote mb-0">

                                            <footer className="blockquote-footer">
                                                Quand j'ai commencé à bénéficier des programmes de Me4Real j'étais dépressive
                                                et j'avais constamment une charge mentale énorme qui m'empêchait de jouir de
                                                la paix de Dieu. Mes pensées me dominaient et m'oppressaient je me sentais
                                                très souvent paralysé par elles au point de stagner pendant des semaines dans
                                                mon travail. Mais au fil du temps en 3 années j'ai été transformé. Grâce aux
                                                soutien psychologique reçu à travers le councelling, les séminaires, les
                                                programmes, les sorties de groupes, les amitiés développés, l'esprit de famille
                                                et les programmes auxquels j'ai participé comme bénévole j'ai retrouvé la santé
                                                et l'équilibre mental qui me manquait. J'ai appris à me libérer de mes peurs,
                                                ma colère, mes blames,  mes angoisses, ma honte et  d'autres émotions qui contrôlait
                                                ma vie plus tôt que la guider simplement. Je dit MERCI.
                                            </footer>
                                        </blockquote>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-md-4"><Card className="text-center">
                                <div className="center" style={{ paddingTop: '20px' }}>
                                    <Image src={testimonialC} style={styles.testimonialStyle} height="210px" width="210px" className="center" roundedCircle />
                                </div>

                                <Card.Body>
                                    <Card.Title>Phebe Mbafor - The EHS Experiece</Card.Title>

                                    <blockquote className="blockquote mb-0">

                                        <footer className="blockquote-footer">
                                            I was invited for EHS, after having a hurtful past, and my life filled with chaos.
                                            The two most important sessions to me were going back in order to go forward and
                                            journey through the wall. Going back is something I never wanted to do because I
                                            was just too scared of what I would find. This lesson made me see how much bitterness,
                                            anger and hatred I had first for me and then for others, and I had to finally start
                                            dealing with those emotions. I learned to start forgiving myself and loving myself
                                            and then others who had hurt me. In journeying through the wall, I had to stop letting
                                            go and start letting God. it was a painful week for me but at the end of the week
                                            I was like a new person and from there even my intimacy with God grew. The daily
                                            office was a mystery to me at first, but now I can’t seem to stop. I discovered
                                            at what stage of maturity I was, where I am right now and where I am going. I thank
                                            God for Pete and Geri and most especially for Delphine Fanfon, my facilitator.
                                            God bless EHS my MIRACLE GIFT.

                                        </footer>
                                    </blockquote>
                                </Card.Body>
                            </Card> </div>
                        </div>
                    </div>

                </section>

                <br/>
                <br/>

                {/* Join us section */}
                <section>
                    <div className="row">
                        <div className="col-md-5 site-primary-bg-color" style={{ height: '525px', textAlign: 'center' }}>
                            <div className="section-image-side-text" style={{ color: 'white' }}>
                                <h3 className="join-us" >Join Us</h3>
                                <div className="empower" style={{alignItems:'center', paddingBottom: '5px'}}>
                                    Empower teenagers and young adults discover, embrace and maximize their potential
                                </div>
                                <br/>
                                <Button variant="warning"><Link to="/support"> Get Involved </Link></Button>
                            </div>
                        </div>
                        <div className="col-md-7" style={{ height: '525px', padding: 0 }}>
                            <img src={joinUsImg} style={styles.testimonialStyle} height='525px' width="100%" />
                        </div>

                    </div>
                </section>

                {/* flooat section */}

                <div className="float">
                    <div >
                        <FaFacebook color="white" className="social-media-center" />
                    </div>
                    <div >
                        <FaTwitter color="white" className="social-media-center" />
                    </div>
                    <div >
                        <FaYoutube color="white" className="social-media-center" />
                    </div>
                    <div >
                        <FaInstagram color="white" className="social-media-center"/>
                    </div>
                </div>
                {/* footer section */}

                {/* <section  style={{backgroundColor: 'red'}}>
                        <footer style={{textAlign: 'center'}}>
                            this is the footer section
                        </footer>
                    </section> */}
            </div>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
