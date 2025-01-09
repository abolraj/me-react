import { faImage, faLifeRing, faServer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Services({ ...props }) {
    return (
        <section class="service text-base-content" id="service">
            <div class="container mx-auto py-12">
                <div class="flex flex-wrap justify-center items-stretch">
                    <div class="text-center grow" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                        <h2 class="text-3xl md:text-5xl font-bold mb-10">What I Do as a Fullstack Developer 🔥🔥🔥</h2>
                    </div>
                    <div class="w-full box-border md:w-1/3 py-2 md:p-4">
                        <div class="shadow-xl bg-base-100 text-base-content rounded-lg p-6 h-full" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
                            <div class="text-center">
                                <FontAwesomeIcon icon={faImage} className="text-pink-500 text-7xl md:text-9xl mb-6"/>
                                <h3 class="text-xl md:text-3xl font-semibold">Frontend Web Development ⭐⭐⭐</h3>
                                <p class="leading-relaxed text-left">
                                    With extensive hands-on experience, I design and develop responsive, interactive front-end interfaces using ReactJS, TailwindCSS, and JavaScript. Let's transform your vision into a stunning reality.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full box-border md:w-1/3 py-2 md:p-4">
                        <div class="shadow-xl bg-base-100 text-base-content rounded-lg p-6 h-full" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                            <div class="text-center">
                                <FontAwesomeIcon icon={faServer} className="text-red-500 text-7xl md:text-9xl mb-6"/>
                                <h3 class="text-xl md:text-3xl font-semibold">Backend Web Development ⭐⭐⭐⭐⭐</h3>
                                <p class="leading-relaxed  text-left">
                                    Specializing in backend development with PHP, Laravel, and WordPress, I build robust server-side applications. From customizing plugins and themes to developing APIs, I ensure your server-side applications are efficient and scalable.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full box-border md:w-1/3 py-2 md:p-4">
                        <div class="shadow-xl bg-base-100 text-base-content rounded-lg p-6 h-full" data-aos="fade-up" data-aos-duration="800" data-aos-delay="700">
                            <div class="text-center">
                                <FontAwesomeIcon icon={faLifeRing} className="text-sky-500 text-7xl md:text-9xl mb-6"/>
                                <h3 class="text-xl md:text-3xl font-semibold">Support ⭐⭐⭐⭐⭐</h3>
                                <p class="leading-relaxed text-left">
                                    I provide one month of free support for any project developed by me, ensuring smooth integration and optimal performance. Your success is my commitment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}