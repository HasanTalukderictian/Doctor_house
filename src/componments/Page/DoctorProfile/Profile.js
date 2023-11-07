import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Profile = () => {
     const {doctors} = useLoaderData();
      const {name,doctorName, doctorimg, category, price,visiting_time} = doctors;
    return (
        <div className=' lg:flex md:flex sm:grid my-12  p-8 bg-slate-200'>
             <div className='card-body  rounded lg'> 
                 <img className='w-[400px] rounded lg' src={doctorimg} alt="" />
             </div>
             <div className='card-body  rounded lg'>
                  <div className='my-6 mx-10 p-6'>
                      <h3 className='text-4xl font-bold text-orange-600'>Doctor Name: {doctorName}</h3>
                      <p className='text-xl my-2'>Specialist :{name}</p>
                      <p className='text-xl my-2'>Categories: {category}</p>
                      <p className='text-xl my-2'>Visiting Time :{visiting_time}</p>
                      <p className='text-xl my-2'><span className='text-orange-500'>Appointment Fee: ${price}</span></p>
                      <button className="btn btn-warning my-3">Get Appointment</button>

                  </div>
             </div>
        </div>
    );
};

export default Profile;