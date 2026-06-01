import HomeWalletCard from "../../../components/home/HomeWalletCard.jsx";
import { walletSummary } from "../../../data/homeMock.js";

function HomeTab() {
    return (
        <div className="home-tab home-tab--home">
            <HomeWalletCard
                balance={walletSummary.balance}
                payableDebt={walletSummary.payableDebt}
                dueLabel={walletSummary.dueLabel}
            />
        </div>
    );
}

export default HomeTab;
