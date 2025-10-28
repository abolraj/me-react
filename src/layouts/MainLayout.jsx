import Footer from "@/parts/main/Footer";
import Header from "@/parts/main/Header";

export default function MainLayout({
    children
}) {

    return (
        <div className="p-2">
            <Header />
            <main className="text-base-300">
                {children}
            </main>
            <Footer />
        </div>
    )
}