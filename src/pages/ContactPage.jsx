import Contact from "@/components/Contact";
import MainLayout from "@/layouts/MainLayout";
import { useTranslation } from "react-i18next";

export default function ContactPage({

}) {
    const { t } = useTranslation()

    return (
        <MainLayout>
            <h1 className="mt-10 text-primary">
                {t('contact.title')}
            </h1>
            <Contact></Contact>
        </MainLayout>
    )
}