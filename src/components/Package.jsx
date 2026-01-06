import { DynamicIcon } from "lucide-react/dynamic"
import { Package as PackageIcon } from "lucide-react"
import { Link } from "@tanstack/react-router"

export default function Package({
    title,
    description,
    slug,
    logo = null,
    className = '',
    logoClassName = '',
    ...props
}) {

    return (
        <div className={`package box-border flex gap-2 text-start text-base-content border border-base-100 p-2 rounded-lg group hover:bg-primary/10 transition-colors ${className}`}>
            {logo && <div className={`*:size-full max-md:h-auto *:text-primary w-10 lg:w-[10rem] shrink-0 self-start ${logoClassName}`}>
                <DynamicIcon
                    name={logo}
                    width={null}
                    height={null}
                    fallback={() => <PackageIcon />}
                />
            </div>}
            <div className="grow p-2 h-min">
                <Link to={'/services/packages/' + slug}>
                    <h2 className="text-xl lg:text-2xl text-primary">
                        {title}
                    </h2>
                </Link>
                <h4 className="text-md">
                    {description}
                </h4>
            </div>
        </div>
    )
}