import React from 'react'

function InformationsLocation({ title, location, tags, host, rating }) {
  const ratingArray = Array.from({ length: 5 }, (_, index) => index + 1)

  return (
    <div className="information-container">
      <div>
        <h1>{title}</h1>
        <p>{location}</p>
        <ul>
          {tags.map((tags, index) => (
            <li key={`li-${index}`}>{tags}</li>
          ))}
        </ul>
      </div>
      <div className="profil-container">
        <figure>
          <img src={host.picture} alt={host.name} />
          <figcaption>{host.name}</figcaption>
        </figure>
        <div className="rate-container">
          {ratingArray.map((index) =>
            Number(rating) >= index ? (
              <i key={`rate-${index}`} className="fa-solid fa-star" style={{ color: '#FF6060' }}></i>
            ) : (
              <i key={`rate-${index}`} className="fa-solid fa-star" style={{ color: '#E3E3E3' }}></i>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default InformationsLocation
