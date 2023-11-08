import React from 'react';
import Doctor from '../../../assests/icon/Doctor12.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className=' lg:flex max-w-screen-2xl md:flex max-w-2xl sm:flex max-w-sm my-4  rounded bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...'>
            <div className='lg:w-1/2 md:w-1/2 sm:w-1/2 my-4 mx-4 p-4 rounded'>
                <img  className='rounded px-2' src={Doctor} alt="" />
            </div>

            <div className='lg:w-1/2 md:w-1/2 sm:w-1/2 mt-12 mr-4 p-'>
                <div className='my-20 p-1'>
                    <h2 className='text-4xl mt-10 font-semibold text-white'>Dr. Mark HalfMan</h2>
                    <p className='my-2 text-xl text-white'>Dr. Mark Halfman's Welcome you to visit his Chember</p>
                    <p className='my-2 text-xl text-red-600'>Medicine Specialist</p>

                    <div className='   space-x-2 flex'>
                        <Link className="btn btn-success text-white">Book Appoinment</Link>
                        <Link className="btn btn-warning">Get Special Offers</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;