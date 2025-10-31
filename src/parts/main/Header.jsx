import LanguageSwitcher from "@components/LanguageSwitcher";
import Navigation from "@components/Navigation";
import bannerImg from "@assets/abolfazl.webp"
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Header({ ...props }) {
    return (
        <header class="w-screen bg-base-200/30 px-4 z-50 before:absolute before:left-0 before:size-full before:backdrop-blur-md h-16 rounded-b-full sm:h-16 lg:h-20  fixed top-0 right-0 shadow-lg" id="mh-header">
            <div className='flex items-center gap-2 h-full justify-between'>
                <section className="brand text-center h-16 md:h-16 lg:h-20 z-10">
                    <img src={bannerImg} loading="lazy" alt="abolfazl" className="mx-auto h-full"  />
                </section>
                <div className="max-lg:-order-1 z-50 max-lg:w-2 max-lg:grow flex justify-start">
                    <Navigation></Navigation>
                </div>
                <div className="flex h-10 z-0 sm:h-16 lg:h-16 max-lg:w-2 max-lg:grow justify-end items-center">
                    <LanguageSwitcher></LanguageSwitcher>
                    <ThemeSwitcher></ThemeSwitcher>
                </div>
            </div>
        </header>
    )
}