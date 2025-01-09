import { useEffect } from "react"
import heroImg from "@assets/hero.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faMapMarker, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin, faTelegram } from "@fortawesome/fontawesome-free-brands"

export default function Hero({ ...props }) {
    return (
        <section class="text-base-content py-4">
            <div class="bg-opacity-50">
                <div class="container mx-auto">
                    <div class="flex flex-wrap-reverse gap-2 justify-between items-end">
                        <div class="w-full sm:w-1/2">
                            <div class="text-left">
                                <div data-aos="fade-up">
                                    <span class="bg-info text-info-content text-lg font-bold px-6 py-2 rounded-bl-none rounded-full inline-block">Hello I'm</span>
                                </div>
                                <h2 class="text-4xl sm:text-6xl font-semibold leading-none mt-2 mb-2" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                                    Abolfazl <br /> Rajaee nasab
                                </h2>
                                <h4 class="text-xl sm:text-2xl leading-8 mb-8" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
                                    Fullstack Web Developer [High-Backend]
                                </h4>
                                <ul class="mt-5 space-y-3">
                                    <li class="group flex items-center space-x-3" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                                        <FontAwesomeIcon icon={faEnvelope} className="group-hover:text-info" />
                                        <a href="mailto:fazlabol18@gmail.com" class="link-info text-base-content">fazlabol18@gmail.com</a>
                                    </li>
                                    <li class="group flex items-center space-x-3" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                                        <FontAwesomeIcon icon={faPhone} className="group-hover:text-info" />
                                        <a href="tel:+989045426387" class="link-info text-base-content">+98 904 542 6387</a>
                                    </li>
                                    <li class="group flex items-center space-x-3 " data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
                                        <FontAwesomeIcon icon={faMapMarker} className="group-hover:text-info" />
                                        <address>
                                            <a href="https://www.google.com/maps?q=Mashhad,Iran" class="link-info text-base-content">Mashhad, Razavi Khorasan, Iran</a>
                                        </address>
                                    </li>
                                </ul>
                                <ul class="flex space-x-3 mt-5" data-aos="fade-up" data-aos-duration="800" data-aos-delay="700">
                                    <li>
                                        <a href="https://github.com/abolraj" class="link text-base-content">
                                            <button className="btn btn-ghost text-xl">
                                                <FontAwesomeIcon icon={faGithub} />
                                            </button>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/abolfazl-rajaee-nasab-195aa3225" class="link text-base-content">
                                            <button className="btn btn-ghost text-xl">
                                                <FontAwesomeIcon icon={faLinkedin} />
                                            </button>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://t.me/abol_web" class="link text-base-content">
                                            <button className="btn btn-ghost text-xl">
                                                <FontAwesomeIcon icon={faTelegram} />
                                            </button>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="grow md:grow-0 w-60 md:w-80 flex flex-col items-center" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
                            <div className="rounded-full p-2 bg-gradient-to-tr from-[#fc466b] to-[#3f5efb] w-full">
                                <div class="rounded-full overflow-hidden bg-base-300  ">
                                    <img src={heroImg} alt="" class="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400 sm:size-16" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400 sm:size-16" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400 sm:size-16" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400 sm:size-16" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400 sm:size-16" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
