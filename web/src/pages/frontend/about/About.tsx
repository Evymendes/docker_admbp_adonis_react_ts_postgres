import { Footer, Navbar, Search, Social, 
    AboutUs, CallUs, ChooseUs, SubscribeUs, TeamMembers 
} from "../../../fragments/frontend"

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