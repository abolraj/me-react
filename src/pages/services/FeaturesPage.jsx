import Package from "@/components/Package";
import PackageFeature from "@/components/PackageFeature";
import Search from "@/components/Search";
import featuresService from "@/services/featureService";
import { Bone } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next"

export default function FeaturesPage({

}) {
    const { t } = useTranslation()
    const [query, setQuery] = useState('');
    const { features, isLoading, isError } = featuresService.useFeatures(query);

    const handleOnQueryChange = (query) => {
        setQuery(query)
    }

    return (
        <section className="relative mt-10 lg:mt-5 text-base-content">

            <h2 className="flex gap-2 justify-center items-center text-4xl my-4 text-primary">
                <Bone className="size-8"/>
                {t('services.features')}
            </h2>

            <div className="md:w-1/2 mx-auto">
                <Search onSearch={handleOnQueryChange} />
            </div>

            <div className="mt-4 flex gap-2 flex-wrap *:grow">
                {features?.map((feature, i) => (
                    <PackageFeature
                        key={feature.title + i}
                        className="md:w-1/3 px-4"
                        title={feature.title}
                        description={feature.description}
                        popularity={feature.popularity}
                        amount={feature.amount}
                        isRequired={feature.is_required}
                        storyPoints={feature.story_points}
                        showDescription
                    />
                ))}
            </div>
        </section>
    )
}