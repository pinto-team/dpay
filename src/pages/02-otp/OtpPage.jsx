import { useState } from "react";

import OtpInput from "../../components/auth/OtpInput.jsx";
import AppScaffold from "../../components/AppScaffold.jsx";
import { useCountdown } from "../../hooks/useCountdown.js";
import { validateOtp } from "../../utils/onboardingValidation.js";

const RESEND_SECONDS = 59;

function OtpPage({ phoneNumber = "۰۹۱۹۲۵۷۳۶۱۳", onNext, onBack }) {
    const [otp, setOtp] = useState("");
    const [otpError, setOtpError] = useState("");
    const { formatted, canResend, reset } = useCountdown(RESEND_SECONDS);

    const handleSubmit = () => {
        const result = validateOtp(otp);
        if (!result.ok) {
            setOtpError(result.message);
            return;
        }

        setOtpError("");
        onNext?.();
    };

    const handleOtpChange = (value) => {
        setOtp(value);
        if (otpError) {
            setOtpError("");
        }
    };

    const handleResend = () => {
        reset();
        setOtp("");
        setOtpError("");
    };

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

                    <OtpInput
                        value={otp}
                        onChange={handleOtpChange}
                        error={Boolean(otpError)}
                        errorMessage={otpError}
                    />

                    <div className="otp-resend">
                        {canResend ? (
                            <md-text-button onClick={handleResend}>
                                ارسال دوبارهٔ کد
                            </md-text-button>
                        ) : (
                            <p className="helper-text md-typescale-body-medium">
                                ارسال دوبارهٔ کد تا {formatted}
                            </p>
                        )}
                    </div>

                    <div className="action-stack">
                        <md-filled-button class="full-width" onClick={handleSubmit}>
                            تأیید و ادامه
                        </md-filled-button>
                    </div>
                </div>
            </div>
        </AppScaffold>
    );
}

export default OtpPage;
