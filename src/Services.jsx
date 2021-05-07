import React from 'react'
import Card from './Card'
import ServiceData from './ServicesData'
const Services = () => {

    return (<>
        <div className="my-3">
            <h1 className="text-center">Our Services</h1>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-3">
                        {

                            ServiceData.map((value,index)=>{
                               return <Card title={value.title} desc={value.desc} image={value.image} key={index} />
                            })
                        }
                    </div>

                </div>
            </div>
        </div>
    </>);
}

export default Services;