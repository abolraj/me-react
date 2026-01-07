import { Calculator, CheckCircle2, ChevronRight, DollarSign, Minus, Package, Plus, Sparkles, Timer } from "lucide-react";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

export default function ServicesCalculator({
    packageData,
    itemData,
    baseStoryPointUSD = 5,
    defaultYearsExp = 5,
    className = '',
    ...props
}) {

    const { t } = useTranslation();

    const [yearsExp, setYearsExp] = useState(defaultYearsExp);

    const calculation = useMemo(() => {
        if (!itemData) return null;

        const featureCalculations = itemData.features.map(feature => ({
            ...feature,
            subtotal: feature.amount * feature.story_points
        }));

        const sumBeforeScale = featureCalculations.reduce((sum, calc) => sum + calc.subtotal, 0);
        const finalStoryPoints = Math.round(sumBeforeScale * itemData.scale);
        const estimatedCost = finalStoryPoints * baseStoryPointUSD;
        const estimatedTime = parseInt((finalStoryPoints / (yearsExp * 5.5)) * 30)

        return {
            featureCalculations,
            sumBeforeScale,
            scale: itemData.scale,
            finalStoryPoints,
            estimatedCost,
            estimatedTime,
        };
    }, [yearsExp, itemData, baseStoryPointUSD]);

    const handleYearsExpIncrement = () => {
        setYearsExp(y => y + 1);
    }

    const handleYearsExpDecrement = () => {
        setYearsExp(y => Math.max(1, y - 1));
    }

    return (
        <div>

            {/* Interactive Example */}
            <div className="bg-base-100 rounded-2xl shadow-xl p-2 md:p-4 border border-base-300">
                <div className="flex items-center gap-3 mb-4 md:mb-8">
                    <div className="p-3 bg-info/10 rounded-xl">
                        <Calculator className="w-6 h-6 text-info" />
                    </div>
                    <h2 className="text-2xl font-bold text-base-content">
                        {t('services.calculator')}
                    </h2>
                </div>

                {/* Package Info */}
                <div className="bg-info/5 rounded-xl p-2 md:p-4 mb-4 border border-info/20">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-info/10 rounded-lg">
                            <Package className="w-6 h-6 text-info" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-base-content mb-2">{packageData.title}</h3>
                            <p className="text-base-content/70 text-sm">{packageData.description}</p>
                        </div>
                    </div>
                </div>

                {/* Item Selection */}
                <div className="mb-4 md:mb-8">
                    {/* <h3 className="text-lg font-semibold text-base-content mb-4">
                        {t('services.item')}
                    </h3> */}
                    <div className="">
                        <div
                            className="text-left p-6 rounded-xl border-2 transition-all border-primary bg-primary/5 shadow-lg"
                        >
                            <div className="flex items-center justify-between mb-3">
                                <h4 className="font-bold text-base-content">{itemData.name}</h4>
                                <div className="badge badge-primary badge-sm">
                                    {t('services.scale')} {itemData.scale}×
                                </div>
                            </div>
                            <p className="text-sm text-base-content/70 mb-3">{itemData.description}</p>
                            <div className="flex items-center gap-2 text-xs text-base-content/60">
                                <CheckCircle2 className="w-3 h-3" />
                                {itemData.features.length} {t('services.features')}
                            </div>
                        </div>

                    </div>
                </div>

                {/* Calculation Display */}
                <div className="bg-base-200/50 rounded-xl p-2 md:p-4 space-y-2 md:space-y-6">
                    <h3 className="text-lg font-semibold text-base-content flex items-center gap-2">
                        <ChevronRight className="w-5 h-5 text-primary" />
                        {t('services.calculation_breakdown')}
                    </h3>

                    {/* Feature Calculations */}
                    <div>
                        <h4 className="text-sm font-medium text-base-content/70 mb-3">
                            {t('services.feature_calculations')}
                        </h4>
                        <div className="space-y-2">
                            {calculation.featureCalculations.map((feature, idx) => (
                                <div key={idx} className="bg-base-100 rounded-lg p-2 flex items-center justify-between">
                                    <div className="flex-1">
                                        <span className="font-medium text-base-content">{feature.title}</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-sm font-mono" dir="ltr">
                                        <span className="text-base-content/70">
                                            {feature.amount} × {feature.story_points} SP
                                        </span>
                                        <span className="text-primary font-bold">
                                            = {feature.subtotal} SP
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sum Before Scale */}
                    <div className="bg-base-100 rounded-lg p-2 md:p-4 border-2 border-secondary/20">
                        <div className="flex items-center justify-between">
                            <span className="font-semibold text-base-content">
                                {t('services.sum_of_features')}
                            </span>
                            <span className="text-xl font-bold text-secondary" dir="ltr">
                                {calculation.sumBeforeScale} SP
                            </span>
                        </div>
                    </div>

                    {/* Scale Application */}
                    <div className="bg-base-100 rounded-lg p-2 md:p-4 border-2 border-accent/20">
                        <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-base-content">
                                {t('services.item_scale')}
                            </span>
                            <span className="text-lg font-bold text-accent">
                                × {calculation.scale}
                            </span>
                        </div>
                        <div className="text-xs text-base-content/60 font-mono" dir="ltr">
                            {calculation.sumBeforeScale} SP × {calculation.scale} = {calculation.finalStoryPoints} SP
                        </div>
                    </div>

                    {/* Final Result */}
                    <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-2 md:p-4 border-2 border-primary">
                        <div className="flex items-center justify-between mb-4">
                            <div dir="ltr">
                                <div className="text-sm text-base-content/70 mb-1">
                                    {t('services.final_story_points')}
                                </div>
                                <div className="text-3xl font-bold text-primary">
                                    {calculation.finalStoryPoints} SP
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-sm text-base-content/70 mb-1">
                                    {t('services.estimated_cost')}
                                </div>
                                <div className="text-3xl font-bold text-success flex items-center gap-1">
                                    <DollarSign className="w-6 h-6" />
                                    {calculation.estimatedCost.toLocaleString()}
                                </div>
                            </div>
                        </div>
                        <div className="text-xs text-base-content/60 font-mono text-center pt-4 border-t border-primary/20" dir="ltr">
                            1 SP = ${baseStoryPointUSD}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-base-100 rounded-2xl shadow-xl p-2 md:p-4 border border-base-300 mt-4">

                {/* Times estimation */}
                <div className="text-base-content">
                    <div className="flex items-center gap-3 mb-4 md:mb-8">
                        <div className="p-3 bg-info/10 rounded-xl">
                            <Timer className="w-6 h-6 text-info" />
                        </div>
                        <h2 className="text-2xl font-bold text-base-content">
                            {t('services.time_est')}
                        </h2>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                        <button onClick={handleYearsExpDecrement} className="btn btn-square btn-primary grow">
                            <Minus className="size-6" />
                        </button>
                        <button onClick={handleYearsExpIncrement} className="btn btn-square btn-primary grow">
                            <Plus className="size-6" />
                        </button>
                        <p className="text-2xl lg:text-5xl grow-[1000]">
                            <span className="text-primary">
                                {yearsExp}
                            </span>
                            {' '}
                            {t('services.years_exp_of_dev')}
                        </p>
                    </div>

                    {/* The Golden Formula */}
                    <div className="bg-gradient-to-r from-warning/10 via-warning/5 to-warning/10 rounded-2xl shadow-xl p-2 md:p-4 mb-4 border border-warning/20">
                        <div className="flex items-center gap-3 mb-4">
                            <Sparkles className="w-6 h-6 text-warning" />
                            <h2 className="text-xl md:text-2xl font-bold text-base-content">
                                {t('services.the_golden_formula')}
                            </h2>
                        </div>

                        <div className="bg-base-100 rounded-xl p-6 font-mono text-center">
                            <div className="text-sm text-base-content/60 mb-2">
                                {t('services.formula_est_time')}
                            </div>
                            <div className="text-xl md:text-2xl font-bold text-warning break-words" dir="ltr">
                                Min Days = ( SP / ( Expriences (years) × 6 ) ) × 30
                            </div>
                        </div>
                    </div>

                    {/* Final Result */}
                    <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-2 md:p-4 border-2 border-primary">
                        <div className="flex flex-wrap items-center justify-between mb-4">
                            <div dir="ltr">
                                <div className="text-sm text-base-content/70 mb-1">
                                    {t('services.final_story_points')}
                                </div>
                                <div className="text-3xl font-bold text-primary">
                                    {calculation.finalStoryPoints} SP
                                </div>
                            </div>
                            <div>
                                <div className="text-sm text-base-content/70 mb-1">
                                    {t('services.expriences')}
                                </div>
                                <div className="text-3xl font-bold text-primary">
                                    {yearsExp} {t('services.years')}
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-sm text-base-content/70 mb-1">
                                    {t('services.time_est')}
                                </div>
                                <div className="text-3xl font-bold text-success flex items-center gap-1">
                                    {calculation.estimatedTime.toLocaleString()} {t('services.days')}
                                </div>
                            </div>
                        </div>
                        <div className="text-xs text-base-content/60 font-mono text-center pt-4 border-t border-primary/20">
                            {calculation.estimatedTime.toLocaleString()} {t('services.days')}
                            {' ≈ '}
                            {parseInt(calculation.estimatedTime.toLocaleString() / 30)} {t('services.months')}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}