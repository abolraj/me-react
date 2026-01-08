import ServicesContract from "@/components/ServicesContract";
import packageItemsService from "@/services/packageItemService";
import packagesService from "@/services/packageService";
import { useParams, useSearch } from "@tanstack/react-router";

export default function ContractPage({

}) {
    const { itemSlug } = useParams({ strict: false });
    const { exp } = useSearch({ strict: false });

    const { packageItem, isLoading, isError } = packageItemsService.usePackageItem(itemSlug);
    const { packageData } = packagesService.usePackage(packageItem?.package_slug)

    return (
        <section className="text-base-content">
            {packageData && packageItem && exp &&
                <ServicesContract
                    packageData={packageData}
                    itemData={packageItem}
                    yearsExp={exp}
                />
            }
        </section>
    )
}