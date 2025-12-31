import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'


const getFeatures = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [data, setData] = useState(null)
    const { i18n: { language } } = useTranslation()

    const importData = async (lang) => {
        try {
            switch (lang) {
                case 'en':
                    setData((await import('@/data/features/en.json')).default);
                    break;
                default:
                    setData((await import('@/data/features/en.json')).default);
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

const featuresService = {
    useFeatures: (q = null) => {
        const { data, isLoading, isError } = getFeatures()
        let features = data
        if (features && q) {
            q = q.toLowerCase().replaceAll(' ', '')
            features = features.filter(f => {
                return f.title.toLowerCase().replaceAll(' ', '').includes(q) ||
                    f.description.toLowerCase().replaceAll(' ', '').includes(q)
            })
        }

        return {
            features,
            isLoading,
            isError,
        }
    },

    useFeature: (slug) => {
        const { features, isLoading, isError } = featuresService.useFeatures()

        return {
            feature: features?.find(f => f.slug === slug) || null,
            isLoading,
            isError,
        }
    }
}

export default featuresService