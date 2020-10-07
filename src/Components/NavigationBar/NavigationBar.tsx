import React, { FunctionComponent, useEffect, useState } from 'react'
import Nav from 'react-bootstrap/esm/Nav'
import Navbar from 'react-bootstrap/esm/Navbar'
import { Link, useLocation } from 'react-router-dom'
import Routes from '../../Routes/Routes'
import './NavigationBar.scss'

export const NavigationBar: FunctionComponent = () => {

    const location = useLocation()
    const [top, setTop] = useState<boolean>(true)

    useEffect(() => {
        window.onscroll = () => {
            if (window.pageYOffset === 0) {
                setTop(true)
            } else {
                setTop(false)
            }
        }
    }, [])

    const scrollIntoView = (id: string) => {
        const element = document.getElementById(id)
        if (element) element.scrollIntoView({ block: "end", behavior: "smooth" })
    }


    return (
        <Navbar collapseOnSelect expand="lg" className={`navbar navbar-expand-lg fixed-top navbar-dark navBar ${location.pathname === '/' && !top && 'bg-dark'} ${location.pathname !== '/' && ' bg-dark'}`}>
            <div className="container">
                <Navbar.Brand href="/">@pod32g</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto justify-content-end">
                        {
                            Routes.map(el => {
                                return (
                                    el.visible && <Nav.Link active={location.pathname === el.path}>
                                        {
                                            el.scrollable ?
                                                <p className="nav-link" onClick={() => scrollIntoView(el.path)}>{el.name}</p>
                                                :
                                                <Link className="nav-link" to={el.path}>{el.name}</Link>
                                        }
                                    </Nav.Link>
                                )
                            })
                        }
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}