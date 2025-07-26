/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Event.css'
import { Link } from 'react-router-dom'
import {
    aboutUs,
    biharAsmitaFoundation, 
  } from "../../assets/about";

const Events = ({ events }) => {
    return (
        <>
            <div>
                {/* Home Banner */}
                <section className="about-img d-flex align-items-end">
                    <div className="container">
                        <div className="text-white">
                            <p className="fs-4 m-0 font-bnpr" style={{ marginTop: "330px" }}>
                                Welcome to
                            </p>
                            <strong className="fs-4 font-bnpr">
                                Bihar Internatinal Trade Organization
                            </strong>
                            <h2
                                key={1}
                                className="bannerHeading"
                                style={{ fontSize: "100px", fontWeight: 700 }}
                            >
                                Events
                            </h2>
                        </div>
                    </div>
                </section> 
                <div className="container mt-5">
                    {/* <h1>Upcoming Events</h1> */}
                    <div className="row">
                        {events.map((event) => (
                            <div key={event.id} className="col-md-4">
                                <Link to={`/events/${event.slug}`} className="text-decoration-none">
                                    <div className="card thumnails">
                                        <img className="img-fluid rounded" src={event.thumbnail} alt="event-img" />
                                        <div className='thumText'>
                                            {event.title}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>


                </div>
            </div>


        </>
    )
}

export default Events