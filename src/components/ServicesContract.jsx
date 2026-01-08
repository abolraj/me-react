import {
    Calculator,
    CheckCircle2,
    ChevronRight,
    Copy,
    DollarSign,
    Download,
    FileText,
    Package,
    Printer,
    Sparkles,
    Timer,
    User,
    Calendar,
    Hash,
    PenTool,
    Eye,
    Share2
} from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export default function ServicesContract({
    packageData,
    itemData,
    baseStoryPointUSD = 5,
    yearsExp = 5,
    className = '',
    ...props
}) {
    const { t } = useTranslation();
    const [copied, setCopied] = useState(false);
    const contractRef = useRef(null)

    const calculation = useMemo(() => {
        if (!itemData) return null;

        const featureCalculations = itemData.features.map(feature => ({
            ...feature,
            subtotal: feature.amount * feature.story_points
        }));

        const sumBeforeScale = featureCalculations.reduce((sum, calc) => sum + calc.subtotal, 0);
        const finalStoryPoints = Math.round(sumBeforeScale * itemData.scale);
        const estimatedCost = finalStoryPoints * baseStoryPointUSD;
        const estimatedTime = parseInt((finalStoryPoints / (yearsExp * 6)) * 30);

        return {
            featureCalculations,
            sumBeforeScale,
            scale: itemData.scale,
            finalStoryPoints,
            estimatedCost,
            estimatedTime,
        };
    }, [yearsExp, itemData, baseStoryPointUSD]);

    const copyToClipboard = () => {
        const contractText = generateContractText();
        navigator.clipboard.writeText(contractText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const generateContractText = () => {
        return contractRef.current.innerText;
    };

    if (!calculation) return null;

    return (
        <div className={`mx-auto ${className}`} {...props}>
            {/* Contract Header */}
            <div className="bg-gradient-to-r from-primary to-primary/90 rounded-t-2xl p-6 md:p-8 text-primary-content shadow-lg">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="w-full flex flex-wrap items-center gap-4">
                        <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                            <FileText className="w-8 h-8" />
                        </div>
                        <div className="grow text-start">
                            <h1 className="text-2xl md:text-4xl font-bold">
                                {t('services.contract_title')}
                            </h1>
                            <p className="text-primary-content/80 mt-2">
                                {t('services.contract_subtitle')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contract Body */}
            <div className="bg-base-100 rounded-b-2xl shadow-xl p-2 md:p-4 border border-base-300">

                {/* Contract Sections */}
                <div className="">


                    {/* Contract Content */}
                    <div className="bg-base-300 whitespace-pre-line text-start rounded-xl p-2 md:p-4 border border-base-300">
                        <div className="w-fill mx-auto flex flex-wrap justify-end gap-2 mb-2">
                            <button
                                onClick={copyToClipboard}
                                className={`btn ${copied ? 'btn-success' : 'btn-outline btn-primary'} gap-2`}
                            >
                                {copied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                {copied ? t('services.copied') : t('services.copy_contract')}
                            </button>
                        </div>

                        <div className="overflow-auto">
                            <pre className="whitespace-pre-wrap whitespace-break-spaces min-w-[50rem]" ref={contractRef}>
                                # {t('services.contract_title')}
                                {' '}
                                {'\n'}
                                {'\n'}

                                ## {t('services.contract_id')}: #ARC-{itemData.slug} {'\n'}
                                ## {t('services.contract_date')}: {new Date().toLocaleDateString()} {'\n'}
                                {'\n'}

                                {t('services.cost_estimation_strategy_note')} {'\n'}

                                {'\n'}

                                ## {t('services.developer_experience')} : {yearsExp} {t('services.years')}
                                {'\n'}
                                {'\n'}

                                ## {t('services.package_title')}: {packageData?.title || ''} {'\n'}
                                ## {t('services.package_details')}: {packageData?.description || ''} {'\n'}
                                {'\n'}

                                ## {t('services.item_name')}: {itemData?.name || ''} {'\n'}
                                ## {t('services.item_scale')}: {itemData?.scale || 1}x {'\n'}
                                ## {t('services.item_details')}: {itemData?.description || ''} {'\n'}
                                {'\n'}

                                {t('services.features_breakdown')}: {'\n'}
                                {itemData?.features.map((f, i) => `  ${i + 1}. ${f.title} - ${f.amount} × ${f.story_points} SP = ${f.amount * f.story_points} SP`).join('\n')} {'\n'}
                                {'\n'}

                                {t('services.total_story_points')}: {calculation?.finalStoryPoints || 0} SP {'\n'}
                                {t('services.estimated_cost')}: ${calculation?.estimatedCost.toLocaleString() || 0} {'\n'}
                                {t('services.estimated_time')}: {calculation?.estimatedTime || 0} {t('services.days')} {'\n'}
                                {'\n'}
                                {'\n'}
                                {'\n'}

                                # {t('services.services_strategy_title')}
                                {'\n'}
                                {'\n'}

                                # {t('services.what_is_story_point')}{'\n'}
                                ## {t('services.story_point_definition')}{'\n'}
                                {'\n'}

                                # {t('services.how_it_works')} :
                                {'\n'}
                                {[
                                    { title: t('services.step_packages'), desc: t('services.step_packages_desc') },
                                    { title: t('services.step_items'), desc: t('services.step_items_desc') },
                                    { title: t('services.step_features'), desc: t('services.step_features_desc') },
                                    { title: t('services.step_calculation'), desc: t('services.step_calculation_desc') },
                                ].map((step, idx) => (
                                    <>
                                        {' '} + {step.title} : {step.desc} {'\n'}
                                    </>
                                ))}

                                {'\n'}
                                {'\n'}
                                # {t('services.total_estimated_cost')} : {'\n'}
                                {' '} ## {t('services.the_golden_formula')} 1 : {t('services.formula_explanation')}
                                {'\n'}
                                {' '} ## [ Final SP = Σ(Amount × SP) × Scale ]

                                {'\n'}
                                {'\n'}
                                # {t('services.estimated_duration')} : {'\n'}
                                {' '} ## {t('services.the_golden_formula')} 2 : {t('services.formula_est_time')}
                                {'\n'}
                                {' '} ## [ Min Days = ( SP / ( Expriences (years) × 6 ) ) × 30 ]


                                {'\n'}
                                {'\n'}
                                {t('services.contract_terms_and_conditions_note')}
                            </pre>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}