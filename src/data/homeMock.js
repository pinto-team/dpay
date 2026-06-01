/** دادهٔ نمونه — پوشش حالت‌های پرداخت */

export const walletSummary = {
    balance: "۸,۵۷۲,۰۰۰",
    payableDebt: "۶۱۷,۲۵۰",
    dueLabel: "پایان روز ۳۰ آبان",
};

export const homeInStoreHelp = {
    label: "در خرید حضوری چطور پرداخت کنم؟",
};

/** مسیر بنرها: فایل‌های banner1/2/3.jpg را در public/banners بگذارید */
export const homeBanners = {
    wide: {
        src: "/banners/banner1.jpg",
        alt: "بنر ۱",
    },
    half: [
        { src: "/banners/banner2.jpg", alt: "بنر ۲" },
        { src: "/banners/banner3.jpg", alt: "بنر ۳" },
    ],
};

export const creditDetails = {
    remaining: walletSummary.balance,
    total: "۱۰,۰۰۰,۰۰۰",
    remainingRatio: 0.8572,
    helpTitle: "چطور از اعتبار د‌پی استفاده کنم؟",
    helpBody:
        "می‌توانید با اعتبارتان از فروشگاه‌های حاضر در د‌پی به‌صورت آنلاین یا حضوری خرید کنید و در چهار قسط پرداخت کنید.",
    storesActionLabel: "مشاهده فروشگاه‌ها",
};

export const payments = [
    {
        id: "pay-1",
        date: "۱۴۰۵/۲/۲۷",
        time: "۱۱:۰۸",
        status: "success",
        statusLabel: "تراکنش موفق",
        reference: "345509840646",
        amount: "22,593,510",
    },
    {
        id: "pay-2",
        date: "۱۴۰۴/۱۰/۲۰",
        time: "۱۲:۵۶",
        status: "failed",
        statusLabel: "تراکنش ناموفق",
        amount: "4,486,008",
        note:
            "چنانچه مبلغ از حسابتان کم شده ولی صورت‌حساب پرداخت نشده است، مبلغ کم شده تا ۴۸ ساعت آینده به حساب بانکی‌تان برمی‌گردد.",
    },
    {
        id: "pay-3",
        date: "۱۴۰۴/۱۰/۲",
        time: "۲۰:۵۱",
        status: "success",
        statusLabel: "تراکنش موفق",
        reference: "224177797178",
        amount: "18,224,375",
    },
];

export const orderSections = [
    {
        id: "dey",
        title: "سفارش‌های دی",
        items: [
            {
                id: "ord-teknolife",
                merchant: "تکنولایف",
                status: "settled",
                statusLabel: "تسویه شده",
                amount: "31,682,400",
                datetime: "۲۰:۵۱ - ۱۴۰۴/۱۰/۲",
            },
        ],
    },

    {
        id: "shahrivar",
        title: "سفارش‌های شهریور",
        items: [
            {
                id: "ord-bnpl-active",
                merchant: "سوپرمارکت ادیب",
                status: "bnplActive",
                statusLabel: "اقساط فعال",
                amount: "5,960,000",
                datetime: "۱۱:۱۹ - ۱۴۰۴/۶/۱۸",
            },
            {
                id: "ord-snap-cancelled",
                merchant: "موبایل کیمیبا",
                status: "cancelled",
                statusLabel: "لغو شده",
                amount: "5,412,900",
                datetime: "۱۹:۳۵ - ۱۴۰۴/۶/۱۰",
            },
        ],
    },
];

export const orderDetailsById = {
    "ord-teknolife": {
        merchant: "تکنولایف",
        amount: "31,682,400",
        purchaseType: "خرید اقساطی",
        purchaseMode: "bnpl",
        status: "settled",
        statusLabel: "تسویه شده",
        orderNumber: "49898343",
        registeredAt: "۲۰:۵۱ - ۱۴۰۴/۱۰/۲",
        installments: [
            {
                title: "قسط اول",
                amount: "18,224,375",
                dueDate: "۲ دی ۱۴۰۴",
                status: "paid",
                statusLabel: "پرداخت‌شده",
            },
            {
                title: "قسط دوم",
                amount: "4,486,008",
                dueDate: "۳۰ بهمن ۱۴۰۴",
                status: "paid",
                statusLabel: "پرداخت‌شده",
            },
            {
                title: "قسط سوم",
                amount: "4,486,008",
                dueDate: "۲۹ اسفند ۱۴۰۴",
                status: "paid",
                statusLabel: "پرداخت‌شده",
            },
            {
                title: "قسط چهارم",
                amount: "4,486,008",
                dueDate: "۳۱ فروردین ۱۴۰۵",
                status: "paid",
                statusLabel: "پرداخت‌شده",
            },
        ],
    },

    "ord-bnpl-active": {
        merchant: "سوپرمارکت ادیب",
        amount: "5,960,000",
        purchaseType: "خرید اقساطی",
        purchaseMode: "bnpl",
        status: "bnplActive",
        statusLabel: "اقساط فعال",
        orderNumber: "35621908",
        registeredAt: "۱۱:۱۹ - ۱۴۰۴/۶/۱۸",
        installments: [
            {
                title: "قسط اول",
                amount: "1,490,000",
                dueDate: "۲۰ شهریور ۱۴۰۴",
                status: "paid",
                statusLabel: "پرداخت‌شده",
            },
            {
                title: "قسط دوم",
                amount: "1,490,000",
                dueDate: "۲۰ مهر ۱۴۰۴",
                status: "upcoming",
                statusLabel: "سررسید نزدیک",
            },
            {
                title: "قسط سوم",
                amount: "1,490,000",
                dueDate: "۲۰ آبان ۱۴۰۴",
                status: "upcoming",
                statusLabel: "در انتظار پرداخت",
            },
            {
                title: "قسط چهارم",
                amount: "1,490,000",
                dueDate: "۲۰ آذر ۱۴۰۴",
                status: "upcoming",
                statusLabel: "در انتظار پرداخت",
            },
        ],
    },

    "ord-snap-cancelled": {
        merchant: "موبایل کیمیبا",
        amount: "5,412,900",
        purchaseType: "خرید اقساطی",
        purchaseMode: "bnpl",
        status: "cancelled",
        statusLabel: "لغو شده",
        orderNumber: "26371505",
        registeredAt: "۱۹:۳۵ - ۱۴۰۴/۶/۱۰",
        installments: [
            {
                title: "قسط اول",
                amount: "1,353,225",
                dueDate: "۱۰ شهریور ۱۴۰۴",
                status: "refunded",
                statusLabel: "مبلغ عودت‌داده‌شده",
            },
            {
                title: "قسط دوم",
                amount: "1,353,225",
                dueDate: "۳۰ مهر ۱۴۰۴",
                status: "cancelled",
                statusLabel: "تراکنش لغوشده",
            },
            {
                title: "قسط سوم",
                amount: "1,353,225",
                dueDate: "۳۰ آبان ۱۴۰۴",
                status: "cancelled",
                statusLabel: "تراکنش لغوشده",
            },
            {
                title: "قسط چهارم",
                amount: "1,353,225",
                dueDate: "۳۰ آذر ۱۴۰۴",
                status: "cancelled",
                statusLabel: "تراکنش لغوشده",
            },
        ],
    },
};

export function getOrderDetail(orderId) {
    return (
        orderDetailsById[orderId] ?? {
            merchant: "فروشگاه",
            amount: "—",
            purchaseType: "خرید اقساطی",
            purchaseMode: "bnpl",
            status: "settled",
            statusLabel: "تسویه شده",
            orderNumber: "—",
            registeredAt: "—",
            installments: [],
        }
    );
}
