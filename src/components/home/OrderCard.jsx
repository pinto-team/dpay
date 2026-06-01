import StatusChip from "./StatusChip.jsx";

function OrderCard({ order, onSelect }) {
    return (
        <md-elevated-card
            class="app-card order-card"
            role="button"
            tabIndex={0}
            onClick={() => onSelect(order.id)}
            onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    onSelect(order.id);
                }
            }}
        >
            <div className="order-card__head">
                <span className="order-card__merchant md-typescale-title-medium">
                    {order.merchant}
                </span>
                <StatusChip status={order.status} label={order.statusLabel} />
            </div>

            <div className="order-card__price-row">
                <p className="order-card__amount md-typescale-title-medium">
                    <span className="amount-currency md-typescale-label-medium">
                        تومان
                    </span>
                    {order.amount}
                </p>
            </div>

            <div className="order-card__footer">
                <span className="order-card__datetime md-typescale-body-medium">
                    {order.datetime}
                </span>
                <span className="order-card__action md-typescale-label-large">
                    جزئیات
                    <span
                        className="material-symbols-rounded"
                        aria-hidden="true"
                    >
                        chevron_left
                    </span>
                </span>
            </div>
        </md-elevated-card>
    );
}

export default OrderCard;
