import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import Slider from '../layouts/Slider';
import Services from '../layouts/Services';
import MeetoutExpert from '../layouts/MeetoutExpert';
import Testimonials from '../layouts/Testimonials';

const MainLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <header className='pt-2'>
                <Navbar></Navbar>
            </header>
            <main className='min-h-[calc(100vh-405px)]'>
                <section className='lg: mt-40 mx-auto mb-16'>
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