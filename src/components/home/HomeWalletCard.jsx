import { useState } from "react";

import BottomSheet from "../common/BottomSheet.jsx";
import CreditDetailsSheet from "./CreditDetailsSheet.jsx";
import { creditDetails } from "../../data/homeMock.js";

function HomeWalletCard({ balance, payableDebt, dueLabel }) {
    const [detailsOpen, setDetailsOpen] = useState(false);

    return (
        <>
            <md-elevated-card class="app-card">
                <div className="home-wallet-card">
                    <div className="home-wallet-card__balance-row">
                        <p className="home-wallet-card__balance md-typescale-body-large">
                            <span className="home-wallet-card__balance-label">
                                موجودی:
                            </span>{" "}
                            <span className="home-wallet-card__balance-value md-typescale-title-medium">
                                {balance}
                                <span className="amount-currency md-typescale-body-medium">
                                    {" "}
                                    تومان
                                </span>
                            </span>
                        </p>
                        <button
                            type="button"
                            className="home-wallet-card__details"
                            onClick={() => setDetailsOpen(true)}
                        >
                            <span className="md-typescale-label-large">
                                جزئیات
                            </span>
                            <span
                                className="material-symbols-rounded"
                                aria-hidden="true"
                            >
                                chevron_left
                            </span>
                        </button>
                    </div>

                    <div
                        className="home-wallet-card__divider"
                        aria-hidden="true"
                    ></div>

                    <div className="home-wallet-card__debt-row">
                        <div className="home-wallet-card__debt-info">
                            <p className="home-wallet-card__debt-line md-typescale-body-medium">
                                <span className="home-wallet-card__debt-label">
                                    بدهی قابل‌پرداخت:
                                </span>{" "}
                                <span className="home-wallet-card__debt-value">
                                    {payableDebt}
                                    <span className="amount-currency">
                                        {" "}
                                        تومان
                                    </span>
                                </span>
                            </p>
                            <p className="home-wallet-card__due md-typescale-body-small">
                                سررسید: {dueLabel}
                            </p>
                        </div>
                        <md-filled-button class="home-wallet-card__pay">
                            پرداخت
                        </md-filled-button>
                    </div>
                </div>
            </md-elevated-card>

            <BottomSheet
                open={detailsOpen}
                onClose={() => setDetailsOpen(false)}
                title="جزئیات اعتبار"
                titleId="credit-details-title"
            >
                <CreditDetailsSheet
                    remaining={creditDetails.remaining}
                    total={creditDetails.total}
                    remainingRatio={creditDetails.remainingRatio}
                    helpTitle={creditDetails.helpTitle}
                    helpBody={creditDetails.helpBody}
                    storesActionLabel={creditDetails.storesActionLabel}
                />
            </BottomSheet>
        </>
    );
}

export default HomeWalletCard;
