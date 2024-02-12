import React from 'react'
import { useEffect } from 'react'
import picture from '../../assets/fond-ecran-1.png'
import Banner from '../../components/Banner/Banner'
import GalleryLocation from '../../components/Gallery/Gallery'

function Home({ locationDatas, setLocationDatas }) {

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/datas/logements.json')
            const datas = await response.json()
            setLocationDatas(datas)
        }
        fetchData()
    },[])

    return (
        <React.Fragment>
            <Banner picture={picture} title="Chez vous, partout ailleurs" />
            <section className="section-gallery">
                <div className="cards-container">
                    {locationDatas.map(({ id, title, cover }) => 
                        <figure key={`gallery-location-${id}`}>
                            <GalleryLocation id={id} title={title} cover={cover}/>
                        </figure>
                    )}
                </div>
            </section>
        </React.Fragment>
    )
}

export default Home
