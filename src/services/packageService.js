import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'


const getPackages = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [data, setData] = useState(null)
    const { i18n: { language } } = useTranslation()

    const importData = async (lang) => {
        try {
            switch (lang) {
                case 'en':
                    setData((await import('@/data/packages/en.json')).default);
                    break;
                default:
                    setData((await import('@/data/packages/en.json')).default);
            }
        } catch (e) {
            setIsError(true)
        }
    }

    useEffect(() => {
        if (data === null && !isError) {
            importData(language)
        } else {
            setIsLoading(false)
        }
    }, [data])

    return {
        data,
        isLoading,
        isError,
    }
}

const packagesService = {
    usePackages: (q = null) => {
        const { data, isLoading, isError } = getPackages()
        let packages = data
        if (packages && q) {
            q = q.toLowerCase().replaceAll(' ', '')
            packages = packages.filter(f => {
                return p.title.toLowerCase().replaceAll(' ', '').includes(q) ||
                    p.description.toLowerCase().replaceAll(' ', '').includes(q)
            })
        }

        return {
            packages,
            isLoading,
            isError,
        }
    },

    usePackage: (slug) => {
        const { packages, isLoading, isError } = packagesService.usePackages()

        return {
            package: packages?.find(f => p.slug === slug) || null,
            isLoading,
            isError,
        }
    }
}

export default packagesService