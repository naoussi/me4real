import React, {useEffect} from 'react'
import { Jumbotron, Container, Button } from 'react-bootstrap'
import '../App.css'
import { FaUser, FaPhone, FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function SupportUs(props) {
    useEffect(() => {
        window.scrollTo(0, 0)

    }, [props.location.pathname])
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
            {/* about us image section image on the right Our mission*/}
            <section>
                <div className="row">
                    <div className="col-md-12" style={{ height: '525px', padding: 0 }}>
                        <img src="splash.jpg" height='525px' width="100%" />
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
                    <div className="col-md-4 col-sm-4 mission-height site-primary-bg-color" >
                        <div style={{ paddingTop: 10 }} >


                            <a href="/">
                                <p className="icon-fonts">
                                <FaUser variant="info"> user</FaUser>
                                </p>
                                <p className="large-text">In Person</p></a>
                            <p className="small-text"> 500 Terry Francois Street <br />San Francisco, CA 94158</p>
                        </div>

                    </div>
                    <div className="col-md-4 col-sm-4 mission-height site-suppliment-bg-color" >
                        <div style={{ paddingTop: 10 }} >
                            <a href="/">
                                <p className="icon-fonts">
                                    <FaGlobe variant="info"> globe</FaGlobe>
                                </p>                                
                            <p className="large-text">Online</p></a>
                            <p className="small-text"> Make a tax deductible donation‏.<br /> <Button variant="warning" style={{ textAlign: 'center', marginTop: '10px' }}>Click to Give</Button></p>
                            
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 mission-height site-tertiary-bg-color" >
                        <div style={{ paddingTop: 10 }} >
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