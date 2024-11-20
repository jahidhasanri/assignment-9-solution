import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import Slider from '../layouts/Slider';
import Services from '../layouts/Services';
import MeetoutExpert from '../layouts/MeetoutExpert';
import Testimonials from '../layouts/Testimonials';
import { Helmet } from 'react-helmet-async';

const MainLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Helmet>
                <title>home</title>
            </Helmet>
            <header className='mb-10 pt-2'>
                <Navbar></Navbar>
            </header>
            <main className='min-h-[calc(100vh-405px)]'>
                <section className='pt-56 lg:mt-40 mx-auto lg:pt-0 mb-16'>
                  <Slider></Slider>
                </section>
                <section className='lg:my-40 mx-auto '>
                    <Services></Services>
                </section>

                <section>
                    <MeetoutExpert></MeetoutExpert>
                </section>
                <section>
                    <Testimonials></Testimonials>
                </section>

            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;