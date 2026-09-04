export interface PlantCapacityInput {
    requiredProduction: number;
    operatingHours: number;
    operatingDays: number;
    designMargin: number;
  }
  
  export interface PlantCapacityResult {
    hourlyCapacity: number;
    designCapacity: number;
    annualProduction: number;
  }
  
  export function calculatePlantCapacity(
    input: PlantCapacityInput
  ): PlantCapacityResult {
    const {
      requiredProduction,
      operatingHours,
      operatingDays,
      designMargin,
    } = input;
  
    const hourlyCapacity =
      operatingHours > 0
        ? requiredProduction / operatingHours
        : 0;
  
    const designCapacity =
      hourlyCapacity * (1 + designMargin / 100);
  
    const annualProduction =
      requiredProduction * operatingDays;
  
    return {
      hourlyCapacity,
      designCapacity,
      annualProduction,
    };
  }