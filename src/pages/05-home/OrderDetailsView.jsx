import AppScaffold from "../../components/AppScaffold.jsx";
import StatusChip from "../../components/home/StatusChip.jsx";
import { getOrderDetail } from "../../data/homeMock.js";

function OrderDetailsView({ orderId, onBack }) {
    const order = getOrderDetail(orderId);

    return (
        <AppScaffold showBack onBack={onBack}>
            <div className="page-content page-content--details">
                <md-elevated-card class="app-card order-detail-card">
                    <div className="order-detail-card__header">
                        <h2 className="content-title md-typescale-headline-small">
                            {order.merchant}
                        </h2>
                        <div className="order-detail-card__chips">
                            <span className="detail-chip md-typescale-label-medium">
                                {order.purchaseType}
                            </span>
                            <StatusChip
                                status={order.status}
                                label={order.statusLabel}
                            />
                        </div>
                    </div>

                    <p className="order-detail-card__amount md-typescale-headline-medium">
                        {order.amount}
                        <span className="order-card__currency md-typescale-body-large">
                            تومان
                        </span>
                    </p>

                    <dl className="detail-meta">
                        <div className="detail-meta__row">
                            <dt className="md-typescale-body-medium">شمارهٔ سفارش:</dt>
                            <dd className="detail-meta__value md-typescale-body-medium">
                                {order.orderNumber}
                            </dd>
                        </div>
                        <div className="detail-meta__row">
                            <dt className="md-typescale-body-medium">
                                زمان ثبت سفارش:
                            </dt>
                            <dd className="md-typescale-body-medium">
                                {order.registeredAt}
                            </dd>
                        </div>
                    </dl>
                </md-elevated-card>

                {order.installments.length > 0 ? (
                    <section className="installments-section">
                        <h3 className="installments-section__title md-typescale-title-medium">
                            اقساط سفارش
                        </h3>

                        <ul className="card-list">
                            {order.installments.map((installment) => (
                                <li key={installment.title}>
                                    <md-outlined-card class="app-card installment-card">
                                        <div className="installment-card__header">
                                            <span className="md-typescale-title-small">
                                                {installment.title}
                                            </span>
                                            <StatusChip
                                                status={installment.status}
                                                label={installment.statusLabel}
                                            />
                                        </div>
                                        <p className="installment-card__amount md-typescale-title-medium">
                                            {installment.amount}
                                            <span className="order-card__currency md-typescale-body-small">
                                                تومان
                                            </span>
                                        </p>
                                        <p className="installment-card__due md-typescale-body-medium">
                                            تاریخ سررسید: {installment.dueDate}
                                        </p>
                                    </md-outlined-card>
                                </li>
                            ))}
                        </ul>
                    </section>
                ) : null}
            </div>
        </AppScaffold>
    );
}

export default OrderDetailsView;
