function HomeShell({ children, navBar, header, contentClassName }) {
    const contentClass = contentClassName
        ? `home-shell__content ${contentClassName}`
        : "home-shell__content";

    return (
        <div className="home-shell screen">
            {header}

            <main className={contentClass}>{children}</main>

            {navBar ? (
                <div className="home-nav-bar-wrap">{navBar}</div>
            ) : null}
        </div>
    );
}

export default HomeShell;
