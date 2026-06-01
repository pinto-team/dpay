import DateTimeText from "../common/DateTimeText.jsx";
import StatusChip from "./StatusChip.jsx";

function PaymentCard({ payment }) {
    return (
        <md-elevated-card class="app-card payment-card">
            <div className="payment-card__top">
                <p className="payment-card__amount md-typescale-title-medium">
                    <span className="amount-currency md-typescale-label-medium">
                        تومان
                    </span>
                    {payment.amount}
                </p>
                <StatusChip status={payment.status} label={payment.statusLabel} />
            </div>

            <div className="payment-card__bottom md-typescale-body-small">
                <DateTimeText date={payment.date} time={payment.time} />

                {payment.reference ? (
                    <>
                        <span className="payment-card__reference">
                            <span className="payment-card__reference-label">
                                شماره ارجاع:
                            </span>
                            <span className="payment-card__reference-value">
                                {payment.reference}
                            </span>
                        </span>
                    </>
                ) : null}
            </div>

            {payment.note ? (
                <p className="payment-card__note md-typescale-body-small">
                    {payment.note}
                </p>
            ) : null}
        </md-elevated-card>
    );
}

export default PaymentCard;
