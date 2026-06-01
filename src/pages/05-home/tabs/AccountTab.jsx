function AccountRow({ icon, label }) {
    return (
        <button type="button" className="account-row">
            <span className="material-symbols-rounded account-row__leading">
                {icon}
            </span>
            <span className="account-row__label md-typescale-title-medium">
                {label}
            </span>
            <span className="material-symbols-rounded account-row__trailing">
                chevron_left
            </span>
        </button>
    );
}

function AccountSection({ title, items }) {
    return (
        <section className="account-section">
            <h2 className="account-section__title md-typescale-title-small">
                {title}
            </h2>
            <md-elevated-card class="app-card account-section__card">
                {items.map((item, index) => (
                    <div key={item.label} className="account-section__row-wrap">
                        <AccountRow icon={item.icon} label={item.label} />
                        {index < items.length - 1 ? (
                            <div
                                className="account-section__divider"
                                aria-hidden="true"
                            ></div>
                        ) : null}
                    </div>
                ))}
            </md-elevated-card>
        </section>
    );
}

function AccountTab() {
    return (
        <div className="home-tab account-tab">
            <md-elevated-card class="app-card">
                <div className="account-profile-card">
                    <div className="account-profile-card__identity">
                        <div className="account-profile-card__avatar">
                            <span className="material-symbols-rounded">
                                account_circle
                            </span>
                        </div>
                        <div className="account-profile-card__body">
                            <p className="account-profile-card__name md-typescale-title-medium">
                                سیدمحمدرضا نواب
                            </p>
                            <p className="account-profile-card__phone md-typescale-body-medium">
                                ۰۹۱۹ ۲۵۷ ۳۶۱۳
                            </p>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="account-profile-card__edit"
                        aria-label="ویرایش"
                    >
                        <span
                            className="material-symbols-rounded"
                            aria-hidden="true"
                        >
                            chevron_left
                        </span>
                    </button>
                </div>
            </md-elevated-card>

            <AccountSection
                title="مدیریت حساب"
                items={[
                    { icon: "lock", label: "رمز عبور" },
                    { icon: "devices", label: "دستگاه های متصل" },
                ]}
            />

            <AccountSection
                title="اطلاع رسانی"
                items={[{ icon: "group_add", label: "دعوت از دوستان" }]}
            />

            <AccountSection
                title="پشتیبانی"
                items={[
                    { icon: "help", label: "راهنما" },
                    { icon: "error", label: "گزارش تخلف فروشگاه" },
                    { icon: "description", label: "شرایط و مقررات استفاده" },
                    { icon: "system_update", label: "به روزرسانی" },
                    { icon: "chat", label: "پشتیبانی آنلاین" },
                ]}
            />

            <md-outlined-card class="app-card account-logout-card">
                <button type="button" className="account-logout">
                    خروج از حساب کاربری
                </button>
            </md-outlined-card>
        </div>
    );
}

export default AccountTab;
