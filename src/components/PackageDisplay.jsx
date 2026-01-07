import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from '@tanstack/react-router';
import {
	Check,
	X,
	ChevronDown,
	ChevronUp,
	Sparkles,
	TrendingUp,
	Zap,
	Crown,
	Star,
	ArrowRight,
	PackageIcon,
	Info
} from 'lucide-react';
import { DynamicIcon } from 'lucide-react/dynamic';
import PackageFeature from './PackageFeature';

export default function PackageDisplay({
	packageData,
	itemsData,
	onClickItem,
	packageWrapperClassName = '',
	itemWrapperClassName = '',
	featureWrapperClassName = ''
}) {
	const { t } = useTranslation();
	const tooltipRef = useRef(null);
	const [tooltip, setTooltip] = useState('Hi');

	const getScaleBadge = (scale) => {
		if (scale < 1) return { text: t('services.starter_plan'), color: 'bg-info', icon: Sparkles };
		if (scale < 2) return { text: t('services.popular_plan'), color: 'bg-success', icon: TrendingUp };
		return { text: t('services.premium_plan'), color: 'bg-warning', icon: Crown };
	};

	const calculateTotalStoryPoints = (features) => {
		return features.reduce((sum, f) => sum + (f.story_points * f.amount), 0);
	};

	const handleOnMouseOverFeature = (text) => {
		setTooltip(text)
	}

	const handleOnMouseLeaveFeature = () => {
		if (tooltip !== null) {
			setTooltip(null);
		}
	}

	return (
		<div className={`text-base-content ${packageWrapperClassName}`}>
			<div className="max-w-7xl mx-auto">
				{/* Package Header */}
				<div className="flex flex-wrap items-start gap-2 mb-4 px-4 text-center">
					<div className="inline-flex items-center justify-center w-32">
						<DynamicIcon
							name={packageData.logo}
							width={null}
							height={null}
							fallback={() => <PackageIcon />}
						/>
					</div>
					<div className='text-start grow'>
						<h1 className="w-full h-14 text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
							{packageData.title}
							<span className='tooltip text-[1.5rem] text-secondary absolute -translate-y-1' data-tip={t('services.popularity_score')}>
								,{packageData.popularity}❤️
							</span>
						</h1>
						<p className="text-lg text-base-content/70 max-w-2xl">
							{packageData.description}
						</p>
					</div>
					<div className="flex flex-wrap justify-center gap-2 mb-4">
						{packageData.tags.map((tag, idx) => (
							<span
								key={idx}
								className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
							>
								#{tag}
							</span>
						))}
					</div>
				</div>

				{/* Items Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{itemsData.map((item, itemIdx) => {
						const scaleBadge = getScaleBadge(itemIdx);
						const BadgeIcon = scaleBadge.icon;
						const totalPoints = calculateTotalStoryPoints(item.features);
						const requiredFeatures = item.features.filter(f => f.is_required).length;

						return (
							<div
								key={item.slug}
								className={`group relative bg-base-100 rounded-3xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden ${itemWrapperClassName}`}
							>
								{/* Scale Badge */}
								<div className={`absolute top-4 right-4 ${scaleBadge.color} text-base-100 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg z-10`}>
									<BadgeIcon className="w-3 h-3" />
									{scaleBadge.text}
								</div>

								{/* Header Gradient */}
								<div className="h-2 bg-gradient-to-r from-primary via-secondary to-accent"></div>

								{/* Item Header */}
								<div className="flex flex-col h-[40rem] p-8 pb-6">
									<div className="flex flex-col box-border items-start justify-between mb-4">
										<div>
											<h2 className="text-3xl font-bold mb-2 text-base-content group-hover:text-primary transition-colors">
												{item.name}
											</h2>
											<p className="text-base-content/60 text-sm h-20 ">
												{item.description}
											</p>
										</div>
									</div>

									{/* Stats Row */}
									<div className="flex items-center gap-4 mb-6 pb-6 border-b border-base-300">
										<div className="flex items-center gap-2">
											<Zap className="w-4 h-4 text-warning" />
											<span className="text-sm font-medium">
												{totalPoints} {t('services.story_points')}
											</span>
										</div>
										<div className="flex items-center gap-2">
											<Check className="w-4 h-4 text-success" />
											<span className="text-sm font-medium">
												{item.features.length} {t('services.features')}
											</span>
										</div>
									</div>

									{/* Features List */}
									<div className={`space-y-2 transition-all duration-500 grow overflow-y-auto !overflow-x-visible`}>
										{item.features.map((feature, featureIdx) => (
											<PackageFeature
												key={feature.feature_slug}
												className={featureWrapperClassName}
												data-tooltip={feature.description}
												onMouseOver={() => handleOnMouseOverFeature(feature.description)}
												onMouseLeave={() => handleOnMouseLeaveFeature()}

												title={feature.title}
												description={feature.description}
												popularity={feature.popularity}
												amount={feature.amount}
												isRequired={feature.is_required}
												storyPoints={feature.story_points}
											/>
										))}
									</div>
								</div>

								{/* CTA Button */}
								<div className="px-8 pb-8">
									<Link to={'/services/calculator/' + item.slug}>
										<button
											onClick={() => onClickItem && onClickItem(item)}
											className="w-full btn btn-primary group/btn relative overflow-hidden"
										>
											<span className="relative z-10 flex items-center justify-center gap-2">
												{t('services.select_plan')}
												<ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
											</span>
											<div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
										</button>
									</Link>
								</div>

								{/* Hover Glow Effect */}
								<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
									<div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"></div>
								</div>
							</div>
						);
					})}
				</div>

				{/* Footer Note */}
				<div className="mt-12 text-center text-sm text-base-content/50">
					<p>{t('services.footer_note')}</p>
				</div>

				{/* Tooltip */}
				<div className='gap-2 fixed bottom-0 left-0 alert min-h-20 lg:w-1/2 shadow-sm rounded-none lg:rounded-tr-lg z-[999] hidden data-[shown="1"]:flex' data-shown={+(!!tooltip)}>
					<Info className='size-8 min-w-8 text-primary' />
					<p className='text-lg'>
						{tooltip}
					</p>
				</div>
			</div>
		</div>
	);
};