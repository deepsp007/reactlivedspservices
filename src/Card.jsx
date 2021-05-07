import React from 'react'
import { NavLink } from 'react-router-dom';
const Card = (props) => {

    return (<>

        <div className="col-md-4 col-10 mx-auto">
            <div className="card">
                <img src={props.image} className="card-img-top" alt="card_image" width="250" height="200"/>
                <div className="card-body">
                    <h5 className="card-title font-weight-bold">{props.title}</h5>
                    <p className="card-text">{props.desc}</p>
                    <NavLink to="/about" className="btn btn-primary">Details</NavLink>
                </div>
            </div>
        </div>

    </>);
}

export default Card;