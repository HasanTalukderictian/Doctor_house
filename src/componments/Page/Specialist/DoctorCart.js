import React from 'react';

import { Link, } from 'react-router-dom';

const DoctorCart = ({ doctor }) => {



    const { _id,name, img, category, price } = doctor;
     
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img   src={img} alt="Shoes" className="rounded-xl w-[150px]" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="text-2xl">Disease Name: {name}</h2>
                <p>Specialist :{category}</p>
                <p>Fee: ${price}</p>
                <div className="card-actions">
                    <Link to={`/doctors/${_id}`} className="btn bg-[#ff3841]">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default DoctorCart;