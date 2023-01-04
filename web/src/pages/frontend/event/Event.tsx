import { Social, Navbar, Search, Footer
} from '../../../fragments/frontend'
import { EventSearch, SubscribeEvent } from '../../../fragments/frontend/Events'

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