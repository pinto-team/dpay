import { digitsOnly, toPersianDigits } from "./persianDigits.js";

export function validateMobile(value) {
    const digits = digitsOnly(value);

    if (!digits) {
        return { ok: false, message: "شماره موبایل را وارد کنید." };
    }

    if (!/^09\d{9}$/.test(digits)) {
        return {
            ok: false,
            message: "شماره باید ۱۱ رقم باشد و با ۰۹ شروع شود.",
        };
    }

    return { ok: true, normalized: toPersianDigits(digits) };
}

export function validateOtp(value) {
    const digits = digitsOnly(value);

    if (digits.length !== 5) {
        return { ok: false, message: "کد ۵ رقمی را کامل وارد کنید." };
    }

    return { ok: true, normalized: toPersianDigits(digits) };
}

export function formatBirthDateInput(value) {
    const digits = digitsOnly(value).slice(0, 8);
    let formatted = "";

    if (digits.length <= 4) {
        formatted = digits;
    } else if (digits.length <= 6) {
        formatted = `${digits.slice(0, 4)}/${digits.slice(4)}`;
    } else {
        formatted = `${digits.slice(0, 4)}/${digits.slice(4, 6)}/${digits.slice(6)}`;
    }

    return toPersianDigits(formatted);
}

export function validateNationalId(value) {
    const digits = digitsOnly(value);

    if (digits.length !== 10) {
        return { ok: false, message: "شماره ملی باید ۱۰ رقم باشد." };
    }

    return { ok: true, normalized: toPersianDigits(digits) };
}

export function validateBirthDate(value) {
    const digits = digitsOnly(value);

    if (digits.length !== 8) {
        return {
            ok: false,
            message: "تاریخ را به صورت ۱۳۶۳/۰۶/۱۹ وارد کنید.",
        };
    }

    const year = Number(digits.slice(0, 4));
    const month = Number(digits.slice(4, 6));
    const day = Number(digits.slice(6, 8));

    if (year < 1300 || year > 1410) {
        return { ok: false, message: "سال تولد نامعتبر است." };
    }

    if (month < 1 || month > 12) {
        return { ok: false, message: "ماه تولد نامعتبر است." };
    }

    if (day < 1 || day > 31) {
        return { ok: false, message: "روز تولد نامعتبر است." };
    }

    return { ok: true, normalized: formatBirthDateInput(value) };
}
