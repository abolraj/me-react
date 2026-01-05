import { DynamicIcon } from "lucide-react/dynamic"
import { Package as PackageIcon } from "lucide-react"

export default function Package({
    title,
    description,
    logo = null,
    className = '',
    ...props
}) {

    return (
        <div className="package box-border flex gap-2 text-start text-base-content border border-base-100 p-2 rounded-lg group hover:bg-primary/10 transition-colors">
            {logo && <div className="*:size-full *:text-primary w-[10rem] shrink-0">
                <DynamicIcon
                    name={logo}
                    width={null}
                    height={null}
                    fallback={() => <PackageIcon />}
                />
            </div>}
            <div className="grow p-2 h-min">
                <h2 className="text-xl lg:text-2xl text-primary">
                    {title}
                </h2>
                <h4 className="text-md">
                    {description}
                </h4>
            </div>
        </div>
    )
}