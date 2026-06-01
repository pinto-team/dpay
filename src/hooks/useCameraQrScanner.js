import { useEffect, useRef, useState } from "react";

import {
    getCameraAccessErrorMessage,
    requestCameraStream,
} from "../utils/camera.js";

function useCameraQrScanner({ enabled, onDetect }) {
    const videoRef = useRef(null);
    const onDetectRef = useRef(onDetect);
    const [error, setError] = useState(null);
    const [isReady, setIsReady] = useState(false);
    const [needsHttps, setNeedsHttps] = useState(false);

    onDetectRef.current = onDetect;

    useEffect(() => {
        if (!enabled) {
            return undefined;
        }

        let stream = null;
        let animationId = 0;
        let cancelled = false;
        let detector = null;

        const stop = () => {
            cancelled = true;
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
            stream?.getTracks().forEach((track) => track.stop());
            stream = null;
            const video = videoRef.current;
            if (video) {
                video.srcObject = null;
            }
        };

        const scanFrame = async () => {
            if (cancelled || !detector) {
                return;
            }

            const video = videoRef.current;
            if (!video || video.readyState < HTMLMediaElement.HAVE_ENOUGH_DATA) {
                animationId = requestAnimationFrame(scanFrame);
                return;
            }

            try {
                const codes = await detector.detect(video);
                if (codes.length > 0) {
                    onDetectRef.current?.(codes[0].rawValue);
                    return;
                }
            } catch {
                /* frame skip */
            }

            animationId = requestAnimationFrame(scanFrame);
        };

        const start = async () => {
            setError(null);
            setIsReady(false);
            setNeedsHttps(
                typeof window !== "undefined" && !window.isSecureContext
            );

            try {
                stream = await requestCameraStream();

                if (cancelled) {
                    stream.getTracks().forEach((track) => track.stop());
                    return;
                }

                const video = videoRef.current;
                if (!video) {
                    return;
                }

                video.srcObject = stream;
                await video.play();
                setIsReady(true);
                setNeedsHttps(false);

                if ("BarcodeDetector" in window) {
                    detector = new window.BarcodeDetector({ formats: ["qr_code"] });
                    animationId = requestAnimationFrame(scanFrame);
                }
            } catch (cameraError) {
                setError(getCameraAccessErrorMessage(cameraError));
            }
        };

        start();

        return stop;
    }, [enabled]);

    return {
        videoRef,
        error,
        isReady,
        needsHttps,
        canDetect:
            typeof window !== "undefined" && "BarcodeDetector" in window,
    };
}

export default useCameraQrScanner;
