import AppScaffold from "../../components/AppScaffold.jsx";

function OtpPage({ onNext, onBack }) {
    const phoneNumber = "۰۹۱۹۲۵۷۳۶۱۳";

    return (
        <AppScaffold showBack onBack={onBack}>
            <div className="page-content">
                <header className="content-header">
                    <h2 className="content-title md-typescale-headline-medium">
                        کد تأیید را وارد کنید
                    </h2>

                    <p className="content-description md-typescale-body-large">
                        کد تأیید به شمارهٔ {phoneNumber} ارسال شد.
                    </p>
                </header>

                <div className="form-stack">
                    <div className="inline-helper md-typescale-body-medium">
                        <span>شماره موبایل اشتباه است؟</span>

                        <md-text-button onClick={onBack}>
                            ویرایش
                        </md-text-button>
                    </div>

                    <md-outlined-text-field
                        class="full-width otp-code-field"
                        label="کد تأیید"
                        type="tel"
                        inputmode="numeric"
                        autocomplete="one-time-code"
                        maxlength="5"
                    ></md-outlined-text-field>

                    <p className="helper-text md-typescale-body-medium">
                        ارسال دوبارهٔ کد تا ۰:۵۸
                    </p>

                    <div className="action-stack">
                        <md-filled-button class="full-width" onClick={onNext}>
                            تأیید و ادامه
                        </md-filled-button>
                    </div>
                </div>
            </div>
        </AppScaffold>
    );
}

export default OtpPage;