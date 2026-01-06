import PackageDisplay from "@/components/PackageDisplay";
import featuresService from "@/services/featureService";
import packagesService from "@/services/packageService";
import { useParams } from "@tanstack/react-router";
import { useTranslation } from "react-i18next"

export default function PackagePage({

}) {
    const { t } = useTranslation()
    const { packageSlug } = useParams({ strict: false })
    const { packageData, isLoading, isError } = packagesService.usePackage(packageSlug);
    const { packageItems } = packagesService.usePackageItems(packageSlug);

    const { features } = featuresService.useFeature()
    console.log('package', packageData)
    console.log('package items', packageItems)
    return (
        <section className="mt-10 lg:mt-5">
            {packageData && packageItems &&
                <PackageDisplay
                    packageData={packageData}
                    itemsData={packageItems}
                />
            }
        </section>
    )
}