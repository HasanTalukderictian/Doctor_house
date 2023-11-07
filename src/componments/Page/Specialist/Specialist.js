import React, { useEffect, useState } from 'react';
import DoctorCart from './DoctorCart';

const Specilist = () => {

    const [doctors, setDoctors] = useState([]);

    useEffect( () => {
        fetch('http://localhost:4000/doctors')
        .then(res => res.json())
        .then(data => {
        
            setDoctors(data);
        })
    },[])


    return (
        <div>
            <div className='text-center'>
                   <h2 className='my-6 mx-auto text-4xl font-bold'>Specialist</h2>
                   <p className='my-4 mx-auto text-orange-400 text-xl'>100% satisfication for you</p>
            </div>

            <div className='my-4 mx-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    doctors.map(doctor => <DoctorCart key={doctor._id}
                    doctor={doctor}></DoctorCart> )
                }
            </div>
        </div>
    );
};

export default Specilist;