import React, { useState, useMemo } from 'react';
import { Calculator, Package, Layers, TrendingUp, DollarSign, CheckCircle2, Info, ChevronRight, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ServicesStrategy = ({
  packageData,
  itemsData,
  baseStoryPointUSD = 5
}) => {
  const { t } = useTranslation();
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const selectedItem = selectedItemIndex !== null ? itemsData[selectedItemIndex] : null;

  const calculation = useMemo(() => {
    if (!selectedItem) return null;

    const featureCalculations = selectedItem.features.map(feature => ({
      ...feature,
      subtotal: feature.amount * feature.story_points
    }));

    const sumBeforeScale = featureCalculations.reduce((sum, calc) => sum + calc.subtotal, 0);
    const finalStoryPoints = Math.round(sumBeforeScale * selectedItem.scale);
    const estimatedCost = finalStoryPoints * baseStoryPointUSD;

    return {
      featureCalculations,
      sumBeforeScale,
      scale: selectedItem.scale,
      finalStoryPoints,
      estimatedCost
    };
  }, [selectedItem, baseStoryPointUSD]);

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{t('services.services_strategy_title')}</span>
          </div>
          <h1 className="text-5xl font-bold text-base-content mb-4">
            {t('services.understanding_packages')}
          </h1>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            {t('services.packages_intro')}
          </p>
        </div>

        {/* What is Story Point Section */}
        <div className="bg-base-100 rounded-2xl shadow-xl p-2 md:p-4 mb-4 md:mb-8 border border-base-300">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-secondary/10 rounded-xl">
              <Info className="w-6 h-6 text-secondary" />
            </div>
            <div className='grow'>
              <h2 className="text-2xl font-bold text-base-content mb-2">
                {t('services.what_is_story_point')}
              </h2>
              <p className="text-base-content/80 leading-relaxed text-start">
                {t('services.story_point_definition')}
              </p>
            </div>
          </div>

          <div className="bg-secondary/5 rounded-xl p-2 md:p-4 border-l-4 border-secondary">
            <p className="text-base-content/80 leading-relaxed">
              {t('services.story_point_benefits')}
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-base-100 rounded-2xl shadow-xl p-2 md:p-4 mb-4 md:mb-8 border border-base-300">
          <h2 className="text-2xl font-bold text-base-content mb-8 flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-accent" />
            {t('services.how_it_works')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Package, title: t('services.step_packages'), desc: t('services.step_packages_desc'), color: 'primary' },
              { icon: Layers, title: t('services.step_items'), desc: t('services.step_items_desc'), color: 'secondary' },
              { icon: CheckCircle2, title: t('services.step_features'), desc: t('services.step_features_desc'), color: 'accent' },
              { icon: Calculator, title: t('services.step_calculation'), desc: t('services.step_calculation_desc'), color: 'success' },
            ].map((step, idx) => (
              <div key={idx} className="bg-base-200/50 rounded-xl p-6 hover:bg-base-200 transition-colors">
                <div className={`inline-flex p-3 bg-${step.color}/10 rounded-lg mb-4`}>
                  <step.icon className={`w-6 h-6 text-${step.color}`} />
                </div>
                <h3 className="font-semibold text-base-content mb-2">{step.title}</h3>
                <p className="text-sm text-base-content/70 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* The Golden Formula */}
        <div className="bg-gradient-to-r from-warning/10 via-warning/5 to-warning/10 rounded-2xl shadow-xl p-2 md:p-4 mb-4 md:mb-8 border border-warning/20">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-warning" />
            <h2 className="text-2xl font-bold text-base-content">
              {t('services.the_golden_formula')}
            </h2>
          </div>

          <div className="bg-base-100 rounded-xl p-6 font-mono text-center">
            <div className="text-sm text-base-content/60 mb-2">
              {t('services.formula_explanation')}
            </div>
            <div className="text-xl md:text-2xl font-bold text-warning break-words">
              Final SP = Σ(Amount × SP) × Scale
            </div>
          </div>
        </div>

        {/* Interactive Example */}
        <div className="bg-base-100 rounded-2xl shadow-xl p-2 md:p-4 border border-base-300">
          <div className="flex items-center gap-3 mb-4 md:mb-8">
            <div className="p-3 bg-info/10 rounded-xl">
              <Calculator className="w-6 h-6 text-info" />
            </div>
            <h2 className="text-2xl font-bold text-base-content">
              {t('services.interactive_example')}
            </h2>
          </div>

          {/* Package Info */}
          <div className="bg-info/5 rounded-xl p-2 md:p-4 mb-4 md:mb-6 border border-info/20">
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
            <h3 className="text-lg font-semibold text-base-content mb-4">
              {t('services.select_package_item')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {itemsData.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedItemIndex(idx)}
                  className={`text-left p-6 rounded-xl border-2 transition-all ${selectedItemIndex === idx
                      ? 'border-primary bg-primary/5 shadow-lg'
                      : 'border-base-300 bg-base-200/50 hover:border-primary/50'
                    }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-base-content">{item.name}</h4>
                    <div className="badge badge-primary badge-sm">
                      {t('services.scale')} {item.scale}×
                    </div>
                  </div>
                  <p className="text-sm text-base-content/70 mb-3">{item.description}</p>
                  <div className="flex items-center gap-2 text-xs text-base-content/60">
                    <CheckCircle2 className="w-3 h-3" />
                    {item.features.length} {t('services.features')}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Calculation Display */}
          {calculation ? (
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
              <div className="bg-base-100 rounded-lg p-2 md:p-4 border-2 border-accent/20"  dir="ltr">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-base-content">
                    {t('services.item_scale')}
                  </span>
                  <span className="text-lg font-bold text-accent">
                    × {calculation.scale}
                  </span>
                </div>
                <div className="text-xs text-base-content/60 font-mono">
                  {calculation.sumBeforeScale} SP × {calculation.scale} = {calculation.finalStoryPoints} SP
                </div>
              </div>

              {/* Final Result */}
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-2 md:p-4 border-2 border-primary">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-sm text-base-content/70 mb-1">
                      {t('services.final_story_points')}
                    </div>
                    <div className="text-3xl font-bold text-primary"  dir="ltr">
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
          ) : (
            <div className="bg-base-200/50 rounded-xl p-2 md:p-4 text-center">
              <Package className="w-12 h-12 text-base-content/30 mx-auto mb-4" />
              <p className="text-base-content/60">
                {t('services.choose_item_to_see')}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicesStrategy;