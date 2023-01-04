import { Social, Navbar, Search, Footer, AreaSermons, LatestSermons, SubscribeSermons
} from '../../../fragments/frontend'

export const Sermons = () => {
 
    return (
        <section>
            <header className="header-area">
                <Social />
                <Navbar />
                <Search />
            </header>
            <main>
                <AreaSermons />
                <LatestSermons />
                <SubscribeSermons />
            </main>
            <footer className="footer-area">
                <Footer />
            </footer> 
        </section>
    )
}