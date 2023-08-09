import React from 'react';
import './index.css'

const Projects = () => {

    return (

        <section id="projects" className="projects py-5" >
            <div className="container px-5 " >
                <div className="row text-center">
                    <h2 className="display-6 mb-5">My Projects</h2>
                </div>
                <div className="subProject" >
                    <h3 className='mb-4'>1. Cafe App</h3>
                    <div className="row" >
                        <div className='col imgProject '>
                            <img src={require("../img/imgportfolio/10. Beranda.JPG")} alt="cafe app" />
                        </div>
                        <div className='col-md-5 descProject'>
                            <div>
                                <h6>Description :</h6>
                                <p>Cafeapp is a web-based application for purchasing food and drinks at a cafe, with the aim that someone who cannot buy food or drink directly at the cafe can still make purchases online. Making this website was carried out for 2 months, starting from making the API then making the user interface. On this website there are several features including registration, login, product search, product filters, add cart, complete profile and view order history.</p>
                            </div>
                            <div className='row'>
                                <div className='col-md-2 projectTools'>
                                    <h6>Tools :</h6>
                                </div>
                                <div className='col projectTools'>
                                    <p>HTML</p>
                                    <p>CSS</p>
                                    <p>JavaScript</p>
                                    <p>Bootstrap</p>
                                    <p>ReactJS</p>
                                    <p>NodeJS</p>
                                    <p>ExpressJS</p>
                                    <p>MongoDB</p>
                                </div>

                            </div>
                            <div className='row mt-2'>
                                <div className='col-md-2 projectTools'>
                                    <h6>Link :</h6>
                                </div>
                                <div className='col-md-2 projectTools'>
                                    <a className="me-3" href="https://github.com/mochamaddwipamungkas/dwi-project-frontend.git" target='blank'>Frontend</a>
                                    <a href="https://github.com/mochamaddwipamungkas/dwi-project-backend.git" target='blank'>Backend</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="subProject mt-5" >
                    <h3 className='mb-4'>2. Pasienlis</h3>
                    <div className="row" >
                        <div className='col imgProject'>
                            <img src={require("../img/imgportfolio/13. pasienlist.JPG")} alt="cafe app" />
                        </div>
                        <div className='col-md-5 descProject'>
                            <div>
                                <h6>Description :</h6>
                                <p>Pasienlis is a website-based application that helps provide and present information on maternity patient data at the hospital. This application was created as a form of requirement in the selection of employees of a company and can be completed within 1 week. There are several features in it including create, read, update, delete and filter patient data.</p>
                            </div>
                            <div className='row'>
                                <div className='col-md-2 projectTools'>
                                    <h6>Tools :</h6>
                                </div>
                                <div className='col projectTools'>
                                    <p>HTML</p>
                                    <p>CSS</p>
                                    <p>JavaScript</p>
                                    <p>Bootstrap</p>
                                    <p>ReactJS</p>
                                    <p>NodeJS</p>
                                    <p>ExpressJS</p>
                                    <p>MySQL</p>
                                </div>

                            </div>
                            <div className='row mt-2'>
                                <div className='col-md-2 projectTools'>
                                    <h6>Link :</h6>
                                </div>
                                <div className='col-md-2 projectTools'>
                                    <a className="me-3" href="https://github.com/mochamaddwipamungkas/Halotech.git" target='blank'>Github</a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="subProject mt-5" >
                    <h3 className='mb-4'>3. Albaweb Clone</h3>
                    <div className="row" >
                        <div className='col imgProject'>
                            <img src={require("../img/imgportfolio/14. albaweb.JPG")} alt="cafe app" />
                        </div>
                        <div className='col-md-5 descProject'>
                            <div>
                                <h6>Description :</h6>
                                <p>Albaweb clone is a website-based application that provides information about services, partners, contacts, and projects from the company. This application was created as a form of requirement during a job test that can be completed within one week.  </p>
                            </div>
                            <div className='row'>
                                <div className='col-md-2 projectTools'>
                                    <h6>Tools :</h6>
                                </div>
                                <div className='col projectTools'>
                                    <p>HTML</p>
                                    <p>CSS</p>
                                    <p>JavaScript</p>
                                    <p>Bootstrap</p>
                                    <p>ReactJS</p>

                                </div>

                            </div>
                            <div className='row mt-2'>
                                <div className='col-md-2 projectTools'>
                                    <h6>Link :</h6>
                                </div>
                                <div className='col-md-2 projectTools'>
                                    <a className="me-3" href="https://github.com/mochamaddwipamungkas/albaweb.git" target='blank'>Github</a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="subProject mt-5" >
                    <h3 className='mb-4'>4. Telegram Clone</h3>
                    <div className="row" >
                        <div className='col imgProject text-center'>
                            <img src={require("../img/imgportfolio/15. Telegram Clone.JPG")} alt="cafe app" style={{ width: "30%" }} />
                        </div>
                        <div className='col-md-5 descProject'>
                            <div>
                                <h6>Description :</h6>
                                <p>Telegram cone is a mobile-based application that mimics the user interface of the telgram application. This application was created as one of the tasks in the training and can be completed within one day.</p>
                            </div>
                            <div className='row'>
                                <div className='col-md-2 projectTools'>
                                    <h6>Tools :</h6>
                                </div>
                                <div className='col projectTools'>
                                    <p>ReactNative</p>

                                </div>

                            </div>
                            <div className='row mt-2'>
                                <div className='col-md-2 projectTools'>
                                    <h6>Link :</h6>
                                </div>
                                <div className='col-md-2 projectTools'>
                                    <a className="me-3" href="https://github.com/mochamaddwipamungkas/telegram-clone.git" target='blank'>Github</a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section >

    );
};

export default Projects;

