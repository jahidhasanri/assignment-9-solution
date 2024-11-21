import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../layouts/Navbar';

const ErrorPage = () => {
    return (
       <div>
        <div className='w-11/12 mx-auto'>
            <Navbar></Navbar>
        </div>
         <div className='text-center lg:mt-44'>
            <Helmet><title>Career Pathways || error page</title></Helmet>
            <div className='lg:ml-[400px] mt-7'>
            <img className='' src="https://i.ibb.co.com/PQXhmKJ/404-page-not-found-1024x576.webp" alt="" />
            </div>
        </div>
       </div>
    );
};

export default ErrorPage;