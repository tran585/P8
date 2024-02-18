import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './Location.scss'
import Collapses from '../../components/Collapses/Collapses'
import Carroussel from '../../components/Carroussel/Carroussel'
import InformationsLocation from '../../components/InformationsLocation/InformationsLocation'

function Location({ locationDatas }) {
  const { getLinkLocation } = useParams({})
  const [linkId, setLink] = useState({})
  
  
  useEffect(() => { // verify if link is right
      if (locationDatas.length > 0) {
        locationDatas.find(({ id }) => getLinkLocation === id)
        ? setLink(true)
        : setLink(false)
    }
  }, [])

  return (
    <React.Fragment>
      {linkId ? (
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
          }) =>
          getLinkLocation === id && (
              <div className='main-container' key={`id-number-${id}`}>
                <Carroussel pictures={pictures}/>
                <section className="logement-section">
                    <InformationsLocation title={title} location={location} tags={tags} host={host} rating={rating}/>
                  <div
                    style={{ alignItems: 'start', flexDirection: 'row' }}
                    className="section-collapses">
                      <Collapses
                        title={'equipments'}
                        equipments={equipments}
                      />
                      <Collapses
                        title={'description'}
                        description={description}
                      />
                  </div>
                </section>
              </div>
            )
        )
      ) : (
        <Navigate to="*" replace />
      )}
    </React.Fragment>
  )
}

export default Location