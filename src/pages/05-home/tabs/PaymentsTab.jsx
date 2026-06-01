import PaymentCard from "../../../components/home/PaymentCard.jsx";
import { payments } from "../../../data/homeMock.js";

function PaymentsTab() {
    return (
        <div className="home-tab">
            <h2 className="home-page-heading">پرداخت‌ها</h2>

            <ul className="card-list">
                {payments.map((payment) => (
                    <li key={payment.id}>
                        <PaymentCard payment={payment} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PaymentsTab;
