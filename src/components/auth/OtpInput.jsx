import { useRef } from "react";

import { digitsOnly, toPersianDigits } from "../../utils/persianDigits.js";

function OtpInput({ value, onChange, error, errorMessage }) {
    const inputRefs = useRef([]);

    const digits = digitsOnly(value).padEnd(5, " ").slice(0, 5).split("");

    const focusInput = (index) => {
        inputRefs.current[index]?.focus();
    };

    const updateValue = (nextDigits) => {
        onChange(digitsOnly(nextDigits).slice(0, 5));
    };

    const handleChange = (index, event) => {
        const digit = digitsOnly(event.target.value).slice(-1);
        const next = [...digits.map((item) => (item === " " ? "" : item))];
        next[index] = digit;
        updateValue(next.join(""));

        if (digit && index < 4) {
            focusInput(index + 1);
        }
    };

    const handleKeyDown = (index, event) => {
        if (event.key === "Backspace" && !digits[index]?.trim() && index > 0) {
            event.preventDefault();
            focusInput(index - 1);
        }
    };

    const handlePaste = (event) => {
        event.preventDefault();
        const pasted = digitsOnly(event.clipboardData.getData("text")).slice(0, 5);
        updateValue(pasted);

        if (pasted.length > 0) {
            focusInput(Math.min(pasted.length, 4));
        }
    };

    return (
        <div className="otp-field">
            <div
                className={`otp-input${error ? " otp-input--error" : ""}`}
                dir="ltr"
            >
                {digits.map((digit, index) => (
                    <input
                        key={index}
                        ref={(element) => {
                            inputRefs.current[index] = element;
                        }}
                        className="otp-input__cell md-typescale-title-medium"
                        type="tel"
                        inputMode="numeric"
                        autoComplete={index === 0 ? "one-time-code" : "off"}
                        maxLength={1}
                        value={digit.trim() ? toPersianDigits(digit) : ""}
                        aria-label={`رقم ${index + 1} کد تأیید`}
                        onChange={(event) => handleChange(index, event)}
                        onKeyDown={(event) => handleKeyDown(index, event)}
                        onPaste={handlePaste}
                        onFocus={(event) => event.target.select()}
                    />
                ))}
            </div>

            {error && errorMessage ? (
                <p className="otp-field__error md-typescale-body-small">
                    {errorMessage}
                </p>
            ) : null}
        </div>
    );
}

export default OtpInput;
