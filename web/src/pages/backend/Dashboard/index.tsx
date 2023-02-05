import { NavbarPanel, SidebarPanel } from "../../../fragments"

export const Dashboard = () => {

    return (
        <section id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
            data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full">
            <header className="topbar" data-navbarbg="skin6">
                <NavbarPanel />
            </header>
            <main>
                <SidebarPanel />
                
            </main>
            <footer className="footer-area">

            </footer> 
        </section>
    )
}