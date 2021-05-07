import React from 'react'
const CardDetails = (props) => {

    const Details=()=>{
        alert("Kya karoge details jaan kr dono hi chutiye he");
    }
    return (<>

        <div className="col-md-6 col-12 mx-auto">
            <div className="card">
                <img src={props.image} className="card-img-top" alt="card_image" width="300" height="350"/>
                <div className="card-body align-items-center justify-content-center">
                    <h5 className="card-title font-weight-bold">{props.title}</h5>
                    <p className="card-text">{props.desc}</p>
                    <h1 onClick={Details} className="btn btn-primary text-center">Details</h1>
                </div>
            </div>
        </div>

    </>);
}

export default CardDetails;