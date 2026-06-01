import StatusChip from "./StatusChip.jsx";

function PaymentCard({ payment }) {
    return (
        <md-elevated-card class="app-card payment-card">
            <p className="payment-card__meta md-typescale-label-medium">
                {payment.date} | {payment.time}
            </p>

            <div className="payment-card__main">
                <StatusChip status={payment.status} label={payment.statusLabel} />
                <p className="payment-card__amount md-typescale-title-medium">
                    {payment.amount}
                    <span className="amount-currency md-typescale-label-medium">
                        تومان
                    </span>
                </p>
            </div>

            {payment.reference ? (
                <div className="payment-card__reference">
                    <span className="payment-card__reference-label md-typescale-label-medium">
                        شماره ارجاع:
                    </span>
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
