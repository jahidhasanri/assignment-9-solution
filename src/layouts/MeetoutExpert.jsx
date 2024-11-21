import React, { useEffect, useState } from "react";

const MeetoutExpert = () => {
  const [experts, setexperts] = useState([]);
  useEffect(() => {
    fetch("json files/outexperts.json")
      .then((res) => res.json())
      .then((data) => setexperts(data));
  }, []);
  return (
    <div className="mb-9 bg-slate-200 pb-28">
      <h1 className="text-4xl font-extrabold text-center mb-4 pt-4 md:pt-10 lg:pt-32">
      Meet Our Experts
      </h1>
      <p className="text-gray-600 mb-10 text-center text-xl">
        Our skilled professionals are ready to assist you with their expertise.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:ml-28">
        {experts.map((expert, index) => (
          <div key={index} className="card bg-base-100 lg:w-96 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={expert.image}
                alt="Expert"
                className="rounded-xl object-cover h-[200px] w-[300px] lg:h-[230px] lg:w-[304px] block mx-auto"
              />
            </figure>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{expert.name}</h3>
              <p className="text-gray-500 mb-2"> {expert.title}</p>
              <p className="text-gray-500 mb-2"> {expert.bio}</p>
            </div>
            <div className="text-center pb-4"><button className="btn btn-primary">linkden</button></div>

            
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetoutExpert;