import { useState } from "react";

import LoginPage from "./pages/01-login/LoginPage.jsx";
import OtpPage from "./pages/02-otp/OtpPage.jsx";
import BasicInfoPage from "./pages/03-basic-info/BasicInfoPage.jsx";
import TermsPage from "./pages/04-terms/TermsPage.jsx";
import HomePage from "./pages/05-home/HomePage.jsx";

const LAST_PAGE_INDEX = 3;

function App() {
    const [pageIndex, setPageIndex] = useState(0);
    const [showTerms, setShowTerms] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");

    const goNext = () => {
        setPageIndex((current) => Math.min(current + 1, LAST_PAGE_INDEX));
    };

    const goBack = () => {
        setPageIndex((current) => Math.max(current - 1, 0));
    };

    const closeTerms = () => setShowTerms(false);

    if (showTerms) {
        return (
            <main className="app-shell">
                <TermsPage onBack={closeTerms} onConfirm={closeTerms} />
            </main>
        );
    }

    return (
        <main className="app-shell">
            {pageIndex === 0 ? (
                <LoginPage
                    initialPhone={phoneNumber}
                    onNext={(phone) => {
                        setPhoneNumber(phone);
                        goNext();
                    }}
                    onOpenTerms={() => setShowTerms(true)}
                />
            ) : null}

            {pageIndex === 1 ? (
                <OtpPage
                    phoneNumber={phoneNumber}
                    onNext={goNext}
                    onBack={goBack}
                />
            ) : null}

            {pageIndex === 2 ? (
                <BasicInfoPage
                    phoneNumber={phoneNumber}
                    onNext={goNext}
                    onBack={goBack}
                />
            ) : null}

            {pageIndex === 3 ? (
                <HomePage
                    onLogout={() => {
                        setPhoneNumber("");
                        setPageIndex(0);
                    }}
                />
            ) : null}
        </main>
    );
}

export default App;
