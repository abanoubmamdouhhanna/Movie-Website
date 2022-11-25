import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import Loading from '../Loading/Loading'
import { getTrending } from '../Api/Api'
import homeStyle from './Home.module.css'
import { Offline } from "react-detect-offline";
import Disconnected from '../Disconnected/Disconnected'

export default function Home() {

  const[Movies ,setMovies]=useState([])
  const[Tv ,setTv]=useState([])

 async function getData()
 {
  let movies =await getTrending('movie')
  setMovies(movies)

  let tv =await getTrending('tv')
  setTv(tv)
 }
 
  useEffect(() => {
    getData()
  }, [])
  


  return (
    <>
<Offline>
  <Disconnected/>
</Offline>
    {Movies.length>0?<>
      <div className="container pt-4">
        <div className="row">
          <div className="col-md-4 ">
            <div>
              <div className={`w-25 ${homeStyle.border}`}></div>
              <h2>Trending <br/> Movies <br/>To Watch Now</h2>
              <p className={`${homeStyle.p}`}>Most watched movies by days</p>
              <div className={`w-100 ${homeStyle.border}`}></div>

            </div>
          </div>
          {Movies.map((value,index)=><Item key={index} data={value}/>)}
        </div>
      </div>

      <div className="container pt-5">
        <div className="row">
          <div className="col-md-4 ">
            <div>
              <div className={`w-25 ${homeStyle.border}`}></div>
              <h2>Trending <br/> Tv Shows <br/>To Watch Now</h2>
              <p className={`${homeStyle.p}`}>Most watched tv shows by days</p>
              <div className={`w-100 ${homeStyle.border}`}></div>

            </div>
          </div>
          {Tv.map((value,index)=><Item key={index} data={value}/>)}
        </div>
      </div></>:<Loading/>}
    </>
  )
}
