
import React from 'react'
import './gallery.scss'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'




function GalleryLocation({ title, cover, linkId }) {
    const { linkById } = useParams()

    return ( //Create new link to location page
        <React.Fragment>
            <Link onClick={console.log(linkById)} to={`/${linkId}`}>
                <img src={cover} alt={title} />
            </Link>
            <figcaption>{title}</figcaption>
        </React.Fragment>
    )
}

export default GalleryLocation
