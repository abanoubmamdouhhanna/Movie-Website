import React from 'react'
import { Link } from 'react-router-dom'
import itemStyle from './Item.module.css'

export default function Item(props) {
  //console.log(props.data);
  let{title,overview,poster_path,id,vote_average,media_type}=props.data
  return (
    <>
     <div className="col-md-2">
      <div>
      <div className={`position-relative overflow-hidden ${itemStyle.item}`}>
          <img className='img-fluid' src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={`item ${id}`}/>
          <Link to={`/details/${id}/${media_type}`}>
          
          <div className={`d-flex align-items-center text-center ${itemStyle.overlay}`}>
            <p>{overview.split(" ").slice(0,10).join(' ')}</p>
          </div>
          
          </Link>


          <div className={`p-1 rounded ${itemStyle.vote}`}>
        {vote_average.toFixed(2)}
      </div>
      </div>
      </div>
   <div>
   <h5 className='my-3'>{title}</h5>
   </div>
      
      </div> 
    </>
  )
}
