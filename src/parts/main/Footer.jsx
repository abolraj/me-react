import { useTranslation } from 'react-i18next'
import bannerImg from '@assets/abolfazl.webp'
import plantImg from '@assets/svg/plant.svg'
import FooterPlant from '@/components/FooterPlant'

export default function Footer({ ...props }) {
    const { t } = useTranslation()
    const navs = [
        {
            label: t('footer.services'),
            href: '#',
            subnavs: [
                { label: t('footer.fullstack_web_development'), href: '#' },
                { label: t('footer.backend_web_development'), href: '#' },
                { label: t('footer.frontend_web_development'), href: '#' },
                { label: t('footer.chatbot_development'), href: '#' },
            ],
        },
        {
            label: t('footer.certifications'),
            href: '#',
            subnavs: [
                { label: t('footer.laravel_cert'), href: '#' },
                { label: t('footer.react_cert'), href: '#' },
                { label: t('footer.php_cert'), href: '#' },
                { label: t('footer.db_cert'), href: '#' },
            ],
        },
        {
            label: t('footer.blog'),
            href: '#',
        },
        {
            label: t('footer.contact'),
            href: '/contact',
        },
    ]

    return (
        <footer className="mt-10 p-5 px-10 relative flex flex-wrap justify-start bg-gray-900" data-theme="dark">
            <div className='absolute l-4 -top-10'>
                <FooterPlant/>
            </div>
            <div className="sm:pr-10 mx-auto">
                <img src={bannerImg} alt="logo" />
            </div>
            <div className='grow sm:rtl:-order-1'>
                <ul className='flex flex-wrap gap-4 text-start justify-between'>
                    {navs.map(nav => (
                        <li className={`${nav?.subnavs && 'max-sm:w-full'}`}>
                            <h2 className='text-xl'>
                                <a href={nav.href} className='link link-hover text-base-content'>{nav.label}</a>
                            </h2>
                            {nav?.subnavs && (
                                <ul className='flex flex-col  border-s-2 border-s-base-content ps-2'>
                                    {nav.subnavs.map(subnav => (
                                        <li>
                                            <h3 className='text-lg'>
                                                <a className='link link-hover text-base-content' href={subnav.href}>
                                                    {subnav.label}
                                                </a>
                                            </h3>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Copyright */}
            <div className='w-full mt-10'>
                <p className="text-lg text-base-content">
                    {t('footer.text')}
                </p>
            </div>
        </footer>
    );
}
