import { useEffect, useRef } from "react";

import AppScaffold from "../../components/AppScaffold.jsx";
import { digitsOnly, toPersianDigits } from "../../utils/persianDigits.js";
import {
    formatBirthDateInput,
    validateBirthDate,
    validateNationalId,
} from "../../utils/onboardingValidation.js";

function BasicInfoPage({ phoneNumber = "۰۹۱۹۲۵۷۳۶۱۳", onNext, onBack }) {
    const nationalIdRef = useRef(null);
    const birthDateRef = useRef(null);

    useEffect(() => {
        const field = nationalIdRef.current;
        if (!field) {
            return undefined;
        }

        const handleInput = () => {
            const raw = digitsOnly(field.value).slice(0, 10);
            field.value = toPersianDigits(raw);
            field.error = false;
            field.errorText = "";
        };

        field.addEventListener("input", handleInput);
        return () => field.removeEventListener("input", handleInput);
    }, []);

    useEffect(() => {
        const field = birthDateRef.current;
        if (!field) {
            return undefined;
        }

        const handleInput = () => {
            field.value = formatBirthDateInput(field.value);
            field.error = false;
            field.errorText = "";
        };

        field.addEventListener("input", handleInput);
        return () => field.removeEventListener("input", handleInput);
    }, []);

    const handleSubmit = () => {
        const nationalIdField = nationalIdRef.current;
        const birthDateField = birthDateRef.current;
        if (!nationalIdField || !birthDateField) {
            return;
        }

        const nationalIdResult = validateNationalId(nationalIdField.value);
        const birthDateResult = validateBirthDate(birthDateField.value);

        nationalIdField.error = !nationalIdResult.ok;
        nationalIdField.errorText = nationalIdResult.ok ? "" : nationalIdResult.message;

        birthDateField.error = !birthDateResult.ok;
        birthDateField.errorText = birthDateResult.ok ? "" : birthDateResult.message;

        if (!nationalIdResult.ok || !birthDateResult.ok) {
            return;
        }

        onNext?.();
    };

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
                        ref={nationalIdRef}
                        class="full-width onboarding-field"
                        label="شماره ملی"
                        type="tel"
                        inputmode="numeric"
                    ></md-outlined-text-field>

                    <md-outlined-text-field
                        ref={birthDateRef}
                        class="full-width onboarding-field birth-date-field"
                        label="تاریخ تولد"
                        type="tel"
                        inputmode="numeric"
                        placeholder="۱۳۶۳/۰۶/۱۹"
                    ></md-outlined-text-field>

                    <p className="field-hint md-typescale-body-small">
                        تاریخ را به صورت سال/ماه/روز وارد کنید؛ مثلاً ۱۳۶۳/۰۶/۱۹
                    </p>

                    <div className="action-stack action-stack--after-form">
                        <md-filled-button class="full-width" onClick={handleSubmit}>
                            تایید مشخصات و ادامه
                        </md-filled-button>
                    </div>
                </div>
            </div>
        </AppScaffold>
    );
}

export default BasicInfoPage;
