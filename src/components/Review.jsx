import { useTranslation } from 'react-i18next';
import { useNavigate } from '@tanstack/react-router';
import { Star, StarHalf, UserCircle, ChevronLeft, ChevronRight, Calendar, ThumbsUp, Quote } from 'lucide-react';
import { useState } from 'react';

export default function Review({ rate = 5, title, name, text, date, helpful = 0, index, totalReviews = 0, className }) {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [isHelpful, setIsHelpful] = useState(false);
    const [helpfulCount, setHelpfulCount] = useState(helpful);
    
    const fullStars = Math.floor(rate);
    const hasHalfStar = rate % 1 >= 0.5;
    
    const handleHelpful = () => {
        if (!isHelpful) {
            setHelpfulCount(prev => prev + 1);
            setIsHelpful(true);
        }
    };
    
    const handleNextReview = () => {
        if (index < totalReviews - 1) {
            navigate({ to: '/reviews', search: { review: index + 1 } });
        }
    };
    
    const handlePrevReview = () => {
        if (index > 0) {
            navigate({ to: '/reviews', search: { review: index - 1 } });
        }
    };

    return (
        <div className={`w-full max-w-4xl mx-auto ${className}`}>
            {/* Review Card */}
            <div className="h-full flex flex-col bg-base-100 rounded-2xl shadow-xl p-4 md:p-8 transition-all duration-300 hover:shadow-2xl border border-base-300">
                {/* Header */}
                <div className="flex flex-wrap items-center max-sm:justify-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <UserCircle className="h-16 w-16 text-primary" />
                            <div className="absolute -bottom-1 -right-1 bg-secondary rounded-full p-1 border-2 border-base-100">
                                <Quote className="h-4 w-4 text-secondary-content" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-base-content">@{name}</h3>
                            <p className="text-primary font-medium">{title}</p>
                        </div>
                    </div>
                    
                    {/* Rating Stars */}
                    <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => {
                            if (i < fullStars) {
                                return <Star key={i} className="h-6 w-6 fill-warning stroke-warning" />;
                            } else if (i === fullStars && hasHalfStar) {
                                return <StarHalf key={i} className="h-6 w-6 fill-warning stroke-warning" />;
                            }
                            return <Star key={i} className="h-6 w-6 stroke-base-300" />;
                        })}
                        <span className="ml-2 text-lg font-bold text-base-content">{rate.toFixed(1)}</span>
                    </div>
                </div>

                {/* Review Text */}
                <div className="mb-8 grow">
                    <div className="relative">
                        <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                        <p className="text-base-content/90 md:text-lg leading-relaxed pl-6">
                            {text}
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex flex-wrap gap-2 items-center justify-between pt-6 border-t border-base-300">
                    <div className="flex flex-wrap grow items-center gap-4">
                        {/* Date */}
                        <div className="flex max-sm:grow items-center gap-2 text-base-content/60">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">
                                {date || t('reviews.recently')}
                            </span>
                        </div>
                        
                        {/* Helpful Button */}
                        <button
                            onClick={handleHelpful}
                            disabled={isHelpful}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                                isHelpful 
                                    ? 'bg-success/20 text-success border border-success/30' 
                                    : 'bg-base-200 hover:bg-primary/10 hover:text-primary border border-base-300'
                            }`}
                        >
                            <ThumbsUp className={`h-4 w-4 ${isHelpful ? 'fill-success' : ''}`} />
                            <span className="text-sm font-medium max-sm:hidden">
                                {t('reviews.helpful')} ({helpfulCount})
                            </span>
                        </button>
                    </div>
                    
                    {/* Verified Badge */}
                    <div className="badge badge-success badge-lg gap-2">
                        <Star className="h-3 w-3 fill-current" />
                        {t('reviews.verified_review')}
                    </div>
                </div>
            </div>

        </div>
    );
}