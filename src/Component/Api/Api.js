import axios from "axios"

export let getTrending = async(type)=>
{
  let{data}=await axios.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=4b6714627d96da71c16af6b6966c289e`)
  return data.results
}

export let getDetails = async(id,type)=>
{
  let{data}=await axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=4b6714627d96da71c16af6b6966c289e`)
  return data
}