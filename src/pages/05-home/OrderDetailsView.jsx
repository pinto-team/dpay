import DateTimeText from "../../components/common/DateTimeText.jsx";
import StatusChip from "../../components/home/StatusChip.jsx";
import { getOrderDetail } from "../../data/homeMock.js";

function OrderDetailsView({ orderId }) {
    const order = getOrderDetail(orderId);
    const purchaseChipClass =
        order.purchaseMode === "payNow"
            ? "detail-chip--pay-now"
            : "detail-chip--bnpl";

    return (
        <div className="page-content page-content--details">
            <md-elevated-card class="app-card order-detail-card">
                <div className="order-detail-card__head">
                    <p className="order-detail-card__merchant md-typescale-title-large">
                        {order.merchant}
                    </p>

                    <div className="order-detail-card__chips">
                        <span
                            className={`detail-chip md-typescale-label-medium ${purchaseChipClass}`}
                        >
                            {order.purchaseType}
                        </span>
                        <StatusChip
                            status={order.status}
                            label={order.statusLabel}
                        />
                    </div>
                </div>

                <div className="order-detail-card__body">
                    <div className="order-detail-card__price">
                        <span className="order-detail-card__price-label md-typescale-body-medium">
                            قیمت کل سفارش
                        </span>
                        <p className="order-detail-card__amount md-typescale-title-medium">
                            <span className="amount-currency md-typescale-body-medium">
                                تومان
                            </span>
                            {order.amount}
                        </p>
                    </div>

                    <dl className="detail-meta detail-meta--in-card">
                        <div className="detail-meta__row">
                            <dt className="md-typescale-body-medium">
                                شمارهٔ سفارش
                            </dt>
                            <dd className="detail-meta__value md-typescale-body-medium">
                                {order.orderNumber}
                            </dd>
                        </div>
                        <div className="detail-meta__row">
                            <dt className="md-typescale-body-medium">
                                زمان ثبت سفارش
                            </dt>
                            <dd>
                                <DateTimeText value={order.registeredAt} />
                            </dd>
                        </div>
                    </dl>
                </div>
            </md-elevated-card>

            {order.paymentInfo?.length > 0 ? (
                <section className="installments-section">
                    <h3 className="installments-section__title md-typescale-title-medium">
                        اطلاعات پرداخت
                    </h3>

                    <md-outlined-card class="app-card payment-info-card">
                        <dl className="detail-meta detail-meta--compact">
                            {order.paymentInfo.map((row) => (
                                <div className="detail-meta__row" key={row.label}>
                                    <dt className="md-typescale-body-medium">
                                        {row.label}
                                    </dt>
                                    <dd
                                        className={`md-typescale-body-medium ${row.ltr ? "detail-meta__value" : ""}`}
                                    >
                                        {row.isDateTime ? (
                                            <DateTimeText value={row.value} />
                                        ) : (
                                            row.value
                                        )}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </md-outlined-card>
                </section>
            ) : null}

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
                                        <span className="installment-card__title md-typescale-title-small">
                                            {installment.title}
                                        </span>
                                        <StatusChip
                                            status={installment.status}
                                            label={installment.statusLabel}
                                        />
                                    </div>

                                    <div className="installment-card__row">
                                        <p className="installment-card__due md-typescale-body-medium">
                                            <span className="installment-card__meta-label">
                                                تاریخ سررسید:
                                            </span>
                                            {installment.dueDate}
                                        </p>
                                        <p className="installment-card__amount md-typescale-title-small">
                                            <span className="amount-currency md-typescale-label-medium">
                                                تومان
                                            </span>
                                            {installment.amount}
                                        </p>
                                    </div>
                                </md-outlined-card>
                            </li>
                        ))}
                    </ul>
                </section>
            ) : null}
        </div>
    );
}

export default OrderDetailsView;
