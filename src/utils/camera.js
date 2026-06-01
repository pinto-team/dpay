export class CameraAccessError extends Error {
    constructor(code, message) {
        super(message);
        this.name = "CameraAccessError";
        this.code = code;
    }
}

function resolveGetUserMedia() {
    if (navigator.mediaDevices?.getUserMedia) {
        return (constraints) => navigator.mediaDevices.getUserMedia(constraints);
    }

    const legacyGetUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia;

    if (!legacyGetUserMedia) {
        return null;
    }

    return (constraints) =>
        new Promise((resolve, reject) => {
            legacyGetUserMedia.call(navigator, constraints, resolve, reject);
        });
}

export function getCameraAccessErrorMessage(error) {
    if (error instanceof CameraAccessError) {
        return error.message;
    }

    const name = error?.name ?? "";

    if (name === "NotAllowedError" || name === "PermissionDeniedError") {
        return "دسترسی به دوربین رد شد. در تنظیمات Chrome اجازهٔ دوربین را برای این سایت فعال کنید.";
    }

    if (name === "NotFoundError" || name === "DevicesNotFoundError") {
        return "دوربینی روی این دستگاه پیدا نشد.";
    }

    if (name === "NotReadableError" || name === "TrackStartError") {
        return "دوربین در حال استفاده است یا در دسترس نیست.";
    }

    return "دسترسی به دوربین ممکن نشد. دوباره تلاش کنید.";
}

export async function requestCameraStream() {
    if (typeof window !== "undefined" && !window.isSecureContext) {
        throw new CameraAccessError(
            "insecure",
            "دوربین فقط روی HTTPS فعال می‌شود. برای تست روی گوشی از آدرس امن سرور (https) استفاده کنید، نه http."
        );
    }

    const getUserMedia = resolveGetUserMedia();
    if (!getUserMedia) {
        throw new CameraAccessError(
            "unsupported",
            "مرورگر شما API دوربین را در دسترس نگذاشته. Chrome را به‌روز کنید یا از HTTPS استفاده کنید."
        );
    }

    const constraints = {
        audio: false,
        video: {
            facingMode: { ideal: "environment" },
            width: { ideal: 1280 },
            height: { ideal: 720 },
        },
    };

    try {
        return await getUserMedia(constraints);
    } catch (error) {
        if (error instanceof CameraAccessError) {
            throw error;
        }

        try {
            return await getUserMedia({ audio: false, video: true });
        } catch (retryError) {
            throw retryError;
        }
    }
}
