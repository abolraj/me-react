import { faAt } from "@fortawesome/free-solid-svg-icons/faAt";
import { faAward } from "@fortawesome/free-solid-svg-icons/faAward";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons/faBriefcase";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons/faCodeBranch";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons/faDollarSign";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons/faDumbbell";
import { faInfo } from "@fortawesome/free-solid-svg-icons/faInfo";
import { faMugHot } from "@fortawesome/free-solid-svg-icons/faMugHot";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu } from "lucide-react";
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
        <nav className="dropdown [&:lang(fa)]:dropdown-end  max-lg:bg-transparent z-50 max-lg:aspect-square rounded-box">
            <button tabIndex="0" role="button" className="btn btn-ghost bg-opacity-30 btn-circle p-2 lg:hidden">
                <Menu className="size-10 sm:size-16 lg:size-20" />
            </button>
            <ul tabIndex="0" className="menu max-lg:bg-base-100 max-lg:dropdown-content lg:w-full flex-nowrap overflow-x-auto max-lg:mt-2 max-h-[60vh] lg:menu-horizontal max-lg:flex-col  flex justify-around gap-2 p-2 rounded-box">
                {navItems.map((item, index) => (
                    <li key={index} className={item.label === t("navigation.items.0.label") ? 'active' : ''}>
                        <a className="text-base-content max-lg:ps-2 text-xl p-1" href={item.href}>
                            <FontAwesomeIcon icon={item.icon} className="lg:hidden w-5 text-primary" />
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}