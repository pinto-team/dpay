const STATUS_CLASS = {
    success: "status-chip--success",
    settled: "status-chip--settled",
    paid: "status-chip--settled",
    payNow: "status-chip--pay-now",
    bnplActive: "status-chip--bnpl-active",
    upcoming: "status-chip--upcoming",
    failed: "status-chip--error",
    cancelled: "status-chip--cancelled",
    refunded: "status-chip--neutral",
};

function StatusChip({ status, label }) {
    const className = STATUS_CLASS[status] ?? "status-chip--neutral";

    return (
        <span className={`status-chip md-typescale-label-medium ${className}`}>
            {label}
        </span>
    );
}

export default StatusChip;
