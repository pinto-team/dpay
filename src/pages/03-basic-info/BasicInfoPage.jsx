import AppScaffold from "../../components/AppScaffold.jsx";

function BasicInfoPage({ onNext, onBack }) {
    const phoneNumber = "۰۹۱۹۲۵۷۳۶۱۳";

    return (
        <AppScaffold showBack onBack={onBack}>
            <div className="page-content">
                <header className="content-header">
                    <h2 className="content-title md-typescale-headline-medium">
                        اطلاعات پایه
                    </h2>

                    <p className="content-description md-typescale-body-large">
                        اطلاعات مالک این خط را وارد کنید.
                    </p>

                    <p className="phone-display md-typescale-title-medium">
                        {phoneNumber}
                    </p>
                </header>

                <div className="form-stack">
                    <md-outlined-text-field
                        class="full-width"
                        label="شماره ملی"
                        type="tel"
                        inputmode="numeric"
                    ></md-outlined-text-field>

                    <md-outlined-text-field
                        class="full-width"
                        label="تاریخ تولد"
                        type="text"
                        inputmode="numeric"
                        placeholder="۱۳۶۳/۰۶/۱۹"
                    ></md-outlined-text-field>

                    <div className="action-stack action-stack--after-form">
                        <md-filled-button class="full-width" onClick={onNext}>
                            تایید مشخصات و ادامه
                        </md-filled-button>
                    </div>
                </div>
            </div>
        </AppScaffold>
    );
}

export default BasicInfoPage;