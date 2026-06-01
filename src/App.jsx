import { useState } from "react";

import LoginPage from "./pages/01-login/LoginPage.jsx";
import OtpPage from "./pages/02-otp/OtpPage.jsx";
import BasicInfoPage from "./pages/03-basic-info/BasicInfoPage.jsx";

const pages = [LoginPage, OtpPage, BasicInfoPage];

function App() {
    const [pageIndex, setPageIndex] = useState(0);

    const CurrentPage = pages[pageIndex];

    const goNext = () => {
        setPageIndex((current) => Math.min(current + 1, pages.length - 1));
    };

    const goBack = () => {
        setPageIndex((current) => Math.max(current - 1, 0));
    };

    return (
        <main className="app-shell">
            <CurrentPage onNext={goNext} onBack={goBack} />
        </main>
    );
}

export default App;