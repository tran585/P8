
import React from 'react'
import './gallery.scss'
import { Outlet, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'




function GalleryLocation({ title, cover, id }) {
    // const { linkById } = useParams()
    // console.log(linkById)

    // useEffect(() => {
    //     console.log(linkById)
    //     linkById&& setLink(linkId)
    // },[linkById])
    return ( //Create new link to location page
        <React.Fragment>
            <Link to={`/location/${id}`}>
                <img src={cover} alt={title} />
            </Link>

            <figcaption>{title}</figcaption>
        </React.Fragment>
    )
}

export default GalleryLocation
