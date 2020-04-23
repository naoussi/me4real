import React ,{ useState, useEffect } from 'react'
import { Navbar, Nav, Form, FormControl, Button}  from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function NavigationBar(props){
    const [modal, setModal] = useState(false)
    useEffect(() => {
        if (window.location.pathname == "/about" ){
            setModal(true)
        }
        else{
            setModal(false)
        }
    }, [props.showGaleryOpacity])
    return (
        <>
            <Navbar style={{ position: 'fixed', zIndex: props.showGaleryOpacity ? 1 : 20, width: '100%',  backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#FFCC00' }} collapseOnSelect expand="lg"  sticky="top">
                <Navbar.Brand href="#home">
                    <img
                        src="/logo.jpg"
                        width="70"
                        height="50"
                        style={{ marginLeft: '40px' }}
                        className="d-inline-block align-top"
                        alt="Me4Real"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav " className="justify-content-center">

                    <Nav className=" justify-content-center" style={{ color: '#FFCC00'}} justify>
                        <nav className='nav'>
                            <ul>
                                <li>
                                    <NavLink to='/' exact activeClassName='active'>
                                        Home
					                </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/about' exact activeClassName='active'>
                                        About
					                </NavLink>
                                </li>

                                <li>
                                    <NavLink to='/support' exact activeClassName='active'>
                                        Get Involved
					                </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/event' exact activeClassName='active'>
                                        Events
					                </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/news' exact activeClassName='active'>
                                        News
					                </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/media' exact activeClassName='active'>
                                        PodCast
					                </NavLink>
                                </li>

                                <li>
                                    <NavLink to='/video' exact activeClassName='active'>
                                        Video
					                </NavLink>
                                </li>

                                <li>
                                    <NavLink to='/blog' exact activeClassName='active'>
                                        Blog Post
					                </NavLink>
                                </li>

                                <li>
                                    <NavLink to='/contact' exact activeClassName='active'>
                                        Contact
					                </NavLink>
                                </li>

                            </ul>
                        </nav>
                </Nav>
                </Navbar.Collapse>

            </Navbar>

        </>
    )
}

export default NavigationBar