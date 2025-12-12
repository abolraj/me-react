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
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from 'react-i18next'; // Import useTranslation

export default function Navigation({ ...props }) {
    const { t } = useTranslation(); // Initialize the t() function
    const [isShowedMenu, setIsShowedMenu] = useState(false);
    const currentUrl = window.location.toString();
    const [activeNavIndex, setActiveNavIndex] = useState(-1);

    const navItems = [
        { icon: faMugHot, label: t("navigation.home"), href: '/#home' },
        { icon: faInfo, label: t("navigation.about"), href: '/#about' },
        { icon: faDumbbell, label: t("navigation.skills"), href: '/#skills' },
        { icon: faBriefcase, label: t("navigation.experiences"), href: '/#experience' },
        { icon: faAward, label: t("navigation.certifications"), href: '/#certifications' },
        { icon: faCodeBranch, label: t("navigation.portfolio"), href: '/#portfolio' },
        { icon: faDollarSign, label: t("navigation.pricing"), href: '/#pricing' },
        { icon: faStar, label: t("navigation.reviews"), href: '/reviews' },
        { icon: faAt, label: t("navigation.contact"), href: '/contact' },
    ];

    const handleMenuClick = (isShowed = null) => {
        setIsShowedMenu(showed => {
            showed = isShowed === null ? !showed : isShowed;
            document.body.style = showed ? "overflow:hidden;" : "";

            return showed;
        });

    }

    const handleLinkClick = (index) => {
        setActiveNavIndex(index);
        handleMenuClick(false);
    }

    return (
        <nav className="max-lg:bg-transparent z-0 max-lg:aspect-square rounded-box group" data-showed-menu={+isShowedMenu}>
            <button tabIndex="0"
                role="button"
                id="header-menu-btn"
                className="btn btn-ghost  z-50 relative focus:outline-none !border-none group-data-[showed-menu=1]:rotate-90 transition-transform min-h-min bg-opacity-30 btn-circle p-2 md:p-4 box-border lg:hidden size-10 sm:size-16 lg:size-20 text-base-content"
                onClick={() => handleMenuClick()}
            >
                <Menu className="size-full p-2 md:p-4 transition-opacity left-0 top-0 absolute group-data-[showed-menu=1]:opacity-0" />
                <X className="size-full max-sm:p-2 md:p-4 transition-opacit left-0 top-0 absolute opacity-0 group-data-[showed-menu=1]:opacity-100" />
            </button>
            <div className="absolute top-0 left-0 w-screen h-screen group-data-[showed-menu=0]:hidden" onClick={() => handleMenuClick(false)}>

            </div>
            <ul tabIndex="0" className="max-lg:absolute max-lg:backdrop-blur-md max-lg:bg-base-300/40 max-lg:h-0 border-black max-lg:border-b max-lg:shadow-md transition-[height,opacity] max-lg:group-data-[showed-menu=0]:opacity-0 max-lg:group-data-[showed-menu=1]:h-[max(60vh,20rem)] max-lg:top-16 z-0 left-0 max-lg:w-screen  flex-nowrap overflow-x-auto max-lg:flex-col max-lg:items-start flex justify-around gap-2 max-lg:p-3 overflow-hidden max-lg:overflow-auto rounded-b-box">
                {navItems.map((item, index) => (
                    <li key={index} className={`${item.label === t("navigation.items.0.label") ? 'active' : ''}`}>
                        <Link className="text-base-content max-lg:ps-2 text-2xl lg:text-lg p-1 data-[active=1]:underline"
                            activeProps={{
                                style: { textDecorationLine: 'underline' }
                            }}
                            activeOptions={{
                                includeHash: true,
                            }}
                            to={item.href}
                            onClick={() => handleLinkClick(index)}
                            data-active={+(index === activeNavIndex)}
                        >
                            <FontAwesomeIcon icon={item.icon} className="lg:hidden w-5 text-primary" />
                            <span className="lg:hidden">&nbsp;</span>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}