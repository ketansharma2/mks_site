export interface ROIInput {
    projectInvestment: number;
    annualSavings: number;
    annualRevenue: number;
    projectLife: number;
  }
  
  export interface ROIResult {
    annualBenefit: number;
    totalBenefit: number;
    netBenefit: number;
    paybackPeriod: number;
    roiPercentage: number;
  }
  
  export function calculateROI(
    input: ROIInput
  ): ROIResult {
    const {
      projectInvestment,
      annualSavings,
      annualRevenue,
      projectLife,
    } = input;
  
    const annualBenefit =
      annualSavings + annualRevenue;
  
    const totalBenefit =
      annualBenefit * projectLife;
  
    const netBenefit =
      totalBenefit - projectInvestment;
  
    const paybackPeriod =
      annualBenefit > 0
        ? projectInvestment / annualBenefit
        : 0;
  
    const roiPercentage =
      projectInvestment > 0
        ? (netBenefit / projectInvestment) * 100
        : 0;
  
    return {
      annualBenefit,
      totalBenefit,
      netBenefit,
      paybackPeriod,
      roiPercentage,
    };
  }