import Navigation from "../components/Navigation";

export default function Header({ ...props }) {
    return (
        <header class="bg-black fixed top-0 left-0 w-full h-screen z-50 p-4 wow fadeInUp" id="mh-header">
            <Navigation></Navigation>
        </header>
    )
}