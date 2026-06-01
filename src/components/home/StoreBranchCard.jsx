function StoreBranchCard({ name, address, mapsUrl }) {
    return (
        <md-elevated-card class="app-card store-branch-card">
            <div className="store-branch-card__inner">
                <span className="store-branch-card__icon" aria-hidden="true">
                    <span className="material-symbols-rounded">location_on</span>
                </span>

                <div className="store-branch-card__body">
                    <p className="store-branch-card__name md-typescale-title-medium">
                        {name}
                    </p>
                    <p className="store-branch-card__address md-typescale-body-medium">
                        {address}
                    </p>
                </div>

                <a
                    className="store-branch-card__nav md-typescale-label-large"
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    مسیریابی
                    <span
                        className="material-symbols-rounded"
                        aria-hidden="true"
                    >
                        chevron_left
                    </span>
                </a>
            </div>
        </md-elevated-card>
    );
}

export default StoreBranchCard;
