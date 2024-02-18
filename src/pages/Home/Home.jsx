import React from 'react'
import picture from '../../assets/fond-ecran-1.png'
import Banner from '../../components/Banner/Banner'
import GalleryLocation from '../../components/Gallery/Gallery'

function Home({ locationDatas }) {

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
