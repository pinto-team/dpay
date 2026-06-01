import { useEffect, useRef, useState } from "react";

import HomePageHeader from "../../components/home/HomePageHeader.jsx";
import HomeShell from "../../components/home/HomeShell.jsx";
import OrderDetailsView from "./OrderDetailsView.jsx";
import OrdersTab from "./tabs/OrdersTab.jsx";
import PaymentsTab from "./tabs/PaymentsTab.jsx";
import PlaceholderTab from "./tabs/PlaceholderTab.jsx";

const TAB = {
    HOME: 0,
    ORDERS: 1,
    PAYMENTS: 2,
    PROFILE: 3,
};

function HomePage() {
    const navRef = useRef(null);
    const [activeTab, setActiveTab] = useState(TAB.HOME);
    const [selectedOrderId, setSelectedOrderId] = useState(null);

    useEffect(() => {
        const bar = navRef.current;
        if (!bar) return;

        const handleActivated = (event) => {
            setActiveTab(event.detail.activeIndex);
            setSelectedOrderId(null);
        };

        bar.addEventListener("navigation-bar-activated", handleActivated);
        return () => {
            bar.removeEventListener("navigation-bar-activated", handleActivated);
        };
    }, []);

    useEffect(() => {
        if (navRef.current) {
            navRef.current.activeIndex = activeTab;
        }
    }, [activeTab]);

    const navBar = (
        <md-navigation-bar
            ref={navRef}
            class="home-nav-bar"
            aria-label="ناوبری اصلی"
        >
            <md-navigation-tab label="خانه">
                <span slot="inactive-icon" className="material-symbols-rounded">
                    home
                </span>
                <span slot="active-icon" className="material-symbols-rounded">
                    home
                </span>
            </md-navigation-tab>

            <md-navigation-tab label="سفارش‌ها">
                <span slot="inactive-icon" className="material-symbols-rounded">
                    receipt_long
                </span>
                <span slot="active-icon" className="material-symbols-rounded">
                    receipt_long
                </span>
            </md-navigation-tab>

            <md-navigation-tab label="پرداخت‌ها">
                <span slot="inactive-icon" className="material-symbols-rounded">
                    payments
                </span>
                <span slot="active-icon" className="material-symbols-rounded">
                    payments
                </span>
            </md-navigation-tab>

            <md-navigation-tab label="پروفایل">
                <span slot="inactive-icon" className="material-symbols-rounded">
                    person
                </span>
                <span slot="active-icon" className="material-symbols-rounded">
                    person
                </span>
            </md-navigation-tab>
        </md-navigation-bar>
    );

    const header =
        selectedOrderId && activeTab === TAB.ORDERS ? (
            <header className="top-bar">
                <md-icon-button
                    aria-label="بازگشت"
                    onClick={() => setSelectedOrderId(null)}
                >
                    <span
                        className="material-symbols-rounded"
                        aria-hidden="true"
                    >
                        arrow_forward
                    </span>
                </md-icon-button>

                <h1 className="top-bar-title">جزئیات سفارش</h1>

                <span className="top-bar-spacer" aria-hidden="true"></span>
            </header>
        ) : (
            <HomePageHeader activeTab={activeTab} />
        );

    const renderTabContent = () => {
        if (selectedOrderId && activeTab === TAB.ORDERS) {
            return <OrderDetailsView orderId={selectedOrderId} />;
        }

        switch (activeTab) {
            case TAB.HOME:
                return (
                    <PlaceholderTab
                        description="به د‌پی خوش آمدید. فروشگاه‌های حضوری و خدمات اصلی به‌زودی از این بخش در دسترس قرار می‌گیرند."
                        icon="home"
                    />
                );
            case TAB.ORDERS:
                return <OrdersTab onOpenOrder={setSelectedOrderId} />;
            case TAB.PAYMENTS:
                return <PaymentsTab />;
            case TAB.PROFILE:
                return (
                    <PlaceholderTab
                        description="اطلاعات حساب کاربری به‌زودی در این بخش قرار می‌گیرد."
                        icon="person"
                    />
                );
            default:
                return null;
        }
    };

    return (
        <HomeShell navBar={navBar} header={header}>
            {renderTabContent()}
        </HomeShell>
    );
}

export default HomePage;
