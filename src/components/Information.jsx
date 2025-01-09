import devImg from '@assets/patrik.png'
import { faLaravel, faPhp } from '@fortawesome/fontawesome-free-brands'
import { faDownload, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Information({ ...props }) {
    return (
        <section class="about mt-24" id="about">
            <div class="container mx-auto">
                <div class="row flex flex-wrap overflow-hidden">
                    <div class="w-full md:w-1/2">
                        <div class="about-img w-96" data-aos="fade-right" data-aos-duration="800" data-aos-delay="400">
                            <img src={devImg} alt="Developer Image" class="img-fluid h-full" />
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 px-4">
                        <div class="about-inner text-base-content text-left">
                            <h2 class="text-4xl font-bold mb-4 " data-aos="fade-left" data-aos-duration="800" data-aos-delay="100">
                                About Me &nbsp;
                                <FontAwesomeIcon icon={faInfoCircle}/>
                            </h2>
                            <p class="text-lg mb-6 aos-init aos-animate" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
                                Hello, I’m <strong className="text-info">Abolfazl</strong>, a web developer based in Mashhad.
                                I am a talented web developer specializing in <strong className="text-error">Laravel</strong>.
                                With expertise in PHP, MySQL, HTML, CSS, and JS, my skillset is diverse and dynamic.
                                Passionate about coding intelligently, I aim to create innovative and impactful solutions.
                                With my in-depth understanding of web development, I consistently craft exceptional experiences for users.
                            </p>
                            <div class="about-tag flex flex-wrap gap-2 mb-6 " data-aos="fade-left" data-aos-duration="800" data-aos-delay="300">
                                <span class="badge badge-primary badge-outline p-4">Laravel</span>
                                <span class="badge badge-primary badge-outline p-4">PHP</span>
                                <span class="badge badge-primary badge-outline p-4">MySQL</span>
                                <span class="badge badge-primary badge-outline p-4">WordPress</span>
                                <span class="badge badge-primary badge-outline p-4">Bootstrap 5</span>
                                <span class="badge badge-primary badge-outline p-4">Tailwind</span>
                                <span class="badge badge-primary badge-outline p-4">HTML</span>
                                <span class="badge badge-primary badge-outline p-4">CSS</span>
                                <span class="badge badge-primary badge-outline p-4">JavaScript</span>
                            </div>
                            <a href="resume.pdf">
                                <button className="btn btn-primary" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                                    Download CV
                                    <FontAwesomeIcon icon={faDownload} />
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}