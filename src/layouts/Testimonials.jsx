import React from 'react';

const Testimonials = () => {
  return (
    <div className="container mx-auto text-center py-16">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">What Our Clients Say</h2>
      <p className="text-lg text-gray-600 mb-12">
        Hear directly from those who have benefited from our career counseling services and achieved their goals.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="testimonial-item mb-3 bg-white p-8 rounded-lg shadow-xl transform transition-transform hover:scale-105 duration-300">
          <img
            src="https://i.ibb.co.com/tJ4Mx9p/67274-main.jpg"
            alt="Client Image"
            className="w-24 h-24 object-cover rounded-full mx-auto mb-6 border-4 border-gray-200"
          />
          <p className="text-gray-600 italic mb-4">
            "Career Counseling truly changed my career trajectory! I received invaluable insights that helped me land my dream
            job in just a few months!"
          </p>
          <h4 className="text-xl font-semibold text-gray-800">Sarah Williams</h4>
          <p className="text-gray-500">Marketing Manager</p>
        </div>
        <div className="testimonial-item mb-3 bg-white p-8 rounded-lg shadow-xl transform transition-transform hover:scale-105 duration-300">
          <img
            src="https://i.ibb.co.com/Gs6GBJR/james-thompson.jpg"
            alt="Client Image"
            className="w-24 h-24 object-cover rounded-full mx-auto mb-6 border-4 border-gray-200"
          />
          <p className="text-gray-600 italic mb-4">
            "I can't thank Career Counseling enough for their resume writing services. My new resume opened doors to several
            interviews and a better job offer!"
          </p>
          <h4 className="text-xl font-semibold text-gray-800">James Thompson</h4>
          <p className="text-gray-500">Software Developer</p>
        </div>
        <div className="testimonial-item mb-3 bg-white p-8 rounded-lg shadow-xl transform transition-transform hover:scale-105 duration-300">
          <img
            src="https://i.ibb.co.com/jGXh52D/hq720.jpg"
            alt="Client Image"
            className="w-24 h-24 object-cover rounded-full mx-auto mb-6 border-4 border-gray-200"
          />
          <p className="text-gray-600 italic mb-4">
            "The career coaching I received was life-changing. I now feel more confident and prepared for my next career move.
            Highly recommend!"
          </p>
          <h4 className="text-xl font-semibold text-gray-800">Michael Green</h4>
          <p className="text-gray-500">Project Manager</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;