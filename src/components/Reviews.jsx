import { faCircleUser, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Flickity from "flickity";
import { useEffect, useState } from "react";
import "flickity/dist/flickity.min.css"

const reviews = [
    {
        rating: 5,
        text: 'It was a very good collaboration. Precision in the work process, punctuality in delivery, and support after the completion of the work are three important characteristics that make me hopeful for future collaborations with him.',
        name: 'Behzad Alavi',
        title: 'Art College Stu. at Austria'
    },
    {
        rating: 5,
        text: 'Completely professional and fast performance. I will definitely consult him for future projects.',
        name: 'Exoplanetor',
        title: 'Ponisha'
    },
    {
        rating: 5,
        text: 'This is the third project we have done with him. He knows his work very well and has implemented all the project requirements. I wish him increasing success every day.',
        name: 'Hatam',
        title: 'Martial Art Researcher'
    },
    {
        rating: 5,
        text: 'They delivered very quickly. The code was excellent and well-written. High proficiency in their work.',
        name: 'Perkas',
        title: 'Autoplay Carousel'
    },
    {
        rating: 5,
        text: 'This is the second project I\'ve done with him, and I am completely satisfied with the collaboration.',
        name: 'Hatam',
        title: 'Martial Art Researcher'
    },
    {
        rating: 5,
        text: 'I would like to thank the team for their efforts on the project. They showed utmost dedication and collaboration. I will definitely work with this excellent team again.',
        name: 'Hatam',
        title: 'Martial Art Researcher'
    },
];

const ratingEls = [
    <FontAwesomeIcon icon={faStar} className="h-6" />,
    <FontAwesomeIcon icon={faStar} className="h-6" />,
    <FontAwesomeIcon icon={faStar} className="h-6" />,
    <FontAwesomeIcon icon={faStar} className="h-6" />,
    <FontAwesomeIcon icon={faStar} className="h-6" />,
]

export default function Reviews({ ...props }) {
    const [flickity, setFlickity] = useState(null)

    useEffect(() => {
        setFlickity(new Flickity('.carousel-container', {
            wrapAround: true,
            accessibility: true,
            autoPlay: 3000,
        }))
    }, [])

    return (
        <section className="testimonial text-base-content pt-12 lg:pt-24" id="reviews">
            <div className="home-v-img">
                <div className="container">
                    <div className="row section-separator">
                        <div className="text-3xl md:text-5xl section-title pb-4" data-aos="fade-up">
                            <h3>Client Reviews</h3>
                        </div>
                        <div className="w-full mb-8">
                            <div className="carousel-container [&_.flickity-slider]: [&_.flickity-button.previous]:-left-5 [&_.flickity-button.next]:-right-5 [&_.flickity-button]:bg-transparent [&_.flickity-button:hover]:bg-base-200 [&_.flickity-button]:size-12 [&_.flickity-button-icon]:fill-base-content w-full">
                                {reviews.map((review, index) => (
                                    <div key={index} className="w-full sm:w-2/5 m-2 ">
                                        <div className="flex flex-col bg-base-100 shadow-lg p-6 rounded-lg">
                                            <FontAwesomeIcon icon={faCircleUser} className="h-12 mx-auto text-primary mb-4" />
                                            <p className="text-center text-yellow-400">
                                                {ratingEls.slice(0, review.rating)}
                                            </p>
                                            <p className="text-left mt-2 grow">{review.text}</p>
                                            <h4 className="text-center text-primary mt-4 font-bold">@{review.name}</h4>
                                            <span className="text-center text-info block mt-1 text-sm text-gray-400">{review.title}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
