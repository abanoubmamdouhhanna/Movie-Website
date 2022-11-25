import React, { useEffect, useState } from 'react'
import { getTrending } from '../Api/Api'
import Item from '../Item/Item'
import Loading from '../Loading/Loading'

export default function Movies() {
  

  const[Movies ,setMovies]=useState([])


 async function getData()
 {
  let movies =await getTrending('movie')
  setMovies(movies)


 }
 
 useEffect(() => {
    getData()
  }, [])

  return (
    <>
     {Movies.length>0?<div className="container pt-4">
        <div className="row">
          {Movies.map((value,index)=><Item key={index} data={value}/>)}
        </div>
      </div>:<Loading/>}
    </>
  )
}
