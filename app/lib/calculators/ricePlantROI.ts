export interface RicePlantROIInput {
    capacity: number;
    brokenRiceCost: number;
    electricityCost: number;
    steamCost: number;
}

export interface RicePlantROIResult {
    capacity: number;
    investment: number;

    brokenRiceCost: number;
    electricityCost: number;
    steamCost: number;

    starchPrice: number;
    glutenPrice: number;

    rawMaterialKg: number;
    starchKg: number;
    glutenKg: number;

    sale: number;
    processingCost: number;
    dailyProfit: number;
    annualProfit: number;

    paybackPeriod: number;
}

const plantOptions = [
    { capacity: 40, investment: 12 },
    { capacity: 60, investment: 15 },
    { capacity: 80, investment: 18 },
    { capacity: 100, investment: 20 },
];

export function calculateRicePlantROI({
    capacity,
    brokenRiceCost,
    electricityCost,
    steamCost,
}: RicePlantROIInput): RicePlantROIResult {
    const selectedPlant = plantOptions.find(
        (plant) => plant.capacity === capacity
    );

    if (!selectedPlant) {
        throw new Error("Invalid plant capacity");
    }

    /* =====================================================
       RAW MATERIAL
    ===================================================== */

    const rawMaterialKg = capacity * 1000;

    /* =====================================================
       PRODUCTION
    ===================================================== */

    const starchPercentage = 0.68;
    const glutenPercentage = 0.17;

    const starchKg =
        (rawMaterialKg * starchPercentage) / 0.84;

    const glutenKg =
        (rawMaterialKg * glutenPercentage) / 0.90;

    /* =====================================================
       BASE PRICES
    ===================================================== */

    const baseBrokenRiceCost = 25;
    const baseStarchPrice = 35;
    const baseGlutenPrice = 40;

    let starchPrice = baseStarchPrice;
    let glutenPrice = baseGlutenPrice;

    /* =====================================================
       PRICE ADJUSTMENT
    ===================================================== */

    if (brokenRiceCost >= baseBrokenRiceCost) {
        const increase =
            brokenRiceCost - baseBrokenRiceCost;

        starchPrice =
            baseStarchPrice + increase;

        glutenPrice =
            baseGlutenPrice + increase;
    } else {
        const decrease =
            baseBrokenRiceCost - brokenRiceCost;

        starchPrice =
            baseStarchPrice - decrease;

        glutenPrice =
            baseGlutenPrice - decrease * 2;
    }

    /* =====================================================
       SALES
    ===================================================== */

    const sale =
        starchKg * starchPrice +
        glutenKg * glutenPrice;

    /* =====================================================
       PROCESSING COST
    ===================================================== */

    /*
     * Current formula from your existing calculator.
     *
     * Electricity and steam are accepted as inputs
     * but are NOT included here because your current
     * formula does not use them yet.
     */
    const processingCost =
        rawMaterialKg *
        (brokenRiceCost + 8.5);

    /* =====================================================
       PROFIT
    ===================================================== */

    const dailyProfit =
        sale - processingCost;

    const annualProfit =
        dailyProfit * 365;

    /* =====================================================
       INVESTMENT
    ===================================================== */

    const investment =
        selectedPlant.investment;

    const investmentRupees =
        investment * 10_000_000;

    /* =====================================================
       PAYBACK
    ===================================================== */

    const paybackPeriod =
        annualProfit > 0
            ? investmentRupees / annualProfit
            : Infinity;

    return {
        capacity,
        investment,

        brokenRiceCost,
        electricityCost,
        steamCost,

        starchPrice,
        glutenPrice,

        rawMaterialKg,
        starchKg,
        glutenKg,

        sale,
        processingCost,
        dailyProfit,
        annualProfit,

        paybackPeriod,
    };
}

export { plantOptions };
