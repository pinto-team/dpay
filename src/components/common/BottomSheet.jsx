import { useEffect } from "react";
import { createPortal } from "react-dom";

function BottomSheet({ open, onClose, title, titleId, children }) {
    const headingId = titleId ?? "bottom-sheet-title";

    useEffect(() => {
        if (!open) return;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [open, onClose]);

    if (!open) {
        return null;
    }

    return createPortal(
        <div className="bottom-sheet" role="presentation">
            <button
                type="button"
                className="bottom-sheet__scrim"
                aria-label="بستن"
                onClick={onClose}
            ></button>

            <div
                className="bottom-sheet__panel"
                role="dialog"
                aria-modal="true"
                aria-labelledby={headingId}
            >
                <header className="bottom-sheet__header">
                    <h2
                        id={headingId}
                        className="bottom-sheet__title md-typescale-title-medium"
                    >
                        {title}
                    </h2>
                    <md-icon-button aria-label="بستن" onClick={onClose}>
                        <span
                            className="material-symbols-rounded"
                            aria-hidden="true"
                        >
                            close
                        </span>
                    </md-icon-button>
                </header>

                <div
                    className="bottom-sheet__divider"
                    aria-hidden="true"
                ></div>

                <div className="bottom-sheet__body">{children}</div>
            </div>
        </div>,
        document.body
    );
}

export default BottomSheet;
