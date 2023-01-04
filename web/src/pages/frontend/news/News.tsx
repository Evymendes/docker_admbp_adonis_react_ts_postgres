import { Social, Navbar, Search, Footer, NewsArea, SubscribeNews
} from '../../../fragments/frontend'

export const News = () => {
 
    return (
        <section>
            <header className="header-area">
                <Social />
                <Navbar />
                <Search />
            </header>
            <main>
                <NewsArea />
                <SubscribeNews />
            </main>
            <footer className="footer-area">
                <Footer />
            </footer> 
        </section>
    )
}