import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Download, Sparkles, Code2, Palette } from 'lucide-react';
import { useTranslation } from "react-i18next";
import heroImg from "@assets/hero.png";

export default function Hero() {
    const { t } = useTranslation();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);

        // const handleMouseMove = (e) => {
        //   setMousePosition({ x: e.clientX, y: e.clientY });
        // };

        // window.addEventListener('mousemove', handleMouseMove);
        // return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const roles = [t('hero.role')];
    const [currentRole, setCurrentRole] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen container p-2  max-lg:pt-10" id="home">
            {/* Animated background gradient */}
            {/* <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x - 30}px ${mousePosition.y - 90}px, rgba(139, 92, 246, 1), transparent 10%)`
        }}
      /> */}

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 3}s`
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 mx-auto">
                <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8 sm:gap-12 max-w-7xl mx-auto">

                    {/* Right - Profile Image */}
                    <div className={`w-full lg:flex-1 flex justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="relative">
                            {/* Animated rings */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-secondary animate-spin" style={{ animationDuration: '8s' }} />
                            <div className="absolute inset-2 rounded-full bg-gradient-to-bl from-primary to-secondary animate-spin" style={{ animationDuration: '6s' }} />

                            {/* Image container */}
                            <div className="relative w-full h-auto max-sm:aspect-[3/4] sm:size-72 lg:size-80 rounded-full !rounded-br-lg sm:m-4 border-4 overflow-hidden border-base-100">
                                <img src={heroImg} loading="lazy" alt={t('hero.first-name')} className="max-sm:w-full h-full object-cover mx-auto" />
                            </div>

                            {/* Floating badges */}
                            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 p-2 sm:p-3 bg-gradient-to-br from-primary/50 to-secondary/80 rounded-lg shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
                                <Palette className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
                            </div>

                            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 p-2 sm:p-3 bg-gradient-to-br from-secondary to-primary rounded-lg shadow-lg animate-bounce" style={{ animationDuration: '3s', animationDelay: '1s' }}>
                                <Code2 className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
                            </div>

                            {/* Star rating */}
                            <div className="absolute -bottom-8 sm:-bottom-10 left-1/2 -translate-x-1/2 flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="w-4 h-4 sm:w-6 sm:h-6 bg-yellow-400 rounded-sm rotate-45" />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Left Content */}
                    <div className={`flex-1 space-y-6 sm:space-y-0 transition-all text-start duration-1000 text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                        {/* Greeting Badge */}
                        <div className="inline-flex mt-1 max-lg:mt-4 items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full">
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-base-content font-medium">{t('hero.greeting')}</span>
                        </div>

                        {/* Name */}
                        <div>
                            <h1 className="text-4xl whitespace-nowrap sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary m-0 mb-2">
                                {t('hero.first-name')}
                                <span className="block lg:inline-block sm:text-4xl lg:text-4xl xl:text-5xl bg-gradient-to-l rtl:bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                                    {t('hero.last-name')}
                                </span>
                            </h1>
                        </div>

                        {/* Animated Role */}
                        <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
                            <div className="flex items-center gap-2 sm:gap-3 whitespace-nowrap sm:text-xl lg:text-2xl text-base-content">
                                <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />
                                <span key={currentRole} className="animate-pulse">
                                    {roles[currentRole]}
                                </span>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <a
                                href={`mailto:${t('hero.contact.email')}`}
                                className="flex items-center gap-3 text-base-content hover:text-primary transition-colors group justify-start"
                            >
                                <div className="p-2 bg-base-100/50 rounded-lg group-hover:bg-primary/20 transition-colors">
                                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                                </div>
                                <span className="text-sm sm:text-base" dir="ltr">{t('hero.contact.email')}</span>
                            </a>

                            <a
                                href={`tel:${t('hero.contact.phone')}`}
                                className="flex items-center gap-3 text-base-content hover:text-primary transition-colors group justify-start"
                            >
                                <div className="p-2 bg-base-100/50 rounded-lg group-hover:bg-primary/20 transition-colors">
                                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                                </div>
                                <span className="text-sm sm:text-base" dir="ltr">{t('hero.contact.phone')}</span>
                            </a>

                            <a
                                href="https://www.google.com/maps?q=Mashhad,Iran"
                                className="flex items-center gap-3 text-base-content hover:text-primary transition-colors group justify-start"
                            >
                                <div className="p-2 bg-base-100/50 rounded-lg group-hover:bg-primary/20 transition-colors">
                                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                                </div>
                                <span className="text-sm sm:text-base">{t('hero.contact.location')}</span>
                            </a>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4 justify-center lg:justify-start">
                            <a href='resume.pdf' className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-primary to-secondary text-primary-content rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base">
                                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                                {t("information.download_button")}
                            </a>
                            <button className="px-5 sm:px-6 py-2.5 sm:py-3 bg-primary/50 backdrop-blur-sm text-primary-content rounded-lg font-semibold border border-primary hover:border-primary transition-all hover:scale-105 text-sm sm:text-base">
                                {t('header.portfolios')}
                            </button>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3 pt-4 justify-center lg:justify-start">
                            <a
                                href="https://github.com/abolraj"
                                className="p-2.5 sm:p-3 bg-base-100/50 backdrop-blur-sm rounded-lg hover:bg-primary/20 transition-all hover:scale-110 group"
                            >
                                <Github className="w-5 h-5 sm:w-6 sm:h-6 text-base-content group-hover:text-primary-400" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/abolfazl-rajaee-nasab-195aa3225"
                                className="p-2.5 sm:p-3 bg-base-100/50 backdrop-blur-sm rounded-lg hover:bg-primary/20 transition-all hover:scale-110 group"
                            >
                                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-base-content group-hover:text-primary-400" />
                            </a>
                            <a
                                href="https://t.me/abol_web"
                                className="p-2.5 sm:p-3 bg-base-100/50 backdrop-blur-sm rounded-lg hover:bg-primary/20 transition-all hover:scale-110 group"
                            >
                                <Send className="w-5 h-5 sm:w-6 sm:h-6 text-base-content group-hover:text-primary-400" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-0 sm:bottom-0 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
                    <div className="w-5 h-8 tooltip sm:w-6 sm:h-10 border-2 border-primary rounded-full flex justify-center" data-tip={t("common.scroll_down")}>
                        <div className="w-1 h-2 sm:h-3 bg-primary rounded-full mt-2 animate-pulse" />
                    </div>
                </div>
            </div>
        </section>
    );
}