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

function HomeBanners() {
    return (
        <section className="home-banners" aria-label="بنرهای تبلیغاتی">
            <a className="home-banners__item home-banners__item--wide" href="#">
                <HomeBannerImage
                    src={homeBanners.wide.src}
                    alt={homeBanners.wide.alt}
                    className="home-banners__img"
                />
            </a>

            <div className="home-banners__row">
                {homeBanners.half.map((banner) => (
                    <a
                        key={banner.src}
                        className="home-banners__item home-banners__item--half"
                        href="#"
                    >
                        <HomeBannerImage
                            src={banner.src}
                            alt={banner.alt}
                            className="home-banners__img"
                        />
                    </a>
                ))}
            </div>
        </section>
    );
}

export default HomeBanners;
