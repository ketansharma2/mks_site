export interface EnergyInput {
    equipmentLoad: number;
    operatingHours: number;
    operatingDays: number;
    electricityCost: number;
  }
  
  export interface EnergyResult {
    dailyEnergy: number;
    annualEnergy: number;
    annualCost: number;
    monthlyEnergy: number;
  }
  
  export function calculateEnergy(
    input: EnergyInput
  ): EnergyResult {
    const {
      equipmentLoad,
      operatingHours,
      operatingDays,
      electricityCost,
    } = input;
  
    const dailyEnergy =
      equipmentLoad * operatingHours;
  
    const annualEnergy =
      dailyEnergy * operatingDays;
  
    const annualCost =
      annualEnergy * electricityCost;
  
    const monthlyEnergy =
      annualEnergy / 12;
  
    return {
      dailyEnergy,
      annualEnergy,
      annualCost,
      monthlyEnergy,
    };
  }