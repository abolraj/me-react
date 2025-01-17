import React, { useEffect, useRef, useState } from 'react';
import Isotope from 'isotope-layout';
import { useTranslation } from 'react-i18next'; // Import useTranslation

// Importing images
import certificateLaravel from '@assets/certifications/certificate_laravel.webp';
import certificateRDBMS from '@assets/certifications/certificate_RDBMS.webp';
import certificateRedis from '@assets/certifications/certificate_redis.webp';
import certificateSEO from '@assets/certifications/certificate_seo.webp';
import certificateReact from '@assets/certifications/certificate_react.webp';
import certificateResponsiveDesign from '@assets/certifications/certificate_responsive_design.webp';
import certificateTypescript from '@assets/certifications/certificate_typescript.webp';

export default function Certifications({ ...props }) {
    const { t } = useTranslation(); // Initialize useTranslation
    const [selectedFilter, setSelectedFilter] = useState("*");
    const isotope = useRef();

    useEffect(() => {
        isotope.current = new Isotope('.certificationContainer', {
            itemSelector: '.grid-item',
            layoutMode: 'fitRows',
        });

        return () => isotope.current.destroy();
    }, []);

    const handleFilterKeyChange = (key) => () => {
        setSelectedFilter(key);
        isotope.current.arrange({ filter: key });
    };

    const openModal = (modalId) => {
        document.getElementById(modalId).style.display = 'flex';
    };

    const closeModal = (modalId) => {
        document.getElementById(modalId).style.display = 'none';
    };

    const categories = {
        [t('certifications.categories.all_categories')]: "*",
        [t('certifications.categories.backend')]: ".backend",
        [t('certifications.categories.frontend')]: ".frontend",
    };

    const certifications = [
        {
            category: "backend",
            imgSrc: certificateLaravel,
            title: t('certifications.certificate.laravel.title'),
            subTitle: t('certifications.certificate.laravel.subTitle'),
            modalId: "fb-cf-laravel",
            buttonLink: "https://storage.googleapis.com/programminghub/certificate%2F1695086813173.webp",
        },
        {
            category: "backend",
            imgSrc: certificateRDBMS,
            title: t('certifications.certificate.rdbms.title'),
            subTitle: t('certifications.certificate.rdbms.subTitle'),
            modalId: "fb-cf-rdbms",
            buttonLink: "https://storage.googleapis.com/programminghub/certificate%2F1698024836433.webp",
        },
        {
            category: "backend",
            imgSrc: certificateRedis,
            title: t('certifications.certificate.redis.title'),
            subTitle: t('certifications.certificate.redis.subTitle'),
            modalId: "fb-cf-redis",
            buttonLink: "https://storage.googleapis.com/programminghub/certificate%2F1697335335516.webp",
        },
        {
            category: "backend",
            imgSrc: certificateSEO,
            title: t('certifications.certificate.seo.title'),
            subTitle: t('certifications.certificate.seo.subTitle'),
            modalId: "fb-cf-seo",
            buttonLink: "https://storage.googleapis.com/programminghub/certificate%2F1692148935600.webp",
        },
        {
            category: "frontend",
            imgSrc: certificateReact,
            title: t('certifications.certificate.react.title'),
            subTitle: t('certifications.certificate.react.subTitle'),
            modalId: "fb-cf-react",
            buttonLink: "https://storage.googleapis.com/programminghub/certificate%2F1692840556596.webp",
        },
        {
            category: "frontend",
            imgSrc: certificateResponsiveDesign,
            title: t('certifications.certificate.responsive_design.title'),
            subTitle: t('certifications.certificate.responsive_design.subTitle'),
            modalId: "fb-cf-responsive-design",
            buttonLink: "https://freecodecamp.org/certification/abolfazlraj/responsive-web-design",
        },
        {
            category: "frontend",
            imgSrc: certificateTypescript,
            title: t('certifications.certificate.typescript.title'),
            subTitle: t('certifications.certificate.typescript.subTitle'),
            modalId: "fb-cf-typescript",
            buttonLink: "https://storage.googleapis.com/programminghub/certificate%2F1696815763146.webp",
        },
    ];

    return (
        <section id="certifications" className="py-12 pt-12 lg:pt-24">
            <div className="container mx-auto px-4 text-base-content">
                <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                    <h3 className="text-3xl md:text-5xl font-extrabold">{t('certifications.title')}</h3>
                </div>
                <div className="flex justify-center mb-6">
                    <ul className="flex gap-2 flex-wrap">
                        {Object.entries(categories).map(([category, filter], i) => (
                            <li
                                key={i}
                                onClick={handleFilterKeyChange(filter)}
                                className='btn cursor-pointer w-full sm:w-auto text-lg px-4 py-2 rounded-lg bg-primary text-primary-content data-[selected="0"]:btn-outline'
                                data-aos="fade-up"
                                data-selected={selectedFilter == filter ? "1" : "0"}
                                data-aos-duration="800"
                                data-aos-delay={100 * i}
                            >
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>
                <div
                    id="project-gallery"
                    className="certificationContainer grid gap-0"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="500"
                >
                    {certifications.map((cert, index) => (
                        <div key={index} className={`grid-item w-full sm:w-1/2 md:w-1/3 ${cert.category} relative`}>
                            <figure className="aspect-video bg-base-100 my-2 sm:p-4 sm:m-4 rounded-lg shadow-lg relative">
                                <img
                                    src={cert.imgSrc}
                                    alt={cert.title}
                                    className="lazy w-full h-auto rounded-lg object-cover"
                                />
                                <figcaption
                                    className="cursor-pointer absolute bottom-0 left-0 right-0 bg-opacity-75 bg-gray-800 text-white p-4 rounded-b-lg flex flex-col items-center"
                                    onClick={() => openModal(cert.modalId)}
                                >
                                    <i className="fa fa-search mb-2"></i>
                                    <h5 className="title text-lg font-bold">{cert.title}</h5>
                                    <span className="sub-title text-sm">{cert.subTitle}</span>
                                </figcaption>
                            </figure>
                        </div>
                    ))}
                </div>
                {certifications.map((cert, index) => (
                    <div key={index} className="fixed inset-0 z-50 overflow-auto bg-smoke-light flex items-center justify-center" id={cert.modalId} style={{ display: 'none' }}>
                        <div className="relative p-8 bg-base-100 w-full max-w-md m-auto flex-col flex rounded-lg shadow-2xl border-4 border-base-300">
                            <span className="absolute top-0 right-0 p-4 cursor-pointer" onClick={() => closeModal(cert.modalId)}>
                                {t('certifications.modal.close_button')}
                            </span>
                            <h2 className="text-2xl font-bold mb-2">{cert.title}</h2>
                            <h4 className="text-lg font-medium mb-4">{cert.subTitle}</h4>
                            <img src={cert.imgSrc} alt={cert.title} className="lazy w-full h-auto rounded-lg mb-4" />
                            <a href={cert.buttonLink} className="block py-3">
                                <button className="btn btn-info btn-lg btn-block">
                                    {t('certifications.modal.check_it_button')}
                                </button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}