import ServicesStrategy from "@/components/ServicesStrategy";
import packagesService from "@/services/packageService";

export default function ServicesStrategyPage({

}) {
    const { packages: packagesData, isLoading, isError } = packagesService.usePackages();
    const packageData = packagesData ? packagesData[parseInt(Math.random() * packagesData.length)] : null;
    const { packageItems } = packagesService.usePackageItems(packageData?.slug);

    return (
        <section className="text-base-content mt-10 lg:mt-5">
            {packageData && packageItems &&
                <ServicesStrategy
                    packageData={packageData}
                    itemsData={packageItems}
                />
            }
        </section>
    )
}