function AppScaffold({ title, showBack = false, onBack, children }) {
    return (
        <section className="screen app-scaffold">
            <header className="top-bar">
                {showBack ? (
                    <md-icon-button aria-label="بازگشت" onClick={onBack}>
            <span className="material-symbols-rounded" aria-hidden="true">
              arrow_forward
            </span>
                    </md-icon-button>
                ) : (
                    <span className="top-bar-spacer" aria-hidden="true"></span>
                )}

                {title ? (
                    <h1 className="top-bar-title">{title}</h1>
                ) : (
                    <span aria-hidden="true"></span>
                )}

                <span className="top-bar-spacer" aria-hidden="true"></span>
            </header>

            <div className="screen-body">
                {children}
            </div>
        </section>
    );
}

export default AppScaffold;