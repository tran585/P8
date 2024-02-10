import React from 'react'
import { useState, useEffect, useRef } from 'react'
import './collapses.scss'
import arrow from '../../assets/arrow_back_ios-24px 2.svg'


function Collapses({index, title, description}) {
    const [isOpen, setIsOpen] = useState(false)
    const [maxHeight, setMaxHeight] = useState([])
    const [numberElements, setNumberElements] = useState([])
    const tagColl = useRef(null)
        function handleEvent() { // rename all
            setIsOpen(isOpen => !isOpen)
        }
    useEffect(() => {
        const test = tagColl.current;
        if (test !== null && test.scrollHeight !== 0) {
            const newArray = [...numberElements];
            newArray.push(newArray[newArray.length - 1] === numberElements ? numberElements + 1 : numberElements);
            setNumberElements(newArray);
        }
    }, []);

        useEffect(() => {
            const test = tagColl.current.scrollHeight;
            setMaxHeight(isOpen ? test : null);
        }, [isOpen]);
    return (
        <React.Fragment>
            <div className='collapses-bar'>
                <span>{title}</span>
                <img style={{transform: isOpen? 'rotate(-180deg)' : 'rotate(0deg)', transition:isOpen? 'all 250ms' : 'all 250ms'}} className={isOpen? 'collapse-arrows' : null} src={arrow} alt="arrow" onClick={handleEvent}/>
            </div>
            <div style={{ height: isOpen&&maxHeight}} className={isOpen ? 'collapse-activated' : 'collapse'}>
            <p style={{ height: isOpen&&maxHeight, transition: 'all 250ms'}} ref={tagColl} className={isOpen ? "tag-collapses-activated" : "tag-collapses"}>{description}</p>
        </div>
        </React.Fragment>
    )
}

export default Collapses