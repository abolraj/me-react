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
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from 'react-i18next'; // Import useTranslation

export default function Navigation({ ...props }) {
    const { t } = useTranslation(); // Initialize the t() function
    const [isShowedMenu, setIsShowedMenu] = useState(false);

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

    const handleMenuClick = () => {
        setIsShowedMenu(showed => {
            showed = !showed;
            document.body.style = showed ? "overflow:hidden;" : "";

            return showed;
        });

    }

    return (
        <nav className="max-lg:bg-transparent z-0 max-lg:aspect-square rounded-box group" data-showed-menu={+isShowedMenu}>
            <button tabIndex="0"
                role="button"
                id="header-menu-btn"
                className="btn btn-ghost  z-50 relative focus:outline-none !border-none group-data-[showed-menu=1]:rotate-90 transition-transform min-h-min bg-opacity-30 btn-circle p-2 box-border lg:hidden size-10 sm:size-16 lg:size-20 text-base-content"
                onClick={handleMenuClick}
            >
                <Menu className="size-full p-2 transition-opacity left-0 top-0 absolute group-data-[showed-menu=1]:opacity-0" />
                <X className="size-full max-sm:p-2 transition-opacit left-0 top-0 absolute opacity-0 group-data-[showed-menu=1]:opacity-100" />
            </button>
            <ul tabIndex="0" className="max-lg:absolute max-lg:backdrop-blur-md max-lg:bg-base-300/40 max-lg:h-0 transition-[height,opacity] max-lg:group-data-[showed-menu=0]:opacity-0 max-lg:group-data-[showed-menu=1]:h-[max(60vh,20rem)] max-lg:top-16 z-0 left-0 max-lg:w-screen  flex-nowrap overflow-x-auto max-lg:flex-col max-lg:items-start flex justify-around gap-2 max-lg:p-3 overflow-hidden max-lg:overflow-auto rounded-b-box">
                {navItems.map((item, index) => (
                    <li key={index} className={`${item.label === t("navigation.items.0.label") ? 'active' : ''}`}>
                        <a className="text-base-content max-lg:ps-2 text-2xl lg:text-lg  p-1" href={item.href}>
                            <FontAwesomeIcon icon={item.icon} className="lg:hidden w-5 text-primary" />
                            &nbsp;
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}