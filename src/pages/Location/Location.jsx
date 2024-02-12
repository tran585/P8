import { useParams, Navigate } from 'react-router-dom'
import React from 'react'
import { useEffect, useState } from 'react'
import './Location.scss'
import Collapses from '../../components/Collapses/Collapses'

function Location({ locationDatas, setlocationDatas }) {
  const { linkById } = useParams({})
  const [linkId, setLink] = useState({})
  useEffect(() => {
    function returnErrorLink() {
      // const testReturn = locationDatas.map(({id}) => id)
      // testReturn.includes(linkById)? setLink(true) : setLink(false)
      locationDatas.find(({ id }) => linkById === id)
        ? setLink(true)
        : setLink(false)
    }
    returnErrorLink()
  }, [])

  return (
    <React.Fragment>
      {linkId ? (
        <section className="logement-section">
          {locationDatas.map(
            ({
              pictures,
              title,
              host,
              rating,
              location,
              equipments,
              tags,
              id,
              description,
            }) =>
              linkById === id && (
                <React.Fragment>
                  <div key={id} className="title-container">
                    <h1>{title}</h1>
                    <p>{location}</p>
                    <ul>
                      {tags.map((tags, index) => (
                        <li key={`li-${index}`}>{tags}</li>
                      ))}
                    </ul>
                  </div>
                  <div
                    style={{ alignItems: 'start', flexDirection: 'row' }}
                    className="section-collapses">
                    <div className="collapses-container">
                      <Collapses
                        title={'equipments'}
                        description={equipments.map(
                          (equipment, equipmentIndex) => (
                            <span key={`equipment-${equipmentIndex}`}>
                              {equipment}
                            </span>
                          )
                        )}
                      />
                    </div>
                    <div className="collapses-container">
                      <Collapses
                        title={'description'}
                        description={description}
                      />
                    </div>
                  </div>
                </React.Fragment>
              )
          )}
        </section>
      ) : (
        <Navigate to="*" replace />
      )}
      {/* {linkId === true  && <div>Location page</div>}
            {linkId === false && <Navigate to='*' replace/> } */}
    </React.Fragment>
  )
}

export default Location
