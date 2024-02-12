import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/footer/Footer'
import MainPage from './pages/Home/Home'
import Location from './pages/Location/Location'
import Error from './pages/Error/Error'
import About from './pages/About/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function App() {
    const saveLocationDatas = localStorage.getItem('locationDatas')
    const [locationDatas, setLocationDatas] = useState(saveLocationDatas? JSON.parse(saveLocationDatas) :[])
    const [aboutDatas, setAboutDatas] = useState()
    useEffect(() => {
        localStorage.setItem('locationDatas', JSON.stringify(locationDatas))
    },[locationDatas])

    return (
    <Router>
    <Header />
    <main>
        <Routes>
            <Route path="/" element={<MainPage locationDatas={locationDatas} setLocationDatas={setLocationDatas}/>}/>
            <Route path="/location/:linkById/" element={<Location locationDatas={locationDatas} setLocationDatas={setLocationDatas}/>}/>
            <Route path='/about' element={<About aboutDatas={aboutDatas} setAboutDatas={setAboutDatas}/>}/>
            <Route path="*" element={<Error />} />
        </Routes>
    </main>
    <Footer />
</Router>)
}

export default App