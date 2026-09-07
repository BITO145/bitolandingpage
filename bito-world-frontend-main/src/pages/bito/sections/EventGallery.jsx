import React from 'react';
import { Container } from 'react-bootstrap';
import First from '../../../assets/bito/image-second.png';


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
            <div className="grid grid-cols-3 gap-[20px] p-[20px] max-w-[1200px] mx-auto pt-sm-5">
            {events.map(event => (
                <div key={event.id} className="group relative overflow-hidden rounded-[10px] shadow-[0_4px_8px_rgba(0,0,0,0.2)] transition-transform duration-300 ease-[ease] hover:scale-[1.05]">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover block transition-opacity duration-300 ease-[ease]" />
                    <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] text-white opacity-0 flex flex-col items-center justify-center transition-opacity duration-300 ease-[ease] group-hover:opacity-100">
                        <h3 className="text-[1.5em] m-0 text-center">{event.title}</h3>
                        <p className="text-[1em] mt-[10px] text-center">{event.date}</p>
                    </div>
                </div>
            ))}
        </div>
        </Container>

        
    );
};

export default EventGallery;