import Navigation from "../components/Navigation";
import bannerImg from "@assets/abolfazl.png"

export default function Header({ ...props }) {
    return (
        <header class="w-full z-50" id="mh-header">
            <section className="brand text-center">
                <img src={bannerImg} alt="abolfazl" className="mx-auto"/>
            </section>
            <Navigation></Navigation>
        </header>
    )
}