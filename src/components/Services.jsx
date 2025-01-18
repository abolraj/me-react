import { faImage } from "@fortawesome/free-solid-svg-icons/faImage";
import { faLifeRing } from "@fortawesome/free-solid-svg-icons/faLifeRing";
import { faServer } from "@fortawesome/free-solid-svg-icons/faServer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from 'react-i18next'; // Import useTranslation

export default function Services({ ...props }) {
    const { t } = useTranslation(); // Initialize the t() function

    const services = [
        {
            icon: faImage,
            iconColor: "text-pink-500",
            title: t("services.items.frontend.title"), // Localized title
            description: t("services.items.frontend.description") // Localized description
        },
        {
            icon: faServer,
            iconColor: "text-red-500",
            title: t("services.items.backend.title"), // Localized title
            description: t("services.items.backend.description") // Localized description
        },
        {
            icon: faLifeRing,
            iconColor: "text-sky-500",
            title: t("services.items.support.title"), // Localized title
            description: t("services.items.support.description") // Localized description
        }
    ];

    return (
        <section className="service text-base-content" id="service">
            <div className="container mx-auto py-12">
                <div className="flex flex-wrap justify-center items-stretch">
                    <div className="text-center w-full grow" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                        <h2 className="text-3xl md:text-5xl font-bold mb-10">
                            {t("services.title")} {/* Localized title */}
                        </h2>
                    </div>
                    {services.map((service, index) => (
                        <div key={index} className="w-full box-border md:w-1/3 py-2 md:p-4">
                            <div className="shadow-xl bg-base-100 text-base-content rounded-lg p-6 h-full" data-aos="fade-up" data-aos-duration="800" data-aos-delay={300 + index * 200}>
                                <div className="text-center">
                                    <FontAwesomeIcon icon={service.icon} className={`${service.iconColor} text-7xl md:text-9xl mb-6`} />
                                    <h3 className="text-xl md:text-3xl font-semibold">{service.title}</h3>
                                    <p className="leading-relaxed text-start">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}