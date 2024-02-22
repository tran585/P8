import React from 'react'
import './gallery.scss'
import { Link } from 'react-router-dom'

function GalleryLocation({ locationDatas }) {
  return (
    //Create new link to location page
      <section className="section-gallery">
        <div className="cards-container">
          {locationDatas.map(
            (
              { id, title, cover } //iteration from location datas
            ) => (
              <figure key={`location-${id}`}>
                <Link to={`/location/${id}`}>
                  <img src={cover} alt={title} />
                </Link>
                <figcaption>{title}</figcaption>{' '}
              </figure>
            )
          )}
        </div>
      </section>
  )
}

export default GalleryLocation
