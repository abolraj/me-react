import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import FlagIran from '@assets/svg/countries/iran.svg'
import FlagPalestine from '@assets/svg/countries/palestine.svg'
import FlagUK from '@assets/svg/countries/united_kingdom.svg'
import { Languages } from 'lucide-react';

export default function LanguageSwitcher({ ...props }) {
    const { i18n } = useTranslation();

    // Supported languages
    const languages = [
        { code: 'en', name: 'English', icon: FlagUK },
        { code: 'fa', name: 'فارسی', icon: FlagIran },
        { code: 'ar', name: 'العربية', icon: FlagPalestine },
    ];
    
    const [lang, setLang] = useState(languages[0])

    // Change language
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        window.location.reload(false)
    };

    // Update HTML lang attribute for SEO
    useEffect(() => {

        const languageCode = i18n.language.split('-')[0]
        document.documentElement.lang = languageCode;
        setLang(languages.find((lang) => lang.code === languageCode))

    }, [i18n.language]);

    return (
        <div className="max-lg:!fixed max-lg:left-2 max-lg:bottom-2">
            <div className="dropdown dropdown-top lg:dropdown-bottom dropdown-start rtl:dropdown-end h-full min-h-min">
                <label tabIndex={0} className={`relative btn btn-ghost min-h-min size-10 sm:size-16 lg:size-16 md:p-4 p-1 sm:p-2 box-border rounded-full`}>
                    <Languages className='size-full text-base-content'/>
                    <div className='absolute bottom-0 left-0 lg:left-3 lg:bottom-3 size-3'>
                        <img src={lang.icon} loading='lazy' alt={"Flag "+lang.code} className='h-full'/>
                    </div>
                </label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    {languages.map((lang) => (
                        <li key={lang.code}>
                            <button
                                onClick={() => changeLanguage(lang.code)}
                                className={`btn pl-2 btn-ghost text-base-content justify-start h-auto min-h-max flex items-center gap-2 ${i18n.language === lang.code ? 'active' : ''}`}
                            >
                                <img src={lang.icon} loading='lazy' alt={"Flag "+lang.code} className='w-4 h-4'/>
                                {/* <FontAwesomeIcon icon={lang.icon} className="w-4 h-4" /> */}
                                <span>{lang.name}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}