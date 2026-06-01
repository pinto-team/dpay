import { useState } from "react";

import LoginPage from "./pages/01-login/LoginPage.jsx";
import OtpPage from "./pages/02-otp/OtpPage.jsx";
import BasicInfoPage from "./pages/03-basic-info/BasicInfoPage.jsx";
import TermsPage from "./pages/04-terms/TermsPage.jsx";
import HomePage from "./pages/05-home/HomePage.jsx";

const pages = [LoginPage, OtpPage, BasicInfoPage, HomePage];

function App() {
    const [pageIndex, setPageIndex] = useState(0);
    const [showTerms, setShowTerms] = useState(false);

    const CurrentPage = pages[pageIndex];

    const goNext = () => {
        setPageIndex((current) => Math.min(current + 1, pages.length - 1));
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
            <CurrentPage
                onNext={goNext}
                onBack={goBack}
                onOpenTerms={() => setShowTerms(true)}
            />
        </main>
    );
}

export default App;