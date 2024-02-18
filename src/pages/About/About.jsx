import React from 'react'
import { useEffect } from 'react'
import Banner from '../../components/Banner/Banner'
import picture from '../../assets/fond-ecran-2.png'
import Collapses from '../../components/Collapses/Collapses'

function About({ aboutDatas, setAboutDatas }) {
  useEffect(() => {
    async function fetchDataAbout() { //get datas of about page by fetch
      const aboutDatas = await fetch('/datas/about.json')
      const responseDatas = await aboutDatas.json()
      setAboutDatas(responseDatas)
    }
    fetchDataAbout()
  }, [])

  return (
    <React.Fragment>
      <Banner picture={picture} />
      <section className="section-collapses">
        {aboutDatas?.map(({ id, title, description }) => (
            <Collapses key={id} title={title} description={description} />
        ))}
      </section>
    </React.Fragment>
  )
}

export default About
