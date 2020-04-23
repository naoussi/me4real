import React, {useState} from 'react'
import { Jumbotron, Container, Button} from 'react-bootstrap'
import '../App.css'
import Teams from './Teams'
import Gallery from './Gallery'
import visionPic from "../images/IMG-20191117-WA0066.jpg";
import missionPic from "../images/IMG-20191223-WA0009.jpg";


function About(props) {
    const styles = {
        imgStyles: {
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            objectFit: "cover"
        }
    }
    const [dropdowns, setDropdowns] = useState(false)
    return (
        <>
            <section>
                <div className="site-primary-bg-color fix-height" ></div>

                <div className=" mission-height site-primary-bg-color" style={{ textAlign: 'center', padding: 40}}>
                    <a href="/"><p className="large-text">About</p></a>

            </div>
            </section>
            <div className="jumbotron-fluid">

            <section>

                <div className="container"  style={{  backgroundColor: 'white', marginTop: '40px' }}>
                   <p style={{ lineHeight: '1.5em', left: 'center' }}>
                    <h1 style={{textAlign: 'left'}}>What we do</h1>
                    We help teenagers and young adults;
                    <ol>
                                <li className="li-reset"> <b>Know and embrace the love of God </b> for them as <b>unique individuals</b></li>
                                <li className="li-reset"> Gain a clear sense of identity so that they can become more functional members of community </li>
                                <li className="li-reset"> Build their <b>confidence</b> and <b> self-worth</b> so that they can navigate life’s choices with conviction</li>
                                <li className="li-reset" > <b>Uncover their potential (talents, abilities, etc.)</b> for compatible career choices.</li>
                                <li className="li-reset" >Acquire <b>life and entrepreneurial skills </b> necessary for career and community development.</li>
                                <li className="li-reset" >Build their <b>character</b> and <b>integrity</b> so that they can become <b>responsible citizens and excellent leaders in society.</b></li>
                                <li className="li-reset" >Build their character and integrity so that they can become responsible citizens and excellent leaders in society.</li>
                                <li className="li-reset" >Our work equally extends to include key stakeholders. Because it takes more than one hand to tie a bundle, we also work to.</li>
                                <li className="li-reset" > <b>Bridge the widening generational gap</b> that exists between parents and their children in order to <b>enhance holistic child development.</b></li>
                                <li className="li-reset" ><b> Improve the skills</b> of teachers, youth leaders, organizational leaders and others <b>who have direct contact with youth</b> so that they can serve them more effectively.</li>
                    </ol>
                    </p> 
                    <br />

                   <p style={{ lineHeight: '1.5em', textAlign: 'left' }}>
                            <h1 style={{ textAlign: 'left' }}>Vision 2028 </h1>
                    In July 2018, we are launched our <b>L.E.A.D. Now Strategic Plan (LNSP)</b> which describes the road map for our organization between now and 2028. Building healthy leaders of all ages as a way of equipping those we work with to live their uniqueness is our overall focus. Because we do not believe in giving what we do not have, we shall do this by: 
                    <ol>
                        <li className="li-reset"><b>L</b>iving authentically</li> 
                        <li className="li-reset"> <b>E</b>ngaging intentionally </li>
                        <li className="li-reset"> <b>A</b>dapting strategically</li>
                        <li className="li-reset" ><b>D</b>eveloping holistically.</li> 
                    </ol>
                    Visit this <a className="default-a" href="https://docs.google.com/document/d/1T7OrTYxFKwhiLoRrrCkKLbQBaqinwJf5OB6PEMsslBU/edit">link</a> to learn more about this plan.

                    </p> 
                    <br />
                   <p style={{ lineHeight: '1.5em', textAlign: 'justify' }}>
                            <h1 style={{ textAlign: 'left' }}>Background (The Me4real Story) </h1>
                        Me4real started as a teenager’s quest for identity and meaning in a world that seemed to always want to dictate to her not just what she should do but when and how she should do it. In her quest to understand the reasoning behind most of what was consistently being served her, few answers were to be found as, for the most part, all she ever heard was “that’s just the way it should be.” Everyone around her seemed to suggest that because she belonged to a particular family, she had no option but
                        <Button onClick={() => setDropdowns(!dropdowns)} variant="link"> {!dropdowns ? "Readmore >>" : "Readless <<" }</Button>
                        </p>
                       {
                           dropdowns &&
                       <p style={{ lineHeight: '1.5em', textAlign: 'justify' }}>
                            to conform to the expectations and standards that came with that territory. It was never necessarily that any of these expectations were “bad” in and of themselves. It was just that the more she questioned assumptions in her search for an identity out of which she could build her life, the answers she received failed to satisfy the hunger deep within. 
                        Exhausted from a combination of trying very hard to be what everyone else what her to be, comparing herself with others in her life (especially her big sister), and competing to attract and keep her family’s attention as one of six children, she came to the conclusion that there must be more to her life. There had to be more to her being born in the family, community, society and country into which she was born than simply compliance. Fueled by a longing for something more (bigger, better, more fulfilling), she ventured, almost by accident, into a territory that seemed to give her freedom to be herself – her uniqueness. Having tried to be, do, and look like others without success, the lure of uniqueness was irresistible. It was almost as if the hard work from all her previous years had finally paid off in the most unexpected ways. Who would have thought that the agony in her soul could be satisfied by something as simple as “just be yourself”? Yet the more she dared to be the version of herself that she understood at the dawn of each day, the happier she was. All the pressure from trying to impress people was gone and she was free to just be.
                        As freeing as this new found territory was for her, it wasn’t without its own challenges. She didn’t always like what she saw in the mirror and so how could she be what she did not like? A few times she wandered off the new trail she was trying to blaze for herself, but every time she found that going off made it harder, not easier, to find fulfillment. And so through a combination of resolve and courage, she determined that she would pour all her energies into being more than who she was – who she wanted to be. And thus began her journey of identity, purpose, self-acceptance and fulfillment. There have been many twists and turns but it didn’t take long after her resolve for her to realize that the struggle was not unique to her. That realization birthed a new passion in her – to help others navigate the challenges of adolescence and young adulthood with help. And that is how what began as a teenage girl’s journey towards fully embracing her uniqueness grew to become an organization – Me4real International.
                        We are surrounded on the one hand by many adolescents and young adults today who are struggling with identity and personality issues. They need help to find themselves and thus their purpose which is the key to living a fulfilled life. Comparison and competition pose a big problem while many parents, in blissful oblivion, are trying to live their lives all over through their children by forcing them to get into professions and careers which they want for them. On the other hand there are those who do not even have the means to try anything at all because either their parents are too poor to afford it or they are deceased. The situation is so bad that a lot of them roam the streets both night and day because they have no one to turn to and nowhere to go. Is this how their lives should be lived? Don’t they deserve better?
                        It is for youth like this and other stakeholders – parents, leaders, teachers, etc. – that Me4real exists. 
                        </p> 
}                       
                    <br />
            </div>
            </section>
            <Gallery />
            {/* Badge section */}
            <section>

                <div className="jumbotron jumbotron-fluid" style={{backgroundColor: '#FFCC00'}}>
                    <br />
                    <p style={{ textAlign: 'center', paddingTop: '15px', }}>
                            <span className="badge-section-text">Discover your Uniqueness, live it, create your unique impact.
                        </span>
                        <br/>
                        <br/>
                       <span>Mission statement</span>
                    </p>
                </div>

            </section>

            {/* about us image section image on the right Our mission*/}
            <section>
                <div className="row">
                    <div className="col-md-6 " style={{ height: '525px',  }}>
                        <div className="section-image-side-text text-center">
                            <h3 style={{ font: 'normal normal normal 40px/1.4em poppins-semibold,poppins,sans-serif' }} >Our Mission</h3>
                            <p className='' style={{lineHeight: '1.5em', color: '#333333', textAlign: 'center', font: 'normal normal normal 18px/1.4em avenir-lt-w01_35-light1475496,sans-serif !important' }}>
                                <b>Discover your uniqueness, live it create your unique impact</b>
                                <br />
                                <br/>
                                Empowering teenagers and young adults to discover, embrace, develop and maximize their
                                potential in order to positively shape their local communities and the broader world.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6" style={{ height: '525px', padding: 0 }}>
                        <img src={missionPic} style={styles.imgStyles} height='525px' width="100%" />
                    </div>

                </div>
            </section>
            {/* about us image section image on the left Our viaion*/}
            <section>
                <div className="row">
                    <div className="col-md-6" style={{ height: '525px', padding: 0 }}>
                        <img src={visionPic} style={styles.imgStyles} height='525px' width="100%" />
                    </div>

                    <div className="col-md-6" style={{ backgroundColor: 'white', height: '525px', }}>
                        <div className="section-image-side-text text-center">
                            <h3 style={{ font: 'normal normal normal 40px/1.4em poppins-semibold,poppins,sans-serif'}}>Our Vision</h3>
                            <p style={{ lineHeight: '1.5em', textAlign: 'center', color: '#333333', font: 'normal normal normal 18px/1.4em avenir-lt-w01_35-light1475496,sans-serif !important' }}>
                                Me4real exists to help teenagers and young adults discover and develop their potential for a life of purpose.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Badge section */}
            {/*<section>*/}

            {/*        <div className="row mission-height site-primary-bg-color middle" >*/}
            {/*        <br />*/}
            {/*        <p style={{ textAlign: 'center', paddingTop: '30px', }}>*/}
            {/*                <span className="badge-section-text">An individual's ability to impact and influence others is <br />*/}
            {/*                proportional to their ability to impact and influence self.*/}
            {/*            </span>*/}
            {/*            DMF*/}
            {/*        </p>*/}
            {/*    </div>*/}

            {/*</section>*/}
                <section className='jumbotron jumbotron-fluid site-primary-bg-color text-white' style={{width: '100%'}}>
                    <br />
                    <p  style={{textAlign: 'center'}}>
                        <span className="badge-section-text">
                            An individual's ability to impact and influence others is <br />
                            proportional to their ability to impact and influence self.
                        </span>
                        <br/>
                        <br/>
                        <span className="mt-4">DMF</span>
                    </p>
                    {/*<div className="row mission-height site-primary-bg-color" >*/}

                    {/*</div>*/}
                </section>

            {/* Teams section */}
            <section style={{ paddingBottom: "20px", marginBottom: '20px' }}>
                <Teams />
            </section>

            {/* Badge section */}
            <section>

                    <div className="jumbotron jumbotron-fluid" style={{backgroundColor: '#FFCC00'}} >
                    <br />
                    <p style={{ textAlign: 'center', paddingTop: '30px', }}>
                        <span className="badge-section-text">Our Uniqueness for a better World <br />
                        </span>
                        me4real Motto.
                        <br/>
                        <br/>
                        <a href="/support">
                            <Button variant="dark" style={{ textAlign: 'center', marginTop: '2px' }}>Get Involved</Button>
                        </a>
                    </p>
                </div>

            </section>
            </div>
        </>
    )
}

export default About