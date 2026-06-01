import OrderCard from "../../../components/home/OrderCard.jsx";
import { orderSections } from "../../../data/homeMock.js";

function OrdersTab({ onOpenOrder }) {
    return (
        <div className="home-tab">
            <h2 className="home-tab__title content-title md-typescale-headline-medium">
                سفارش‌ها
            </h2>

            {orderSections.map((section) => (
                <section key={section.id} className="order-section">
                    <h3 className="order-section__title md-typescale-title-small">
                        {section.title}
                    </h3>

                    <ul className="card-list">
                        {section.items.map((order) => (
                            <li key={order.id}>
                                <OrderCard
                                    order={order}
                                    onSelect={onOpenOrder}
                                />
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </div>
    );
}

export default OrdersTab;
