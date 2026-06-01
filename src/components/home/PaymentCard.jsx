import StatusChip from "./StatusChip.jsx";

function PaymentCard({ payment }) {
    return (
        <md-elevated-card class="app-card payment-card">
            <div className="payment-card__meta md-typescale-body-small">
                <span>
                    {payment.date} | {payment.time}
                </span>
            </div>

            <div className="payment-card__row">
                <StatusChip status={payment.status} label={payment.statusLabel} />
                <span className="payment-card__amount md-typescale-title-medium">
                    {payment.amount}
                    <span className="payment-card__currency md-typescale-body-small">
                        تومان
                    </span>
                </span>
            </div>

            {payment.reference ? (
                <div className="payment-card__reference">
                    <span className="md-typescale-label-medium">شماره ارجاع:</span>
                    <span className="payment-card__reference-value md-typescale-body-medium">
                        {payment.reference}
                    </span>
                </div>
            ) : null}

            {payment.note ? (
                <p className="payment-card__note md-typescale-body-small">
                    {payment.note}
                </p>
            ) : null}
        </md-elevated-card>
    );
}

export default PaymentCard;
