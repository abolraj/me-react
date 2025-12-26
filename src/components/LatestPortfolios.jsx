import portfolio_medical_products from '@assets/portfolios/portfolio_medical_products.webp';
import portfolio_recipe_finder_1 from '@assets/portfolios/portfolio_recipe_finder_1.webp';
import portfolio_guess_word from '@assets/portfolios/portfolio_guess_word.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/fontawesome-free-brands';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import Portfolio from './Portfolio';
import { ArrowRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';

const MainTags = Object.freeze({
    LARAVEL: 'Laravel',
    REACTJS: 'ReactJs',
    MYSQL: 'MySQL',
    TAILWINDCSS: 'TailwindCSS',
    BOOTSTRAP5: 'Bootstrap5',
});

export default function LatestPortfolios(props) {
    const { t } = useTranslation(); // Initialize the t() function

    const portfolioItems = [
        {
            id: 'medical-products',
            modalId: 'medical-products',
            image: portfolio_medical_products,
            title: t("portfolios.items.medical_products.title"), // Localized title
            subTitle: t("portfolios.items.medical_products.subTitle"), // Localized subTitle
            tags: t("portfolios.items.medical_products.tags", { returnObjects: true }) // Localized tags
        },
        {
            id: 'recipe-finder-1',
            modalId: 'recipe-finder',
            image: portfolio_recipe_finder_1,
            title: t("portfolios.items.recipe_finder_1.title"), // Localized title
            subTitle: t("portfolios.items.recipe_finder_1.subTitle"), // Localized subTitle
            tags: t("portfolios.items.recipe_finder_1.tags", { returnObjects: true }) // Localized tags
        },
        {
            id: 'guess-word',
            modalId: 'guess-word',
            image: portfolio_guess_word,
            title: t("portfolios.items.guess_word.title"), // Localized title
            subTitle: t("portfolios.items.guess_word.subTitle"), // Localized subTitle
            tags: t("portfolios.items.guess_word.tags", { returnObjects: true }) // Localized tags
        }
    ];

    const modals = [
        {
            id: 'medical-products',
            title: t("portfolios.modals.medical_products.title"), // Localized title
            description: t("portfolios.modals.medical_products.description"), // Localized description
            tags: t("portfolios.modals.medical_products.tags", { returnObjects: true }), // Localized tags
            image: portfolio_medical_products,
            liveDemo: "#", // Static liveDemo (not localized)
            githubRepo: "https://github.com/abolraj/medical-products" // Static githubRepo (not localized)
        },
        {
            id: 'recipe-finder',
            title: t("portfolios.modals.recipe_finder.title"), // Localized title
            description: t("portfolios.modals.recipe_finder.description"), // Localized description
            tags: t("portfolios.modals.recipe_finder.tags", { returnObjects: true }), // Localized tags
            image: portfolio_recipe_finder_1,
            liveDemo: "#", // Static liveDemo (not localized)
            githubRepo: "https://github.com/abolraj/Recipe-Finder" // Static githubRepo (not localized)
        },
        {
            id: 'guess-word',
            title: t("portfolios.modals.guess_word.title"), // Localized title
            description: t("portfolios.modals.guess_word.description"), // Localized description
            tags: t("portfolios.modals.guess_word.tags", { returnObjects: true }), // Localized tags
            image: portfolio_guess_word,
            liveDemo: "#", // Static liveDemo (not localized)
            githubRepo: "#" // Static githubRepo (not localized)
        },
    ];

    const showModal = (id) => {
        document.getElementById(`modal-${id}`).showModal();
    };

    return (
        <section className="portfolio text-base-content pt-12 lg:pt-24" id="portfolio">
            <div className="container mx-auto">
                <div className="">
                    <div className="section-title max-md:flex justify-between" data-aos="fade-up">
                        <h3 className="text-2xl md:text-5xl font-bold">{t("portfolios.title")}</h3>
                        <Link to="/portfolios" className="link link-hover text-xl flex gap-2 items-center md:absolute end-3 top-5">
                            {t('common.all')}
                            <ArrowRight className="size-4 rtl:-scale-x-100" />
                        </Link>
                    </div>
                    <hr className='border-base-100 my-5' />
                    <div className="flex flex-wrap w-full" data-aos="fade-up">
                        {portfolioItems.map((item, index) => (
                            <Portfolio key={index} data={item} onClick={() => showModal(item.modalId)} className='p-1 grow z-20 lg:first:z-10 lg:last:z-10 lg:first:-rotate-12 lg:last:rotate-12' />
                        ))}
                    </div>
                </div>
            </div>
            {
                modals.map((modal, index) => (
                    <dialog key={index} id={`modal-${modal.id}`} className="modal">
                        <div className="modal-box w-11/12 max-w-5xl bg-base-100">
                            <button className="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => document.getElementById(`modal-${modal.id}`).close()}>✕</button>
                            <h2 className="text-2xl font-bold border-b-2 border-base-content pb-2">{modal.title}</h2>
                            <img src={modal.image} loading='lazy' className="w-full h-auto mb-4 rounded-b-lg overflow-hidden" alt="portfolio" />
                            <p className="py-4 text-start">{modal.description}</p>
                            <div className="about-tag mb-4">
                                <ul className="flex flex-wrap">
                                    {modal.tags.map((tag, idx) => (
                                        <li key={idx} className="m-2 px-6 py-4 badge badge-info">{tag}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <a href={modal.liveDemo} className="grow" target="_blank" rel="noopener noreferrer">
                                    <button className="btn btn-primary flex justify-between items-center w-full mb-2">
                                        <FontAwesomeIcon icon={faBolt} className="h-6" />
                                        {t("portfolios.modal.live_demo_button")}
                                    </button>
                                </a>
                                <a href={modal.githubRepo} className="grow" target="_blank" rel="noopener noreferrer">
                                    <button className="btn btn-primary flex justify-between w-full items-center">
                                        <FontAwesomeIcon icon={faGithub} className="h-6" />
                                        {t("portfolios.modal.github_repo_button")}
                                    </button>
                                </a>
                            </div>
                        </div>
                    </dialog>
                ))
            }
        </section >
    );
}