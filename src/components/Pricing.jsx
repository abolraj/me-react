import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faFile, faHourglass, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next'; // Import useTranslation

export default function Pricing() {
    const { t } = useTranslation(); // Initialize the t() function

    const pricingData = [
        {
            id: 'full-time',
            icon: faCalendar,
            title: t("pricing.plans.full_time.title"), // Localized title
            description: t("pricing.plans.full_time.description"), // Localized description
            price: t("pricing.plans.full_time.price"), // Localized price
            features: t("pricing.plans.full_time.features", { returnObjects: true }), // Localized features
            delay: 300
        },
        {
            id: 'fixed-price',
            icon: faFile,
            title: t("pricing.plans.fixed_price.title"), // Localized title
            description: t("pricing.plans.fixed_price.description"), // Localized description
            price: t("pricing.plans.fixed_price.price"), // Localized price
            features: t("pricing.plans.fixed_price.features", { returnObjects: true }), // Localized features
            delay: 500
        },
        {
            id: 'hourly',
            icon: faHourglass,
            title: t("pricing.plans.hourly.title"), // Localized title
            description: t("pricing.plans.hourly.description"), // Localized description
            price: t("pricing.plans.hourly.price"), // Localized price
            features: t("pricing.plans.hourly.features", { returnObjects: true }), // Localized features
            delay: 700
        }
    ];

    return (
        <section id="pricing" className="mh-pricing py-16 pt-12 lg:pt-24 text-base-content">
            <div className="container mx-auto">
                <div className="flex flex-col items-center">
                    <div className="section-title col-span-12" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                        <h3 className="text-3xl md:text-5xl px-6 py-4 font-bold text-center">
                            <FontAwesomeIcon icon={faMoneyBillWave} className="me-4 text-success" />
                            {t("pricing.title")} {/* Localized title */}
                        </h3>
                    </div>
                    <div className="w-full flex flex-wrap justify-around gap-3">
                        {pricingData.map((item) => (
                            <div key={item.id} className="sm:w-1/3 md:w-1/4 flex flex-col grow pricing bg-base-200 shadow-lg p-6 rounded-lg" data-aos="fade-up" data-aos-duration="800" data-aos-delay={item.delay}>
                                <FontAwesomeIcon icon={item.icon} className="text-primary text-4xl mb-4" />
                                <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                                <p className="mb-4">{item.description}</p>
                                <h5 className="text-xl font-semibold mb-6">
                                    {t("pricing.starting_from")} <span className="text-warning">{item.price}</span> {/* Localized starting from */}
                                </h5>
                                <ul className="mb-6 grow">
                                    {item.features.map((feature, index) => (
                                        <li key={index} className="mb-2">{feature}</li>
                                    ))}
                                </ul>
                                <a href="#">
                                    <button className="btn btn-primary btn-block">
                                        {t("pricing.hire_me")} {/* Localized hire me */}
                                    </button>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}