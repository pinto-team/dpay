import { useCallback, useRef } from "react";

import useCameraQrScanner from "../../hooks/useCameraQrScanner.js";
import { inStoreScan } from "../../data/homeMock.js";

function InStoreScanView({ onScanSuccess }) {
    const handledRef = useRef(false);

    const handleDetect = useCallback(
        (value) => {
            if (handledRef.current) {
                return;
            }
            handledRef.current = true;
            onScanSuccess?.(value);
        },
        [onScanSuccess]
    );

    const { videoRef, error, isReady, canDetect, needsHttps } = useCameraQrScanner({
        enabled: true,
        onDetect: handleDetect,
    });

    return (
        <div className="in-store-scan">
            <div className="in-store-scan__camera">
                {!error ? (
                    <video
                        ref={videoRef}
                        className="in-store-scan__video"
                        playsInline
                        muted
                        autoPlay
                        aria-hidden="true"
                    />
                ) : (
                    <div className="in-store-scan__error">
                        <p className="md-typescale-body-medium">{error}</p>
                        {needsHttps ? (
                            <p className="in-store-scan__error-hint md-typescale-body-small">
                                روی لوکال با http دوربین روی موبایل کار
                                نمی‌کند؛ همان build را روی سرور با SSL تست
                                کنید.
                            </p>
                        ) : null}
                    </div>
                )}

                {!error ? (
                    <div className="in-store-scan__overlay" aria-hidden="true">
                        <div className="in-store-scan__frame">
                            <span className="in-store-scan__frame-corner in-store-scan__frame-corner--tl" />
                            <span className="in-store-scan__frame-corner in-store-scan__frame-corner--tr" />
                            <span className="in-store-scan__frame-corner in-store-scan__frame-corner--bl" />
                            <span className="in-store-scan__frame-corner in-store-scan__frame-corner--br" />
                        </div>
                    </div>
                ) : null}

                {!error && isReady && !canDetect ? (
                    <p className="in-store-scan__hint md-typescale-body-small">
                        دوربین فعال است. برای اسکن خودکار از Chrome یا Edge
                        استفاده کنید.
                    </p>
                ) : null}
            </div>

            <section className="in-store-scan__help">
                <h2 className="in-store-scan__help-title md-typescale-title-medium">
                    {inStoreScan.helpTitle}
                </h2>
                <p className="in-store-scan__help-body md-typescale-body-medium">
                    {inStoreScan.helpBody}
                </p>
            </section>
        </div>
    );
}

export default InStoreScanView;
