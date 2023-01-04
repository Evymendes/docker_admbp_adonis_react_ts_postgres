import { Social, Navbar, Search, Footer, EventSearch, SubscribeEvent
} from '../../../fragments/frontend'

export const Event = () => {
 
    return (
        <section>
            <header className="header-area">
                <Social />
                <Navbar />
                <Search />
            </header>
            <main>
                <EventSearch />
                <SubscribeEvent />
            </main>
            <footer className="footer-area">
                <Footer />
            </footer> 
        </section>
    )
}