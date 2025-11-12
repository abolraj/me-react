import Footer from "@/parts/main/Footer";
import Header from "@/parts/main/Header";

export default function MainLayout({
    children
}) {

    return (
        <div className="p-2 overflow-hidden">
            <Header />
            <main className="text-base-300 box-border pt-12 px-4 md:px-6 sm:pt-20">
                {children}
            </main>
            <Footer />
        </div>
    )
}