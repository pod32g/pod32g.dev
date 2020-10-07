import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FunctionComponent } from 'react'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './MainView.scss'
import { About } from '../About/About'

export const MainView: FunctionComponent = () => {
    return (
        <div className="hideScroll">
            <div className="view-container mainView background text-white">
                <h3>Hello World</h3>
                <h1 className="title">I am <span className="font-weight-bold title">David Perez</span></h1>
                <h4>Web developer @ Bosch</h4>
                <div className="icons">
                    <a href="https://github.com/pod32g/" target="_blank" rel="noopener noreferrer" className="icon"><FontAwesomeIcon icon={faGithub} color="white" size="lg" /></a>
                    <a href="https://twitter.com/pod32g" target="_blank" rel="noopener noreferrer" className="icon"><FontAwesomeIcon icon={faTwitter} color="white" size="lg" /></a>
                    <a href="https://www.linkedin.com/in/david-ivan-perez/" target="_blank" rel="noopener noreferrer" className="icon"><FontAwesomeIcon icon={faLinkedin} color="white" size="lg" /></a>
                </div>
            </div>
            <section className="container-fluid" id="aboutMe">
                <About />
            </section>
        </div>
    )
}