export default function Certification({
    data,
    className,
    ...props
}) {
    return (
        <div className={`grid-item w-full sm:w-1/2 md:w-1/3 relative ${className}`} {...props}>
            <figure className="aspect-video bg-base-100 my-2 sm:p-4 sm:m-4 rounded-lg shadow-lg relative">
                <img
                    src={data.imgSrc}
                    alt={data.title}
                    className="lazy w-full h-auto rounded-lg object-cover"
                />
                <figcaption
                    className="cursor-pointer absolute bottom-0 left-0 right-0 bg-opacity-75 bg-gray-800 text-white p-4 rounded-b-lg flex flex-col items-center"
                    onClick={() => openModal(data.modalId)}
                >
                    <i className="fa fa-search mb-2"></i>
                    <h5 className="title text-lg font-bold">{data.title}</h5>
                    <span className="sub-title text-sm">{data.subTitle}</span>
                </figcaption>
            </figure>
        </div>
    )
}