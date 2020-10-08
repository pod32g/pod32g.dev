import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './MainView.scss'
import { About } from '../About/About'
import Nav from 'react-bootstrap/esm/Nav'
import Navbar from 'react-bootstrap/esm/Navbar'
import Scrollspy from 'react-scrollspy'
import Routes from '../../Routes/Routes'
import { Link } from 'react-router-dom'



export const MainView: FunctionComponent = () => {

    const [top, setTop] = useState<boolean>(true)

    useEffect(() => {
        window.onscroll = () => {
            if (window.pageYOffset === 0) setTop(true)
            else setTop(false)
        }
    }, [])

    const scrollIntoView = (id: string) => {
        const element = document.getElementById(id)
        if (element) element.scrollIntoView({ block: "end", behavior: "smooth" })
    }


    return (
        <div className="hideScroll">
            <Navbar collapseOnSelect expand="lg" className={`navbar navbar-expand-lg fixed-top navbar-dark navBar ${top === false && 'bg-dark'}`}>
                <div className="container">
                    <Navbar.Brand href="/">@pod32g</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto justify-content-end">
                            <Scrollspy items={['home', 'aboutMe']} currentClassName='active' className="navbar-nav mr-auto">
                                <Nav.Link >
                                    <p className="nav-link" onClick={() => scrollIntoView('home')}>Home</p>
                                </Nav.Link>
                                <Nav.Link >
                                    <p className="nav-link" onClick={() => scrollIntoView('aboutMe')}>About</p>
                                </Nav.Link>
                            </Scrollspy>
                            {
                                Routes.map(el => {
                                    return (
                                        el.visible && el.path !== '/' && <Nav.Link>
                                            <Link className="nav-link" to={el.path}>{el.name}</Link>
                                        </Nav.Link>
                                    )
                                })

                            }
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar >
            <div className="view-container mainView background text-white" id="home">
                <h3>Hello World</h3>
                <h1 className="title">I am <span className="font-weight-bold title">David Perez</span></h1>
                <h4>Web developer @ Bosch</h4>
                <div className="icons">
                    <a href="https://github.com/pod32g/" target="_blank" rel="noopener noreferrer" className="icon"><FontAwesomeIcon className="fa_icon" icon={faGithub} color="white" size="3x" /></a>
                    <a href="https://twitter.com/pod32g" target="_blank" rel="noopener noreferrer" className="icon"><FontAwesomeIcon className="fa_icon" icon={faTwitter} color="white" size="3x" /></a>
                    <a href="https://www.linkedin.com/in/david-ivan-perez/" target="_blank" rel="noopener noreferrer" className="icon"><FontAwesomeIcon className="fa_icon" icon={faLinkedin} color="white" size="3x" /></a>
                </div>
            </div>
            <section className="container-fluid" id="aboutMe">
                <About />
            </section>
        </div>
    )
}