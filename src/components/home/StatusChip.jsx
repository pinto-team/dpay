const STATUS_CLASS = {
    success: "status-chip--success",
    settled: "status-chip--success",
    paid: "status-chip--success",
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
