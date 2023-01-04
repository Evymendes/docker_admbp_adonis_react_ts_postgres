import { Social, Navbar, Search, Footer
} from '../../../fragments/frontend'
import { LatestSermons, SermonsArea, SubscribeSermons } from '../../../fragments/frontend/Sermons'

export const Sermons = () => {
 
    return (
        <section>
            <header className="header-area">
                <Social />
                <Navbar />
                <Search />
            </header>
            <main>
                <SermonsArea />
                <LatestSermons />
                <SubscribeSermons />
            </main>
            <footer className="footer-area">
                <Footer />
            </footer> 
        </section>
    )
}