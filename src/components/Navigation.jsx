import { faBars, faHamburger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Navigation({ ...props }) {
    return (
        <>
            <div class="">
                <nav class="dropdown max-lg:aspect-square max-lg:float-left  bg-base-100 rounded-box">
                    <button tabIndex="0" role="button" className="btn lg:hidden rounded-box">
                        <FontAwesomeIcon icon={faBars}/>
                    </button>
                    <ul tabIndex="0" class="menu max-lg:dropdown-content lg:w-full flex-nowrap overflow-x-auto max-lg:mt-2  max-h-[60vh] lg:menu-horizontal  max-lg:flex-col bg-base-100 flex justify-around gap-2 p-2 rounded-box">
                        <li class="active">
                            <a class="text-white" href="#mh-home">Home</a>
                        </li>
                        <li>
                            <a class="text-white" href="#mh-about">About</a>
                        </li>
                        <li>
                            <a class="text-white" href="#mh-skills">Skills</a>
                        </li>
                        <li>
                            <a class="text-white" href="#mh-experience">Experiences</a>
                        </li>
                        <li>
                            <a class="text-white" href="#mh-certifications">Certifications</a>
                        </li>
                        <li>
                            <a class="text-white" href="#mh-portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a class="text-white" href="#mh-pricing">Pricing</a>
                        </li>
                        <li>
                            <a class="text-white" href="#mh-blog">Blog</a>
                        </li>
                        <li>
                            <a class="text-white" href="#mh-contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}