import React from 'react';
import './index.css'

const Skills = () => {

    return (

        <section id="skills" className="skills mb-5">

            <div class="container py-5" >

                <div class="row text-center">
                    <h2 class="display-6  mb-5">My Skills</h2>
                </div>
                <div className='row justify-content-center align-items-center gap-4' >
                    <div className="col-md-2 col-sm-3 mt-5  justify-content-center text-center" ><img src={require("../img/logo/🦆 icon _file type html_.png")} alt="" /></div>
                    <div className="col-md-2 col-sm-3 mt-5 justify-content-center text-center"><img src={require("../img/logo/🦆 icon _file type css_.png")} alt="" /></div>
                    <div className="col-md-2 col-sm-3 mt-5 justify-content-center text-center"><img src={require("../img/logo/🦆 icon _Javascript (JS)_.png")} alt="" /></div>
                    <div className="col-md-2 col-sm-3 mt-5 justify-content-center text-center"><img src={require("../img/logo/🦆 icon _bootstrap plain_.png")} alt="" /></div>
                    <div className="col-md-2 col-sm-3 mt-5 justify-content-center text-center"><img src={require("../img/logo/🦆 icon _react original wordmark_.png")} alt="" /></div>
                    <div className="col-md-2 col-sm-3 mt-5 justify-content-center text-center"><img src={require("../img/logo/🦆 icon _nodejs_.png")} alt="" /></div>
                    <div className="col-md-2 col-sm-3 mt-5 justify-content-center text-center"><img src={require("../img/logo/🦆 icon _express original_.png")} alt="" /></div>
                    <div className="col-md-2 col-sm-3 mt-5 justify-content-center text-center"><img src={require("../img/logo/🦆 icon _mongodb icon_.png")} alt="" /></div>
                    <div className="col-md-2 col-sm-3 mt-5 justify-content-center text-center"><img src={require("../img/logo/🦆 icon _mysql original wordmark_.png")} alt="" /></div>
                    <div className="col-md-2 mt-5 justify-content-center text-center"><img src={require("../img/logo/🦆 icon _sdk react native_.png")} alt="" /></div>
                </div>
            </div>

        </section>

    );
};

export default Skills;
