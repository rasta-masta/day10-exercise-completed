import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage} from "formik"
import * as Yup from 'yup'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be 2 character at min')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email adress format')
    .required('Email is required'),
  password: Yup.string()
    .min(3, 'Password must be 3 character at minimun')
    .required('Password is required'),  
})


const Formulir = () => {
  const navigate = useNavigate()
  const [show, setshow] = useState(false)
  const [reload, setReload] = useState(false)

  const handleSubmit =async(data) => {  
    try {
      await axios.post('http://localhost:2000/user', data)
      setReload(!reload)
      window.alert("data added succesfully")
      console.log("data added succesfully")
      navigate('/userTable')
    }catch (err) {
      console.log(err);
    }
  } 
  
  return (  
    <div className="
    border-2
    bg-cyan-600
    max-w-xl
    mx-auto
    flex
    p-10 rounded-xl
    shadow-xl shadow-indigo-500/40"    
    >
  
      <div className="
    border-2
    bg-white
    max-w-xl
    mx-auto
    p-4 
    rounded-md shadow-xl shadow-black
    "    >
      <h1 className="text-center font-semibold text-2xl">Sign Up Your Account </h1>
        <Formik 
        initialValues={{ 
          name: "",
          email : "", 
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values, action) => {
          handleSubmit(values)
          action.resetForm()
        }}
        >
          {(props) => {
            return(
              <Form>
                <div className="mt-6 flex flex-col">
                <label>Name:</label>
                <Field className="border-2 mt-1"
                type="text" 
                name="name" 
                autoComplete="off"
               />
               <ErrorMessage
               component = "div"
               name = "name"
               /> 
               </div> 
                
                <div className="mt-6 flex flex-col ">
                <label>Email: </label>
                <Field className="border-2 mt-1"
                type="email" 
                name="email" 
                autoComplete="off"
                />
               <ErrorMessage
               component = "div"
               name = "password"
               /> 

               </div> 
               <div className="mt-6 flex flex-col">
                <label className="text-sm">Password: </label>
                <Field className="border-2 mt-1"
                type={show? "text": "password"}
                name="password" 
                autoComplete="off"
                />
               <ErrorMessage
               component = "div"
               name = "password"
               /> 
               </div> 

               <button 
               className="
               border-2
               bg-blue-600  
               rounded-md
               p-2 text-white
               mt-4 ml-20
               hover:bg-sky-500
               "
               onClick={()=>setshow((show) => !show)}               
               type='submit'>Submit</button>
              </Form>
            )
          }}

          
        </Formik>
    </div>  
    </div>
  );
}
 
export default Formulir;