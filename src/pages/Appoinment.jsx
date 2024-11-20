import React, { useState } from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import { Helmet } from "react-helmet-async";

const Appoinment = () => {
    const [appointments, setAppointments] = useState([
        {
            id: 1,
            serviceName: "Career Counseling Session",
            date: "2024-12-05",
            time: "5:00 PM - 6:00 PM",
            counselor: "John Doe",
            feedback: "It was helpful and insightful!",
        },
        {
            id: 2,
            serviceName: "Resume Review",
            date: "2024-12-10",
            time: "3:00 PM - 4:00 PM",
            counselor: "Jane Smith",
            feedback: "",
        },
    ]);

    const handleFeedbackChange = (id, value) => {
        const updatedAppointments = appointments.map((appointment) =>
            appointment.id === id ? { ...appointment, feedback: value } : appointment
        );
        setAppointments(updatedAppointments);
    };

    return (
        <div>
            <Helmet><title>appoinment history</title></Helmet>
            <div className="w-11/12 mx-auto"><Navbar></Navbar></div>

        <div className="container mx-auto p-4 pt-72 lg:pt-0">
            <h1 className="text-2xl font-bold mb-4">Appointment History</h1>
            {appointments.length === 0 ? (
                <p>No appointments found.</p>
            ) : (
                appointments.map((appointment) => (
                    <div
                        key={appointment.id}
                        className="border rounded-lg p-4 mb-4 shadow-lg mt-32"
                    >
                        <h2 className="text-xl font-semibold">{appointment.serviceName}</h2>
                        <p><strong>Date:</strong> {appointment.date}</p>
                        <p><strong>Time:</strong> {appointment.time}</p>
                        <p><strong>Counselor:</strong> {appointment.counselor}</p>
                        <div className="mt-2">
                            <label htmlFor={`feedback-${appointment.id}`} className="block font-medium">
                                Feedback:
                            </label>
                            <textarea
                                id={`feedback-${appointment.id}`}
                                className="w-full border rounded p-2"
                                rows="3"
                                value={appointment.feedback}
                                onChange={(e) =>
                                    handleFeedbackChange(appointment.id, e.target.value)
                                }
                            />
                        </div>
                    </div>
                ))
            )}
        </div>
       <div className="w-11/12 mx-auto">
       <Footer></Footer>
       </div>
        </div>
    );
};

export default Appoinment;