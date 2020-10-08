import React, { FunctionComponent } from 'react'
import Nav from 'react-bootstrap/esm/Nav'
import Navbar from 'react-bootstrap/esm/Navbar'
import { Link, useLocation } from 'react-router-dom'
import Routes from '../../Routes/Routes'
import './NavigationBar.scss'

export const NavigationBar: FunctionComponent = () => {

    const location = useLocation()

    if (location.pathname === '/') return (<></>)

    return (
        <Navbar collapseOnSelect expand="lg" className={`navbar navbar-expand-lg fixed-top navbar-dark navBar bg-dark`}>
            <div className="container">
                <Navbar.Brand href="/">@pod32g</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto justify-content-end">
                        {
                            Routes.map(el => {
                                return (
                                    el.visible && <Nav.Link active={location.pathname === el.path}>
                                        <Link className="nav-link" to={el.path}>{el.name}</Link>
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