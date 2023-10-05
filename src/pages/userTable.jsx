import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import axios from "axios";

  const Table = ({reload, setReload}) => {
  const data = useSelector((state) => state.users.value)
  
  const handleDelete = async(id) => {
    try {
      await axios.delete(`http://localhost:2000/user/${id}`)
      setReload(!reload)
    } catch (err) {
      console.log(err)
    }
  }  

  return ( 
    <div>
      <Navbar/>
       <div className="
       max-w-xl mx-auto
       ">
        <table className="ml-4 mt-20">
        <thead>
        <tr className="bg-blue-900  border-2 text-white">
          <th className="px-16 py-2 text-center">Name</th>
          <th className="px-16 py-2 text-center">email</th>
          <th className="px-16 py-2 text-center">Password</th>
          <th></th>
        </tr>
        </thead>

      <tbody>
        {data.map((item) => {
          return (
            <tr key={item.id} className="bg-cyan-500 shadow-xl shadow-indigo-500/40 " >
              <td className="px-12 py-3 text-center">{item.name}</td>
              <td className="px-12 py-3 text-center">{item.email}</td>
              <td className="px-8 py-3 text-center">{item.password}</td>
              <td>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none"   stroke="currentColor" className="w-6 h-6 cursor-pointer" onClick={() => handleDelete(item.id)}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>

              </td>
            </tr>   
          )
        })}
        </tbody>
      </table>
      </div>
    </div>
    );
}
 
export default Table;