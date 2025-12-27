import Experiences from "@components/Experiences";
import Hero from "@components/Hero";
import Information from "@components/Information";
import Services from "@components/Services";
import Skills from "@components/Skills";
import Certifications from "@components/Certifications";
import Portfolios from "@components/Portfolios";
import Pricing from "@components/Pricing";
import Contact from "@components/Contact";
import Reviews from "@components/Reviews";
import TechLogos from "@/components/TechLogos";
import AbolScrollbar from "@/components/AbolScrollbar";
import LatestPortfolios from "@/components/LatestPortfolios";
import LatestCertifications from "@/components/LatestCertifications";

export default function HomePage({

}) {
    return (
        <>
            <Hero></Hero>
            <TechLogos></TechLogos>
            <Information></Information>
            <Services></Services>
            <Skills></Skills>
            <Experiences></Experiences>
            <LatestCertifications></LatestCertifications>
            <LatestPortfolios></LatestPortfolios>
            <Pricing></Pricing>
            <Reviews></Reviews>
            <AbolScrollbar></AbolScrollbar>
        </>
    )
}