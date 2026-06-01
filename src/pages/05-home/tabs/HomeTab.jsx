import HomeBanners from "../../../components/home/HomeBanners.jsx";
import HomeInStoreHelpCard from "../../../components/home/HomeInStoreHelpCard.jsx";
import HomeWalletCard from "../../../components/home/HomeWalletCard.jsx";
import { homeInStoreHelp, walletSummary } from "../../../data/homeMock.js";

function HomeTab({ onOpenInStoreScan, onOpenStore }) {
    return (
        <div className="home-tab home-tab--home">
            <HomeWalletCard
                balance={walletSummary.balance}
                payableDebt={walletSummary.payableDebt}
                dueLabel={walletSummary.dueLabel}
            />
            <HomeBanners onOpenStore={onOpenStore} />
            <HomeInStoreHelpCard
                label={homeInStoreHelp.label}
                onClick={onOpenInStoreScan}
            />
        </div>
    );
}

export default HomeTab;
