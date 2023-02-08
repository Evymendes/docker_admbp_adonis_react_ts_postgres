import { BreadcrumbPanel } from "../../../components/BreadcrumbPanel"
import { Preloader } from "../../../components/Preloader"
import { FirstCards, SalesCharts, EarningsCharts, LeaderTable, FooterPanel, NavbarPanel, SidebarPanel } from "../../../fragments"
//import "./dashboard.css"

export const Dashboard = () => {

    return (
        <div>
            <div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
                data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full">
                <header className="topbar" data-navbarbg="skin6">
                    <NavbarPanel />
                </header>
                    <SidebarPanel />
                <div className="page-wrapper">
                    <BreadcrumbPanel />
                    <div className="container-fluid">
                        <FirstCards />
                        <SalesCharts />
                        <EarningsCharts />
                        <LeaderTable />
                    </div>
                    <FooterPanel />
                </div>
            </div>
        </div>
    )
}