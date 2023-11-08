import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const CheckOut = () => {
    
    const {user} = useContext(AuthContext);
    const doctor = useLoaderData();
    console.log(doctor);
    const { doctorName, price, category, visting_time, name } = doctor;
     
    const handleBook =event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email;
        const doctorName = form.doctorName.value;
        const category = form.category.value;
        const date = form.date.value;
        const price = form.price.value;
        const message  = form.message.value;
        const data ={name,email,doctorName,category,date,price,message}
        

        fetch(`http://localhost:4000/bookings`,{
            method:'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            form.reset();
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Appointment has Ready",
                    showConfirmButton: false,
                    timer: 2000
                  });
            }
        })



    }


    return (
        <div >
            <div className='lg:max-w-screen-2xl md:max-w-3xl sm:max-w-sm '>
                <form onSubmit={handleBook} >
                <div className='mx-26 my-25 p-8'>
                       
                       <div className='my-4 mx-4 p-6 bg-slate-200 rounded'>
                       <div className="form-control w-full my-12 mx-6 p-4  ">
                           
                           <div className=' lg:flex space-x-4 md:flex space-x-4 sm:grid  mb-3 mr-4 '>
                           
                           <input type="text" name='name' defaultValue={user?.displayName}placeholder="Your Name" className="input input-bordered w-full " />
                           <input type="date" name='date' className="input input-bordered w-full " />
                           </div>
                           
                           <div className=' lg:flex space-x-4 md:flex space-x-4 sm:grid mb-3 mr-4  '>
                           <input type="text" name='category' placeholder="category" defaultValue= {category} readOnly className="input input-bordered w-full " />
                           <input type="text" name='doctorName' defaultValue={doctorName} readOnly  placeholder="Your Email" className="input input-bordered w-full " />
                           </div>

                           <div className=' lg:flex space-x-4 md:flex space-x-4 sm:grid mb-3 mr-4  '>
                           <input type="text" name='price' placeholder="price" defaultValue= {'$ ' + price} readOnly className="input input-bordered w-full " />
                           <input type="email" name='email' defaultValue={user?.email} readOnly  placeholder="Your Email" className="input input-bordered w-full " />
                           </div>

                             <div className=' lg:flex space-x-4 md:flex space-x-4 sm:grid mb-3 mr-4 '>
                             <textarea className="textarea textarea-bordered w-full" name='message' placeholder="Write Your Message"></textarea>
                             </div>
                             
                             <div className=' lg:flex space-x-4 md:flex space-x-4 sm:grid mb-3 mr-4 '>
                                <input type="submit" value="Book Appointment"  className="btn  bg-[#FF3811] w-full"/>
                            
                             </div>
                            

                       </div>
                       </div>
                        
                   
                           
                            

                  

                        </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;