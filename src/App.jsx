import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import MainPage from './pages/Home/Home'
import Location from './pages/Location/Location'
import Error from './pages/Error/Error'
import About from './pages/About/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
    const saveLocationDatas = localStorage.getItem('locationDatas')
    const [locationDatas, setLocationDatas] = useState(saveLocationDatas? JSON.parse(saveLocationDatas) : [])
    const [aboutDatas, setAboutDatas] = useState()

    useEffect(() => {
        async function fetchData() {
                const response = await fetch('/datas/logements.json')
                const datas = await response.json()
                localStorage.setItem('locationDatas', JSON.stringify(datas))
                setLocationDatas(datas)
        }
        fetchData()
    },[])

    return ( // Routes of the website (MainPage || Location|| About || Error)
    <Router>
    <Header />
    <main>
        <Routes>
            <Route path="/" element={<MainPage locationDatas={locationDatas} setLocationDatas={setLocationDatas} />}/>
            <Route path="/location/:getLinkLocation/" element={<Location locationDatas={locationDatas} />}/>
            <Route path='/about' element={<About aboutDatas={aboutDatas} setAboutDatas={setAboutDatas}/>}/>
            <Route path="*" element={<Error />} />
        </Routes>
    </main>
    <Footer />
</Router>)
}

export default App