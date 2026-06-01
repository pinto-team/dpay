function HomeShell({ children, navBar, header }) {
    return (
        <div className="home-shell screen">
            {header}

            <main className="home-shell__content">{children}</main>

            <div className="home-nav-bar-wrap">{navBar}</div>
        </div>
    );
}

export default HomeShell;
