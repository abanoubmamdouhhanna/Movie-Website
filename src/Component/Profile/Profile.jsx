import React from 'react'
import image from '../../Images/avatar.png'

export default function Profile({userData}) {
    let {first_name ,last_name ,email ,age}=userData;
  return (
    <>
    <div className="container">
        <div className="row justify-content-center align-items-center pt-5 my-5">
          <div className='mb-5 fw-bolder'><h1 >User Profile:</h1></div>
            <div className="col-md-4">
                <div className='text-center'>
                <img className='img-fluid w-75' src={`${image}`} alt="image" />
                <h2 className='pt-4'>User Avatar</h2>
                </div>
            </div>
            <div className="col-md-8">
               <div>
               <h3>Name :{first_name}{' '}{last_name}</h3>
                <h3>Email: {email}</h3>
                <h3>Age: {age}</h3>
               </div>
            </div>
        </div>
    </div>
    
    </>
  )
}
