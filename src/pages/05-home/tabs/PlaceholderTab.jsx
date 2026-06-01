function PlaceholderTab({ title, description, icon }) {
    return (
        <div className="home-tab home-tab--placeholder">
            <span
                className="material-symbols-rounded home-tab__placeholder-icon"
                aria-hidden="true"
            >
                {icon}
            </span>
            <h2 className="home-page-heading">{title}</h2>
            <p className="home-tab__placeholder-text md-typescale-body-large">
                {description}
            </p>
        </div>
    );
}

export default PlaceholderTab;
