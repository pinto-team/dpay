const TAB_TITLE = {
    1: "سفارش‌ها",
    2: "پرداخت‌ها",
    3: "حساب کاربری",
};

function HomePageHeader({ activeTab }) {
    const title = TAB_TITLE[activeTab];

    if (!title) {
        return null;
    }

    return (
        <header className="top-bar top-bar--page-title">
            <h1 className="top-bar-title">{title}</h1>
        </header>
    );
}

export default HomePageHeader;
