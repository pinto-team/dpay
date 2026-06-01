import { useEffect, useRef, useState } from "react";

import OrderDetailsView from "./OrderDetailsView.jsx";
import OrdersTab from "./tabs/OrdersTab.jsx";
import PaymentsTab from "./tabs/PaymentsTab.jsx";
import PlaceholderTab from "./tabs/PlaceholderTab.jsx";

const TAB = {
    ORDERS: 0,
    PAYMENTS: 1,
    STORES: 2,
    PROFILE: 3,
};

function HomePage() {
    const navRef = useRef(null);
    const [activeTab, setActiveTab] = useState(TAB.ORDERS);
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

    if (selectedOrderId) {
        return (
            <OrderDetailsView
                orderId={selectedOrderId}
                onBack={() => setSelectedOrderId(null)}
            />
        );
    }

    return (
        <div className="home-shell screen">
            <main className="home-shell__content">
                {activeTab === TAB.ORDERS ? (
                    <OrdersTab onOpenOrder={setSelectedOrderId} />
                ) : null}
                {activeTab === TAB.PAYMENTS ? <PaymentsTab /> : null}
                {activeTab === TAB.STORES ? (
                    <PlaceholderTab
                        title="فروشگاه‌های حضوری"
                        description="فهرست فروشگاه‌های حضوری به‌زودی در این بخش نمایش داده می‌شود."
                        icon="store"
                    />
                ) : null}
                {activeTab === TAB.PROFILE ? (
                    <PlaceholderTab
                        title="پروفایل"
                        description="اطلاعات حساب کاربری به‌زودی در این بخش قرار می‌گیرد."
                        icon="person"
                    />
                ) : null}
            </main>

            <md-navigation-bar
                ref={navRef}
                class="home-nav-bar"
                aria-label="ناوبری اصلی"
            >
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

                <md-navigation-tab label="فروشگاه‌ها">
                    <span slot="inactive-icon" className="material-symbols-rounded">
                        store
                    </span>
                    <span slot="active-icon" className="material-symbols-rounded">
                        store
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
        </div>
    );
}

export default HomePage;
