import './styles/Global.css'

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

import HomePage from './pages/HomePage.js';
import LocationPage from './pages/LocationPage.js';

const App = () => {
    const location = useLocation()

    return (
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<HomePage />} />
                <Route path='/location' element={<LocationPage />} />
            </Routes>
        </AnimatePresence>
    )
}

export default App