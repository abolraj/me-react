import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import featuresService from './featureService'
import packageItemsService from './packageItemService'


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
            packages = packages.filter(p => {
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
            packageData: packages?.find(p => p.slug === slug) || null,
            isLoading,
            isError,
        }
    },

    usePackageItems: (slug) => {
        const { packageItems, isLoading, isError } = packageItemsService.usePackageItems()
        const { features: featuresList } = featuresService.useFeatures()

        let data = packageItems?.filter(pi => pi.package_slug === slug)
        if (data && data.length > 0) {
            for (let item of data) {
                for (let feature of item.features) {
                    const featureData = featuresList.find(f => f.slug === feature.feature_slug)
                    feature.title = featureData.title
                    feature.description = featureData.description
                    feature.story_points = featureData.story_points
                    feature.popularity = featureData.popularity
                }
            }
        }

        return {
            packageItems: data || [],
            isLoading,
            isError,
        }
    },

    useMostPopularPackages: (count = 3) => {
        const { packages, isLoading, isError } = packagesService.usePackages()
        let data = packages
        if (data && count > 0) {
            data.sort((a, b) => b.popularity - a.popularity)
            data = data.slice(0, count)
        } else {
            data = []
        }

        return {
            packages: data,
            isLoading,
            isError,
        }

    }
}

export default packagesService