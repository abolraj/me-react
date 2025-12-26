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
import Certification from './Certification';
import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';

export default function LatestCertifications({ ...props }) {
    const { t } = useTranslation(); // Initialize useTranslation
    const openModal = (modalId) => {
        document.getElementById(modalId).style.display = 'flex';
    };

    const closeModal = (modalId) => {
        document.getElementById(modalId).style.display = 'none';
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
            category: "frontend",
            imgSrc: certificateReact,
            title: t('certifications.certificate.react.title'),
            subTitle: t('certifications.certificate.react.subTitle'),
            modalId: "fb-cf-react",
            buttonLink: "https://storage.googleapis.com/programminghub/certificate%2F1692840556596.webp",
        },
    ];

    return (
        <section id="certifications" className="py-12 pt-12 lg:pt-24 scroll-m-14">
            <div className="container mx-auto px-4 text-base-content">
                <div className="text-center mb-12 max-md:flex justify-between" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                    <h3 className="text-2xl md:text-5xl font-extrabold">{t('certifications.title')}</h3>
                    <Link to="/certifications" className="link link-hover text-xl flex gap-2 items-center md:absolute end-3 top-5">
                        {t('common.all')}
                        <ArrowRight className="size-4 rtl:-scale-x-100" />
                    </Link>
                </div>
                <div
                    className="flex flex-wrap"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="500"
                >
                    {certifications.map((cert, index) => (
                        <Certification key={index} className={`grow z-20 lg:first:z-10 lg:last:z-10 lg:first:-rotate-12 lg:last:rotate-12`} data={cert} onClick={() => openModal(cert.modalId)} />
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