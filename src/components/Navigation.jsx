import { faAt, faAward, faBars, faBriefcase, faCodeBranch, faDollarSign, faDumbbell, faInfo, faMugHot, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const navItems = [
    { icon: faMugHot, label: 'Home', href: '#home' },
    { icon: faInfo, label: 'About', href: '#about' },
    { icon: faDumbbell, label: 'Skills', href: '#skills' },
    { icon: faBriefcase, label: 'Experiences', href: '#experience' },
    { icon: faAward, label: 'Certifications', href: '#certifications' },
    { icon: faCodeBranch, label: 'Portfolio', href: '#portfolio' },
    { icon: faDollarSign, label: 'Pricing', href: '#pricing' },
    { icon: faStar, label: 'Rates', href: '#reviews' },
    { icon: faAt, label: 'Contact', href: '#contact' },
];

export default function Navigation({ ...props }) {
    return (
        <div>
            <nav class="dropdown max-lg:fixed max-lg:bg-transparent max-lg:left-2 z-50 max-lg:top-2 max-lg:aspect-square max-lg:float-left  bg-base-100 rounded-box">
                <button tabIndex="0" role="button" className="btn btn-primary bg-opacity-30 btn-circle lg:hidden backdrop-blur-sm shadow-xl">
                    <FontAwesomeIcon icon={faBars} className="h-1/2" />
                </button>
                <ul tabIndex="0" class="menu max-lg:dropdown-content lg:w-full flex-nowrap overflow-x-auto max-lg:mt-2  max-h-[60vh] lg:menu-horizontal  max-lg:flex-col bg-base-100 flex justify-around gap-2 p-2 rounded-box">
                    {navItems.map((item, index) => (
                        <li key={index} className={item.label === 'Home' ? 'active' : ''}>
                            <a class="text-base-content pl-2" href={item.href}>
                                <FontAwesomeIcon icon={item.icon} className="lg:hidden w-5 text-primary" />
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
