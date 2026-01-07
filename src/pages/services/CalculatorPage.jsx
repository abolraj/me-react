import ServicesCalculator from "@/components/ServicesCalculator";
import packageItemsService from "@/services/packageItemService";
import packagesService from "@/services/packageService";
import { useParams } from "@tanstack/react-router";

export default function CalculatorPage({

}) {
    const { itemSlug } = useParams({ strict: false });
    const { packageItem, isLoading, isError } = packageItemsService.usePackageItem(itemSlug);
    const { packageData } = packagesService.usePackage(packageItem?.package_slug)

    console.log('package', packageData)
    console.log('package item', packageItem)

    return (
        <section className="mt-10 lg:mt-5 text-base-content">
            {packageData && packageItem &&
                <ServicesCalculator
                    packageData={packageData}
                    itemData={packageItem}
                />
            }
        </section>
    )
}