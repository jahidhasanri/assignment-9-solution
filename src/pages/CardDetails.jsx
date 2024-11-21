import React, { useContext, useState } from 'react';
import Navbar from '../layouts/Navbar';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component'; 
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../authLayout/AuthLayout';

const CardDetails = () => {
  const { addAppointment } = useContext(AuthContext);
  const user = useLoaderData();
  const { id } = useParams();
  const intId = parseInt(id);
  const cards = user.find(card => card.id === intId);
  console.log(cards);

  if (!cards) return <div>Product not found</div>;

  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const handleCommentSubmit = () => {
    if (commentText.trim()) {
      setComments([...comments, commentText]); 
      setCommentText(""); 
    }
  };

  const handleAppointmentClick = () => {
    // Add appointment details
    const newAppointment = {
      id: Date.now(),
      serviceName: cards.serviceName,
      date: cards.duration, // You can change this to a dynamic date
      time: "5:00 PM - 6:00 PM", // You can change this to a dynamic time
      counselor: cards.counselor,
      feedback: "",
    };
    addAppointment(newAppointment); // Add to global state
  };

  return (
    <div className='md:w-11/12  mt-[300px] md:mt-1'>
      <Helmet><title>Career Pathways || card details</title></Helmet>
      <div className='w-11/12 '>
      <Navbar></Navbar>

      </div>
      <div className="card bg-base-100  md:mt-[130px] lg:w-[1000px] shadow-xl lg:mt-52 mx-auto">
        <figure className="px-10 pt-10">
          <img
            src={cards.image}
            alt="Service"
            className="rounded-xl w-[600px] h-[400px]"
          />
        </figure>
        <div className="p-10">
          <h3 className=" text-2xl md:text-3xl font-bold mb-4">{cards.serviceName}</h3>
          <p className="text-gray-700 mb-2 text-xl font-medium">Category: {cards.category}</p>
          <p className="text-gray-700 mb-2 text-xl font-medium">Counselor: {cards.counselor}</p>
          <p className="text-gray-800 font-bold mb-4">Price: {cards.pricing}</p>
          <p className="text-gray-800 font-bold mb-4">Duration: {cards.duration}</p>
          
          <div className='flex gap-5 md:gap-10 items-center'>
            <ReactStars
              count={5} 
              value={cards.rating} 
              size={30} 
              isHalf={true} 
              edit={false} 
              activeColor="#ffd700" 
            />
            <p>{cards.rating} out of 5</p>
          </div>
          <p className="text-gray-700 mb-2 text-xl font-medium">Location: {cards.additionalInfo.location}</p>
          <p className="text-gray-700 mb-2 text-xl font-medium">Contact Email: {cards.additionalInfo.contactEmail}</p>
          
          <p className="text-gray-600 mb-6 text-xl mt-4">Description: <span className='text-neutral'>{cards.description}</span></p>
          <button className='btn btn-secondary' onClick={handleAppointmentClick}>Appointment</button>
          
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-4">Leave a Comment/Feedback:</h3>
            <textarea
              className="textarea textarea-bordered w-full mb-4"
              placeholder="Enter your comment or feedback"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)} 
            />
            <button
              onClick={handleCommentSubmit}
              className="btn btn-primary"
            >
              Submit Feedback
            </button>

           
            <div className="mt-6">
              <h4 className="text-xl font-semibold mb-4">Submitted Comments:</h4>
              <ul>
                {comments.length > 0 ? (
                  comments.map((comment, index) => (
                    <li key={index} className="bg-gray-100 p-3 rounded-md mb-2">
                      {comment}
                    </li>
                  ))
                ) : (
                  <p>No comments yet.</p>
                )}
              </ul>
            </div>
          </div>
          <div className='text-center'>
          <Link to='/' className='btn btn-primary'>got to home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;