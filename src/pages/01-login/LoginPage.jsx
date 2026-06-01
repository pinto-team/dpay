import { useEffect, useRef } from "react";

import AppScaffold from "../../components/AppScaffold.jsx";
import { digitsOnly, toPersianDigits } from "../../utils/persianDigits.js";
import { validateMobile } from "../../utils/onboardingValidation.js";

function LoginPage({ onNext, onOpenTerms, initialPhone = "" }) {
    const phoneRef = useRef(null);

    useEffect(() => {
        const field = phoneRef.current;
        if (!field) {
            return undefined;
        }

        if (initialPhone) {
            field.value = initialPhone;
        }

        const handleInput = () => {
            const raw = digitsOnly(field.value).slice(0, 11);
            field.value = toPersianDigits(raw);
            field.error = false;
            field.errorText = "";
        };

        field.addEventListener("input", handleInput);
        return () => field.removeEventListener("input", handleInput);
    }, [initialPhone]);

    const handleSubmit = () => {
        const field = phoneRef.current;
        if (!field) {
            return;
        }

        const result = validateMobile(field.value);
        if (!result.ok) {
            field.error = true;
            field.errorText = result.message;
            return;
        }

        onNext?.(result.normalized);
    };

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
                        ref={phoneRef}
                        class="full-width onboarding-field"
                        label="شماره موبایل"
                        type="tel"
                        inputmode="tel"
                        autocomplete="tel"
                    ></md-outlined-text-field>

                    <div className="action-stack">
                        <md-filled-button class="full-width" onClick={handleSubmit}>
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
