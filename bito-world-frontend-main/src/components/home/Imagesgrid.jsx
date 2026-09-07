/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Imagesgrid = ({ images }) => {
    return (
        <div className="row py-2">
            {images.map((image, index) => (
                <div key={index} className="col-md-4">
                    <img src={image} alt={`event-img-${index}`} className="img-fluid rounded mx-1 my-2" />
                </div>
            ))}
        </div>
    )
}

export default Imagesgrid