import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'


const getPackageItems = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [data, setData] = useState(null)
    const { i18n: { language } } = useTranslation()

    const importData = async (lang) => {
        try {
            switch (lang) {
                case 'en':
                    setData((await import('@/data/package_items/en.json')).default);
                    break;
                default:
                    setData((await import('@/data/package_items/en.json')).default);
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

const packageItemsService = {
    usePackageItems: (q = null) => {
        const { data, isLoading, isError } = getPackageItems()
        let packageItems = data
        if (packageItems && q) {
            q = q.toLowerCase().replaceAll(' ', '')
            packageItems = packageItems.filter(f => {
                return pi.title.toLowerCase().replaceAll(' ', '').includes(q) ||
                    pi.description.toLowerCase().replaceAll(' ', '').includes(q)
            })
        }

        return {
            packageItems,
            isLoading,
            isError,
        }
    },

    usePackageItem: (slug) => {
        const { packageItems, isLoading, isError } = packageItemsService.usePackageItems()

        return {
            packageItem: packageItems?.find(f => pi.slug === slug) || null,
            isLoading,
            isError,
        }
    }
}

export default packageItemsService