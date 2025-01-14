import Experiences from "../components/Experiences";
import Hero from "../components/Hero";
import Information from "../components/Information";
import Services from "../components/Services";
import Skills from "../components/Skills";

export default function Main({...props}){
    return (
        <main className="text-base-300">
            <Hero></Hero>
            <Information></Information>
            <Services></Services>
            <Skills></Skills>
            <Experiences></Experiences>
        </main>
    )
}