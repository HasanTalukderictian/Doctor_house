import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import icon from '../../../../assests/icon/docIco.png';
import { AuthContext } from '../../../../Provider/AuthProvider';
const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    
    const handleLogOut =() => {
         logOut()
         .then( {})
         .then(error => {
            console.log(error)
         })
    }

    const navOption = <> 
          <Link to='/'> <li><a>Home</a></li></Link>
          <Link><li><a>About</a></li></Link>
         
          { user ? <> 
            <Link to='/bookings'><li><a>Bookings</a></li></Link>
          <button onClick={handleLogOut} className='btn btn-warning btn-sm' ><li><a>LogOut</a></li></button> 
         
          </> 
           : <> <Link to='/login'><li><a>Login</a></li></Link> </>}
                       
                        
                       
       </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                         {navOption}
                    </ul>
                </div>
               <img className='w-[40px]' src={icon} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                     {navOption}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;