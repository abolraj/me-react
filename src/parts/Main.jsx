import Experiences from "../components/Experiences";
import Hero from "../components/Hero";
import Information from "../components/Information";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Certifications from "../components/Certifications";
import Portfolios from "../components/Portfolios";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";

export default function Main({...props}){
    return (
        <main className="text-base-300">
            <Hero></Hero>
            <Information></Information>
            <Services></Services>
            <Skills></Skills>
            <Experiences></Experiences>
            <Certifications></Certifications>
            <Portfolios></Portfolios>
            <Pricing></Pricing>
            <Contact></Contact>
        </main>
    )
}