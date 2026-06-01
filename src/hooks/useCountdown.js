import { useEffect, useState } from "react";

import { toPersianDigits } from "../utils/persianDigits.js";

export function useCountdown(initialSeconds) {
    const [remaining, setRemaining] = useState(initialSeconds);

    useEffect(() => {
        if (remaining <= 0) {
            return undefined;
        }

        const timerId = window.setTimeout(() => {
            setRemaining((current) => current - 1);
        }, 1000);

        return () => window.clearTimeout(timerId);
    }, [remaining]);

    const formatted = toPersianDigits(
        `${Math.floor(remaining / 60)}:${String(remaining % 60).padStart(2, "0")}`
    );

    return {
        remaining,
        formatted,
        canResend: remaining === 0,
        reset: () => setRemaining(initialSeconds),
    };
}
