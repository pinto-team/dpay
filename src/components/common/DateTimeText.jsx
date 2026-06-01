import { splitDateTime } from "../../utils/dateTime.js";

function DateTimeText({ date, time, value, className = "" }) {
    const parts = value ? splitDateTime(value) : { date, time };

    if (!parts.date && !parts.time) {
        return null;
    }

    return (
        <span
            className={`datetime-text md-typescale-body-small ${className}`.trim()}
        >
            {parts.date ? (
                <span className="datetime-text__date">{parts.date}</span>
            ) : null}
            {parts.date && parts.time ? (
                <span className="datetime-text__sep" aria-hidden="true">
                    |
                </span>
            ) : null}
            {parts.time ? (
                <span className="datetime-text__time">{parts.time}</span>
            ) : null}
        </span>
    );
}

export default DateTimeText;
