import OrderCard from "../../../components/home/OrderCard.jsx";
import { orderSections } from "../../../data/homeMock.js";

function OrdersTab({ onOpenOrder }) {
    return (
        <div className="home-tab">
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
