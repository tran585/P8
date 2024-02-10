import React from 'react'
import { useEffect } from 'react'
import Banner from '../../components/Banner/Banner'
import picture from '../../assets/fond-ecran-2.png'
import Collapses from '../../components/Collapses/Collapses'

function About({ aboutDatas, setAboutDatas }) {
    useEffect(() => {
        async function fetchDataAbout() {
            const aboutDatas = await fetch('/datas/about.json')
            const responseDatas = await aboutDatas.json()
            setAboutDatas(responseDatas)
        }
        fetchDataAbout()
    },[])


    return (
        <React.Fragment>
            <Banner picture={picture} />
            <section className='section-collapses'>
                {aboutDatas?.map(({id, title, description}, index, array) => (
                <div key={id} className='collapses-container'>
                    <Collapses array={array} index={index} title={title} description={description}/>
                </div>
                ))}
            </section>
        </React.Fragment>
    )
}

export default About
