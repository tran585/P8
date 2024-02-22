import React from 'react'
import picture from '../../assets/background/fond-ecran-1.png'
import Banner from '../../components/Banner/Banner'
import GalleryLocation from '../../components/Gallery/Gallery'

function Home({ locationDatas }) {
    
    return (
        <React.Fragment>
            <Banner picture={picture} title="Chez vous, partout ailleurs" />
            <GalleryLocation locationDatas={locationDatas}/>
        </React.Fragment>
    )
}

export default Home