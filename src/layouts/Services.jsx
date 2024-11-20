import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Services = () => {
    const [service,setService]=useState([]);
    useEffect(()=>{
        fetch('/json files/service.json')
        .then((res)=>res.json())
        .then((data)=>setService(data))
    },[])
    
    return (
        <div className='mb-9 '>
            <h1 className='text-4xl font-extrabold text-center mb-4 lg:pt-32'>Our Services </h1>
            
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:ml-28'>
               {
                service.map((servic)=>
                    <div key={servic.id} className="card bg-base-100 lg:w-96 shadow-xl">
                <figure className="px-10 pt-10">
                  <img
                    src={servic.image}
                    alt="Shoes"
                    className="rounded-xl lg:h-[180px] lg:w-[304px]" />
                </figure>
                <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{servic.serviceName}</h3>
              <p className="text-gray-500 mb-2">Category: {servic.category}</p>
              <p className="text-gray-500 mb-2">Counselor: {servic.counselor}</p>
              <p className="text-gray-800 font-bold mb-4">Price: {servic.pricing}</p>
              <NavLink to={`/carddetails/${servic.id}`} className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300'>
              Learn More
              </NavLink>
            </div>
              </div>
                )
               }
                </div>
            
        </div>
    );
};

export default Services;