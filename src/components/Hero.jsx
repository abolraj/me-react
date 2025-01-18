import { useEffect } from "react";
import heroImg from "@assets/hero.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faTelegram } from "@fortawesome/fontawesome-free-brands";
import { useTranslation } from "react-i18next"; // Import useTranslation

export default function Hero({ ...props }) {
    const { t } = useTranslation(); // Initialize useTranslation

    return (
        <section className="text-base-content py-4 pt-12 lg:pt-24 max-w-[60rem] mx-auto" id="home">
            <div className="bg-opacity-50">
                <div className="container mx-auto">
                    <div className="flex flex-wrap-reverse gap-2 justify-between items-end">
                        <div className="w-full sm:w-1/2">
                            <div className="text-start">
                                <div data-aos="fade-up">
                                    <span className="bg-info text-info-content text-lg font-bold px-6 py-2 ltr:rounded-bl-none rtl:rounded-br-none rounded-full inline-block">
                                        {t('hero.greeting')} {/* Use t() for greeting */}
                                    </span>
                                </div>
                                <h2 className="text-4xl sm:text-6xl font-semibold leading-none mt-2 mb-2" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                                    {t('hero.first-name')} <br /> {t('hero.last-name')} {/* Use t() for name and familyName */}
                                </h2>
                                <h4 className="text-xl sm:text-2xl leading-8 mb-8" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
                                    {t('hero.role')} {/* Use t() for role */}
                                </h4>
                                <ul className="mt-5 space-y-3">
                                    <li className="group flex items-center space-x-3" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                                        <FontAwesomeIcon icon={faEnvelope} className="group-hover:text-info" />
                                        <a href="mailto:fazlabol18@gmail.com" className="link-info text-base-content !mx-2" dir="ltr">
                                            {t('hero.contact.email')} {/* Use t() for email */}
                                        </a>
                                    </li>
                                    <li className="group flex items-center space-x-3" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                                        <FontAwesomeIcon icon={faPhone} className="group-hover:text-info" />
                                        <a href="tel:+989045426387" className="link-info text-base-content !mx-2" dir="ltr">
                                            {t('hero.contact.phone')} {/* Use t() for phone */}
                                        </a>
                                    </li>
                                    <li className="group flex items-center space-x-3" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
                                        <FontAwesomeIcon icon={faLocationDot} className="group-hover:text-info" />
                                        <address className="!m-0">
                                            <a href="https://www.google.com/maps?q=Mashhad,Iran" className="link-info text-base-content !mx-2">
                                                {t('hero.contact.location')} {/* Use t() for location */}
                                            </a>
                                        </address>
                                    </li>
                                </ul>
                                <ul className="flex mt-5" data-aos="fade-up" data-aos-duration="800" data-aos-delay="700">
                                    <li>
                                        <a href="https://github.com/abolraj" className="link text-base-content">
                                            <button className="btn btn-ghost text-xl">
                                                <FontAwesomeIcon icon={faGithub} />
                                            </button>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/abolfazl-rajaee-nasab-195aa3225" className="link text-base-content">
                                            <button className="btn btn-ghost text-xl">
                                                <FontAwesomeIcon icon={faLinkedin} />
                                            </button>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://t.me/abol_web" className="link text-base-content">
                                            <button className="btn btn-ghost text-xl">
                                                <FontAwesomeIcon icon={faTelegram} />
                                            </button>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="grow md:grow-0 w-60 md:w-80 flex flex-col items-center" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
                            <div className="rounded-full p-2 bg-gradient-to-tr from-[#fc466b] to-[#3f5efb] w-full">
                                <div className="rounded-full overflow-hidden bg-base-300">
                                    <img src={heroImg} loading="lazy" alt="" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400 sm:size-16" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400 sm:size-16" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400 sm:size-16" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400 sm:size-16" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400 sm:size-16" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}