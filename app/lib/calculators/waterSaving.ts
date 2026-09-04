export interface WaterSavingInput {
    currentConsumption: number;
    currentRecovery: number;
    targetRecovery: number;
    operatingDays: number;
  }
  
  export interface WaterSavingResult {
    currentRecovered: number;
    targetRecovered: number;
    dailySaving: number;
    annualSaving: number;
  }
  
  export function calculateWaterSaving(
    input: WaterSavingInput
  ): WaterSavingResult {
    const {
      currentConsumption,
      currentRecovery,
      targetRecovery,
      operatingDays,
    } = input;
  
    const currentRecovered =
      currentConsumption * (currentRecovery / 100);
  
    const targetRecovered =
      currentConsumption * (targetRecovery / 100);
  
    const dailySaving =
      currentConsumption *
      ((targetRecovery - currentRecovery) / 100);
  
    const annualSaving = dailySaving * operatingDays;
  
    return {
      currentRecovered,
      targetRecovered,
      dailySaving,
      annualSaving,
    };
  }