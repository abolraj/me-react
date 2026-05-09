# Prompt v13 - Blog category manage form

i am developing react 19 + js + tailwidcss v3 + daisyUI4.
consider i wanna you make a not found page.
implement this page design, UI, UX very beatiful.

consider these:
  + compatible with daisyUI colors e.g. primary , ... but do noy use componenets make just with tailwind while colors should be from daysiUI
  + for navigation use tanstack router navigation function
  + Nice ui ux
  + consider localizations (all of those must be prefixed snake keys with 'abolfazl_rajaee' : {
      "hi_how_are_you": "Hi How Are You ?",
      ... (key stands for value but semantic)
    }), t('abolfazl_rajaee.hi_how_are_you') // Hi How Are You ?
    and use react i18n, all localizations should have at max 1 depth

# Prompt v14 - footer part
i am developing react 19 + js + tailwidcss v3 + daisyUI4.
consider i wanna you make footer component for my personal portoflio website.
implement this page design, UI, UX very beatiful.

the footer includes, services, contact, certifications, and others ... links

consider these:
  + compatible with daisyUI colors e.g. primary , ... but do noy use componenets make just with tailwind while colors should be from daysiUI
  + for navigation use tanstack router navigation function
  + Nice ui ux
  + consider localizations (all of those must be prefixed snake keys with 'abolfazl_rajaee' : {
      "hi_how_are_you": "Hi How Are You ?",
      ... (key stands for value but semantic)
    }), t('abolfazl_rajaee.hi_how_are_you') // Hi How Are You ?
    and use react i18n, all localizations should have at max 1 depth


# Prompt v14 - review part
i am developing react 19 + js + tailwidcss v3 + daisyUI4.
consider i wanna you improve this component for reviews.
implement this page design, UI, UX very beatiful.

consider these:
  + compatible with daisyUI colors e.g. primary , ... but do noy use componenets make just with tailwind while colors should be from daysiUI
  + for navigation use tanstack router navigation function
  + Nice ui ux
  + consider localizations (all of those must be prefixed snake keys with 'abolfazl_rajaee' : {
      "hi_how_are_you": "Hi How Are You ?",
      ... (key stands for value but semantic)
    }), t('abolfazl_rajaee.hi_how_are_you') // Hi How Are You ?
    and use react i18n, all localizations should have at max 1 depth

basic component you have to improve:
import { useTranslation } from 'react-i18next'; // Import useTranslation

export default function Review({rate=5, title, name, text}) {
    const { t } = useTranslation(); // Initialize the t() function

    const ratingEls = [
        <FontAwesomeIcon icon={faStar} className="h-6" />,
        <FontAwesomeIcon icon={faStar} className="h-6" />,
        <FontAwesomeIcon icon={faStar} className="h-6" />,
        <FontAwesomeIcon icon={faStar} className="h-6" />,
        <FontAwesomeIcon icon={faStar} className="h-6" />,
    ];

    return (
        <div key={index} className="w-full sm:w-2/5 m-2">
            <div className="flex flex-col items-center bg-base-100 shadow-lg p-6 rounded-lg">
                <CircleUser className="size-12 mx-auto text-primary mb-4" />
                <p className="flex gap-2 text-center text-yellow-400">
                    {ratingEls.slice(0, rate)}
                </p>
                <p className="text-start mt-2 grow">{text}</p>
                <h4 className="text-center text-primary mt-4 font-bold">@{name}</h4>
                <span className="text-center text-info block mt-1 text-sm text-gray-400">{title}</span>
            </div>
        </div>
    );
}


# Prompt v14 - services part
i am developing react 19 + js + tailwidcss v3 + daisyUI4.
consider i wanna you improve this component for services.
implement this page design, UI, UX very beatiful.

consider these:
  + Use lucide icons
  + compatible with daisyUI colors e.g. primary , ... but do noy use componenets make just with tailwind while colors should be from daysiUI
  + for navigation use tanstack router navigation function
  + Nice ui ux
  + consider localizations (all of those must be prefixed snake keys with 'abolfazl_rajaee' : {
      "hi_how_are_you": "Hi How Are You ?",
      ... (key stands for value but semantic)
    }), t('abolfazl_rajaee.hi_how_are_you') // Hi How Are You ?
    and use react i18n, all localizations should have at max 1 depth

basic component you have to improve:
import { faImage } from "@fortawesome/free-solid-svg-icons/faImage";
import { faLifeRing } from "@fortawesome/free-solid-svg-icons/faLifeRing";
import { faServer } from "@fortawesome/free-solid-svg-icons/faServer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from 'react-i18next'; // Import useTranslation

export default function Services({ ...props }) {
    const { t } = useTranslation(); // Initialize the t() function

    const services = [
        {
            icon: faImage,
            iconColor: "text-pink-500",
            title: t("services.items.frontend.title"), // Localized title
            description: t("services.items.frontend.description") // Localized description
        },
        {
            icon: faServer,
            iconColor: "text-red-500",
            title: t("services.items.backend.title"), // Localized title
            description: t("services.items.backend.description") // Localized description
        },
        {
            icon: faLifeRing,
            iconColor: "text-sky-500",
            title: t("services.items.support.title"), // Localized title
            description: t("services.items.support.description") // Localized description
        }
    ];

    return (
        <section className="service text-base-content" id="service">
            <div className="container mx-auto py-12">
                <div className="flex flex-wrap justify-center items-stretch">
                    <div className="text-center w-full grow" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                        <h2 className="text-3xl md:text-5xl font-bold mb-10">
                            {t("services.title")} {/* Localized title */}
                        </h2>
                    </div>
                    {services.map((service, index) => (
                        <div key={index} className="w-full box-border md:w-1/3 py-2 md:p-4">
                            <div className="shadow-xl bg-base-100 text-base-content rounded-lg p-6 h-full" data-aos="fade-up" data-aos-duration="800" data-aos-delay={300 + index * 200}>
                                <div className="text-center">
                                    <FontAwesomeIcon icon={service.icon} className={`${service.iconColor} text-7xl md:text-9xl mb-6`} />
                                    <h3 className="text-xl md:text-3xl font-semibold">{service.title}</h3>
                                    <p className="leading-relaxed text-start">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}





# Prompt v14 - experiences part
i am developing react 19 + js + tailwidcss v3 + daisyUI4.
consider i wanna you improve this component for services.
implement this page design, UI, UX very beatiful.

consider these:
  + Use lucide icons
  + compatible with daisyUI colors e.g. primary , ... but do noy use componenets make just with tailwind while colors should be from daysiUI
  + for navigation use tanstack router navigation function
  + Nice ui ux
  + consider localizations (all of those must be prefixed snake keys with 'abolfazl_rajaee' : {
      "hi_how_are_you": "Hi How Are You ?",
      ... (key stands for value but semantic)
    }), t('abolfazl_rajaee.hi_how_are_you') // Hi How Are You ?
    and use react i18n, all localizations should have at max 1 depth

basic component you have to improve:
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





# Prompt 15 - services 

i am a web developer.
i am developing a service parto of my portfolio for servcies.
i considered two entities for services. packages (e.g. ecommerce) & features (common used by package items too)

every package has mainly 3 items (starter, basic, professional) too and every items has some features with an amount.
and consider mainly in those 3 items about pages, 1st should have just a landing page, 2nd 3pages, 3rd 10.
every package item has a scale means scale of project complexity it depends on scale of project.
take care about story points that is an abstract number shows complexity and does not relate to hour cause of every human has not same talent and exprience.
and you should give for 1 story point = an averge price as USD

consider the final story point for every item summed with this formula:
total item story points = (total sum of every item_feature:(amount * story points)) * item scale 

this estimated almostly !
1 sp = 5$

well i have thes structures
+ packages:
++ title
++ description
++ slug (unique)
++ cover_images
++ tags
++ popularity 
++ scale

+ package_items:
++ slug (unique)
++ package_slug
++ name
++ description
++ scale

+ features:
++ title
++ description
++ story_points 
++ slug (unique)
++ popularity 


+ item_features (every package item has some additional and required features):
++ item_slug
++ feature_slug
++ is_required
++ amount (nullable = 1, if the feature is not countable it is null or 1 and for example for the web pages it's countable e.g. web pages)

i have some titles for every you have to fill these as json data. one json file for every entity.
take care for data filling be real.
check titles be truly phrase or name as a title.

+ packages:
++ personal
++ e commerce
++ cms
++ resume cv
++ company
++ restaurant
++ gym
++ hotel booking
++ learning platform
++ car rental
++ clinic
++ inventory mangment


+ features:
++ landing page
++ web pages
++ test eng
++ logging & monitoring 
++ ssh for dev method
++ ftp for dev method
++ sftp for dev method
++ themes light/dark
++ custom themes
++ index on google (register site in google)
++ open graph images
++ server setup
++ support ticket
++ support live
++ responsive web app
++ pay gate
++ chatbot
++ dev support (support after project closed)
++ email integration
++ sms integration
++ User based (auth)
++ Client Dashboard
++ Admin dashboard
++ realtime features e.g. user logged
++ seo
++ cicd
++ multi lang
++ review rating system (comment, like, ...)
++ Blog
++ social media integration (links)
++ membership (e.g. one mounth renew for all courses in one platform is free)
++ affiliate system
++ api
++ spa
++ pwa
++ audit logging
++ bulk operations (e.g. bulk import for users)
++ notification system for users
++ admin role & permission based
++ shipping & logistics
++ performance opt
++ api rate throthling
++ project backup
++ saas
++ developer exprience (clean code, ...)

# Prompt v16 - awesome puzzle component in services landing hero
i am developing react 19 + js + tailwidcss v3 + daisyUI4.

i wanna you implement a component that in fact t has lots of elements, and we should conder these as a big matrix to handle some amazing actions i will say you.
every indices of this matrix is an element div or everything.

take care all matrixes should handle as arrays of integers! every indice variable is 1 or 0 means on or off.

consider these props in component:
+ widthPixels, heightPixels : the width and height of the matrix (an integer from 3 to more)
+ pixelElement
+ modeOnClassName, modeOffClassName: class names for every relevant indice variable
+ onClickPixels, onHoverPixels
+ pixelSize: every element size (aspect ratio is square) a text for css sizes but when it = 'auto', the size should be calculated based on the core width (whole component) and the number of pixels per width (widthPixels)
+ ...props

consider these functionalities too:
+ coreMatrix: a matrix for whole elements
+ lettersMatrix: we have a set of matrises for the letters that we can show them as a matrix
+ lettersMWidth, lettersMHeight: the size of every letter in the lettersMatrix i suggest you w=3,h=5.
+ displayMatrix(x,y, matrix, onClick = null): a function for display a matrix at position, and on optional on click event that is propagate when the matrix clicked (matrix elements) this function will pass x,y of the current clicked and mX,mY of the position of this matrix clicked.
+ currentX, currentY: for use in pushing and pulling
+ pushMatrix(matrix, onClick = null): implement with use of displayMatrix(...) but in pushing mode and relevant posiotion rather to previous should handled auto 
+ pushWord(word, onClick= null): implement with use of pushMatrix(...) & lettersMatrix
+ pullWord()
+ pullMatrix()

consider in UI/IX:
+ please implement it such as github profile activity style
+ support daisyUI themes (light/dark) and use its colors e.g. primary

please implement it very optimized as it takes some memory and name this component very cute.



# Prompt v17 - router 404
i am developing react 18 + js + tanstack router.

when the path is not found, why the notfound compnent is injected as a child not pure root!!! event i setted the notFoundMode=root.
the error page injected to MainLayout but it should not do this !!!

RootRoute.jsx:
import App from '@/App'
import Loading from '@/components/Loading'
import MainLayout from '@/layouts/MainLayout'
import E404 from '@/pages/errors/E404'
import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <MainLayout>
      <Outlet /> {/* This is where child routes will be rendered */}
    </MainLayout>
  ),
  notFoundComponent: () => (
    <E404 />
  ),
  pendingComponent: Loading,
  defaultPendingMinMs: 5000,
})

index.js:
// src/router/index.js
import { createRouter } from '@tanstack/react-router'
import { Route as RootRoute } from './routes/RootRoute'
import { PortfoliosRoute } from './routes/PortfoliosRoute'
import { ReviewsRoute } from './routes/ReviewsRoute'
import { CertificationsRoute } from './routes/CertificationsRoute'
import { ServicesRoute } from './routes/ServicesRoute'
import { ContactRoute } from './routes/ContactRoute'
import { HomeRoute } from './routes/HomeRoute'

const routeTree = RootRoute.addChildren([
    HomeRoute,
    PortfoliosRoute,
    ReviewsRoute,
    CertificationsRoute,
    ServicesRoute,
    ContactRoute,
])

// We can add another new layout and its routes here
// Every pages does not need to childed with Layout component 
// cause of it handled in render component of the main Router (of that layout)
// 
// const dashboardRouteTree = DashboardRoute.addChildren([
//     HomeRoute,
//     AnaliticsRoute,
//     ...
// ])

export const router = createRouter({
    routeTree,
    notFoundMode: 'root',
    scrollRestoration: true,
})

main.jsx:
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import './index.css'
import { router } from './router'
import App from './App'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App>
      <RouterProvider router={router} />
    {/* <TanStackRouterDevtools router={router} /> */}
    </App>
  </StrictMode>,
)


# Prompt v18 - services package details componetn
i am developing react 19 + js + tailwidcss v3 + daisyUI4.
consider i wanna you improve this component for package.
implement this page design, UI, UX very beatiful.

consider these for component:
+ every package has some items with details
+ every items has some features with details
+ every item section should have a button to handle click item and onClickItem prop for component
+ custom classes for items, features, package wrappers via props.
+ packageData prop
+ itemsData prop

consider these:
  + Use lucide icons
  + compatible with daisyUI colors e.g. primary , ... but do noy use componenets make just with tailwind while colors should be from daysiUI
  + for navigation use tanstack router navigation function
  + Nice ui ux
  + consider localizations (all of those must be prefixed snake keys with 'abolfazl_rajaee' : {
      "hi_how_are_you": "Hi How Are You ?",
      ... (key stands for value but semantic)
    }), t('abolfazl_rajaee.hi_how_are_you') // Hi How Are You ?
    and use react i18n, all localizations should have at max 1 depth

the data structures will looks like these.
package:
{
    "title": "Hotel Booking",
    "description": "Hotel reservation system with room availability, booking management, payment processing, and admin dashboard.",
    "slug": "hotel-booking",
    "cover_images": [
        "hotel-cover1.jpg",
        "hotel-cover2.jpg"
    ],
    "tags": [
        "accommodation",
        "reservation",
        "travel",
        "booking"
    ],
    "popularity": 83,
    "logo": "bed"
}

items:
[
    {
        "slug": "hotel-booking-starter",
        "package_slug": "hotel-booking",
        "name": "Starter",
        "description": "Simple hotel website with room information and contact form",
        "scale": 1.1,
        "features": [
            {
                "feature_slug": "landing-page",
                "is_required": true,
                "amount": 1,
                "title": "Landing Page",
                "description": "A single-page website designed to capture leads or promote a specific product/service.",
                "story_points": 5,
                "popularity": 95
            },
            {
                "feature_slug": "responsive-web-app",
                "is_required": true,
                "amount": 1,
                "title": "Responsive Web Application",
                "description": "Fully responsive design across all device sizes.",
                "story_points": 5,
                "popularity": 95
            },
            {
                "feature_slug": "social-media-integration",
                "is_required": true,
                "amount": 1,
                "title": "Social Media Integration",
                "description": "Connectivity with social media platforms for sharing/login.",
                "story_points": 4,
                "popularity": 85
            },
            {
                "feature_slug": "seo",
                "is_required": false,
                "amount": 1,
                "title": "SEO Optimization",
                "description": "Search engine optimization for better visibility.",
                "story_points": 6,
                "popularity": 85
            },
            {
                "feature_slug": "open-graph-images",
                "is_required": false,
                "amount": 1,
                "title": "Open Graph Images",
                "description": "Custom social media preview images for links shared on platforms.",
                "story_points": 2,
                "popularity": 80
            }
        ]
    },
    {
        "slug": "hotel-booking-basic",
        "package_slug": "hotel-booking",
        "name": "Basic",
        "description": "Hotel booking system with online reservations and basic management",
        "scale": 1.4,
        "features": [
            {
                "feature_slug": "web-pages",
                "is_required": true,
                "amount": 3,
                "title": "Web Pages",
                "description": "Multiple informational pages with content management capabilities.",
                "story_points": 3,
                "popularity": 90
            },
            {
                "feature_slug": "responsive-web-app",
                "is_required": true,
                "amount": 1,
                "title": "Responsive Web Application",
                "description": "Fully responsive design across all device sizes.",
                "story_points": 5,
                "popularity": 95
            },
            {
                "feature_slug": "user-based-auth",
                "is_required": true,
                "amount": 1,
                "title": "User Authentication",
                "description": "Login, registration, and user session management.",
                "story_points": 7,
                "popularity": 90
            },
            {
                "feature_slug": "client-dashboard",
                "is_required": true,
                "amount": 1,
                "title": "Client Dashboard",
                "description": "Personalized dashboard for end-users/clients.",
                "story_points": 8,
                "popularity": 80
            },
            {
                "feature_slug": "seo",
                "is_required": true,
                "amount": 1,
                "title": "SEO Optimization",
                "description": "Search engine optimization for better visibility.",
                "story_points": 6,
                "popularity": 85
            },
            {
                "feature_slug": "notification-system-users",
                "is_required": true,
                "amount": 1,
                "title": "User Notification System",
                "description": "In-app, email, and push notifications for users.",
                "story_points": 5,
                "popularity": 80
            },
            {
                "feature_slug": "open-graph-images",
                "is_required": true,
                "amount": 1,
                "title": "Open Graph Images",
                "description": "Custom social media preview images for links shared on platforms.",
                "story_points": 2,
                "popularity": 80
            },
            {
                "feature_slug": "social-media-integration",
                "is_required": true,
                "amount": 1,
                "title": "Social Media Integration",
                "description": "Connectivity with social media platforms for sharing/login.",
                "story_points": 4,
                "popularity": 85
            },
            {
                "feature_slug": "pay-gate",
                "is_required": true,
                "amount": 1,
                "title": "Payment Gateway",
                "description": "Integration with payment processors (Stripe, PayPal, etc.).",
                "story_points": 8,
                "popularity": 85
            }
        ]
    },
    {
        "slug": "hotel-booking-professional",
        "package_slug": "hotel-booking",
        "name": "Professional",
        "description": "Complete hotel management system with channel manager, payment processing, and analytics",
        "scale": 1.9,
        "features": [
            {
                "feature_slug": "web-pages",
                "is_required": true,
                "amount": 10,
                "title": "Web Pages",
                "description": "Multiple informational pages with content management capabilities.",
                "story_points": 3,
                "popularity": 90
            },
            {
                "feature_slug": "responsive-web-app",
                "is_required": true,
                "amount": 1,
                "title": "Responsive Web Application",
                "description": "Fully responsive design across all device sizes.",
                "story_points": 5,
                "popularity": 95
            },
            {
                "feature_slug": "user-based-auth",
                "is_required": true,
                "amount": 1,
                "title": "User Authentication",
                "description": "Login, registration, and user session management.",
                "story_points": 7,
                "popularity": 90
            },
            {
                "feature_slug": "client-dashboard",
                "is_required": true,
                "amount": 1,
                "title": "Client Dashboard",
                "description": "Personalized dashboard for end-users/clients.",
                "story_points": 8,
                "popularity": 80
            },
            {
                "feature_slug": "admin-dashboard",
                "is_required": true,
                "amount": 1,
                "title": "Admin Dashboard",
                "description": "Administrative interface for managing the platform.",
                "story_points": 10,
                "popularity": 90
            },
            {
                "feature_slug": "admin-role-permission-based",
                "is_required": true,
                "amount": 1,
                "title": "Role-Based Access Control",
                "description": "Admin roles and permission management system.",
                "story_points": 7,
                "popularity": 85
            },
            {
                "feature_slug": "seo",
                "is_required": true,
                "amount": 1,
                "title": "SEO Optimization",
                "description": "Search engine optimization for better visibility.",
                "story_points": 6,
                "popularity": 85
            },
            {
                "feature_slug": "notification-system-users",
                "is_required": true,
                "amount": 1,
                "title": "User Notification System",
                "description": "In-app, email, and push notifications for users.",
                "story_points": 5,
                "popularity": 80
            },
            {
                "feature_slug": "open-graph-images",
                "is_required": true,
                "amount": 1,
                "title": "Open Graph Images",
                "description": "Custom social media preview images for links shared on platforms.",
                "story_points": 2,
                "popularity": 80
            },
            {
                "feature_slug": "social-media-integration",
                "is_required": true,
                "amount": 1,
                "title": "Social Media Integration",
                "description": "Connectivity with social media platforms for sharing/login.",
                "story_points": 4,
                "popularity": 85
            },
            {
                "feature_slug": "pay-gate",
                "is_required": true,
                "amount": 1,
                "title": "Payment Gateway",
                "description": "Integration with payment processors (Stripe, PayPal, etc.).",
                "story_points": 8,
                "popularity": 85
            },
            {
                "feature_slug": "api",
                "is_required": true,
                "amount": 1,
                "title": "API Development",
                "description": "RESTful or GraphQL API for third-party integrations.",
                "story_points": 8,
                "popularity": 85
            },
            {
                "feature_slug": "realtime-features",
                "is_required": true,
                "amount": 1,
                "title": "Realtime Features",
                "description": "Live updates, notifications, and real-time data sync.",
                "story_points": 9,
                "popularity": 75
            },
            {
                "feature_slug": "multi-lang",
                "is_required": true,
                "amount": 1,
                "title": "Multi-language Support",
                "description": "Support for multiple languages and localization.",
                "story_points": 7,
                "popularity": 75
            },
            {
                "feature_slug": "project-backup",
                "is_required": true,
                "amount": 1,
                "title": "Project Backup System",
                "description": "Automated backups and recovery procedures.",
                "story_points": 5,
                "popularity": 85
            },
            {
                "feature_slug": "audit-logging",
                "is_required": true,
                "amount": 1,
                "title": "Audit Logging",
                "description": "Detailed logs of user actions for security and compliance.",
                "story_points": 5,
                "popularity": 70
            }
        ]
    }
]


# Prompt v19 - tooltip component
i am developing react 18 + js + tailwidcss v3 + daisyUI4.
consider i wanna you make a tooltip component in every where can be used.
implement this page design, UI, UX very beatiful.

consider these for component:
+ has show method gets the element as argument (you should use imperative handle and forwardref)
+ has a element prop when it is passed this should show the tooltip 
+ the text should be get from the data-tooltip of that element
+ this component will move on the position of the relevant element top/bottom/left/right of that.

consider these:
  + Use lucide icons
  + compatible with daisyUI colors e.g. primary , ... but do noy use componenets make just with tailwind while colors should be from daysiUI
  + for navigation use tanstack router navigation function
  + Nice ui ux
  + simple

# Prompt v20 - Core services concepts
every package item has a scale means scale of project complexity it depends on scale of project.
take care about story points that is an abstract number shows complexity and does not relate to hour cause of every human has not same talent and exprience.
and you should give for 1 story point = an averge price as USD

consider the final story point for every item summed with this formula:
total item story points = ((total sum of every item_feature:(amount * story points)) * item scale)

this estimated almostly !
1 sp = 5$

i have a notice you have to improve it better, i provide web development services.
explain about story points shortly and clear too!
text:
# Services Strategy
We have some packages, features; Every package has some items e.g. basic,starter,...
every package item has a scale value and some features.
every features is such as a bone of skeleton of one item, it has a fixed integer story points value, and an amount value. for example a web page feature has 5 sp and in this item has 10 amount means 10 pages.
the golden formula is this:
final sp = = ((total sum of every item_feature:(amount * story points)) * item scale)

# Prompt v21 - Services Starategy Component (Document)
i am developing react 19 + js + tailwidcss v3 + daisyUI4.
consider i wanna you make this component for services strategies document (for learning goals for clients just).
implement this page design, UI, UX very beatiful.

i have a notice you have to improve it better, i provide web development services.
explain about story points shortly and clear too!
text (look at it carefullly for concept!):
```
    # Services Strategy
    We have some packages, and features; Every package has some items e.g. basic,starter,...
    every package-item has a scale value and some features.
    every features is such as a bone of skeleton of one item, it has a fixed integer story points value, and an amount value. for example a web page feature has 5 sp and in this item has 10 amount means 10 pages.
    everyone can choose one item from items of a package, then calculate of stroy points.
    the golden formula is this:
    final sp = = ((total sum of every item_feature:(amount * story points)) * item scale)

```

consider these for compoennt:
+ 1st part as start of this document you just explain that text concepts (the design should be such as a MD document)
+ in this part you will explain that text more and better and what is sp.
+ 2nd part has an example
+ but this exmaple should be interactive:
++ in this example the user see package, items details
++ choose one item
++ then the calculation should be shown step by step with explanations
++ this part should not be very big
+ you should use the package and items data just for giving an exmaple in this document not more!
+ so you should pick one item and then give an exmaple of that
+ every package has some items with details
+ every items has some features with details
+ packageData prop
+ itemsData prop
+ baseStoryPointUSD prop: 1SP=?USD 

consider these:
+ Use lucide icons
+ compatible with daisyUI colors e.g. primary , ... but do noy use componenets make just with tailwind while colors should be from daysiUI
+ for navigation use tanstack router navigation function
+ Nice ui ux
+ consider localizations (all of those must be prefixed snake keys with 'abolfazl_rajaee' : {
    "hi_how_are_you": "Hi How Are You ?",
    ... (key stands for value but semantic)
}), t('abolfazl_rajaee.hi_how_are_you') // Hi How Are You ?
and use react i18n, all localizations should have at max 1 depth


the data structures will looks like these.
package:
{
    "title": "Hotel Booking",
    "description": "Hotel reservation system with room availability, booking management, payment processing, and admin dashboard.",
    "popularity": 83,
    "logo": "bed"
}

items:
[
    {
        "name": "Starter",
        "description": "Simple hotel website with room information and contact form",
        "scale": 1.1,
        "features": [
            {
                "amount": 1,
                "title": "Social Media Integration",
                "story_points": 4,
            },
            {
                "amount": 1,
                "title": "SEO Optimization",
                "story_points": 6,
            },
            {
                "amount": 1,
                "title": "Open Graph Images",
                "story_points": 2,
            },...
        ]
    },
    {
        "name": "Basic",
        "description": "Hotel booking system with online reservations and basic management",
        "scale": 1.4,
        "features": [
            {
                "amount": 3,
                "title": "Web Pages",
                "story_points": 3,
            },
            {
                "amount": 1,
                "title": "Responsive Web Application",
                "story_points": 5,
            },
            {
                "amount": 1,
                "title": "User Authentication",
                "story_points": 7,
            },...
        ]
    }, ...
]

# Prompt v21 - Services Starategy Component (Document)
i am developing react 19 + js + tailwidcss v3 + daisyUI4.
consider i wanna you refactor this component for format as a contract (all text and copiable).

implement this page design, UI, UX very beatiful.

take care that the content: 
+ contract are all text and you have to format and tags with text just as a standard contract format
+ it's a contract for the web development
+ i have a note about the strategy of the estimation of cost and time in starting part of this contract to explain (i will fill this part)
+ you have to export contents from the basic component and restructues them with texts such tabs, hagtags, ...
+ if you wanna other parts text you have to use localization ()

consider these:
+ Use lucide icons
+ compatible with daisyUI colors e.g. primary , ... but do noy use componenets make just with tailwind while colors should be from daysiUI
+ for navigation use tanstack router navigation function
+ Nice ui ux
+ consider localizations (all of those must be prefixed snake keys with 'abolfazl_rajaee' : {
    "hi_how_are_you": "Hi How Are You ?",
    ... (key stands for value but semantic)
}), t('abolfazl_rajaee.hi_how_are_you') // Hi How Are You ?
and use react i18n, all localizations should have at max 1 depth


basic component:
import { Calculator, CheckCircle2, ChevronRight, DollarSign, Minus, Package, Plus, Sparkles, Timer } from "lucide-react";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

export default function ServicesContract({
    packageData,
    itemData,
    baseStoryPointUSD = 5,
    yearsExp = 5,
    className = '',
    ...props
}) {

    const { t } = useTranslation();

    const calculation = useMemo(() => {
        if (!itemData) return null;

        const featureCalculations = itemData.features.map(feature => ({
            ...feature,
            subtotal: feature.amount * feature.story_points
        }));

        const sumBeforeScale = featureCalculations.reduce((sum, calc) => sum + calc.subtotal, 0);
        const finalStoryPoints = Math.round(sumBeforeScale * itemData.scale);
        const estimatedCost = finalStoryPoints * baseStoryPointUSD;
        const estimatedTime = parseInt((finalStoryPoints / (yearsExp * 5.5)) * 30)

        return {
            featureCalculations,
            sumBeforeScale,
            scale: itemData.scale,
            finalStoryPoints,
            estimatedCost,
            estimatedTime,
        };
    }, [yearsExp, itemData, baseStoryPointUSD]);

    return (
        <div>

            {/* Interactive Example */}
            <div className="bg-base-100 rounded-2xl shadow-xl p-2 md:p-4 border border-base-300">
                <div className="flex items-center gap-3 mb-4 md:mb-8">
                    <div className="p-3 bg-info/10 rounded-xl">
                        <Calculator className="w-6 h-6 text-info" />
                    </div>
                    <h2 className="text-2xl font-bold text-base-content">
                        {t('services.calculator')}
                    </h2>
                </div>

                {/* Package Info */}
                <div className="bg-info/5 rounded-xl p-2 md:p-4 mb-4 border border-info/20">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-info/10 rounded-lg">
                            <Package className="w-6 h-6 text-info" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-base-content mb-2">{packageData.title}</h3>
                            <p className="text-base-content/70 text-sm">{packageData.description}</p>
                        </div>
                    </div>
                </div>

                {/* Item Selection */}
                <div className="mb-4 md:mb-8">
                    {/* <h3 className="text-lg font-semibold text-base-content mb-4">
                        {t('services.item')}
                    </h3> */}
                    <div className="">
                        <div
                            className="text-left p-6 rounded-xl border-2 transition-all border-primary bg-primary/5 shadow-lg"
                        >
                            <div className="flex items-center justify-between mb-3">
                                <h4 className="font-bold text-base-content">{itemData.name}</h4>
                                <div className="badge badge-primary badge-sm">
                                    {t('services.scale')} {itemData.scale}×
                                </div>
                            </div>
                            <p className="text-sm text-base-content/70 mb-3">{itemData.description}</p>
                            <div className="flex items-center gap-2 text-xs text-base-content/60">
                                <CheckCircle2 className="w-3 h-3" />
                                {itemData.features.length} {t('services.features')}
                            </div>
                        </div>

                    </div>
                </div>

                {/* Calculation Display */}
                <div className="bg-base-200/50 rounded-xl p-2 md:p-4 space-y-2 md:space-y-6">
                    <h3 className="text-lg font-semibold text-base-content flex items-center gap-2">
                        <ChevronRight className="w-5 h-5 text-primary" />
                        {t('services.calculation_breakdown')}
                    </h3>

                    {/* Feature Calculations */}
                    <div>
                        <h4 className="text-sm font-medium text-base-content/70 mb-3">
                            {t('services.feature_calculations')}
                        </h4>
                        <div className="space-y-2">
                            {calculation.featureCalculations.map((feature, idx) => (
                                <div key={idx} className="bg-base-100 rounded-lg p-2 flex items-center justify-between">
                                    <div className="flex-1">
                                        <span className="font-medium text-base-content">{feature.title}</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-sm font-mono" dir="ltr">
                                        <span className="text-base-content/70">
                                            {feature.amount} × {feature.story_points} SP
                                        </span>
                                        <span className="text-primary font-bold">
                                            = {feature.subtotal} SP
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sum Before Scale */}
                    <div className="bg-base-100 rounded-lg p-2 md:p-4 border-2 border-secondary/20">
                        <div className="flex items-center justify-between">
                            <span className="font-semibold text-base-content">
                                {t('services.sum_of_features')}
                            </span>
                            <span className="text-xl font-bold text-secondary" dir="ltr">
                                {calculation.sumBeforeScale} SP
                            </span>
                        </div>
                    </div>

                    {/* Scale Application */}
                    <div className="bg-base-100 rounded-lg p-2 md:p-4 border-2 border-accent/20">
                        <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-base-content">
                                {t('services.item_scale')}
                            </span>
                            <span className="text-lg font-bold text-accent">
                                × {calculation.scale}
                            </span>
                        </div>
                        <div className="text-xs text-base-content/60 font-mono" dir="ltr">
                            {calculation.sumBeforeScale} SP × {calculation.scale} = {calculation.finalStoryPoints} SP
                        </div>
                    </div>

                    {/* Final Result */}
                    <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-2 md:p-4 border-2 border-primary">
                        <div className="flex items-center justify-between mb-4">
                            <div dir="ltr">
                                <div className="text-sm text-base-content/70 mb-1">
                                    {t('services.final_story_points')}
                                </div>
                                <div className="text-3xl font-bold text-primary">
                                    {calculation.finalStoryPoints} SP
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-sm text-base-content/70 mb-1">
                                    {t('services.estimated_cost')}
                                </div>
                                <div className="text-3xl font-bold text-success flex items-center gap-1">
                                    <DollarSign className="w-6 h-6" />
                                    {calculation.estimatedCost.toLocaleString()}
                                </div>
                            </div>
                        </div>
                        <div className="text-xs text-base-content/60 font-mono text-center pt-4 border-t border-primary/20" dir="ltr">
                            1 SP = ${baseStoryPointUSD}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-base-100 rounded-2xl shadow-xl p-2 md:p-4 border border-base-300 mt-4">

                {/* Times estimation */}
                <div className="text-base-content">
                    <div className="flex items-center gap-3 mb-4 md:mb-8">
                        <div className="p-3 bg-info/10 rounded-xl">
                            <Timer className="w-6 h-6 text-info" />
                        </div>
                        <h2 className="text-2xl font-bold text-base-content">
                            {t('services.time_est')}
                        </h2>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                        <p className="text-2xl lg:text-5xl grow-[1000]">
                            <span className="text-primary">
                                {yearsExp}
                            </span>
                            {' '}
                            {t('services.years_exp_of_dev')}
                        </p>
                    </div>

                    {/* The Golden Formula */}
                    <div className="bg-gradient-to-r from-warning/10 via-warning/5 to-warning/10 rounded-2xl shadow-xl p-2 md:p-4 mb-4 border border-warning/20">
                        <div className="flex items-center gap-3 mb-4">
                            <Sparkles className="w-6 h-6 text-warning" />
                            <h2 className="text-xl md:text-2xl font-bold text-base-content">
                                {t('services.the_golden_formula')}
                            </h2>
                        </div>

                        <div className="bg-base-100 rounded-xl p-6 font-mono text-center">
                            <div className="text-sm text-base-content/60 mb-2">
                                {t('services.formula_est_time')}
                            </div>
                            <div className="text-xl md:text-2xl font-bold text-warning break-words" dir="ltr">
                                Min Days = ( SP / ( Expriences (years) × 6 ) ) × 30
                            </div>
                        </div>
                    </div>

                    {/* Final Result */}
                    <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-2 md:p-4 border-2 border-primary">
                        <div className="flex flex-wrap items-center justify-between mb-4">
                            <div dir="ltr">
                                <div className="text-sm text-base-content/70 mb-1">
                                    {t('services.final_story_points')}
                                </div>
                                <div className="text-3xl font-bold text-primary">
                                    {calculation.finalStoryPoints} SP
                                </div>
                            </div>
                            <div>
                                <div className="text-sm text-base-content/70 mb-1">
                                    {t('services.expriences')}
                                </div>
                                <div className="text-3xl font-bold text-primary">
                                    {yearsExp} {t('services.years')}
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-sm text-base-content/70 mb-1">
                                    {t('services.time_est')}
                                </div>
                                <div className="text-3xl font-bold text-success flex items-center gap-1">
                                    {calculation.estimatedTime.toLocaleString()} {t('services.days')}
                                </div>
                            </div>
                        </div>
                        <div className="text-xs text-base-content/60 font-mono text-center pt-4 border-t border-primary/20">
                            {calculation.estimatedTime.toLocaleString()} {t('services.days')}
                            {' ≈ '}
                            {parseInt(calculation.estimatedTime.toLocaleString() / 30)} {t('services.months')}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}



# Propmpt v22 - Services Contract component

i am developing react 19 + js + tailwidcss v3 + daisyUI4.
consider i wanna you look for the component (pre element content) and give the texts or parts inside it needed for convert it as a standard contract.


consider these:
+ consider localizations (all of those must be prefixed snake keys with 'abolfazl_rajaee' : {
    "hi_how_are_you": "Hi How Are You ?",
    ... (key stands for value but semantic)
}), t('abolfazl_rajaee.hi_how_are_you') // Hi How Are You ?
and use react i18n, all localizations should have at max 1 depth


basic compoentn:
import {
    Calculator,
    CheckCircle2,
    ChevronRight,
    Copy,
    DollarSign,
    Download,
    FileText,
    Package,
    Printer,
    Sparkles,
    Timer,
    User,
    Calendar,
    Hash,
    PenTool,
    Eye,
    Share2
} from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export default function ServicesContract({
    packageData,
    itemData,
    baseStoryPointUSD = 5,
    yearsExp = 5,
    className = '',
    ...props
}) {
    const { t } = useTranslation();
    const [copied, setCopied] = useState(false);
    const contractRef = useRef(null)

    const calculation = useMemo(() => {
        if (!itemData) return null;

        const featureCalculations = itemData.features.map(feature => ({
            ...feature,
            subtotal: feature.amount * feature.story_points
        }));

        const sumBeforeScale = featureCalculations.reduce((sum, calc) => sum + calc.subtotal, 0);
        const finalStoryPoints = Math.round(sumBeforeScale * itemData.scale);
        const estimatedCost = finalStoryPoints * baseStoryPointUSD;
        const estimatedTime = parseInt((finalStoryPoints / (yearsExp * 6)) * 30);

        return {
            featureCalculations,
            sumBeforeScale,
            scale: itemData.scale,
            finalStoryPoints,
            estimatedCost,
            estimatedTime,
        };
    }, [yearsExp, itemData, baseStoryPointUSD]);

    const copyToClipboard = () => {
        const contractText = generateContractText();
        navigator.clipboard.writeText(contractText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const generateContractText = () => {
        return contractRef.current.innerText;
    };

    if (!calculation) return null;

    return (
        <div className={`mx-auto ${className}`} {...props}>
            {/* Contract Header */}
            <div className="bg-gradient-to-r from-primary to-primary/90 rounded-t-2xl p-6 md:p-8 text-primary-content shadow-lg">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="w-full flex flex-wrap items-center gap-4">
                        <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                            <FileText className="w-8 h-8" />
                        </div>
                        <div className="grow text-start">
                            <h1 className="text-2xl md:text-4xl font-bold">
                                {t('services.contract_title')}
                            </h1>
                            <p className="text-primary-content/80 mt-2">
                                {t('services.contract_subtitle')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contract Body */}
            <div className="bg-base-100 rounded-b-2xl shadow-xl p-2 md:p-4 border border-base-300">

                {/* Contract Sections */}
                <div className="">


                    {/* Contract Content */}
                    <div className="bg-base-300 whitespace-pre-line text-start rounded-xl p-2 md:p-4 border border-base-300">
                        <div className="w-fill mx-auto flex flex-wrap justify-end gap-2 mb-2">
                            <button
                                onClick={copyToClipboard}
                                className={`btn ${copied ? 'btn-success' : 'btn-outline btn-primary'} gap-2`}
                            >
                                {copied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                {copied ? t('services.copied') : t('services.copy_contract')}
                            </button>
                        </div>

                        <div className="overflow-auto">
                            <pre className="whitespace-pre-wrap whitespace-break-spaces min-w-[50rem]" ref={contractRef}>
                                # {t('services.contract_title')}
                                {' '}
                                {'\n'}
                                {'\n'}

                                ## {t('services.contract_id')}: #c-{itemData.slug} {'\n'}
                                ## {t('services.contract_date')}: {new Date().toLocaleDateString()} {'\n'}
                                {'\n'}

                                {t('services.cost_estimation_strategy_note')} {'\n'}
                                {'\n'}

                                ## {t('services.package_title')}: {packageData?.title || ''} {'\n'}
                                ## {t('services.package_details')}: {packageData?.description || ''} {'\n'}
                                {'\n'}

                                ## {t('services.item_name')}: {itemData?.name || ''} {'\n'}
                                ## {t('services.item_scale')}: {itemData?.scale || 1}x {'\n'}
                                ## {t('services.item_details')}: {itemData?.description || ''} {'\n'}
                                {'\n'}

                                {t('services.features_breakdown')}: {'\n'}
                                {itemData?.features.map((f, i) => `  ${i + 1}. ${f.title} - ${f.amount} × ${f.story_points} SP = ${f.amount * f.story_points} SP`).join('\n')} {'\n'}
                                {'\n'}

                                {t('services.total_story_points')}: {calculation?.finalStoryPoints || 0} SP {'\n'}
                                {t('services.estimated_cost')}: ${calculation?.estimatedCost.toLocaleString() || 0} {'\n'}
                                {t('services.estimated_time')}: {calculation?.estimatedTime || 0} {t('services.days')} {'\n'}
                                {'\n'}
                                {'\n'}
                                {'\n'}

                                # {t('services.services_strategy_title')}
                                {'\n'}
                                {'\n'}

                                # {t('services.what_is_story_point')}{'\n'}
                                ## {t('services.story_point_definition')}{'\n'}
                                {'\n'}

                                # {t('services.how_it_works')} :
                                {'\n'}
                                {[
                                    { title: t('services.step_packages'), desc: t('services.step_packages_desc') },
                                    { title: t('services.step_items'), desc: t('services.step_items_desc') },
                                    { title: t('services.step_features'), desc: t('services.step_features_desc') },
                                    { title: t('services.step_calculation'), desc: t('services.step_calculation_desc') },
                                ].map((step, idx) => (
                                    <>
                                        {' '} + {step.title} : {step.desc} {'\n'}
                                    </>
                                ))}

                                {'\n'}
                                {'\n'}
                                # {t('services.total_estimated_cost')} : {'\n'}
                                {' '} ## {t('services.the_golden_formula')} 1 : {t('services.formula_explanation')}
                                {'\n'}
                                {' '} ## [ Final SP = Σ(Amount × SP) × Scale ]

                                {'\n'}
                                {'\n'}
                                # {t('services.estimated_duration')} : {'\n'}
                                {' '} ## {t('services.the_golden_formula')} 2 : {t('services.formula_est_time')}
                                {'\n'}
                                {' '} ## [ Min Days = ( SP / ( Expriences (years) × 6 ) ) × 30 ]


                                {'\n'}
                                {'\n'}
                                {t('services.terms_and_conditions_note')}
                            </pre>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}