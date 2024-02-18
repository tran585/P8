import React from 'react'
import { useState, useEffect, useRef } from 'react'
import './collapses.scss'
import arrow from '../../assets/arrow_back_ios-24px 2.svg'

function Collapses({ title, description, equipments }) {
  const [isOpen, setIsOpen] = useState(false)
  const [maxHeight, setMaxHeight] = useState([])
  const tagText = useRef()
  function handleEvent() {
    // rename all
    setIsOpen((isOpen) => !isOpen)
  }

  useEffect(() => {
      const test = tagText.current.scrollHeight
      setMaxHeight(isOpen ? test : null)
  }, [isOpen])
  console.log(maxHeight)

  return (
    <React.Fragment>
      <div className="collapses-container">
        <div className="collapses-bar">
          <span>{title}</span>
          <img
            style={{
              transform: isOpen ? 'rotate(-180deg)' : 'rotate(0deg)',
            }}
            className={isOpen ? 'collapse-arrows' : null}
            src={arrow}
            alt="arrow"
            onClick={handleEvent}
          />
        </div>
        <div
          style={{ height: isOpen && maxHeight }}
          className={isOpen ? 'collapse-activated' : 'collapse-desactivated'}>
          <p
            style={{
              height: isOpen && maxHeight,
              transition: 'all 250ms',
            }}
            ref={tagText}
            className={isOpen ? 'text-collapses-activated' : 'text-collapses'}>
            {description
              ? description
              : equipments.map((equipments, index) => <span key={`equipements-${index}`}>{equipments}</span>)}
          </p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Collapses
