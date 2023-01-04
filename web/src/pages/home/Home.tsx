import React, { useEffect } from "react"
import { Social, Navbar, Search, Crose, Intro, Guests, Footer, 
    Sermons, Gallery, News, Events, Subscribe, Preloader, Believe
} from '../../fragments/frontend'

export const Home = () => {
 
    return (
        <section>
            <header className="header-area">
                <Social />
                <Navbar />
                <Search />
            </header>
            <main>
                <Crose />
                <Intro />
                <Guests />
                <Sermons />
                <Events />
                <News />
                <Gallery />
                <Subscribe />
            </main>
            <footer className="footer-area">
                <Footer />
            </footer> 
        </section>
    )
}