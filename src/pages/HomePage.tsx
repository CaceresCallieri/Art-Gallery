import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import transition from "../transition"
import useScrollToTop from "../hooks/useScrollToTop"

import NavigationButton from "../components/NavigationButton"
import Picture from "../components/Picture"
import Footer from "../components/Footer"

const HomePage = () => {
    useScrollToTop()

    return (
        <>
            <main>
                <section className="hero">
                    <div className="welcome">
                        <img src="src\assets\images\image-hero.webp" alt="" />
                        <h1 className="logo">
                            MODERN <br />ART GALLERY
                        </h1>
                    </div>

                    <div className="location-container">
                        <p>
                            The arts in the collection of the Modern Art Gallery all started from a
                            spark of inspiration. Will these pieces inspire you? Visit us and find out.
                        </p>

                        <Link to="/location" >
                            <NavigationButton text="OUR LOCATION" />
                        </Link>
                    </div>
                </section>

                <article>
                    <div className="upper-article">
                        <motion.div className="text-block" id="text-block-1"
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <h2>YOUR DAY AT THE GALLERY</h2>
                            <p>
                                Wander through our distinct collections and find new insights
                                about our artists. Dive into the details of their creative process.
                            </p>
                        </motion.div>

                        <Picture imageSrc="src\assets\images\image-grid-1.webp" altText="" id="picture-1" />
                    </div>

                    <div className="lower-article">
                        <Picture imageSrc="src\assets\images\image-grid-2.webp" altText="" id="picture-2" />

                        <Picture imageSrc="src\assets\images\image-grid-3.webp" altText="" id="picture-3" />

                        <motion.div className="text-block black" id="text-block-2"
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <h2>COME & BE INSPIRED</h2>
                            <p>
                                We’re excited to welcome you to our gallery and see how our collections influence you.
                            </p>
                        </motion.div>
                    </div>

                </article>
            </main>

            <Footer />
        </>
    )
}

export default transition(HomePage)