import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Profile = () => {
     const {doctors} = useLoaderData();
      const {_id, name,doctorName, doctorimg, category, price,visiting_time} = doctors;
    return (
        <div className=' lg:flex max-w-screen-2xl md:flex max-w-2xl sm:flex max-w-sm my-12  p-8 bg-slate-200'>
             <div className='card-body w-1/2 rounded lg'> 
                 <img className='w-[400px] rounded lg' src={doctorimg} alt="" />
             </div>
          
                  <div className='my-6 w-1/2 mx-10 p-6'>
                      <h3 className='text-4xl font-bold text-orange-600'>Doctor Name: {doctorName}</h3>
                      <p className='text-xl my-2'>Specialist :{name}</p>
                      <p className='text-xl my-2'>Categories: {category}</p>
                      <p className='text-xl my-2'>Visiting Time :{visiting_time}</p>
                      <p className='text-xl my-2'><span className='text-orange-500'>Appointment Fee: ${price}</span></p>
                      <Link to={`/checkout/${_id}`} className="btn btn-warning my-3">Get Appointment</Link>

                  </div>
            
        </div>
    );
};

export default Profile;