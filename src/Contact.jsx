import React, { useState } from 'react'
import CardDetails from './CardDetails';
import kris from '../src/images/kris.jpeg';
import banty from '../src/images/banty.jpeg';

const Contact = () => {

    const [data, setData] = useState(
        {
            fullname: '',
            phone: '',
            email: '',
            msg: ''
        }
    );

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((prevData) => {
            return {
                ...prevData,
                [name]: value,
            }
        });
    }
    const formSubmit = (e) => {
        e.preventDefault();
        if (data.fullname.length !== 0) {
            if (data.phone.length !== 0) {
                if (data.email.length !== 0) {
                    if (data.msg.length !== 0) {
                        alert(`Mr/Ms/Mrs ${data.fullname} we got your msg ${data.msg} we will send answer to your mail ${data.email} and also to your number ${data.phone}. Thanks and Regards`);
                    } else {
                        alert("Please enter some message");
                    }

                } else {
                    alert("Please enter email and all fields");
                }
            } else {
                alert("Please enter phone number and all fields");
            }
        } else {
            alert("Please enter full name and all fields");
        }

    }

    return (<>
        <div className="my-5">
            <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1"
                                name="fullname"
                                value={data.fullname}
                                onChange={InputEvent}

                                placeholder="Enter your Name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1"
                                name="phone"
                                value={data.phone}
                                onChange={InputEvent}

                                placeholder="123456789" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1"
                                name="email"
                                value={data.email}
                                onChange={InputEvent}

                                placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                name="msg"
                                value={data.msg}
                                onChange={InputEvent}
                            ></textarea>
                        </div>
                        <div className="col-12 text-center ">
                            <button className="btn btn-outline-primary" type="submit">Submit form</button>
                        </div>
                    </form>
                </div>
            </div>
            <h1 className="text-center my-3">You can contact our talented developer directly</h1>
                    <div className="container-fluid">
                        <div className="row">
                           

                                <div className="row">
                                    
                                    <CardDetails title="Krsihna" desc="This is krishna very talented web developer.I can help you in every your problem regarding the web developement although i am very chutiya can not learn anything but i can teach you and have talent of taking everything granted and procastinated." image={kris} />

                                    <CardDetails title="Banty" desc="This is Banty not so talented app developer.But I can help you in every your problem regarding the app developement although i am very krishna se bhi jyda chutiya can't be make logic but have talent of taking help of juniors also for my work." image={banty} />

                                </div>

                        </div>
                    </div>
        </div>
    </>);
}

export default Contact;