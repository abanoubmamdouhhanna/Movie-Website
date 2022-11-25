import axios from 'axios'
import Joi from 'joi';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import regStyle from './Register.module.css'

export default function Register() {

    let navigate =useNavigate();
    const [errorList, seterrorList] = useState([]);
    const [error ,setError]= useState('');
    const [isLoading ,setIsLoading]= useState(false);
    const [user, setUser] = useState({
        first_name:'',
        last_name:'',
        age:0,
        email:'',
        password:''
    })
    function getUserData(e)
    {
        let myUser ={...user}
        myUser[e.target.name] =e.target.value;
        setUser(myUser);
   }




//=========== send data to API ===============
   async function sendRegisterDataToApi()
   {
   let {data}=await axios.post(`https://route-egypt-api.herokuapp.com/signup` ,user);
        if (data.message =='success')
        {
            setIsLoading(false);
            navigate('/login')
        }
        else
        {
            setIsLoading(false);
            setError(data.message)
        }
   }




//====================== Submit form =================
   function submitRegisterForm(e)
   {
    e.preventDefault();
    setIsLoading(true);
   let validation = validateRegisterForm();
   if (validation.error)
   {
    setIsLoading(false);
    seterrorList(validation.error.details)
   }
   else
   {
    sendRegisterDataToApi();
   }
   }

   


//=============Validation =================================
   function validateRegisterForm()
   {
    const schema=Joi.object({
        first_name:Joi.string().pattern(/^[A-Z]/).min(3).max(10).required(),
        last_name :Joi.string().pattern(/^[A-Z]/).min(3).max(10).required(),
        age:Joi.number().min(16).max(80).required(),
        email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        password:Joi.string().pattern(/^[A-Z][a-z]{3,6}/).required()
    })
    return schema.validate(user,{abortEarly:false});
   }



  return (
    <>
   <div className='py-5'>

    {errorList.map((err,index)=><div key={index} className={`alert alert-info my-2 ${regStyle.errordiv}`}>{err.message}</div>)}
    {error.length>0?<div className={`alert alert-info my-2 ${regStyle.errordiv}`}>{error}</div>:''}

   <form onSubmit={submitRegisterForm}>
        <h2>Registration form</h2>
        <label htmlFor="first_name">first_name: </label>
        <input onChange={getUserData} className={`form-control my-2 ${regStyle.my_input}`} type="text" name="first_name" id="first_name" />
        
        <label htmlFor="last_name">last_name: </label>
        <input  onChange={getUserData} className={`form-control my-2 ${regStyle.my_input}`} type="text" name="last_name" id="last_name" />
    
        <label htmlFor="age">age: </label>
        <input  onChange={getUserData} className={`form-control my-2 ${regStyle.my_input}`} type="number" name="age" id="age" />
        
        <label htmlFor="email">email: </label>
        <input  onChange={getUserData} className={`form-control my-2 ${regStyle.my_input}`} type="email" name="email" id="email" />

        <label htmlFor="password">password: </label>
        <input  onChange={getUserData} className={`form-control my-2 ${regStyle.my_input}`} type="password" name="password" id="password" />

        <button className='btn btn-info mt-3' type='submit'>{isLoading==true?<i className='fas fa-spinner fa-spin'></i>:'Register'}</button>
        <h6 className='pt-3 text-center'>Already have an account ? <NavLink to={'/login'}>Login</NavLink></h6>
        
    </form>
   </div>
      
    </>
  )
}
