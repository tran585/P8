import React from 'react'
import { useState, useEffect, useRef } from 'react'
import './collapses.scss'
import arrow from '../../assets/utils/arrow_back_ios-24px 2.svg'

function Collapses({ title, description, equipments }) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentHeight, setCurrentHeight] = useState([])
  const currentTagText = useRef()

  function handleEvent() {//Event onClick on arrows to config className to have animation
    setIsOpen((isOpen) => !isOpen)
  }

  useEffect(() => { // by hook useRef get the current height on tag <p>
      const textHeight = currentTagText.current.scrollHeight
      setCurrentHeight(isOpen ? textHeight : null)
  }, [isOpen])

  return (
    <React.Fragment>
      <div className="collapses-container">
        <div className="collapses-bar">
          <h2>{title}</h2>
          <img
            className={isOpen ? 'collapse-arrows-activated' : 'collapse-arrows-desactivated'}
            src={arrow}
            alt="arrow"
            onClick={handleEvent}
          />
        </div>
        <div
          style={{ height: isOpen && currentHeight }}
          className={isOpen ? 'collapse-activated' : 'collapse-desactivated'}>
          {description ? 
          <p ref={currentTagText} className={isOpen ? 'text-collapses-activated' : 'text-collapses-desactivated'}>{description}</p>
          : <ul ref={currentTagText} className={isOpen ? 'text-collapses-activated' : 'text-collapses-desactivated'}>{equipments.map((equipments, index) => <li key={`equipements-${index}`}>{equipments}</li>)}</ul>
        }
        </div>
      </div>
    </React.Fragment>
  )
}

export default Collapses
