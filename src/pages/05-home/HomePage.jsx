import { useState } from "react";

import HomeBottomNav from "../../components/home/HomeBottomNav.jsx";
import HomePageHeader from "../../components/home/HomePageHeader.jsx";
import HomeShell from "../../components/home/HomeShell.jsx";
import OrderDetailsView from "./OrderDetailsView.jsx";
import AccountTab from "./tabs/AccountTab.jsx";
import OrdersTab from "./tabs/OrdersTab.jsx";
import PaymentsTab from "./tabs/PaymentsTab.jsx";
import HomeTab from "./tabs/HomeTab.jsx";
import InStoreScanView from "./InStoreScanView.jsx";
import StoreDetailView from "./StoreDetailView.jsx";
import { inStoreScan, mockStoreDetail } from "../../data/homeMock.js";

const TAB = {
    HOME: 0,
    ORDERS: 1,
    PAYMENTS: 2,
    PROFILE: 3,
};

function HomePage({ onLogout }) {
    const [activeTab, setActiveTab] = useState(TAB.HOME);
    const [selectedOrderId, setSelectedOrderId] = useState(null);
    const [inStoreScanOpen, setInStoreScanOpen] = useState(false);
    const [storeDetailOpen, setStoreDetailOpen] = useState(false);

    const handleTabChange = (index) => {
        setActiveTab(index);
        setSelectedOrderId(null);
        setInStoreScanOpen(false);
        setStoreDetailOpen(false);
    };

    const navBar = (
        <HomeBottomNav activeIndex={activeTab} onChange={handleTabChange} />
    );

    const header = inStoreScanOpen ? (
        <header className="top-bar">
            <md-icon-button
                aria-label="بازگشت"
                onClick={() => setInStoreScanOpen(false)}
            >
                <span
                    className="material-symbols-rounded"
                    aria-hidden="true"
                >
                    arrow_forward
                </span>
            </md-icon-button>

            <h1 className="top-bar-title">{inStoreScan.title}</h1>

            <span className="top-bar-spacer" aria-hidden="true"></span>
        </header>
    ) : storeDetailOpen ? (
        <header className="top-bar">
            <md-icon-button
                aria-label="بازگشت"
                onClick={() => setStoreDetailOpen(false)}
            >
                <span
                    className="material-symbols-rounded"
                    aria-hidden="true"
                >
                    arrow_forward
                </span>
            </md-icon-button>

            <h1 className="top-bar-title">{mockStoreDetail.pageTitle}</h1>

            <span className="top-bar-spacer" aria-hidden="true"></span>
        </header>
    ) : selectedOrderId && activeTab === TAB.ORDERS ? (
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
        if (inStoreScanOpen) {
            return (
                <InStoreScanView
                    onScanSuccess={() => setInStoreScanOpen(false)}
                />
            );
        }

        if (storeDetailOpen) {
            return <StoreDetailView />;
        }

        if (selectedOrderId && activeTab === TAB.ORDERS) {
            return <OrderDetailsView orderId={selectedOrderId} />;
        }

        switch (activeTab) {
            case TAB.HOME:
                return (
                    <HomeTab
                        onOpenInStoreScan={() => setInStoreScanOpen(true)}
                        onOpenStore={() => setStoreDetailOpen(true)}
                    />
                );
            case TAB.ORDERS:
                return <OrdersTab onOpenOrder={setSelectedOrderId} />;
            case TAB.PAYMENTS:
                return <PaymentsTab />;
            case TAB.PROFILE:
                return <AccountTab onLogout={onLogout} />;
            default:
                return null;
        }
    };

    return (
        <HomeShell
            navBar={inStoreScanOpen ? null : navBar}
            header={header}
            contentClassName={
                inStoreScanOpen ? "home-shell__content--flush" : undefined
            }
        >
            {renderTabContent()}
        </HomeShell>
    );
}

export default HomePage;
