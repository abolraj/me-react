import { Check, Star, X } from "lucide-react";

export default function PackageFeature({
    title,
    description,
    popularity,
    storyPoints,
    amount,
    className,
    isRequired = null,
    showDescription = false,
    ...props
}) {

    const getPopularityColor = (popularity) => {
        if (popularity >= 85) return 'text-success';
        if (popularity >= 70) return 'text-warning';
        return 'text-info';
    };

    return (
        <div
            className={`group/feature relative z-10 block p-2 rounded-xl bg-base-200/50 backdrop-blur-sm border border-base-300 hover:border-primary/50 transition-all duration-300 ${className}`}
            data-show-description={+showDescription}
            {...props}
        >
            <div className="flex items-start gap-3">
                {isRequired !== null &&
                    <div className={`mt-0.5 ${isRequired ? 'text-success' : 'text-base-content/40'}`}>
                        {isRequired ? (
                            <Check className="w-5 h-5" />
                        ) : (
                            <X className="w-5 h-5" />
                        )}
                    </div>
                }
                <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <h4 className="font-semibold text-sm group-data-[show-description='1']/feature:text-lg text-base-content">
                            {title}
                            {amount > 1 && (
                                <span className="ml-2 px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs">
                                    ×{amount}
                                </span>
                            )}
                        </h4>
                        <div className="flex items-center gap-2 shrink-0">
                            <span className="text-xs text-base-content/50">
                                {storyPoints} SP
                            </span>
                            <Star className={`w-3 h-3 ${getPopularityColor(popularity)}`} />
                        </div>
                        {showDescription &&
                            <div className="text-start text-sm text-base-content w-full">
                                {description}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}