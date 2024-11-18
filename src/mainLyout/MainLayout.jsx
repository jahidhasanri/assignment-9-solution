import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import Slider from '../layouts/Slider';

const MainLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <header className='pt-2'>
                <Navbar></Navbar>
            </header>
            <main className='min-h-[calc(100vh-405px)]'>
                <section className='w-full h-full'>
                  <Slider></Slider>
                </section>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;