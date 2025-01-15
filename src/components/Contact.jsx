import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import devImg from '@assets/patrik.webp';
import { faAt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTelegram, faWhatsapp } from '@fortawesome/fontawesome-free-brands';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yra8r65', 'template_ofin9bc', form.current, 'eF37qRoSOqP5FTihC')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send message. Please try again.');
            });
    };

    return (
        <section className="font-sans p-4 text-base-content pt-12 lg:pt-24" id="contact">
            <div className="max-w-6xl mx-auto relative bg-base-100 shadow-lg rounded-3xl overflow-hidden">
                <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-primary"></div>
                <div className="absolute -top-6 -right-9 sm:-right-6 w-20 h-20 rounded-full bg-primary"></div>

                <div className="grid md:grid-cols-2 gap-8 py-8 px-6">
                    <div className="text-center flex flex-col items-center justify-center">
                        <img src={devImg} alt="Contact" className="shrink-0 aspect-[250/196] object-contain" />
                        <div className="contacts flex flex-wrap gap-3 pt-10">
                            <a href="https://t.me/abol_web">
                                <FontAwesomeIcon icon={faTelegram} className="h-12 text-blue-700" />
                            </a>
                            <a href="https://www.linkedin.com/in/abolfazl-rajaee-nasab-195aa3225/">
                                <FontAwesomeIcon icon={faLinkedin} className="h-12 text-cyan-500" />
                            </a>
                            <a href="https://wa.me/+989045426387">
                                <FontAwesomeIcon icon={faWhatsapp} className="h-12 text-green-600" />
                            </a>
                            <a href="mailto:fazlabol18@gmail.com">
                                <FontAwesomeIcon icon={faAt} className="h-12 text-red-500" />
                            </a>
                            <a href="https://github.com/abolraj">
                                <FontAwesomeIcon icon={faGithub} className="h-12 text-white" />
                            </a>
                        </div>
                    </div>

                    <form ref={form} onSubmit={sendEmail} className="rounded-tl-3xl rounded-bl-3xl max-md:-order-1">
                        <h2 className="text-2xl text-primary font-bold text-center mb-6 flex flex-wrap justify-center items-center gap-2">
                            <FontAwesomeIcon icon={faAt} className='h-7' />
                            Contact Me
                        </h2>
                        <div className="max-w-md mx-auto space-y-3 relative">
                            <div className="relative">
                                <label htmlFor="name" className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input id="name" type="text" name="user_name" placeholder="Name" className="input input-bordered peer w-full bg-base-200 focus:bg-base-100" required />
                                <span className="hidden peer-required:block absolute text-error -left-2 -top-0 text-2xl">*</span>
                            </div>
                            <div className="relative">
                                <label htmlFor="email" className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input id="email" type="email" name="user_email" placeholder="Email" className="input input-bordered w-full bg-base-200 focus:bg-base-100" />
                            </div>
                            <div className="relative">
                                <label htmlFor="phone" className="label">
                                    <span className="label-text">Phone No.</span>
                                </label>
                                <input id="phone" type="text" name="user_phone" placeholder="Phone No." className="input input-bordered w-full bg-base-200 focus:bg-base-100" />
                            </div>
                            <div className="relative">
                                <label htmlFor="message" className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea id="message" name="message" placeholder="Message" rows="6" className="textarea peer textarea-bordered w-full bg-base-200 focus:bg-base-100" required></textarea>
                                <span className="hidden peer-required:block absolute text-error -left-2 top-0 text-2xl">*</span>
                            </div>

                            <button type="submit" className="btn btn-primary w-full mt-6">
                                <FontAwesomeIcon icon={faPaperPlane} className='mr-2' />
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
