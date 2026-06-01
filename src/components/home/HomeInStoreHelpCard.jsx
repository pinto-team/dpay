function HomeInStoreHelpCard({ label, onClick }) {
    return (
        <md-elevated-card class="app-card home-action-card">
            <button
                type="button"
                className="home-action-row"
                onClick={onClick}
            >
                <span
                    className="material-symbols-rounded home-action-row__leading"
                    aria-hidden="true"
                >
                    barcode_scanner
                </span>
                <span className="home-action-row__label md-typescale-title-medium">
                    {label}
                </span>
                <span
                    className="material-symbols-rounded home-action-row__trailing"
                    aria-hidden="true"
                >
                    chevron_left
                </span>
            </button>
        </md-elevated-card>
    );
}

export default HomeInStoreHelpCard;
