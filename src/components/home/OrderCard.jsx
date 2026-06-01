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
            <div className="order-card__header">
                <span className="order-card__merchant md-typescale-title-medium">
                    {order.merchant}
                </span>
                <StatusChip status={order.status} label={order.statusLabel} />
            </div>

            <div className="order-card__amount md-typescale-headline-small">
                {order.amount}
                <span className="order-card__currency md-typescale-body-medium">
                    تومان
                </span>
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
