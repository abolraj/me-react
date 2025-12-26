import { SquareArrowOutUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Experiences({ ...props }) {
    const { t } = useTranslation();

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
        <section className="experience text-base-content pt-12 lg:pt-24 relative overflow-hidden" id="experience">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto sm:px-1 relative z-10">
                <div className="flex flex-wrap my-8 gap-8 md:gap-2">
                    {/* Education Section */}
                    <div className="md:w-1/3 grow">
                        <div className="education">
                            <h3
                                className="text-3xl md:text-5xl font-extrabold text-gradient mb-8 relative inline-block"
                                data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-delay="200"
                            >
                                {t("experiences.education.title")}
                            </h3>

                            <div className="education-details space-y-2">
                                {educations.map((education, index) => (
                                    <Education
                                        key={index}
                                        data-aos="fade-up"
                                        data-aos-duration="800"
                                        data-aos-delay={education.delay}
                                        data={education}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Work Section */}
                    <div className="md:w-1/3 grow">
                        <div className="work">
                            <h3
                                className="text-3xl md:text-5xl font-extrabold text-gradient mb-8 relative inline-block"
                                data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-delay="200"
                            >
                                {t("experiences.work.title")}
                            </h3>

                            <div className="experience-details space-y-2">
                                {works.map((work, index) => (
                                    <Work
                                        key={index}
                                        data-aos="fade-up"
                                        data-aos-duration="800"
                                        data-aos-delay={work.delay}
                                        data={work}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const Work = ({
    data,
    className,
    ...props
}) => {
    return (
        <div
            className={"work-item bg-base-100 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300 hover:border-accent/30 group relative overflow-hidden " + className}
            {...props}
        >
            {/* Hover gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                    <div className="mt-1 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div className="flex-1 flex flex-wrap md:justify-between max-md:text-start items-center">
                        <h4 className="text-xl font-bold group-hover:text-accent transition-colors">
                            {data.title}
                        </h4>
                        <a
                            href={data.link}
                            className="flex text-accent hover:text-accent/80 font-medium  items-center gap-1 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {data.company}
                            <SquareArrowOutUpRight className='size-4'></SquareArrowOutUpRight>
                        </a>
                    </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 bg-info/10 text-info rounded-full text-sm font-medium mb-4">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {data.year}
                </div>

                <div className="mb-3 text-start">
                    <span className="font-semibold text-base-content inline-flex items-center gap-2">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Responsibilities:
                    </span>
                </div>

                <ul className="space-y-2">
                    {data.responsibilities.map((responsibility, idx) => (
                        <li
                            key={idx}
                            className="flex text-start items-start gap-2 text-base-content/80"
                        >
                            <span className="text-accent mt-1 flex-shrink-0">⭐</span>
                            <span className="leading-relaxed">{responsibility}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

const Education = ({
    data,
    className,
    ...props
}) => {
    return (
        <div
            className={"education-item bg-base-100 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300 hover:border-primary/30 group relative overflow-hidden" + className}
            {...props}
        >
            {/* Hover gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                    <div className="mt-1 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>
                    <div className="flex-1 flex flex-wrap md:justify-between max-md:text-start items-center">
                        <h4 className="text-xl font-bold group-hover:text-primary transition-colors">
                            {data.title}
                        </h4>
                        <a
                            href={data.link}
                            className="text-accent hover:text-accent/80 font-medium inline-flex items-center gap-1 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {data.institution}
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 bg-info/10 text-info rounded-full text-sm font-medium mb-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {data.year}
                </div>

                <p className="text-base-content/80 leading-relaxed">{data.description}</p>
            </div>
        </div>
    )
}