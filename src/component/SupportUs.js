import React, {Component, useEffect} from 'react';
import { Jumbotron, Container, Button } from 'react-bootstrap'
import '../App.css'
import { FaUser, FaPhone, FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import phebe from "../images/phebe.jpg";
import $ from 'jquery';

const achievements = [
    {
        title: "Kids4Real",
        image: {phebe},
        info: "Through kids4real programs in Bamenda and Yaoundé, " +
            "about 2640 kids including street children between ages 5 to 11" +
            " have been taught to practice the pillars of good character from " +
            "childhood, as a lifestyle. They have been equipped with skills" +
            " to think critically, cultivate curiosity, and innovate to " +
            "solve problems. The Kids4real centers have given children " +
            "opportunities to just be kids; playing, learning, and growing.\n"
    },
    {
        title: "Adolescent Club",
        image: {phebe},
        info: "Over the years, the Me4real adolescents’ clubs have imparted about 500 adolescents with knowledge to " +
            "internalize positive values and develop skills that will guide them to become good decision makers and " +
            "responsible citizens.\n"
    },
    {
        title: "Emotional and Health Discipleship Course",
        image: {phebe},
        info: "Over the years, the Me4real adolescents’ clubs have imparted about 500 adolescents with knowledge to " +
            "internalize positive values and develop skills that will guide them to become good decision makers and " +
            "responsible citizens.\n"
    },
    {
        title: "Me4Real Counselling Center",
        image: {phebe},
        info: "With our mental health services, Children have demonstrated a greater ability to live out their true" +
            " selves as they grow, believing that they are good enough and special. By a combination of rest, " +
            "individual/group counselling sessions, stress relieving activities and skills development, " +
            "Kids have been helped to confront and deal with psychological stress. Some children were also seen " +
            "gradually coming out of low self-esteem.\n" +
            "The trauma counselling services are yielding similar results in adults as well and through  Trauma" +
            " Counsellor training programs, we are seeing a multiplication in the number of qualified persons to help " +
            "our nation heal from the accumulated trauma it has experienced.\n"
    },
    {
        title: "Me4Real Counselling Center",
        image: {phebe},
        info: "With our mental health services, Children have demonstrated a greater ability to live out their true" +
            " selves as they grow, believing that they are good enough and special. By a combination of rest, " +
            "individual/group counselling sessions, stress relieving activities and skills development, " +
            "Kids have been helped to confront and deal with psychological stress. Some children were also seen " +
            "gradually coming out of low self-esteem.\n" +
            "The trauma counselling services are yielding similar results in adults as well and through  Trauma" +
            " Counsellor training programs, we are seeing a multiplication in the number of qualified persons to help " +
            "our nation heal from the accumulated trauma it has experienced.\n"
    },
    {
        title: "Me4Real Food Pantry",
        image: {phebe},
        info: "856 IDPs have been able to afford meals in the face of insurmountable challenges thanks to the Me4real Food Pantry.\n"
    }
];


class AchievementsSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            achievement: {
                title: '',
                imageURL: '',
                info: ''
            }
        }
    }

    // achievementInfoModal = () => {
    //    return (
    //
    //    )
    // };

    showModal = (title, imageURL, info) => {
        this.setState((prevState) => ({
            ...prevState,
            achievement: {
                title: title,
                imageURL: imageURL,
                info: info
            }
        }), () => {

             $(function () {
                 $("div#achievementModal").modal('show');
             })

        })
    };

    componentDidMount() {
        $(function () {

            $("div#achievementModal").modal({
                backdrop: 'static',
                keyboard: false,
                show: false
            });

        })
    }

    render() {
        // const {achievementInfoModal} = this.achievementInfoModal();
        let smallestInfoLength = 75;
        let maxAchievementTitleLength = 35;
        let stateAchievement = this.state.achievement;
        return (
            <div className='mb-4'>
                <div className="modal fade" id="achievementModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable">
                        <div className="modal-content">
                            {/*<div className="modal-header justify-content-center bg-dark text-white">*/}
                            {/*    */}
                            {/*</div>*/}
                            <h5 className="modal-title text-center bg-dark text-white p-3">
                                {stateAchievement.title}
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span className="text-white" aria-hidden="true">&times;</span>
                                    </button>
                            </h5>
                            <img src={phebe} className='img-fluid'/>
                            <div className="modal-body">
                                {stateAchievement.info}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-sm btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*{achievementInfoModal}*/}
                <div className='container'>
                    <div className='card-deck'>
                        <div className='row'>
                            {
                                achievements.map((achievement) => (
                                    <div className='col-sm-6 col-md-4 mb-2'>
                                        <div className="card">
                                            <img src={phebe} className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <h5 className="card-title font-weight-bold" style={{fontSize: "18px"}}>
                                                    {
                                                        achievement.title.length <= maxAchievementTitleLength ? achievement.title : (
                                                            <div title={achievement.title}>
                                                                {achievement.title.slice(0, maxAchievementTitleLength-5) + " ..."}
                                                            </div>
                                                        )
                                                    }
                                                </h5>
                                                <>
                                                    {
                                                        achievement.info.length <= smallestInfoLength ? achievement.info : (
                                                            <>
                                                                <div className='card-text'>
                                                                    {
                                                                        achievement.info.slice(0, smallestInfoLength) + " ..."
                                                                    }
                                                                </div>
                                                                <button className='btn btn-sm btn-outline-dark btn-sm mt-2'
                                                                        onClick={() => this.showModal(achievement.title, achievement.image, achievement.info)}>
                                                                    see more
                                                                </button>
                                                            </>
                                                        )
                                                    }
                                                </>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


function SupportUs(props) {
    useEffect(() => {
        window.scrollTo(0, 0)

    }, [props.location.pathname]);

    const styles = {
        imgStyles: {
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            objectFit: "cover"
        }
    }

    // let smallLestInfoLength = Number.MAX_SAFE_INTEGER;
    // achievements.forEach((achievement) => {
    //     console.log("Comparing:", smallLestInfoLength, " and ", achievement.info.length);
    //     if (achievement.info.length < smallLestInfoLength) {
    //         smallLestInfoLength = achievement.info.length
    //     }
    // });
    // console.log("Smallest length:", smallLestInfoLength);
    // let smallestInfoLength = 75;
    // let maxAchievementTitleLength = 35;
    return (
        <div  >
            <section>
                <div className="site-primary-bg-color fix-height" ></div>

                <div className=" mission-height site-primary-bg-color" style={{ textAlign: 'center', padding: 50 }}>
                    <a href="/"><p className="large-text" >Get Involved</p></a>
                </div>
            </section>
            <div className="container-fluid">

            <section>

                <Jumbotron fluid style={{margin: 0, backgroundColor: 'white'}}>
                    <Container>
                        <h1 style={{ textAlign: 'center' }}>Get Involved</h1>
                        <p style={{ lineHeight: '1.5em', textAlign: 'center' }}>
                            I'm a paragraph. Click here to add your own text and edit me. I’m a great place
                            <br /> for you to tell a story and let your users know a little more about you..
                            <br />
                            <Button variant="warning" style={{ textAlign: 'center', marginTop: '10px' }}><Link to="/event"> See our Events </Link></Button>
                        </p>

                    </Container>
                </Jumbotron>
            </section>

                <AchievementsSection/>

            {/* about us image section image on the right Our mission*/}
            <section>
                <div className="row">
                    <div className="col-md-12" style={{ height: '525px', padding: 0 }}>
                        <img src="splash.jpg" style={styles.imgStyles} height='525px' width="100%" />
                    </div>

                </div>
            </section>
            {/* Badge section */}
            <section>

                <div className="row mission-height middle" >
                    <br />
                    <p style={{ textAlign: 'center', paddingTop: '30px', color: 'black' }}>
                        <span className="badge-section-text" style={{fontWeight: 'bold'}}>Let's Make A Change <br />
                        </span>
                        Here are some ways you can donate:
                    </p>
                </div>

            </section>
            <section>
                <div className="row" >
                    <div className="col-md-4 col-sm-4 mission-height site-primary-bg-color" style={{ height: '225px', textAlign: 'center' }} >
                        <div style={{ paddingTop: 20 }} >


                            <a href="/">
                                <p className="icon-fonts">
                                <FaUser variant="info"> user</FaUser>
                                </p>
                                <p className="large-text">In Person</p></a>
                            <p className="small-text"> 500 Terry Francois Street <br />San Francisco, CA 94158</p>
                        </div>

                    </div>
                    <div className="col-md-4 col-sm-4 mission-height site-suppliment-bg-color" style={{ height: '225px', textAlign: 'center' }} >
                        <div style={{ paddingTop: 20 }}>
                            <a href="/">
                                <p className="icon-fonts text-dark">
                                    <FaGlobe variant="info"> globe</FaGlobe>
                                </p>                                
                                <p className="large-text text-dark">Online</p>
                            </a>
                            <p className="small-text text-dark">
                                Make a tax deductible donation‏.
                                <br />
                                <a className="btn btn-warning text-dark" style={{ textAlign: 'center', marginTop: 20 }}
                                    href="https://www.allegrosolutions.org/donate" target="_blank"
                                >
                                    Donate now
                                </a>
                            </p>
                            
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 mission-height site-tertiary-bg-color" style={{ height: '225px', textAlign: 'center' }}>
                        <div style={{ paddingTop: 20 }} >
                            <a href="/">
                                <p className="icon-fonts">
                                    <FaPhone variant="info"> phone</FaPhone>
                                </p>
                            <p className="large-text">Over the Phone</p></a>
                            <p className="small-text"> It's easy to donate offline too. <br /> Tel: 123-456-7890</p>

                        </div>

                    </div>

                </div>
            </section>
            </div>
        </div>
    )
}

export default SupportUs