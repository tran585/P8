import React from 'react'
import './gallery.scss'
import { Link } from 'react-router-dom'


function GalleryLocation({ title, cover, id }) {

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
