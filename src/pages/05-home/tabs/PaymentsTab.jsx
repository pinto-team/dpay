import PaymentCard from "../../../components/home/PaymentCard.jsx";
import { payments } from "../../../data/homeMock.js";

function PaymentsTab() {
    return (
        <div className="home-tab">
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
