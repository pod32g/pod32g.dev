import React, { FunctionComponent } from 'react'
import './About.scss'

export const About: FunctionComponent = () => {
    return (
        <div className="view-container about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center mx-auto">
                            <h2>Hello, I'm David</h2>
                            <ul className="mb-0 list-inline text-center about-work">
                                <li className="list-inline-item mr-0 text-muted">Web developer</li>
                                <li className="list-inline-item mr-0 text-muted">Musician</li>
                                <li className="list-inline-item mr-0 text-muted">Full-time geek</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-6 progress-bars">
                        <div className="fix">
                            <div className="text-dark font-weight-bold float-left">React/React Native</div>
                            <div className="text-muted float-right">70%</div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: "70%" }}></div>
                        </div>
                        <div className="fix">
                            <div className="text-dark font-weight-bold float-left">Typescript + Express.js</div>
                            <div className="text-muted float-right">80%</div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: "80%" }}></div>
                        </div>
                        <div className="fix">
                            <div className="text-dark font-weight-bold float-left">Amazon Web Services</div>
                            <div className="text-muted float-right">60%</div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: "60%" }}></div>
                        </div>
                    </div>
                    <div className="col-lg-6 progress-bars">
                        <div className="fix">
                            <div className="text-dark font-weight-bold float-left">Python + Django</div>
                            <div className="text-muted float-right">80%</div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: "80%" }}></div>
                        </div>
                        <div className="fix">
                            <div className="text-dark font-weight-bold float-left">Docker</div>
                            <div className="text-muted float-right">60%</div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: "60%" }}></div>
                        </div>
                        <div className="fix">
                            <div className="text-dark font-weight-bold float-left">Kubernetes</div>
                            <div className="text-muted float-right">50%</div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: "50%" }}></div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center mx-auto">
                            <h2 >About Me</h2>
                            <p className="text-muted mx-auto mt-2">
                                I'm an enthusiastic Web developer eager to contribute to team success through hard work, attention
                                to detail and excellent organizational skills. Clear understanding of Backend and front end
                                development. Motivated to learn, grow and excel as a software developer.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}