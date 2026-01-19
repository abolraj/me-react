import { faImage } from "@fortawesome/free-solid-svg-icons/faImage";
import { faLifeRing } from "@fortawesome/free-solid-svg-icons/faLifeRing";
import { faServer } from "@fortawesome/free-solid-svg-icons/faServer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Image, LifeBuoy, Server, Star } from "lucide-react";
import { useTranslation } from 'react-i18next'; // Import useTranslation

export default function Services({ ...props }) {
    const { t } = useTranslation(); // Initialize the t() function

    const services = [
        {
            icon: Image,
            iconColor: "text-pink-500",
            title: t("services.items.frontend.title"), // Localized title
            description: t("services.items.frontend.description"), // Localized description
            stars: 4,
        },
        {
            icon: Server,
            iconColor: "text-red-500",
            title: t("services.items.backend.title"), // Localized title
            description: t("services.items.backend.description"), // Localized description
            stars: 5,
        },
        {
            icon: LifeBuoy,
            iconColor: "text-sky-500",
            title: t("services.items.support.title"), // Localized title
            description: t("services.items.support.description"), // Localized description
            stars: 5,
        }
    ];

    return (
        <section className="service text-base-content" id="service">
            <div className="container mx-auto py-12">
                <div className="flex flex-wrap gap-2 justify-center items-stretch">
                    <div className="text-center w-full grow" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                        <h2 className="text-3xl md:text-5xl font-bold mb-10">
                            {t("services.title")} {/* Localized title */}
                        </h2>
                    </div>
                    {services.map((service, index) => (
                        <div key={index} className="md:w-1/4 grow bg-base-100 p-0 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300 hover:border-accent/30 group relative overflow-hidden ">
                            <div className="absolute z-[99] inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                            <div className="shadow-xl bg-base-100 text-base-content rounded-lg p-6 pb-8 h-full" data-aos="fade-up" data-aos-duration="800" data-aos-delay={300 + index * 200}>
                                <div className="text-start flex gap-2 items-center">
                                    <div className="text-primary mt-1 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        {<service.icon />}
                                    </div>
                                    <div className="">
                                        <h4 className="text-xl font-bold group-hover:text-primary transition-colors">
                                            {service.title}
                                        </h4>
                                    </div>
                                </div>
                                <p className="leading-relaxed text-start">
                                    {service.description}
                                </p>
                                <div className="absolute flex gap-1 text-yellow-400 right-2 bottom-2">
                                    {[0, 0, 0, 0, 0].slice(0, service.stars).map((s,i) => (
                                        <Star className="size-6 text-yellow-300 fill-current" key={i}/>
                                    ))}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                <div className="text-base-content mt-2">
                    <Link to="/services" className="w-full lg:w-1/3 grow">
                        <button className="btn btn-primary h-auto text-2xl p-2 w-full">
                            {t('services.wanna_look_for_services')}
                            <ArrowRight className="size-6 rtl:-scale-x-100" />
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}