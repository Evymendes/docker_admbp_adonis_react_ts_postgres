import React, { useEffect } from "react"
import { Social, Navbar, Search, Crose, Intro, Guests, Footer, Sermons, Gallery, News, Events, Subscribe, Preloader, Believe } from '../../fragments'
//import useScript from '../../hooks/Tools/useScript';


export const Home = () => {

    /*const LoadScripts = (props: any) => {
        useScript('../../content/js/jquery/jquery-2.2.4.min.js', 'jquery'),
        useScript('../../content/js/bootstrap/popper.min.js', 'popper'),
        useScript('../../content/js/bootstrap/bootstrap.min.js', 'bootstrap'),
        useScript('../../content/js/plugins/plugins.js', 'plugins'),
        useScript('../../content/js/jquery/active.js', 'active')
    }*/
 
    return (
        <div>
            <React.Fragment>
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
            </React.Fragment>
        </div>
    )
}