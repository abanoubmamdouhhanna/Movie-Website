import axios from 'axios'
import Joi from 'joi';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import regStyle from './Login.module.css'

export default function Login({saveUserData}) {

    let navigate =useNavigate();
    const [errorList, seterrorList] = useState([]);
    const [error ,setError]= useState('');
    const [isLoading ,setIsLoading]= useState(false);
    const [user, setUser] = useState({
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
   async function sendLoginDataToApi()
   {
   let {data}=await axios.post(`https://route-egypt-api.herokuapp.com/signin` ,user);
        if (data.message =='success')
        {
            setIsLoading(false);
            localStorage.setItem('userToken' , data.token);
            saveUserData();
            navigate('/home')
        }
        else
        {
            setIsLoading(false);
            setError(data.message)
        }
   }




//====================== Submit form =================
   function submitLoginForm(e)
   {
    e.preventDefault();
    setIsLoading(true);
   let validation = validateLoginForm();
   if (validation.error)
   {
    setIsLoading(false);
    seterrorList(validation.error.details)
   }
   else
   {
    sendLoginDataToApi();
   }
   }

   


//=============Validation =================================
   function validateLoginForm()
   {
    const schema=Joi.object({
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

   <form onSubmit={submitLoginForm}>
        <h2>Login</h2>
        

        <label htmlFor="email">email: </label>
        <input  onChange={getUserData} className={`form-control my-2 ${regStyle.my_input}`} type="email" name="email" id="email" />
        
        <label htmlFor="password">password: </label>
        <input  onChange={getUserData} className={`form-control my-2 ${regStyle.my_input}`} type="password" name="password" id="password" />

       
        <button className='btn btn-info mt-3' type='submit'>{isLoading==true?<i className='fas fa-spinner fa-spin'></i>:'Login'}</button>
        {/* <h6 className='pt-3 text-center'>Forgot Password ? <NavLink to={'/register'}>Signup</NavLink></h6> */}
        <div className='text-center'>
            <a  className={`a2  ${regStyle.pass}`}  onClick={(()=>window.alert("Make a new account HHHHHH"))}>Forgot Password?</a>
            <h6 className='pt-3 '>Don't have an account? <NavLink to={'/register'}>Signup</NavLink></h6>
        </div>
    </form>
   </div>
      
    </>
  )
}
