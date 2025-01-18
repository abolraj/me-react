import { useEffect, useState } from 'react';
import Isotope from 'isotope-layout';

import portfolio_medical_products from '@assets/portfolios/portfolio_medical_products.webp';
import portfolio_medical_products_2 from '@assets/portfolios/portfolio_medical_products_2.webp';
import portfolio_recipe_finder_1 from '@assets/portfolios/portfolio_recipe_finder_1.webp';
import portfolio_recipe_finder_2 from '@assets/portfolios/portfolio_recipe_finder_2.webp';
import portfolio_todo_1 from '@assets/portfolios/portfolio_todo_1.webp';
import portfolio_todo_12 from '@assets/portfolios/portfolio_todo_12.webp';
import portfolio_todo_13 from '@assets/portfolios/portfolio_todo_13.webp';
import portfolio_login_bootstrap from '@assets/portfolios/portfolio_login_bootstrap.webp';
import portfolio_guess_word from '@assets/portfolios/portfolio_guess_word.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/fontawesome-free-brands';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const MainTags = Object.freeze({
    LARAVEL: 'Laravel',
    REACTJS: 'ReactJs',
    MYSQL: 'MySQL',
    TAILWINDCSS: 'TailwindCSS',
    BOOTSTRAP5: 'Bootstrap5',
});

export default function Portfolios(props) {
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
            id: 'medical-products-2',
            modalId: 'medical-products',
            image: portfolio_medical_products_2,
            title: t("portfolios.items.medical_products_2.title"), // Localized title
            subTitle: t("portfolios.items.medical_products_2.subTitle"), // Localized subTitle
            tags: t("portfolios.items.medical_products_2.tags", { returnObjects: true }) // Localized tags
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
            id: 'recipe-finder-2',
            modalId: 'recipe-finder',
            image: portfolio_recipe_finder_2,
            title: t("portfolios.items.recipe_finder_2.title"), // Localized title
            subTitle: t("portfolios.items.recipe_finder_2.subTitle"), // Localized subTitle
            tags: t("portfolios.items.recipe_finder_2.tags", { returnObjects: true }) // Localized tags
        },
        {
            id: 'todo-1',
            modalId: 'todo',
            image: portfolio_todo_1,
            title: t("portfolios.items.todo_1.title"), // Localized title
            subTitle: t("portfolios.items.todo_1.subTitle"), // Localized subTitle
            tags: t("portfolios.items.todo_1.tags", { returnObjects: true }) // Localized tags
        },
        {
            id: 'todo-2',
            modalId: 'todo',
            image: portfolio_todo_12,
            title: t("portfolios.items.todo_2.title"), // Localized title
            subTitle: t("portfolios.items.todo_2.subTitle"), // Localized subTitle
            tags: t("portfolios.items.todo_2.tags", { returnObjects: true }) // Localized tags
        },
        {
            id: 'todo-3',
            modalId: 'todo',
            image: portfolio_todo_13,
            title: t("portfolios.items.todo_3.title"), // Localized title
            subTitle: t("portfolios.items.todo_3.subTitle"), // Localized subTitle
            tags: t("portfolios.items.todo_3.tags", { returnObjects: true }) // Localized tags
        },
        {
            id: 'login-form',
            modalId: 'login-form',
            image: portfolio_login_bootstrap,
            title: t("portfolios.items.login_form.title"), // Localized title
            subTitle: t("portfolios.items.login_form.subTitle"), // Localized subTitle
            tags: t("portfolios.items.login_form.tags", { returnObjects: true }) // Localized tags
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
            id: 'todo',
            title: t("portfolios.modals.todo.title"), // Localized title
            description: t("portfolios.modals.todo.description"), // Localized description
            tags: t("portfolios.modals.todo.tags", { returnObjects: true }), // Localized tags
            image: portfolio_todo_1,
            liveDemo: "#", // Static liveDemo (not localized)
            githubRepo: "https://github.com/abol313/Ighamat24-training/tree/master/todo_react_js" // Static githubRepo (not localized)
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
        {
            id: 'login-form',
            title: t("portfolios.modals.login_form.title"), // Localized title
            description: t("portfolios.modals.login_form.description"), // Localized description
            tags: t("portfolios.modals.login_form.tags", { returnObjects: true }), // Localized tags
            image: portfolio_login_bootstrap,
            liveDemo: "https://abol-web.iran.liara.run/bootstrap-form/", // Static liveDemo (not localized)
            githubRepo: "#" // Static githubRepo (not localized)
        }
    ];
    const [selectedFilter, setSelectedFilter] = useState("*");
    const [isotope, setIsotope] = useState(null);

    const handleFilterKeyChange = (key) => {
        setSelectedFilter(key);
        isotope.arrange({ filter: key });
    };

    useEffect(() => {
        const isotopeTemp = new Isotope('.portfolioContainer', {
            itemSelector: '.grid-item',
            layoutMode: 'masonry'
        })
        setIsotope(isotopeTemp);

        document.addEventListener('DOMContentLoaded', ()=>{
            setTimeout(()=>{
                isotopeTemp.arrange({ filter: selectedFilter });
            },2000)
        })

    }, []);

    const showModal = (id) => {
        document.getElementById(`modal-${id}`).showModal();
    };

    return (
        <section className="portfolio text-base-content pt-12 lg:pt-24" id="portfolio">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-4 section-separator">
                    <div className="section-title col-span-12" data-aos="fade-up">
                        <h3 className="text-3xl md:text-5xl font-bold">{t("portfolios.title")}</h3>
                    </div>
                    <div className="part col-span-12">
                        <div className="portfolio-nav col-span-12 mb-4 pb-2" id="filter-button">
                            <ul className="flex flex-wrap gap-2 justify-center space-x-4">
                                <li
                                    className="current grow btn btn-primary cursor-pointer text-lg font-semibold data-[selected=0]:btn-outline"
                                    data-aos="fade-up"
                                    data-selected={selectedFilter === "*" ? 1 : 0}
                                    onClick={() => handleFilterKeyChange('*')}
                                >
                                    <span>{t("portfolios.filters.all_categories")}</span>
                                </li>
                                <select
                                    className="select grow-[10] w-32 max-w-full text-start data-[selected=1]:select-primary data-[selected=1]:outline-1 !m-0"
                                    data-selected={selectedFilter !== "*" ? 1 : 0}
                                    onChange={(e) => handleFilterKeyChange(e.target.value)}
                                >
                                    <option disabled selected={selectedFilter === "*"}>
                                        {t("portfolios.filters.no_filter")}
                                    </option>
                                    {Object.values(MainTags).map((tag, idx) => (
                                        <option
                                            key={idx}
                                            defaultChecked={`.${tag.toLowerCase().replace(' ', '-')}` === selectedFilter}
                                            className=""
                                            data-aos="fade-up"
                                            value={`.${tag.toLowerCase().replace(' ', '-')}`}
                                        >
                                            {tag}
                                        </option>
                                    ))}
                                </select>
                            </ul>
                        </div>
                        <hr className='horizontal border-primary' />
                        <div className="project-gallery col-span-12" id="project-gallery" data-aos="fade-up">
                            <div className="portfolioContainer">
                                {portfolioItems.map((item, index) => ( 
                                    <div key={index} className={`grid-item w-full sm:w-1/2 md:w-1/3 user-interface ${item.tags.map(tag => tag.toLowerCase().replace(' ', '-')).join(' ')}`} onClick={() => showModal(item.modalId)}>
                                        <figure className="group relative overflow-hidden h-full m-2 rounded-lg shadow-lg bg-base-100">
                                            <img src={item.image} alt="portfolio" loading='lazy' className="w-full h-full object-cover transition-[mask-size] [mask-size:100%] group-hover:[mask-size:60%] group-hover:mask group-hover:mask-hexagon-2" />
                                            <figcaption className="absolute bg-base-300 bg-opacity-0 transition-[background-color] group-hover:bg-opacity-70 top-0 left-0 w-full h-full flex flex-col justify-center items-center fig-caption p-4">
                                                <FontAwesomeIcon icon={faSearch} className='h-5 transition-transform -translate-y-[500px] group-hover:translate-y-0' />
                                                <h5 className="title text-lg transition-transform translate-x-[500px] group-hover:translate-x-0">{item.title}</h5>
                                                <span className="sub-title text-sm text-gray-400 transition-transform -translate-x-[500px] group-hover:translate-x-0 badge p-4 px-6">{item.subTitle}</span>
                                            </figcaption>
                                        </figure>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {modals.map((modal, index) => (
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
            ))}
        </section>
    );
}