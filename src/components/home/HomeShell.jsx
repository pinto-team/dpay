function HomeShell({ children, navBar, header }) {
    return (
        <div className="home-shell screen">
            {header ?? (
                <header className="top-bar top-bar--home" aria-hidden="true">
                    <span className="top-bar-spacer"></span>
                    <span></span>
                    <span className="top-bar-spacer"></span>
                </header>
            )}

            <main className="home-shell__content">{children}</main>

            <div className="home-nav-bar-wrap">{navBar}</div>
        </div>
    );
}

export default HomeShell;
