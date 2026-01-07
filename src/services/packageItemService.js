import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import featuresService from './featureService'


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
        const { features: featuresList } = featuresService.useFeatures()

        let item = packageItems?.find(pi => pi.slug === slug) || null;
        if (item) {
            for (let feature of item.features) {
                const featureData = featuresList.find(f => f.slug === feature.feature_slug)
                feature.title = featureData.title
                feature.description = featureData.description
                feature.story_points = featureData.story_points
                feature.popularity = featureData.popularity
            }
        }

        return {
            packageItem: item,
            isLoading,
            isError,
        }
    }
}

export default packageItemsService