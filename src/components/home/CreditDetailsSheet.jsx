function CreditProgressRing({ ratio, size = 104, stroke = 10 }) {
    const radius = (size - stroke) / 2;
    const center = size / 2;
    const circumference = 2 * Math.PI * radius;
    const filled = Math.min(Math.max(ratio, 0), 1) * circumference;

    return (
        <svg
            className="credit-details__ring"
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            aria-hidden="true"
        >
            <circle
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                className="credit-details__ring-track"
                strokeWidth={stroke}
            />
            <circle
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                className="credit-details__ring-progress"
                strokeWidth={stroke}
                strokeLinecap="round"
                strokeDasharray={`${filled} ${circumference - filled}`}
                transform={`rotate(-90 ${center} ${center})`}
            />
        </svg>
    );
}

function CreditDetailsSheet({
    remaining,
    total,
    remainingRatio,
    helpTitle,
    helpBody,
    storesActionLabel,
    onViewStores,
}) {
    return (
        <div className="credit-details">
            <div className="credit-details__summary">
                <div className="credit-details__stats">
                    <p className="credit-details__label md-typescale-body-medium">
                        باقی‌مانده اعتبار
                    </p>
                    <p className="credit-details__amount md-typescale-headline-small">
                        {remaining}
                        <span className="amount-currency md-typescale-title-medium">
                            {" "}
                            تومان
                        </span>
                    </p>
                    <span className="credit-details__total-pill md-typescale-body-small">
                        کل اعتبار: {total} تومان
                    </span>
                </div>

                <CreditProgressRing ratio={remainingRatio} />
            </div>

            <div
                className="spacer"
            ></div>

            <section className="credit-details__help">
                <h3 className="credit-details__help-title md-typescale-title-medium">
                    {helpTitle}
                </h3>
                <p className="credit-details__help-body md-typescale-body-medium">
                    {helpBody}
                </p>
                <md-outlined-button
                    class="full-width credit-details__stores-btn"
                    onClick={onViewStores}
                >
                    {storesActionLabel}
                </md-outlined-button>
            </section>
        </div>
    );
}

export default CreditDetailsSheet;
