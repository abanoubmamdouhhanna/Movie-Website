import React, { useEffect, useState } from 'react'
import { getPeople } from '../Api/Api'
import Item from '../Item/Item'
import Loading from '../Loading/Loading'

export default function People() {
//   const [People, setPeople] = useState([])
//   async function getPeopleData()
//   {
//     let people = await getPeople()
//     setPeople(people)
//   }

//   useEffect(() => {
//     getPeopleData();
//   }, [])
  


  return (
    <>
      {/* {People.length>0? <div className="container">
        <div className="row">

          {People.map((value,index)=><Item key={index} people={value}/>)}
        </div>
      </div>:<Loading/>}
     */}
    </>
  )
}
