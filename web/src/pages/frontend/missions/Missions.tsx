import { Social, Navbar, Search, Footer
} from '../../../fragments/frontend'
import { LatestMissions, AreaMissions, SubscribeMissions } from '../../../fragments/frontend'

export const Missions = () => {
 
    return (
        <section>
            <header className="header-area">
                <Social />
                <Navbar />
                <Search />
            </header>
            <main>
                <AreaMissions />
                <LatestMissions />
                <SubscribeMissions />
            </main>
            <footer className="footer-area">
                <Footer />
            </footer> 
        </section>
    )
}