import { Social, Navbar, Search, Footer, AreaLive, LatestLive, SubscribeLive
} from '../../../fragments/frontend'

export const Live = () => {
 
    return (
        <section>
            <header className="header-area">
                <Social />
                <Navbar />
                <Search />
            </header>
            <main>
                <AreaLive />
                <LatestLive />
                <SubscribeLive />
            </main>
            <footer className="footer-area">
                <Footer />
            </footer> 
        </section>
    )
}