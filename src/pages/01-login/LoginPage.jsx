import AppScaffold from "../../components/AppScaffold.jsx";

function LoginPage({ onNext, onOpenTerms }) {
    return (
        <AppScaffold>
            <div className="page-content">
                <header className="content-header">
                    <h2 className="content-title md-typescale-headline-medium">
                        خوش آمدید!
                    </h2>

                    <p className="content-description md-typescale-body-large">
                        جهت ورود، لطفا شماره موبایل خود را وارد کنید.
                    </p>
                </header>

                <div className="form-stack">
                    <md-outlined-text-field
                        class="full-width"
                        label="شماره موبایل"
                        type="tel"
                        inputmode="tel"
                    ></md-outlined-text-field>

                    <div className="action-stack">
                        <md-filled-button class="full-width" onClick={onNext}>
                            قبول شرایط و ادامه
                        </md-filled-button>

                        <md-text-button onClick={onOpenTerms}>
                            شرایط استفاده از د پی
                        </md-text-button>
                    </div>
                </div>
            </div>
        </AppScaffold>
    );
}

export default LoginPage;