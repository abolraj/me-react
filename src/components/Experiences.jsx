import React from 'react';

const educations = [
    {
        title: "Web Development From",
        institution: "Programming Hub",
        link: "https://programminghub.io/",
        year: "2022-2023",
        description: "An immersive experience that honed my skills in Web Development, including Laravel, RDBMS, PHP, React, and more.",
        delay: 300
    },
    {
        title: "Web Development From",
        institution: "Free Code Camp",
        link: "https://www.freecodecamp.org/",
        year: "2022-2023",
        description: "A transformative journey through Responsive Web Design and other essential web technologies.",
        delay: 500
    },
];

const works = [
    {
        title: "Web Development At",
        company: "Ponisha",
        link: "https://ponisha.ir/profile/abolrajaee",
        year: "2021-present",
        responsibilities: [
            "WordPress Development (themes, plugins, Elementor, WooCommerce)",
            "Laravel Development (APIs, and more)",
            "PHP Development",
            "HTML, CSS, JavaScript"
        ],
        delay: 400
    },
    {
        title: "Web Development At",
        company: "Parscoders",
        link: "https://parscoders.com/resume/306680/abol",
        year: "2021-present",
        responsibilities: [
            "WordPress Development (themes, plugins, Elementor, WooCommerce)",
            "Laravel Development (APIs, and more)",
            "PHP Development",
            "HTML, CSS, JavaScript"
        ],
        delay: 600
    },
];

export default function Experiences({ ...props }) {
    return (
        <section className="experience text-base-content pt-12 lg:pt-24" id="experience">
            <div className="container mx-auto sm:px-4">
                <div className="flex flex-wrap my-8">
                    <div className="w-full md:w-1/2 mb-8 sm:p-2">
                        <div className="education">
                            <h3 className="text-3xl md:text-5xl font-extrabold text-gradient mb-6" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">🎓 Education</h3>
                            <div className="education-details">
                                {educations.map((education, index) => (
                                    <div key={index} className="education-item bg-base-100 p-6 rounded-xl shadow-2xl mb-6" data-aos="fade-up" data-aos-duration="800" data-aos-delay={education.delay}>
                                        <h4 className="text-2xl font-semibold mb-3">{education.title} <a href={education.link} className="text-accent hover:underline">{education.institution}</a></h4>
                                        <div className="text-sm text-info mb-2">{education.year}</div>
                                        <p className="text-left text-base-content">{education.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 mb-8 sm:p-2">
                        <div className="work">
                            <h3 className="text-3xl md:text-5xl font-extrabold text-gradient mb-6">💼 Work Experience</h3>
                            <div className="experience-details">
                                {works.map((work, index) => (
                                    <div key={index} className="work-item bg-base-100 p-6 rounded-xl shadow-2xl mb-6" data-aos="fade-up" data-aos-duration="800" data-aos-delay={work.delay}>
                                        <h4 className="text-2xl font-semibold mb-3 text-center">{work.title} <a href={work.link} className="text-accent hover:underline">{work.company}</a></h4>
                                        <div className="text-sm text-info text-center mb-2">{work.year}</div>
                                        <span className="font-medium text-left w-full block mb-2">Responsibilities:</span>
                                        <ul className="work-responsibility text-left list-['⭐'] list-inside ml-3">
                                            {work.responsibilities.map((responsibility, idx) => (
                                                <li key={idx} className="my-2">{responsibility}</li>
                                            ))}
                                        </ul>
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
