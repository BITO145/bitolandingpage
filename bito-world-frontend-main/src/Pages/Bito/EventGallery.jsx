import React from 'react';
import './EventGallery.css';
import { Container } from 'react-bootstrap';
import First from '../../assets/bito/image-second.png';


const events = [
    { id: 1, title: 'Art Exhibition', date: 'July 20, 2024', image:First },
    { id: 2, title: 'Art Exhibition', date: 'July 20, 2024', image:First },
    { id: 3, title: 'Food Fair', date: 'August 14, 2024', image:First },
    { id: 4, title: 'Tech Conference', date: 'September 5, 2024', image:First },
    { id: 5, title: 'Film Screening', date: 'October 10, 2024', image:First },
    { id: 6, title: 'Charity Run', date: 'November 23, 2024', image:First },
   
];

const EventGallery = () => {
    return (
        <Container className='py-5'>

            <h2 style={{ color: '#b27f4a' }} className='text-center membership-heading'>Event Gallery</h2>
            <div className="gallery-container pt-sm-5">
            {events.map(event => (
                <div key={event.id} className="gallery-item">
                    <img src={event.image} alt={event.title} className="gallery-image" />
                    <div className="overlay">
                        <h3 className="event-title">{event.title}</h3>
                        <p className="event-date">{event.date}</p>
                    </div>
                </div>
            ))}
        </div>
        </Container>

        
    );
};

export default EventGallery;