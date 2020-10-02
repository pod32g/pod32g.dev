import React, { FunctionComponent } from 'react'
import Nav from 'react-bootstrap/esm/Nav'
import Navbar from 'react-bootstrap/esm/Navbar'
import { Link, useLocation } from 'react-router-dom'
import Routes from '../../Routes/Routes'
import './NavigationBar.scss'

export const NavigationBar: FunctionComponent = () => {

    const location = useLocation()

    return (
        <Navbar className={`navbar navbar-expand-lg fixed-top navbar-dark navBar ${location.pathname !== '/' && ' bg-dark'}`}>
            <div className="container">
                <Navbar.Brand href="/">@pod32g</Navbar.Brand>
                <Nav className="ml-auto justify-content-end">
                    {
                        Routes.map(el => {
                            return (
                                el.visible && <Nav.Link active={location.pathname === el.path}><Link className="nav-link" to={el.path}>{el.name}</Link></Nav.Link>
                            )
                        })
                    }
                </Nav>

            </div>
        </Navbar>
    )
}