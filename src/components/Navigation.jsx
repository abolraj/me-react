import { faAt, faAward, faBars, faBriefcase, faCodeBranch, faDollarSign, faDumbbell, faInfo, faMugHot, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from 'react-i18next'; // Import useTranslation

export default function Navigation({ ...props }) {
    const { t } = useTranslation(); // Initialize the t() function

    const navItems = [
        { icon: faMugHot, label: t("navigation.items.0.label"), href: t("navigation.items.0.href") },
        { icon: faInfo, label: t("navigation.items.1.label"), href: t("navigation.items.1.href") },
        { icon: faDumbbell, label: t("navigation.items.2.label"), href: t("navigation.items.2.href") },
        { icon: faBriefcase, label: t("navigation.items.3.label"), href: t("navigation.items.3.href") },
        { icon: faAward, label: t("navigation.items.4.label"), href: t("navigation.items.4.href") },
        { icon: faCodeBranch, label: t("navigation.items.5.label"), href: t("navigation.items.5.href") },
        { icon: faDollarSign, label: t("navigation.items.6.label"), href: t("navigation.items.6.href") },
        { icon: faStar, label: t("navigation.items.7.label"), href: t("navigation.items.7.href") },
        { icon: faAt, label: t("navigation.items.8.label"), href: t("navigation.items.8.href") },
    ];

    return (
        <div>
            <nav className="dropdown [&:lang(fa)]:dropdown-end max-lg:fixed max-lg:bg-transparent max-lg:start-2 z-50 max-lg:top-2 max-lg:aspect-square max-lg:float-left bg-base-100 rounded-box">
                <button tabIndex="0" role="button" className="btn btn-primary bg-opacity-30 btn-circle lg:hidden backdrop-blur-sm shadow-xl">
                    <FontAwesomeIcon icon={faBars} className="h-1/2" />
                </button>
                <ul tabIndex="0" className="menu max-lg:dropdown-content lg:w-full flex-nowrap overflow-x-auto max-lg:mt-2 max-h-[60vh] lg:menu-horizontal max-lg:flex-col bg-base-100 flex justify-around gap-2 p-2 rounded-box">
                    {navItems.map((item, index) => (
                        <li key={index} className={item.label === t("navigation.items.0.label") ? 'active' : ''}>
                            <a className="text-base-content ps-2" href={item.href}>
                                <FontAwesomeIcon icon={item.icon} className="lg:hidden w-5 text-primary" />
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}