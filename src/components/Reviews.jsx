import { faCircleUser } from "@fortawesome/free-solid-svg-icons/faCircleUser";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Flickity from "flickity";
import { useEffect, useState } from "react";
import "flickity/dist/flickity.min.css";
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import Review from "./Review";

export default function Reviews({ ...props }) {
    const { t } = useTranslation(); // Initialize the t() function

    const reviews = t("reviews.items", { returnObjects: true }).slice(0, 3); // Localized reviews

    const ratingEls = [
        <FontAwesomeIcon icon={faStar} className="h-6" />,
        <FontAwesomeIcon icon={faStar} className="h-6" />,
        <FontAwesomeIcon icon={faStar} className="h-6" />,
        <FontAwesomeIcon icon={faStar} className="h-6" />,
        <FontAwesomeIcon icon={faStar} className="h-6" />,
    ];

    const [flickity, setFlickity] = useState(null);

    useEffect(() => {
        setFlickity(new Flickity('.carousel-container', {
            wrapAround: true,
            accessibility: true,
            autoPlay: 3000,
        }));
    }, []);

    return (
        <section className="testimonial text-base-content pt-12 lg:pt-24 w-full p-4" id="reviews">
            <div className="home-v-img">
                <div className="container">
                    <div className="row section-separator">
                        <div className="max-md:flex justify-between relative section-title pb-4" data-aos="fade-up">
                            <h3 className="text-2xl md:text-5xl">{t("reviews.title")}</h3> {/* Localized title */}
                            <Link to="/reviews" className="link link-hover text-xl flex gap-2 items-center md:absolute end-3 top-5">
                                {t('common.all')}
                                <ArrowRight className="size-4 rtl:-scale-x-100" />
                            </Link>
                        </div>
                        <div className="w-full mb-8">
                            <div className="carousel-container [&_.flickity-slider]: [&_.flickity-button.previous]:-left-5 [&_.flickity-button.next]:-right-5 [&_.flickity-button]:bg-transparent [&_.flickity-button:hover]:bg-base-200 [&_.flickity-button]:size-12 [&_.flickity-button-icon]:fill-base-content w-full">
                                {reviews.map((review, index) => (
                                    <Review
                                        key={index}
                                        rate={review.rating}
                                        title={review.title}
                                        name={review.name}
                                        text={review.text}
                                        date={review.date}
                                        className="w-full sm:w-2/5 m-2 p-2"
                                    >
                                    </Review>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}