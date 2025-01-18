import LanguageSwitcher from "../components/LanguageSwitcher";
import Navigation from "../components/Navigation";
import bannerImg from "@assets/abolfazl.webp"

export default function Header({ ...props }) {
    return (
        <header class="w-full z-50 sticky -top-28" id="mh-header">
            <section className="brand text-center h-28">
                <img src={bannerImg} loading="lazy" alt="abolfazl" className="mx-auto h-full"/>
            </section>
            <Navigation></Navigation>
            <LanguageSwitcher></LanguageSwitcher>
        </header>
    )
}