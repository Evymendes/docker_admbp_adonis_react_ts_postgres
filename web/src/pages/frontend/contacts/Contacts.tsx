import { Social, Navbar, Search, Footer, ContactMaps, ContactArea, ContactForm 
} from '../../../fragments/frontend'

export const Contacts = () => {
 
    return (
        <section>
            <header className="header-area">
                <Social />
                <Navbar />
                <Search />
            </header>
            <main>
                <ContactMaps />
                <ContactArea />
                <ContactForm />
            </main>
            <footer className="footer-area">
                <Footer />
            </footer> 
        </section>
    )
}