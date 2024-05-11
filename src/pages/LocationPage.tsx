import "leaflet/dist/leaflet.css"

import { Link } from 'react-router-dom'
import transition from '../transition'
import useScrollToTop from "../hooks/useScrollToTop"

import NavigationButton from '../components/NavigationButton'
import Map from "../components/Map"
import OurLocation from '../components/OurLocation'
import Footer from '../components/Footer'

const LocationPage = () => {
    useScrollToTop()

    return (
        <div className="location-page">
            <main>
                <section>
                    <Link to='/'>
                        <NavigationButton text="BACK TO HOME" reversed />
                    </Link>

                    <Map />
                </section>

                <OurLocation />
            </main>

            <Footer goldTheme />
        </div>
    )
}

export default transition(LocationPage)