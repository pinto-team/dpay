import { useState } from "react";

import StoreBranchCard from "../../components/home/StoreBranchCard.jsx";
import { mockStoreDetail } from "../../data/homeMock.js";

function StoreDetailView() {
    const store = mockStoreDetail;
    const [heroSrc, setHeroSrc] = useState(store.heroImage);

    return (
        <div className="page-content page-content--store">
            <img
                className="store-detail__hero"
                src={heroSrc}
                alt={store.name}
                loading="lazy"
                onError={() => {
                    const fallback = store.heroImage.replace(
                        /\.(jpe?g|png|webp)$/i,
                        ".svg"
                    );
                    if (fallback !== heroSrc) {
                        setHeroSrc(fallback);
                    }
                }}
            />

            <header className="store-detail__head">
                <h2 className="store-detail__name md-typescale-headline-small">
                    {store.name}
                </h2>
                <p className="store-detail__subtitle md-typescale-body-large">
                    {store.subtitle}
                </p>
                <ul className="store-detail__tags" aria-label="روش‌های خرید">
                    {store.purchaseTypes.map((type, index) => (
                        <li key={type}>
                            {index > 0 ? (
                                <span
                                    className="store-detail__tag-sep"
                                    aria-hidden="true"
                                >
                                    |
                                </span>
                            ) : null}
                            <span className="md-typescale-body-medium">
                                {type}
                            </span>
                        </li>
                    ))}
                </ul>
            </header>

            <section className="store-detail__section">
                <h3 className="store-detail__section-title md-typescale-title-medium">
                    {store.inStoreSectionTitle}
                </h3>
                <h3 className="store-detail__section-title md-typescale-title-medium">
                    {store.introSectionTitle}
                </h3>
                <p className="store-detail__intro md-typescale-body-medium">
                    {store.intro}
                </p>
            </section>

            <ul className="store-detail__meta">
                <li className="store-detail__meta-row">
                    <span
                        className="material-symbols-rounded store-detail__meta-icon"
                        aria-hidden="true"
                    >
                        location_on
                    </span>
                    <span className="md-typescale-body-medium">
                        {store.address}
                    </span>
                </li>
                <li className="store-detail__meta-row">
                    <span
                        className="material-symbols-rounded store-detail__meta-icon"
                        aria-hidden="true"
                    >
                        call
                    </span>
                    <a
                        className="store-detail__phone md-typescale-body-medium"
                        href={`tel:${store.phoneDial}`}
                    >
                        {store.phone}
                    </a>
                </li>
                <li className="store-detail__meta-row">
                    <span
                        className="material-symbols-rounded store-detail__meta-icon"
                        aria-hidden="true"
                    >
                        schedule
                    </span>
                    <span className="md-typescale-body-medium">
                        {store.hours}
                    </span>
                </li>
            </ul>

            <StoreBranchCard
                name={store.branch.name}
                address={store.branch.address}
                mapsUrl={store.branch.mapsUrl}
            />
        </div>
    );
}

export default StoreDetailView;
