import AppScaffold from "../../components/AppScaffold.jsx";

function TermsPage({ onBack, onConfirm }) {
    return (
        <AppScaffold showBack onBack={onBack}>
            <div className="page-content">
                <header className="content-header">
                    <h2 className="content-title md-typescale-headline-medium">
                        قوانین و مقرارت عمومی
                    </h2>

                    <p className="content-description md-typescale-body-large">
                        شرایط استفاده از خدمات پرداخت اعتباری د‌پی
                    </p>
                </header>

                <article className="terms-body">
                    <p className="md-typescale-body-medium">
                        کاربران گرامی، لطفا پیش از استفاده از خدمات مربوط به دریافت کالا و
                        خدمات از محل اعتبار دیجی‌پی و یا از محل دریافت تسهیلات بانکی خرید کالا
                        از طریق د‌پی، نسبت به مطالعه دقیق متن مربوط به هریک از موارد مذکور
                        اقدام نمایید.
                    </p>

                    <h3 className="terms-section-title md-typescale-title-medium">
                        قوانین و مقررات دریافت تسهیلات بانکی خرید کالا از طریق دیجی‌پی
                    </h3>

                    <p className="md-typescale-body-medium">
                        پیشنهاد می‌شود کاربران گرامی پیش از نهایی نمودن دریافت تسهیلات بانکی
                        خرید کالا از پذیرندگان در تارنما یا اپلیکیشن د‌پی، نسبت به مطالعه دقیق
                        متن زیر، اقدام نمایند.
                    </p>

                    <p className="md-typescale-body-medium">
                        شماره تلفن همراه ثبت شده در پلتفرم دپی باید در مالکیت شخص کاربر
                        درخواست کننده خدمات باشد. از این رو کاربر تعهد نمود با انتقال سیم
                        کارت، مراتب را به دپی اطلاع رسانی و کلیه دیون خود را در قالب دین حال
                        به همراه وجه التزام احتمالی بلافاصله تسویه و به دپی پرداخت نماید.
                        مالک خط تلفن همراه در زمان دریافت اعتبار در مدل بانکی-تسهیلاتی مسئول
                        ایفای کلیه تعهدات بوده و هیچگونه عذری در خصوص استفاده دیگران از خط
                        مذکور مسموع نخواهد بود.
                    </p>

                    <p className="md-typescale-body-medium">
                        تخصیص اعتبار به کاربر منوط به تامین اعتبار از سوی نهاد تامین‌کننده مالی
                        طرف قرارداد دیجی‌پی است و دپی درخصوص اعطای اعتبار یا تأخیر در تخصیص
                        اعتبار توسط تامین‌کنندگان مالی هیچ‌گونه تعهدی ندارد. در صورت عدم تایید
                        تخصیص اعتبار از طرف تامین‌کننده مالی هزینه خدمات و زیرساخت به کیف پول
                        نقدی کاربر به صورت قابل برداشت منتقل می‌شود.
                    </p>
                </article>

                <div className="action-stack">
                    <md-filled-button class="full-width" onClick={onConfirm}>
                        تایید قوانین و مقررات
                    </md-filled-button>
                </div>
            </div>
        </AppScaffold>
    );
}

export default TermsPage;
