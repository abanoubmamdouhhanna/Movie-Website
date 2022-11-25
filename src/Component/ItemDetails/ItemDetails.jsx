import React, { useEffect, useState } from 'react'
import { getDetails } from '../Api/Api'
import detailsStyle from './ItemDetails.module.css'
import Loading from '../Loading/Loading'
import { useParams } from 'react-router-dom'

export default function ItemDetails() {
    let params = useParams()

    const [Details, setDetails] = useState('')


    async function getData() {
        let details = await getDetails(params.id, params.media)
        setDetails(details)


    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            {Details ? <div className="container p-5">
                <div className="row">
                    <div className="col-md-4">
                        <img className='img-fluid rounded' src={`https://image.tmdb.org/t/p/w500${Details.poster_path}`} alt="" />
                    </div>
                    <div className="col-md-8">
                        <h2>{Details.title} {Details.name}</h2>
                        <p>{Details.tagline}</p>
                        {Details.genres.map((value, index) => <span key={index} className={`badge ${detailsStyle.badge}`} >{value.name}</span>)}
                        <ul className={`list-unstyled ${detailsStyle.ul}`}>
                            <li>Vote : {Details.vote_average}</li>
                            <li>Vote Count : {Details.vote_count}</li>
                            <li>Popularity : {Details.popularity}</li>
                            <li>Release Date : {Details.release_date}</li>
                        </ul>
                        <p>{Details.overview}</p>
                    </div>
                </div>
            </div>
                : <Loading />}
        </>
    )
}
