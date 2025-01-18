import devImg from '@assets/patrik.webp';
import { faLaravel, faPhp } from '@fortawesome/fontawesome-free-brands';
import { faDownload, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next'; // Import useTranslation

export default function Information({ ...props }) {
    const { t } = useTranslation(); // Initialize the t() function

    return (
        <section className="about pt-12 lg:pt-24" id="about">
            <div className="container mx-auto">
                <div className="row flex flex-wrap overflow-hidden">
                    <div className="w-full box-border md:w-1/2">
                        <div className="about-img max-w-96 max-md:mx-auto" data-aos="fade-right" data-aos-duration="800" data-aos-delay="400">
                            <img src={devImg} loading="lazy" alt="Developer Image" className="img-fluid h-full" />
                        </div>
                    </div>
                    <div className="w-full box-border md:w-1/2">
                        <div className="about-inner text-base-content text-start">
                            <h2 className="text-4xl font-bold mb-4" data-aos="fade-left" data-aos-duration="800" data-aos-delay="100">
                                {t("information.title")} &nbsp;
                                <FontAwesomeIcon icon={faInfoCircle} />
                            </h2>
                            <p className="text-lg mb-6 aos-init aos-animate" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
                                {t("information.description.part1")}{" "}
                                <strong className="text-info">{t("information.description.name")}</strong>
                                {t("information.description.part2")}{" "}
                                <strong className="text-error">{t("information.description.specialization")}</strong>
                                {t("information.description.part3")}
                            </p>
                            <div className="about-tag flex flex-wrap gap-2 mb-6" data-aos="fade-left" data-aos-duration="800" data-aos-delay="300">
                                {t("information.skills", { returnObjects: true }).map((skill, index) => (
                                    <span key={index} className="badge badge-primary badge-outline p-4">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                            <a href="resume.pdf">
                                <button className="btn btn-primary w-full md:w-auto" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                                    {t("information.download_button")}
                                    <FontAwesomeIcon icon={faDownload} />
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}