import React from 'react';
import { Helmet } from 'react-helmet-async';

const ErrorPage = () => {
    return (
        <div className='text-center lg:mt-44'>
            <Helmet><title>error page</title></Helmet>
            <div className='lg:ml-[400px] mt-7'>
            <img className='' src="https://i.ibb.co.com/PQXhmKJ/404-page-not-found-1024x576.webp" alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;