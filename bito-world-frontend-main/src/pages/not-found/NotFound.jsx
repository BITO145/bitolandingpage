// src/components/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-[#f8f9fa] text-[#343a40]">
      <h1 className="m-0 text-[6rem]">404</h1>
      <h2 className="text-[2rem]">Page Not Found</h2>
      <p className="my-[1rem]">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="no-underline text-[#007bff] hover:underline">Go back to Home</Link>
    </div>
  );
};

export default NotFound;
