import React from 'react';
import Doctor from '../../../assests/icon/doctor.png';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className=' lg:flex md:flex sm:grid my-4  rounded bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...'>
            <div className='w-1/2 my-4 mx-4 p-4'>
                <img src={Doctor} alt="" />
            </div>

            <div className='w-1/2 mt-20 mx-4 p-4'>
                <div className='my-20'>
                    <h2 className='text-4xl mt-10 font-semibold text-white'>Dr. Mark HalfMan</h2>
                    <p className='my-2 text-xl text-white'>Dr. Mark Halfman's Welcome you to visit his Chember</p>
                    <p className='my-2 text-xl text-red-600'>Medicine Specialist</p>

                    <div className='my-5 space-x-4 flex'>
                        <Link className="btn btn-success text-white">Book Appoinment</Link>
                        <Link className="btn btn-warning">Get Special Offers</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;