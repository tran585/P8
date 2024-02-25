import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './Location.scss'
import Collapses from '../../components/Collapses/Collapses'
import Carroussel from '../../components/Carroussel/Carroussel'
import InformationsLocation from '../../components/InformationsLocation/InformationsLocation'

function Location({ locationDatas }) {
  const { getLinkLocation } = useParams({}) // to get current link url with Hook (exemple : /location/2139a317/ = /location/:getLinkLocation/)
  const [linkId, setLink] = useState({})

  useEffect(() => { // verify if link is right with datas location id, return true if ok
      if (locationDatas.length > 0) {
        locationDatas.find(({ id }) => getLinkLocation === id)
        ? setLink(true)
        : setLink(false)
    }
  }, [])

  return (
    <React.Fragment> {/* if linkId is not false = iteration on locationDatas else page Error */}
      {linkId ?  ( 
        locationDatas.map(
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
          }) => //return the same element by id (exemple : 2139a317)
          getLinkLocation === id && (
              <div className='main-container' key={`id-number-${id}`}>
                <Carroussel pictures={pictures} />
                <section className="logement-section">
                    <InformationsLocation title={title} location={location} tags={tags} host={host} rating={rating}/>
                  <div
                    className="section-collapses logement-page"> {/* unique creation className (logement-page) to adapte the style for location page */}
                      <Collapses
                        title={'Description'}
                        description={description}
                      />
                      <Collapses
                        title={'Equipments'}
                        equipments={equipments}
                      />
                  </div>
                </section>
              </div>
            )
        )
      ) : (
        <Navigate to="*" replace /> // redirection on error page if linkId is false
      )}
    </React.Fragment>
  )
}

export default Location