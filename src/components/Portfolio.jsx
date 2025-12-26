import { Search } from "lucide-react";

export default function Portfolio({
    data,
    className,
    ...props
}) {
    return (
        <div className={`grid-item w-full sm:w-1/2 md:w-1/3 user-interface ${data.tags.map(tag => tag.toLowerCase().replace(' ', '-')).join(' ')} ${className}`} {...props}>
            <figure className="group relative overflow-hidden h-full m-2 rounded-lg shadow-lg bg-base-100">
                <img src={data.image} alt="portfolio" loading='lazy' className="w-full h-full object-cover transition-[mask-size] [mask-size:100%] group-hover:[mask-size:60%] group-hover:mask group-hover:mask-hexagon-2" />
                <figcaption className="absolute bg-base-300 bg-opacity-0 transition-[background-color] group-hover:bg-opacity-70 top-0 left-0 w-full h-full flex flex-col justify-center items-center fig-caption p-4">
                    <Search className='h-5 transition-transform -translate-y-[500px] group-hover:translate-y-0' />
                    <h5 className="title text-lg transition-transform translate-x-[500px] group-hover:translate-x-0">{data.title}</h5>
                    <span className="sub-title text-sm text-gray-400 transition-transform -translate-x-[500px] group-hover:translate-x-0 badge p-4 px-6">{data.subTitle}</span>
                </figcaption>
            </figure>
        </div>
    )
}