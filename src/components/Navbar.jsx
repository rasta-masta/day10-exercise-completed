import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (  
    <div className="
    max-w-4xl 
    h-20 justify-between
    bg-purple-500 
    flex 
    m-5 p-5 mx-auto items-center 
    text-xl shadow-xl shadow-indigo-500/40
    rounded-md mb-10 ">
      
      <Link to="/" className="text-white">Register</Link>
      <Link to='/userTable' className="text-white">User</Link>
    </div>
  );
}
 
export default Navbar;