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

const MainTags = Object.freeze({
    LARAVEL: 'Laravel',
    REACTJS: 'ReactJs',
    MYSQL: 'MySQL',
    TAILWINDCSS: 'TailwindCSS',
    BOOTSTRAP5: 'Bootstrap5',
});

const portfolioItems = [
    {
        id: 'medical-products',
        modalId: 'medical-products',
        image: portfolio_medical_products,
        title: 'Medical Products',
        subTitle: 'Fullstack - Laravel',
        tags: [
            MainTags.LARAVEL,
            MainTags.MYSQL,
            MainTags.TAILWINDCSS,
        ]
    },
    {
        id: 'medical-products-2',
        modalId: 'medical-products',
        image: portfolio_medical_products_2,
        title: 'Medical Products',
        subTitle: 'Fullstack - Laravel',
        tags: [
            MainTags.LARAVEL,
            MainTags.MYSQL,
            MainTags.TAILWINDCSS,
        ]
    },
    {
        id: 'recipe-finder-1',
        modalId: 'recipe-finder',
        image: portfolio_recipe_finder_1,
        title: 'Recipe Finder',
        subTitle: 'React + Tailwind + jQuery',
        tags: [
            MainTags.REACTJS,
            MainTags.TAILWINDCSS,
        ]
    },
    {
        id: 'recipe-finder-2',
        modalId: 'recipe-finder',
        image: portfolio_recipe_finder_2,
        title: 'Recipe Finder',
        subTitle: 'React + Tailwind + jQuery',
        tags: [
            MainTags.REACTJS,
            MainTags.TAILWINDCSS,
        ]
    },
    {
        id: 'todo-1',
        modalId: 'todo',
        image: portfolio_todo_1,
        title: 'Todo',
        subTitle: 'React',
        tags: [
            MainTags.REACTJS,
        ]
    },
    {
        id: 'todo-2',
        modalId: 'todo',
        image: portfolio_todo_12,
        title: 'Todo',
        subTitle: 'React',
        tags: [
            MainTags.REACTJS,
        ]
    },
    {
        id: 'todo-3',
        modalId: 'todo',
        image: portfolio_todo_13,
        title: 'Todo',
        subTitle: 'React',
        tags: [
            MainTags.REACTJS,
        ]
    },
    {
        id: 'login-form',
        modalId: 'login-form',
        image: portfolio_login_bootstrap,
        title: 'Login Form',
        subTitle: 'Bootstrap 5',
        tags: [
            MainTags.BOOTSTRAP5,
        ]
    },
    {
        id: 'guess-word',
        modalId: 'guess-word',
        image: portfolio_guess_word,
        title: 'Guess Word',
        subTitle: 'HTML + CSS + Js',
        tags: []
    }
];

const modals = [
    {
        id: 'medical-products',
        title: 'Medical Products TSH - PHP 💊🛒',
        description: 'This project is a mini framework developed by me! Includes models, DBMS, cache, and any other needed to develop this project.',
        tags: ['Laravel', 'PHP', 'MySQL', 'Redis', 'Memcached', 'HTML', 'CSS', 'TailwindCSS', 'Js', 'jQuery'],
        image: portfolio_medical_products,
        liveDemo: '#',
        githubRepo: 'https://github.com/abolraj/medical-products'
    },
    {
        id: 'recipe-finder',
        title: 'Recipe Finder',
        description: 'This project helps you to find your own delicious foods everywhere with every ingredient you want! You can get started cooking by this helper, this guides you how to cook from zero; you can see the ingredients needed before any action!',
        tags: ['React', 'TailwindCSS', 'jQuery', 'Vite', 'HTML', 'CSS', 'Js'],
        image: portfolio_recipe_finder_1,
        liveDemo: '#',
        githubRepo: 'https://github.com/abolraj/Recipe-Finder'
    },
    {
        id: 'todo',
        title: 'Todo - React',
        description: 'This project is for managing your tasks.',
        tags: ['React', 'Webpack', 'HTML', 'CSS', 'Sass', 'Js'],
        image: portfolio_todo_1,
        liveDemo: '#',
        githubRepo: 'https://github.com/abol313/Ighamat24-training/tree/master/todo_react_js'
    },
    {
        id: 'guess-word',
        title: 'Guess Word - My New Web Game [html+css+js] 😎',
        description: 'You can guess the word, win if correct, lose if not correct. I tried to have beautiful UI & good UX & good handle back-end 🥲',
        tags: ['HTML', 'CSS', 'Js'],
        image: portfolio_guess_word,
        liveDemo: '#',
        githubRepo: '#'
    },
    {
        id: 'login-form',
        title: 'Login form - Bootstrap 5',
        description: '#Easy To Use My new experience about bootstrap is nice because of its easy use and style for the elements rather than CSS native. #Deeply Styling The bootstrap cannot handle deep styles, on the other hand we sometimes style natively! #Responsive Design This package makes nice easy responsive pages for you! E.g., using breakpoints sm, md, lg, xl, xxl',
        tags: ['HTML', 'CSS', 'Bootstrap5', 'Sass', 'UX', 'UI'],
        image: portfolio_login_bootstrap,
        liveDemo: 'https://abol-web.iran.liara.run/bootstrap-form/',
        githubRepo: '#'
    }
];


export default function Portfolios(props) {
    const [selectedFilter, setSelectedFilter] = useState("*")
    const [isotope, setIsotope] = useState(null)

    const handleFilterKeyChange = (key) => {
        setSelectedFilter(key);
        isotope.arrange({ filter: key });
    };

    useEffect(() => {
        setIsotope(new Isotope('.portfolioContainer', {
            itemSelector: '.grid-item',
            layoutMode: 'masonry'
        }))
    }, []);

    const showModal = (id) => {
        document.getElementById(`modal-${id}`).showModal();
    };

    return (
        <section className="portfolio text-base-content pt-12 lg:pt-24" id="portfolio">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-4 section-separator">
                    <div className="section-title col-span-12" data-aos="fade-up">
                        <h3 className="text-3xl md:text-5xl font-bold">Recent Portfolio</h3>
                    </div>
                    <div className="part col-span-12">
                        <div className="portfolio-nav col-span-12 mb-4 pb-2" id="filter-button">
                            <ul className="flex flex-wrap gap-2 justify-center space-x-4">
                                <li
                                    className="current grow btn btn-primary cursor-pointer text-lg font-semibold data-[selected=0]:btn-outline"
                                    data-aos="fade-up"
                                    data-selected = {selectedFilter=="*"?1:0}
                                    onClick={() => handleFilterKeyChange('*')}
                                >
                                    <span>All Categories</span>
                                </li>
                                <select className="select grow-[10] w-32 max-w-full text-left data-[selected=1]:select-primary  data-[selected=1]:outline-1 !m-0" data-selected={selectedFilter!="*"?1:0} onChange={e=>handleFilterKeyChange(e.target.value)} >
                                    <option disabled selected={selectedFilter=="*"}>
                                        No Filter
                                    </option>
                                    {Object.values(MainTags).map((tag, idx) => (
                                        <option
                                            key={idx}
                                            defaultChecked={`.${tag.toLowerCase().replace(' ', '-')}` == selectedFilter}
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
                        <hr className='horizontal border-primary'/>
                        <div className="project-gallery col-span-12" id="project-gallery" data-aos="fade-up">
                            <div className="portfolioContainer">
                                {portfolioItems.map((item, index) => (
                                    <div key={index} className={`grid-item w-full sm:w-1/2 md:w-1/3 user-interface ${item.tags.map(tag => tag.toLowerCase().replace(' ', '-')).join(' ')}`} onClick={() => showModal(item.modalId)}>
                                        <figure className="group relative overflow-hidden h-full m-2 rounded-lg shadow-lg bg-base-100">
                                            <img src={item.image} alt="portfolio" loading='lazy' className="w-full h-full object-cover transition-[mask-size] [mask-size:100%] group-hover:[mask-size:60%] group-hover:mask group-hover:mask-hexagon-2" />
                                            <figcaption className="absolute bg-base-300 bg-opacity-0 transition-[background-color] group-hover:bg-opacity-70 top-0 left-0 w-full h-full flex flex-col justify-center items-center fig-caption p-4">
                                                <FontAwesomeIcon icon={faSearch} className='h-5 transition-transform -translate-y-[500px] group-hover:translate-y-0' />
                                                <h5 className="title text-lg transition-transform translate-x-[500px]  group-hover:translate-x-0">{item.title}</h5>
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
                        <p className="py-4 text-left">{modal.description}</p>
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
                                    <FontAwesomeIcon icon={faBolt} className="h-6"/>
                                    Live Demo
                                </button>
                            </a>
                            <a href={modal.githubRepo} className="grow" target="_blank" rel="noopener noreferrer">
                                <button className="btn btn-primary flex justify-between w-full items-center">
                                    <FontAwesomeIcon icon={faGithub} className="h-6"/>
                                    Github Repo
                                </button>
                            </a>
                        </div>
                    </div>
                </dialog>
            ))}
        </section>
    );
}
