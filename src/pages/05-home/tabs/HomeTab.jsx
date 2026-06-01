import HomeBanners from "../../../components/home/HomeBanners.jsx";
import HomeInStoreHelpCard from "../../../components/home/HomeInStoreHelpCard.jsx";
import HomeWalletCard from "../../../components/home/HomeWalletCard.jsx";
import { homeInStoreHelp, walletSummary } from "../../../data/homeMock.js";

function HomeTab() {
    return (
        <div className="home-tab home-tab--home">
            <HomeWalletCard
                balance={walletSummary.balance}
                payableDebt={walletSummary.payableDebt}
                dueLabel={walletSummary.dueLabel}
            />
            <HomeBanners />
            <HomeInStoreHelpCard label={homeInStoreHelp.label} />
        </div>
    );
}

export default HomeTab;
