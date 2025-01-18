import { useTranslation } from 'react-i18next'; // Import useTranslation

export default function Experiences({ ...props }) {
    const { t } = useTranslation(); // Initialize the t() function

    // Use the `t()` function to fetch localized data
    const educations = [
        {
            title: t("experiences.education.items.0.title"),
            institution: t("experiences.education.items.0.institution"),
            link: "https://programminghub.io/",
            year: t("experiences.education.items.0.year"),
            description: t("experiences.education.items.0.description"),
            delay: 300,
        },
        {
            title: t("experiences.education.items.1.title"),
            institution: t("experiences.education.items.1.institution"),
            link: "https://www.freecodecamp.org/",
            year: t("experiences.education.items.1.year"),
            description: t("experiences.education.items.1.description"),
            delay: 500,
        },
    ];

    const works = [
        {
            title: t("experiences.work.items.0.title"),
            company: t("experiences.work.items.0.company"),
            link: "https://ponisha.ir/profile/abolrajaee",
            year: t("experiences.work.items.0.year"),
            responsibilities: t("experiences.work.items.0.responsibilities", { returnObjects: true }),
            delay: 400,
        },
        {
            title: t("experiences.work.items.1.title"),
            company: t("experiences.work.items.1.company"),
            link: "https://parscoders.com/resume/306680/abol",
            year: t("experiences.work.items.1.year"),
            responsibilities: t("experiences.work.items.1.responsibilities", { returnObjects: true }),
            delay: 600,
        },
    ];

    return (
        <section className="experience text-base-content pt-12 lg:pt-24" id="experience">
            <div className="container mx-auto sm:px-4">
                <div className="flex flex-wrap my-8">
                    <div className="w-full md:w-1/2 mb-8 sm:p-2">
                        <div className="education">
                            <h3 className="text-3xl md:text-5xl font-extrabold text-gradient mb-6" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                                {t("experiences.education.title")}
                            </h3>
                            <div className="education-details">
                                {educations.map((education, index) => (
                                    <div key={index} className="education-item bg-base-100 p-6 rounded-xl shadow-2xl mb-6" data-aos="fade-up" data-aos-duration="800" data-aos-delay={education.delay}>
                                        <h4 className="text-2xl font-semibold mb-3">
                                            {education.title} <a href={education.link} className="text-accent hover:underline">{education.institution}</a>
                                        </h4>
                                        <div className="text-sm text-info mb-2">{education.year}</div>
                                        <p className="text-start text-base-content">{education.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 mb-8 sm:p-2">
                        <div className="work">
                            <h3 className="text-3xl md:text-5xl font-extrabold text-gradient mb-6">
                                {t("experiences.work.title")}
                            </h3>
                            <div className="experience-details">
                                {works.map((work, index) => (
                                    <div key={index} className="work-item bg-base-100 p-6 rounded-xl shadow-2xl mb-6" data-aos="fade-up" data-aos-duration="800" data-aos-delay={work.delay}>
                                        <h4 className="text-2xl font-semibold mb-3 text-center">
                                            {work.title} <a href={work.link} className="text-accent hover:underline">{work.company}</a>
                                        </h4>
                                        <div className="text-sm text-info text-center mb-2">{work.year}</div>
                                        <span className="font-medium text-start w-full block mb-2">Responsibilities:</span>
                                        <ul className="work-responsibility text-start list-['⭐'] list-inside ml-3">
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