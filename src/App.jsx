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
    const [locationDatas, setLocationDatas] = useState([])
    const [aboutDatas, setAboutDatas] = useState()

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/datas/logements.json')
            const datas = await response.json()
            setLocationDatas(datas)
        }
        fetchData()
    },[])

    return (
    <Router>
    <Header />
    <main>
        <Routes>
            <Route path="/:linkById" element={<MainPage locationDatas={locationDatas} setLocationDatas={setLocationDatas}/>}/>
            <Route path="/location" element={<Location />} />
            <Route path='/about' element={<About aboutDatas={aboutDatas} setAboutDatas={setAboutDatas}/>}/>
            <Route path="*" element={<Error />} />
        </Routes>
    </main>
    <Footer />
</Router>)
}

export default App