const NAV_ITEMS = [
    { label: "خانه", icon: "home" },
    { label: "سفارش‌ها", icon: "receipt_long" },
    { label: "پرداخت‌ها", icon: "payments" },
    { label: "حساب کاربری", icon: "person" },
];

function HomeBottomNav({ activeIndex, onChange }) {
    return (
        <nav className="home-bottom-nav" aria-label="ناوبری اصلی">
            {NAV_ITEMS.map((item, index) => {
                const isActive = activeIndex === index;

                return (
                    <button
                        key={item.label}
                        type="button"
                        className={`home-bottom-nav__tab${
                            isActive ? " home-bottom-nav__tab--active" : ""
                        }`}
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => onChange(index)}
                    >
                        <span className="home-bottom-nav__icon-slot">
                            <span
                                className="home-bottom-nav__indicator"
                                aria-hidden="true"
                            />
                            <span
                                className="material-symbols-rounded home-bottom-nav__icon"
                                aria-hidden="true"
                            >
                                {item.icon}
                            </span>
                        </span>
                        <span className="home-bottom-nav__label md-typescale-label-medium">
                            {item.label}
                        </span>
                    </button>
                );
            })}
        </nav>
    );
}

export default HomeBottomNav;
