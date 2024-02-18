import React from 'react'
import { useState } from 'react'
import './Carroussel.scss'
import arrowLeft from '../../assets/arrow_back_ios-24px 1.svg'
import arrowRight from '../../assets/arrow_forward_ios-24px 1.svg'


function Carroussel({pictures, title}) {
    const [indexPictures, setIndexPictures] = useState(0)

    function handleClick(event) {
      event.target.className === 'arrow-left' ? setIndexPictures(indexPictures > 0 ? indexPictures - 1 : pictures.length - 1) 
      : setIndexPictures(indexPictures < pictures.length -1 ? indexPictures + 1 : 0) 
    }
  return (
    <section className='pictures-section'>
      <img className='pictures-carroussel' src={pictures[indexPictures]} alt={title}/>
      {pictures.length > 1 ?
      <React.Fragment>
      <span className='index-pages'>{`${indexPictures +1}/${pictures.length}`}</span>
      <img onClick={(event) => handleClick(event)} className='arrow-left' src={arrowLeft} alt="arrow-left" />
      <img onClick={(event) => handleClick(event)} className='arrow-right' src={arrowRight} alt="arrow-right" /></React.Fragment>
      : null
    }
      </section>
  )
}

export default Carroussel
