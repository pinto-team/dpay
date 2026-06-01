import { useState } from "react";

import { homeBanners } from "../../data/homeMock.js";

function HomeBannerImage({ src, alt, className }) {
    const [imgSrc, setImgSrc] = useState(src);

    const handleError = () => {
        const fallback = src.replace(/\.(jpe?g|png|webp)$/i, ".svg");
        if (fallback !== imgSrc) {
            setImgSrc(fallback);
        }
    };

    return (
        <img
            className={className}
            src={imgSrc}
            alt={alt}
            loading="lazy"
            decoding="async"
            onError={handleError}
        />
    );
}

function HomeBanners({ onOpenStore }) {
    const handleOpen = (event) => {
        event.preventDefault();
        onOpenStore?.();
    };

    return (
        <section className="home-banners" aria-label="بنرهای تبلیغاتی">
            <button
                type="button"
                className="home-banners__item home-banners__item--wide"
                onClick={handleOpen}
            >
                <HomeBannerImage
                    src={homeBanners.wide.src}
                    alt={homeBanners.wide.alt}
                    className="home-banners__img"
                />
            </button>

            <div className="home-banners__row">
                {homeBanners.half.map((banner) => (
                    <button
                        key={banner.src}
                        type="button"
                        className="home-banners__item home-banners__item--half"
                        onClick={handleOpen}
                    >
                        <HomeBannerImage
                            src={banner.src}
                            alt={banner.alt}
                            className="home-banners__img"
                        />
                    </button>
                ))}
            </div>
        </section>
    );
}

export default HomeBanners;
