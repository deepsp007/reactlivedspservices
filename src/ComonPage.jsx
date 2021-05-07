import React from 'react'
import { NavLink } from 'react-router-dom';

const ComonPage = (props) => {



    return (<>
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1>{props.name} <strong className="brand_name">DSP</strong></h1>
                                <h2 className="my-1">
                                    We are the team of talented developer making Website
                        </h2>
                                <div className="mt-1">
                                    <NavLink to={props.visit} className="btn_get_started">{props.btname}</NavLink>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={props.imgsrc} className="img-fluid animated" alt="homeimage" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default ComonPage;