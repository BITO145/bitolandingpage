/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useParams } from "react-router-dom";
import Imagesgrid from '../../Components/Imagesgrid';

const EventDetails = ({ events }) => {
    const { slug } = useParams();
    const event = events.find((e) => e.slug === slug);

    if (!event) return <h2>Event Not Found</h2>;

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
                <div className='container'>
                    <h1>{event.title}</h1>
                        <Imagesgrid images={event.images} />
                </div>

            </div>
        </>
    )
}

export default EventDetails