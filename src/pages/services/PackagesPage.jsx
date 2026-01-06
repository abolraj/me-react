import Package from "@/components/Package";
import Search from "@/components/Search";
import packagesService from "@/services/packageService";
import { Package as PackageIcon } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next"

export default function PackagesPage({

}) {
    const { t } = useTranslation()
    const [query, setQuery] = useState('');
    const { packages, isLoading, isError } = packagesService.usePackages(query);

    const handleOnQueryChange = (query) => {
        setQuery(query)
    }

    return (
        <section className="relative mt-10 lg:mt-5 text-base-content">

            <h2 className="flex gap-2 justify-center items-center text-4xl my-4 text-primary">
                <PackageIcon className="size-8" />
                {t('services.packages')}
            </h2>

            <div className="md:w-1/2 mx-auto">
                <Search onSearch={handleOnQueryChange} />
            </div>

            <div className="mt-4 flex gap-2 flex-wrap *:grow">
                {packages?.map((pack, i) => (
                    <Package
                        key={pack.title + i}
                        title={pack.title}
                        description={pack.description}
                        logo={pack.logo}
                        slug={pack.slug}
                        logoClassName="!size-15"
                        className="md:w-1/3"
                    />
                ))}
            </div>
        </section>
    )
}