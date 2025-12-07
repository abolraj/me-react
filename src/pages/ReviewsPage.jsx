import Review from "@/components/Review";
import MainLayout from "@/layouts/MainLayout";
import { CircleUser, Star } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ReviewsPage({

}) {
    const { t } = useTranslation(); // Initialize the t() function

    const reviews = t("reviews.items", { returnObjects: true }); // Localized reviews

    const ratingEls = [
        <Star className="h-6" />,
        <Star className="h-6" />,
        <Star className="h-6" />,
        <Star className="h-6" />,
        <Star className="h-6" />,
    ];


    return (
        <MainLayout>
            <section className="testimonial text-base-content pt-12 lg:pt-24 w-full p-4 max-sm:px-0" id="reviews">
                <div className="home-v-img">
                    <div className="container">
                        <div className="row section-separator">
                            <div className="text-3xl md:text-5xl section-title pb-4" data-aos="fade-up">
                                <h3>{t("reviews.title")}</h3> {/* Localized title */}
                            </div>
                            <div className="w-full mb-8">
                                <div className="flex gap-2 flex-wrap justify-center w-full">
                                    {reviews.map((review, index) => (
                                        <Review
                                            rate={review.rating}
                                            title={review.title}
                                            name={review.name}
                                            text={review.text}
                                            date={review.date}
                                            className="w-full lg:w-1/3 grow"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}