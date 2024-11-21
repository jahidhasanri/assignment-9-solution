import React, { useContext, useState } from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../authLayout/AuthLayout";

const Appoinment = () => {
    const { appointments } = useContext(AuthContext);

    return (
        <div>
            <Helmet><title>appoinment history</title></Helmet>
            <div className="w-11/12 "><Navbar></Navbar></div>

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
       <div className="w-full md:mt-[115px] lg:mt-[404px] 2xl:mt-[565px]">
       <Footer></Footer>
       </div>
        </div>
    );
};

export default Appoinment;