/** جدا کردن تاریخ و ساعت از رشته یا آبجکت */
export function splitDateTime(value) {
    if (!value) {
        return { date: "", time: "" };
    }

    if (typeof value === "object" && value.date) {
        return { date: value.date, time: value.time ?? "" };
    }

    const text = String(value).trim();
    const parts = text.split(/\s*[-–|]\s*/).filter(Boolean);

    if (parts.length >= 2) {
        const [first, second] = parts;
        const firstIsTime = /[:：]/.test(first);

        if (firstIsTime) {
            return { date: second, time: first };
        }

        return { date: first, time: second };
    }

    return { date: text, time: "" };
}
