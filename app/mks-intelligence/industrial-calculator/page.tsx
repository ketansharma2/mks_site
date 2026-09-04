"use client";

import { useState } from "react";
import {
    ArrowRight,
    Droplets,
    Waves,
    Factory,
    Zap,
    Recycle,
    TrendingUp,
    RotateCcw,
} from "lucide-react";

import { calculateWaterSaving } from "@/app/lib/calculators/waterSaving";
import { calculateZLD } from "@/app/lib/calculators/zld";
import { calculatePlantCapacity } from "@/app/lib/calculators/plantCapacity";
import { calculateEnergy } from "@/app/lib/calculators/energy";
import { calculateWastewater } from "@/app/lib/calculators/wastewater";
import { calculateROI } from "@/app/lib/calculators/roi"

type CalculatorType =
    | "water-saving"
    | "zld"
    | "capacity"
    | "energy"
    | "wastewater"
    | "roi";

interface CalculatorInputData {
    [key: string]: string;
}

const calculatorTitles: Record<CalculatorType, string> = {
    "water-saving": "Water Saving Calculator",
    zld: "ZLD Calculator",
    capacity: "Plant Capacity Calculator",
    energy: "Energy Calculator",
    wastewater: "Wastewater Treatment Calculator",
    roi: "ROI Calculator",
};

const defaultInputs: Record<
    CalculatorType,
    CalculatorInputData
> = {
    "water-saving": {
        currentConsumption: "",
        currentRecovery: "",
        targetRecovery: "",
        operatingDays: "",
    },

    zld: {
        wastewaterFlow: "",
        roRecovery: "",
        meeRecovery: "",
        atfdRecovery: "",
    },

    capacity: {
        requiredProduction: "",
        operatingHours: "",
        operatingDays: "",
        designMargin: "",
    },

    energy: {
        equipmentLoad: "",
        operatingHours: "",
        operatingDays: "",
        electricityCost: "",
    },

    wastewater: {
        wastewaterFlow: "",
        bod: "",
        cod: "",
        tss: "",
    },

    roi: {
        projectInvestment: "",
        annualSavings: "",
        annualRevenue: "",
        projectLife: "",
    },
};

export default function IndustrialCalculatorPage() {
    const [selectedCalculator, setSelectedCalculator] =
        useState<CalculatorType>("water-saving");

    const [inputs, setInputs] =
        useState<CalculatorInputData>(
            defaultInputs["water-saving"]
        );

        const [result, setResult] = useState<any>(null);

    const [hasCalculated, setHasCalculated] =
        useState(false);

    const handleCalculatorChange = (
        calculator: CalculatorType
    ) => {
        setSelectedCalculator(calculator);
        setInputs(defaultInputs[calculator]);
        setResult(null);
        setHasCalculated(false);
    };

    const handleInputChange = (
        field: string,
        value: string
    ) => {
        setInputs((previous) => ({
            ...previous,
            [field]: value,
        }));

        setHasCalculated(false);
    };

    const getNumber = (field: string) => {
        return Number(inputs[field] || 0);
    };

    const calculate = () => {
        let calculatedResult: any;
        switch (selectedCalculator) {
            case "water-saving":
                calculatedResult = calculateWaterSaving({
                    currentConsumption:
                        getNumber("currentConsumption"),
                    currentRecovery:
                        getNumber("currentRecovery"),
                    targetRecovery:
                        getNumber("targetRecovery"),
                    operatingDays:
                        getNumber("operatingDays"),
                });

                break;

            case "zld":
                calculatedResult = calculateZLD({
                    wastewaterFlow:
                        getNumber("wastewaterFlow"),
                    roRecovery:
                        getNumber("roRecovery"),
                    meeRecovery:
                        getNumber("meeRecovery"),
                    atfdRecovery:
                        getNumber("atfdRecovery"),
                });

                break;

            case "capacity":
                calculatedResult = calculatePlantCapacity({
                    requiredProduction:
                        getNumber("requiredProduction"),
                    operatingHours:
                        getNumber("operatingHours"),
                    operatingDays:
                        getNumber("operatingDays"),
                    designMargin:
                        getNumber("designMargin"),
                });

                break;

            case "energy":
                calculatedResult = calculateEnergy({
                    equipmentLoad:
                        getNumber("equipmentLoad"),
                    operatingHours:
                        getNumber("operatingHours"),
                    operatingDays:
                        getNumber("operatingDays"),
                    electricityCost:
                        getNumber("electricityCost"),
                });

                break;

            case "wastewater":
                calculatedResult = calculateWastewater({
                    wastewaterFlow:
                        getNumber("wastewaterFlow"),
                    bod: getNumber("bod"),
                    cod: getNumber("cod"),
                    tss: getNumber("tss"),
                });

                break;

            case "roi":
                calculatedResult = calculateROI({
                    projectInvestment:
                        getNumber("projectInvestment"),
                    annualSavings:
                        getNumber("annualSavings"),
                    annualRevenue:
                        getNumber("annualRevenue"),
                    projectLife:
                        getNumber("projectLife"),
                });

                break;
        }

        setResult(calculatedResult);
        setHasCalculated(true);
    };

    const resetCalculator = () => {
        setInputs(defaultInputs[selectedCalculator]);
        setResult(null);
        setHasCalculated(false);
    };

    return (
        <main className="bg-white text-slate-700">
            {/* HERO */}
            <section className="bg-[#062B49]">
                <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 md:py-20 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#5DD5DE]">
                            MKS Intelligence
                        </p>

                        <h1 className="text-3xl font-bold leading-tight text-white md:text-4xl">
                            Industrial{" "}
                            <span className="text-[#5DD5DE]">
                                Calculator
                            </span>
                        </h1>

                        <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70 md:text-base">
                            Quick engineering calculations for industrial
                            process requirements and preliminary project
                            evaluation.
                        </p>
                    </div>
                </div>
            </section>

            {/* CALCULATOR */}
            <section className="bg-slate-50 py-10 md:py-14 lg:py-16">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                    {/* SELECTOR */}
                    <div className="mb-8">
                        <div className="mb-5">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#27B3C2]">
                                Engineering Tools
                            </p>

                            <h2 className="mt-2 text-2xl font-bold text-[#062B49] md:text-3xl">
                                Select a Calculator
                            </h2>

                            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                                Use preliminary calculations to evaluate
                                water recovery, ZLD, plant capacity, energy
                                consumption and project economics.
                            </p>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            <CalculatorSelector
                                id="water-saving"
                                title="Water Saving"
                                description="Estimate potential water savings"
                                icon={Droplets}
                                active={
                                    selectedCalculator === "water-saving"
                                }
                                onClick={handleCalculatorChange}
                            />

                            <CalculatorSelector
                                id="zld"
                                title="ZLD Calculator"
                                description="Estimate ZLD recovery and reject"
                                icon={Waves}
                                active={selectedCalculator === "zld"}
                                onClick={handleCalculatorChange}
                            />

                            <CalculatorSelector
                                id="capacity"
                                title="Plant Capacity"
                                description="Estimate required plant capacity"
                                icon={Factory}
                                active={selectedCalculator === "capacity"}
                                onClick={handleCalculatorChange}
                            />

                            <CalculatorSelector
                                id="energy"
                                title="Energy Calculator"
                                description="Estimate industrial energy usage"
                                icon={Zap}
                                active={selectedCalculator === "energy"}
                                onClick={handleCalculatorChange}
                            />

                            <CalculatorSelector
                                id="wastewater"
                                title="Wastewater Treatment"
                                description="Estimate treatment requirements"
                                icon={Recycle}
                                active={selectedCalculator === "wastewater"}
                                onClick={handleCalculatorChange}
                            />

                            <CalculatorSelector
                                id="roi"
                                title="ROI Calculator"
                                description="Estimate project return on investment"
                                icon={TrendingUp}
                                active={selectedCalculator === "roi"}
                                onClick={handleCalculatorChange}
                            />
                        </div>
                    </div>

                    {/* WORKSPACE */}
                    <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[1fr_0.8fr]">

                        {/* INPUT SIDE */}
                        <div className="p-5 sm:p-7 lg:p-8">

                            <div className="mb-7">
                                <h2 className="text-xl font-bold text-[#062B49]">
                                    {calculatorTitles[selectedCalculator]}
                                </h2>

                                <p className="mt-1 text-sm text-slate-500">
                                    Enter your plant parameters to calculate an
                                    estimated result.
                                </p>
                            </div>

                            {/* WATER SAVING */}
                            {selectedCalculator === "water-saving" && (
                                <div className="space-y-5">
                                    <CalculatorInput
                                        label="Current Water Consumption"
                                        placeholder="e.g. 500"
                                        unit="m³/day"
                                        value={inputs.currentConsumption}
                                        onChange={(value) =>
                                            handleInputChange(
                                                "currentConsumption",
                                                value
                                            )
                                        }
                                    />

                                    <CalculatorInput
                                        label="Current Water Recovery"
                                        placeholder="e.g. 70"
                                        unit="%"
                                        value={inputs.currentRecovery}
                                        onChange={(value) =>
                                            handleInputChange(
                                                "currentRecovery",
                                                value
                                            )
                                        }
                                    />

                                    <CalculatorInput
                                        label="Target Water Recovery"
                                        placeholder="e.g. 90"
                                        unit="%"
                                        value={inputs.targetRecovery}
                                        onChange={(value) =>
                                            handleInputChange(
                                                "targetRecovery",
                                                value
                                            )
                                        }
                                    />

                                    <CalculatorInput
                                        label="Operating Days"
                                        placeholder="e.g. 330"
                                        unit="days/year"
                                        value={inputs.operatingDays}
                                        onChange={(value) =>
                                            handleInputChange(
                                                "operatingDays",
                                                value
                                            )
                                        }
                                    />
                                </div>
                            )}

                            {/* ZLD */}
                            {selectedCalculator === "zld" && (
                                <div className="space-y-5">
                                    <CalculatorInput
                                        label="Wastewater Flow"
                                        placeholder="e.g. 500"
                                        unit="m³/day"
                                        value={inputs.wastewaterFlow}
                                        onChange={(value) =>
                                            handleInputChange(
                                                "wastewaterFlow",
                                                value
                                            )
                                        }
                                    />

                                    <CalculatorInput
                                        label="RO Recovery"
                                        placeholder="e.g. 75"
                                        unit="%"
                                        value={inputs.roRecovery}
                                        onChange={(value) =>
                                            handleInputChange(
                                                "roRecovery",
                                                value
                                            )
                                        }
                                    />

                                    <CalculatorInput
                                        label="MEE Recovery"
                                        placeholder="e.g. 90"
                                        unit="%"
                                        value={inputs.meeRecovery}
                                        onChange={(value) =>
                                            handleInputChange(
                                                "meeRecovery",
                                                value
                                            )
                                        }
                                    />

                                    <CalculatorInput
                                        label="ATFD Recovery"
                                        placeholder="e.g. 95"
                                        unit="%"
                                        value={inputs.atfdRecovery}
                                        onChange={(value) =>
                                            handleInputChange(
                                                "atfdRecovery",
                                                value
                                            )
                                        }
                                    />
                                </div>
                            )}

                            {/* CAPACITY */}
                            {selectedCalculator === "capacity" && (
                                <div className="space-y-5">
                                    <CalculatorInput
                                        label="Required Production"
                                        placeholder="e.g. 100"
                                        unit="ton/day"
                                        value={inputs.requiredProduction}
                                        onChange={(value) =>
                                            handleInputChange(
                                                "requiredProduction",
                                                value
                                            )
                                        }
                                    />

                                    <CalculatorInput
                                        label="Operating Hours"
                                        placeholder="e.g. 20"
                                        unit="hours/day"
                                        value={inputs.operatingHours}
                                        onChange={(value) =>
                                            handleInputChange(
                                                "operatingHours",
                                                value
                                            )
                                        }
                                    />

                                    <CalculatorInput
                                        label="Operating Days"
                                        placeholder="e.g. 330"
                                        unit="days/year"
                                        value={inputs.operatingDays}
                                        onChange={(value) =>
                                            handleInputChange(
                                                "operatingDays",
                                                value
                                            )
                                        }
                                    />

                                    <CalculatorInput
                                        label="Design Margin"
                                        placeholder="e.g. 10"
                                        unit="%"
                                        value={inputs.designMargin}
                                        onChange={(value) =>
                                            handleInputChange(
                                                "designMargin",
                                                value
                                            )
                                        }
                                    />
                                </div>
                            )}

                            {/* ENERGY */}
                            {selectedCalculator === "energy" && (
                                <div className="space-y-5">
                                    <CalculatorInput
                                        label="Equipment Load"
                                        placeholder="e.g. 250"
                                        unit="kW"
                                        value={inputs.equipmentLoad}
                                        onChange={(value) =>
                                            handleInputChange(
                                                "equipmentLoad",
                                                value
                                            )
                                        }
                                    />

                                    <CalculatorInput
                                        label="Operating Hours"
                                        placeholder="e.g. 20"
                                        unit="hours/day"
                                        value={inputs.operatingHours}
                                        onChange={(value) =>
                                            handleInputChange(
                                                "operatingHours",
                                                value
                                            )
                                        }
                                    />

                                    <CalculatorInput
                                        label="Operating Days"
                                        placeholder="e.g. 330"
                                        unit="days/year"
                                        value={inputs.operatingDays}
                                        onChange={(value) =>
                                            handleInputChange(
                                                "operatingDays",
                                                value
                                            )
                                        }
                                    />

                                    <CalculatorInput
                                        label="Electricity Cost"
                                        placeholder="e.g. 8"
                                        unit="₹/kWh"
                                        value={inputs.electricityCost}
                                        onChange={(value) =>
                                            handleInputChange(
                                                "electricityCost",
                                                value
                                            )
                                        }
                                    />
                                </div>
                            )}

                            {/* WASTEWATER */}
                            {selectedCalculator === "wastewater" && (
                                <div className="space-y-5">
                                    <CalculatorInput
                                        label="Wastewater Flow"
                                        placeholder="e.g. 500"
                                        unit="m³/day"
                                        value={inputs.wastewaterFlow}
                                        onChange={(value) =>
                                            handleInputChange(
                                                "wastewaterFlow",
                                                value
                                            )
                                        }
                                    />

                                    <CalculatorInput
                                        label="BOD"
                                        placeholder="e.g. 300"
                                        unit="mg/L"
                                        value={inputs.bod}
                                        onChange={(value) =>
                                            handleInputChange("bod", value)
                                        }
                                    />

                                    <CalculatorInput
                                        label="COD"
                                        placeholder="e.g. 600"
                                        unit="mg/L"
                                        value={inputs.cod}
                                        onChange={(value) =>
                                            handleInputChange("cod", value)
                                        }
                                    />

                                    <CalculatorInput
                                        label="TSS"
                                        placeholder="e.g. 250"
                                        unit="mg/L"
                                        value={inputs.tss}
                                        onChange={(value) =>
                                            handleInputChange("tss", value)
                                        }
                                    />
                                </div>
                            )}

                            {/* ROI */}
                            {selectedCalculator === "roi" && (
                                <div className="space-y-5">
                                    <CalculatorInput
                                        label="Project Investment"
                                        placeholder="e.g. 5000000"
                                        unit="₹"
                                        value={inputs.projectInvestment}
                                        onChange={(value) =>
                                            handleInputChange(
                                                "projectInvestment",
                                                value
                                            )
                                        }
                                    />

                                    <CalculatorInput
                                        label="Annual Operating Savings"
                                        placeholder="e.g. 1500000"
                                        unit="₹/year"
                                        value={inputs.annualSavings}
                                        onChange={(value) =>
                                            handleInputChange(
                                                "annualSavings",
                                                value
                                            )
                                        }
                                    />

                                    <CalculatorInput
                                        label="Annual Additional Revenue"
                                        placeholder="e.g. 500000"
                                        unit="₹/year"
                                        value={inputs.annualRevenue}
                                        onChange={(value) =>
                                            handleInputChange(
                                                "annualRevenue",
                                                value
                                            )
                                        }
                                    />

                                    <CalculatorInput
                                        label="Project Life"
                                        placeholder="e.g. 10"
                                        unit="years"
                                        value={inputs.projectLife}
                                        onChange={(value) =>
                                            handleInputChange(
                                                "projectLife",
                                                value
                                            )
                                        }
                                    />
                                </div>
                            )}

                            <div className="mt-7 flex gap-3">
                                <button
                                    type="button"
                                    onClick={calculate}
                                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#062B49] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0A4266]"
                                >
                                    Calculate
                                    <ArrowRight className="h-4 w-4" />
                                </button>

                                <button
                                    type="button"
                                    onClick={resetCalculator}
                                    className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-4 py-3 text-slate-500 transition hover:border-[#27B3C2] hover:text-[#062B49]"
                                    aria-label="Reset calculator"
                                    title="Reset"
                                >
                                    <RotateCcw className="h-4 w-4" />
                                </button>
                            </div>
                        </div>

                        {/* RESULT SIDE */}
                        <CalculatorResults
                            calculator={selectedCalculator}
                            result={result}
                            hasCalculated={hasCalculated}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}

/* =========================================================
   CALCULATOR SELECTOR
========================================================= */

function CalculatorSelector({
    id,
    title,
    description,
    icon: Icon,
    active,
    onClick,
}: {
    id: CalculatorType;
    title: string;
    description: string;
    icon: React.ElementType;
    active: boolean;
    onClick: (id: CalculatorType) => void;
}) {
    return (
        <button
            type="button"
            onClick={() => onClick(id)}
            className={`group rounded-xl border p-4 text-left transition ${active
                    ? "border-[#27B3C2] bg-[#062B49] shadow-md"
                    : "border-slate-200 bg-white hover:border-[#27B3C2] hover:shadow-sm"
                }`}
        >
            <div className="flex items-start gap-3">
                <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${active
                            ? "bg-white/10"
                            : "bg-[#062B49]/5"
                        }`}
                >
                    <Icon
                        className={`h-5 w-5 ${active
                                ? "text-[#5DD5DE]"
                                : "text-[#062B49]"
                            }`}
                    />
                </div>

                <div>
                    <h3
                        className={`text-sm font-semibold ${active
                                ? "text-white"
                                : "text-[#062B49]"
                            }`}
                    >
                        {title}
                    </h3>

                    <p
                        className={`mt-1 text-xs leading-5 ${active
                                ? "text-white/60"
                                : "text-slate-500"
                            }`}
                    >
                        {description}
                    </p>
                </div>
            </div>
        </button>
    );
}

/* =========================================================
   INPUT
========================================================= */

function CalculatorInput({
    label,
    placeholder,
    unit,
    value,
    onChange,
}: {
    label: string;
    placeholder: string;
    unit: string;
    value: string;
    onChange: (value: string) => void;
}) {
    return (
        <div>
            <label className="mb-2 block text-sm font-semibold text-[#062B49]">
                {label}
            </label>

            <div className="flex overflow-hidden rounded-lg border border-slate-200 bg-white transition focus-within:border-[#27B3C2] focus-within:ring-2 focus-within:ring-[#27B3C2]/10">
                <input
                    type="number"
                    min="0"
                    step="any"
                    value={value}
                    onChange={(event) =>
                        onChange(event.target.value)
                    }
                    placeholder={placeholder}
                    className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-slate-700 outline-none placeholder:text-slate-400"
                />

                <span className="flex items-center border-l border-slate-200 bg-slate-50 px-3 text-xs font-medium text-slate-500">
                    {unit}
                </span>
            </div>
        </div>
    );
}

/* =========================================================
   RESULTS
========================================================= */

function CalculatorResults({
    calculator,
    result,
    hasCalculated,
}: {
    calculator: CalculatorType;
    result: any;
    hasCalculated: boolean;
}) {
    return (
        <div className="border-t border-slate-200 bg-[#062B49] p-5 sm:p-7 lg:border-l lg:border-t-0 lg:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5DD5DE]">
                Estimated Result
            </p>

            <h3 className="mt-3 text-xl font-bold text-white">
                Calculation Summary
            </h3>

            {!hasCalculated || !result ? (
                <div className="mt-7 rounded-xl bg-white/5 p-5">
                    <p className="text-sm leading-6 text-white/60">
                        Enter your parameters and click{" "}
                        <span className="font-semibold text-white">
                            Calculate
                        </span>{" "}
                        to view the estimated result.
                    </p>
                </div>
            ) : (
                <ResultContent
                    calculator={calculator}
                    result={result}
                />
            )}

            <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-xs leading-5 text-white/50">
                    Results are preliminary estimates based on the
                    parameters provided. Actual plant performance,
                    equipment sizing and project economics require
                    detailed engineering evaluation.
                </p>
            </div>
        </div>
    );
}

/* =========================================================
   RESULT CONTENT
========================================================= */

function ResultContent({
    calculator,
    result,
}: {
    calculator: CalculatorType;
    result: any;
}) {
    switch (calculator) {
        case "water-saving":
            return (
                <div className="mt-7 space-y-4">
                    <ResultCard
                        label="Daily Water Saving"
                        value={formatNumber(result.dailySaving)}
                        unit="m³/day"
                        primary
                    />

                    <div className="grid grid-cols-2 gap-3">
                        <ResultCard
                            label="Annual Saving"
                            value={formatNumber(result.annualSaving)}
                            unit="m³/year"
                        />

                        <ResultCard
                            label="Target Recovery"
                            value={formatNumber(
                                result.targetRecovered
                            )}
                            unit="m³/day"
                        />
                    </div>
                </div>
            );

        case "zld":
            return (
                <div className="mt-7 space-y-4">
                    <ResultCard
                        label="Overall Recovery"
                        value={formatNumber(
                            result.overallRecovery
                        )}
                        unit="%"
                        primary
                    />

                    <div className="grid grid-cols-2 gap-3">
                        <ResultCard
                            label="RO Permeate"
                            value={formatNumber(result.roPermeate)}
                            unit="m³/day"
                        />

                        <ResultCard
                            label="Final Reject"
                            value={formatNumber(result.finalReject)}
                            unit="m³/day"
                        />
                    </div>
                </div>
            );

        case "capacity":
            return (
                <div className="mt-7 space-y-4">
                    <ResultCard
                        label="Design Capacity"
                        value={formatNumber(
                            result.designCapacity
                        )}
                        unit="ton/hour"
                        primary
                    />

                    <div className="grid grid-cols-2 gap-3">
                        <ResultCard
                            label="Hourly Capacity"
                            value={formatNumber(
                                result.hourlyCapacity
                            )}
                            unit="ton/hour"
                        />

                        <ResultCard
                            label="Annual Production"
                            value={formatNumber(
                                result.annualProduction
                            )}
                            unit="ton/year"
                        />
                    </div>
                </div>
            );

        case "energy":
            return (
                <div className="mt-7 space-y-4">
                    <ResultCard
                        label="Annual Energy"
                        value={formatNumber(
                            result.annualEnergy
                        )}
                        unit="kWh/year"
                        primary
                    />

                    <div className="grid grid-cols-2 gap-3">
                        <ResultCard
                            label="Annual Cost"
                            value={formatCurrency(
                                result.annualCost
                            )}
                            unit=""
                        />

                        <ResultCard
                            label="Daily Energy"
                            value={formatNumber(
                                result.dailyEnergy
                            )}
                            unit="kWh/day"
                        />
                    </div>
                </div>
            );

        case "wastewater":
            return (
                <div className="mt-7 space-y-4">
                    <ResultCard
                        label="COD Load"
                        value={formatNumber(result.codLoad)}
                        unit="kg/day"
                        primary
                    />

                    <div className="grid grid-cols-2 gap-3">
                        <ResultCard
                            label="BOD Load"
                            value={formatNumber(result.bodLoad)}
                            unit="kg/day"
                        />

                        <ResultCard
                            label="TSS Load"
                            value={formatNumber(result.tssLoad)}
                            unit="kg/day"
                        />
                    </div>
                </div>
            );

        case "roi":
            return (
                <div className="mt-7 space-y-4">
                    <ResultCard
                        label="Estimated ROI"
                        value={formatNumber(
                            result.roiPercentage
                        )}
                        unit="%"
                        primary
                    />

                    <div className="grid grid-cols-2 gap-3">
                        <ResultCard
                            label="Payback Period"
                            value={formatNumber(
                                result.paybackPeriod
                            )}
                            unit="years"
                        />

                        <ResultCard
                            label="Annual Benefit"
                            value={formatCurrency(
                                result.annualBenefit
                            )}
                            unit=""
                        />
                    </div>
                </div>
            );
    }
}

/* =========================================================
   RESULT CARD
========================================================= */

function ResultCard({
    label,
    value,
    unit,
    primary = false,
}: {
    label: string;
    value: string;
    unit: string;
    primary?: boolean;
}) {
    return (
        <div
            className={`rounded-xl p-4 ${primary
                    ? "bg-white/10"
                    : "bg-white/5"
                }`}
        >
            <p className="text-xs text-white/50">
                {label}
            </p>

            <p
                className={`mt-1 font-bold ${primary
                        ? "text-3xl text-white"
                        : "text-lg text-[#5DD5DE]"
                    }`}
            >
                {value}
            </p>

            {unit && (
                <p className="mt-0.5 text-xs text-white/40">
                    {unit}
                </p>
            )}
        </div>
    );
}

/* =========================================================
   FORMATTING
========================================================= */

function formatNumber(value: number) {
    return new Intl.NumberFormat("en-IN", {
        maximumFractionDigits: 2,
    }).format(value);
}

function formatCurrency(value: number) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(value);
}