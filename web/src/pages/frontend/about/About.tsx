import { Footer, Navbar, Search, Social } from "../../../fragments/frontend"
import { AboutUs, CallUs, ChooseUs, SubscribeUs, TeamMembers } from "../../../fragments/frontend/About"

export const About = () => {

    return (
        <section>
            <header className="header-area">
                <Social />
                <Navbar />
                <Search />
            </header>
            <main>
                <AboutUs />
                <CallUs />
                <ChooseUs />
                <TeamMembers />
                <SubscribeUs />     
            </main>
            <footer className="footer-area">
                <Footer />
            </footer> 
        </section>
    )
}