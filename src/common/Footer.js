import React from 'react'
import { Nav, Button , Form} from 'react-bootstrap'
import { NavLink }  from 'react-router-dom'
function Footer(props) {
    const [email, setEmail] = React.useState("")
    const [msg, setMsg] = React.useState("")
    const [validated, setValidated] = React.useState(false)

    const submit = event => {

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else{
            setValidated(true);

            fetch("http://ec2-3-18-187-103.us-east-2.compute.amazonaws.com/api/subscriber/", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify({ email }),
            })
                .then((response) => response.json())
                .then(resp => {
                    console.log("response is ", resp)
                    setMsg(resp.result.pass_msg)

                })
                .catch(err => {console.log("rrr ", err)
                    setMsg("An error occured please try again")
                })

        }
    }
    
    return(
        <div className="jumbotron-fluid">

            {/* footer sectiojn  */}
            < section  >
                <div className="row" style={{ marginTop: '80px' }}>
                    <div className="col-md-3" style={{paddingLeft: '60px'}} >
                        <h1 className="footer-heading font-weight-bold">Me4Real International</h1>
                        <br />
                        <p>
                            Our Uniqueness for a better World
                        </p>
                        <br /> <br />
                        <p> 
                            <b>Location:</b> Monte Jouvence, Yaounde Cameroon    <br />
                            <b>Email:</b> info@me4realinternational.org    <br />
                            <b>Phone:</b> (+237) 681 85 86 71<br />
                            <b>Registered Association:</b>  46/e.29/1111/VOL.8.APPB of July 27, 2008, Cameroon</p>
                    </div>
                    <div className="col-md-4 offset-1 mt-0">
                        <div className="error"> { msg}</div>
                        <h2 className="footer-heading font-weight-bold">Get Monthly Updates</h2>
                        <Form noValidate validated={validated} onSubmit={submit}>

                        <Form.Control type="email" required placeholder="Email" />
                        <div style={{ paddingTop: "20px" }}>
                            <Button type="submit" variant="warning" size="lg" block="true" > Sign Up</Button>
                        </div>
                        </Form>
                    </div>
                    <div className="col-md-3 offset-1">
                        <h2 className="footer-heading font-weight-bold">Quick Links</h2>
                        <Nav defaultActiveKey="/about" className="flex-column">
                            <nav className='nav'>
                                <ul style={{ flexDirection: 'column',}}>
                                    <li style={{ padding: '8px 8px 8px 0px'}}>
                                        <NavLink to='/' exact activeClassName='active'>
                                            <span className="footer-nav">Home</span>
					                </NavLink>
                                    </li>
                                    <li style={{ padding: '8px 8px 8px 0px' }}>
                                        <NavLink to='/event' exact activeClassName='active'>
                                            <span className="footer-nav"> Events</span>
					                </NavLink>
                                    </li>
                                    <li style={{ padding: '8px 8px 8px 0px' }}>
                                        <NavLink to='/news'  exact activeClassName='active'>
                                            <span className="footer-nav">  News</span>
					                </NavLink>
                                    </li>
                                    <li style={{ padding: '8px 8px 8px 0px' }}>
                                        <NavLink to='/media' exact activeClassName='active'>
                                            <span className="footer-nav">  Media </span>
					                </NavLink>
                                    </li>
                                    <li style={{ padding: '8px 8px 8px 0px' }}>
                                        <NavLink to='/contact' exact activeClassName='active'>
                                            <span className="footer-nav"> Contact</span>
					                </NavLink>
                                    </li>
                                    <li style={{ padding: '8px 8px 8px 0px' }}>
                                        <NavLink to='/about' exact activeClassName='active'>
                                            <span className="footer-nav"> About</span>
					                </NavLink>
                                    </li>
                                    <li style={{ padding: '8px 8px 8px 0px' }}>
                                        <NavLink to='/dashboard' exact activeClassName='active'>
                                            <span className="footer-nav">Administer</span>
					                </NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </Nav>

                    </div>
                </div>

            </section>
        
        </div>
    )
}
export default Footer;