"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TriangleAlert } from "lucide-react";

const plantOptions = [
  { capacity: 40, investment: 12 },
  { capacity: 60, investment: 15 },
  { capacity: 80, investment: 18 },
  { capacity: 100, investment: 20 },
];





export default function RicePlantCalculator() {
  const [capacity, setCapacity] = useState(100);
  const [brokerRiceCost, setBrokerRiceCost] = useState("");
  const [electricityCost, setElectricityCost] = useState("");
  const [steamCost, setSteamCost] = useState("");
  const [roi, setRoi] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const selectedPlant = plantOptions.find(
    (plant) => plant.capacity === capacity
  );

  // calculation
  const calculateROI = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    setIsCalculating(true);
    setRoi(null);

    const brokenRiceCost = Number(brokerRiceCost); //convert string to number

    const rawMaterialkg = (capacity * 1000);
    const starchPercentage = 0.68;
    const glutenpercentage = 0.17;

    // production
    const starchkg = ((rawMaterialkg * starchPercentage) / 0.84);
    const glutenkg = ((rawMaterialkg * glutenpercentage) / 0.90);

    // cost increase or decrease
    const baseBrokenRiceCost = 25;
    const baseStarchPrice = 35;
    const baseGlutenPrice = 40;

    let starchPrice = baseStarchPrice;
    let glutenPrice = baseGlutenPrice;
    if (brokenRiceCost >= baseBrokenRiceCost) {
      const increase = brokenRiceCost - baseBrokenRiceCost;

      starchPrice = baseStarchPrice + increase;
      glutenPrice = baseGlutenPrice + increase;
    } else {
      const decrease = baseBrokenRiceCost - brokenRiceCost;

      starchPrice = baseStarchPrice - decrease;
      glutenPrice = baseGlutenPrice - (decrease * 2);
    }

    const sale = ((starchkg * starchPrice) + (glutenkg * glutenPrice));

    const processingCost = (rawMaterialkg * (brokenRiceCost + 8.5));
    const profitDaily = sale - processingCost;

    const profitAnnual = (profitDaily * 365);
    console.log(profitAnnual);
    const investmentRupees = (selectedPlant!.investment * 10000000);

    const calculatedROI = investmentRupees / profitAnnual;


    setTimeout(() => {
      setRoi(calculatedROI);
      setIsCalculating(false);

      setBrokerRiceCost("");
      setElectricityCost("");
      setSteamCost("");
    }, 5000);
    console.log("========== ROI CALCULATION ==========");

    console.log("Capacity:", capacity, "TPD");
    console.log("Broken Rice Cost:", brokenRiceCost, "₹/kg");
    // console.log("Electricity Cost:", electricity, "₹/kg");
    // console.log("Steam Cost:", steam, "₹/kg");

    console.log("Starch Price:", starchPrice, "₹/kg");
    console.log("Gluten Price:", glutenPrice, "₹/kg");

    console.log("Raw Material:", rawMaterialkg, "kg/day");

    console.log("Starch Production:", starchkg, "kg/day");
    console.log("Gluten Production:", glutenkg, "kg/day");

    console.log("Starch Revenue:", starchkg * starchPrice, "₹/day");
    console.log("Gluten Revenue:", glutenkg * glutenPrice, "₹/day");

    console.log("Total Sales:", sale, "₹/day");

    console.log("Processing Cost:", processingCost, "₹/day");
    console.log("Daily Profit:", profitDaily, "₹/day");

    console.log("Annual Profit:", profitAnnual, "₹/year");

    console.log("Investment:", investmentRupees, "₹");

    console.log("Payback Period:", calculatedROI, "years");

    console.log("====================================");
  };


  const router = useRouter();

  return (<>
      <div className="bg-[#062B49] w-full h-24"></div>
    <main className="min-h-screen bg-white px-4 py-10 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-3xl ">

        {/* Header */}
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
            MKS Industrial Solutions
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Rice Plant ROI Calculator
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
            Estimate the investment and profitability of your
            rice-based processing plant.
          </p>
        </div>

        {/* Calculator */}
        <form onSubmit={calculateROI} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8" >

          {/* Plant Configuration */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-slate-900">
              Plant Configuration
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Select the required rice grinding capacity.
            </p>
          </div>

          {/* Capacity Options */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {plantOptions.map((plant) => {
              const isSelected = capacity === plant.capacity;

              return (
                <button
                  key={plant.capacity}
                  type="button"
                  onClick={() => setCapacity(plant.capacity)}
                  className={`rounded-xl border px-4 py-4 text-left transition ${isSelected
                    ? "border-blue-600 bg-blue-50 ring-1 ring-blue-600"
                    : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50"
                    }`}
                >
                  <p
                    className={`text-xl font-bold ${isSelected
                      ? "text-blue-700"
                      : "text-slate-900"
                      }`}
                  >
                    {plant.capacity}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    TPD
                  </p>
                </button>
              );
            })}
          </div>


          {/* Selected Investment */}
          <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50 p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-slate-600">
                  Capital Investment
                </p>

                <p className="mt-1 text-2xl font-bold text-blue-700">
                  ₹{selectedPlant?.investment} Cr
                </p>
              </div>

              <div className="text-right">
                <p className="text-xs text-slate-500">
                  Selected Capacity
                </p>

                <p className="mt-1 font-semibold text-slate-900">
                  {capacity} TPD
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 border-t border-slate-100" />

          {/* Cost Inputs */}
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Operating Costs
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Enter the current cost of raw material and utilities.
            </p>
          </div>

          <div className="mt-6 space-y-5">

            {/* Broken Rice */}
            <div>
              <label
                htmlFor="brokenRice"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Broken Rice Cost *
              </label>

              <div className="relative">
                <input
                  id="brokenRice"
                  type="number"
                  min={1}
                  required
                  value={brokerRiceCost}
                  onChange={(e) => setBrokerRiceCost(e.target.value)}
                  placeholder="Enter broken rice cost"

                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 pr-20 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400">
                  ₹ / kg
                </span>
              </div>
            </div>

            {/* Electricity */}
            <div>
              <label
                htmlFor="electricity"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Electricity Cost *
              </label>

              <div className="relative">
                <input
                  id="electricity"
                  type="number"
                  min={1}
                  required
                  value={electricityCost}
                  onChange={(e) => setElectricityCost(e.target.value)}
                  placeholder="Enter Electricity Cost"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 pr-20 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400">
                  ₹ / kg
                </span>
              </div>
            </div>

            {/* Steam */}
            <div>
              <label
                htmlFor="steam"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Steam Cost *
              </label>

              <div className="relative">
                <input
                  id="steam"
                  type="number"
                  min={1}
                  required
                  value={steamCost}
                  onChange={(e) => setSteamCost(e.target.value)}
                  placeholder="Enter steam cost"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 pr-20 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400">
                  ₹ / kg
                </span>
              </div>
            </div>

          </div>

          {/* Calculate Button */}
          <button
            type="submit"
            disabled={isCalculating}
            className="mt-8 w-full rounded-xl bg-blue-600 px-5 py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isCalculating ? (
              <span className="flex items-center justify-center gap-2">
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                Calculating...
              </span>
            ) : (
              "Calculate ROI"
            )}
          </button>
          {roi !== null && (
            <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-6 text-center">
              <p className="text-sm font-medium text-slate-500">
                Estimated Investment Recovery
              </p>

              <p className="mt-2 text-4xl font-bold text-blue-700">
                {roi.toFixed(1)} Years
              </p>

              <div className="mt-4 flex  text-xs leading-5 text-slate-500">
                <TriangleAlert className="mt-0.5 h-4 w-4 ml-20 shrink-0 " />
                <p >
                  This is an indicative estimate based on the information provided.
                  Actual results may vary depending on plant performance, raw material
                  prices, operating costs, market conditions, and other factors.
                </p>
              </div>

              <p className="mt-2 text-xs font-medium text-blue-700 cursor-pointer" onClick={(e) => (router.push("/contact"))}>
                For a detailed and accurate assessment, connect with our engineering team.
              </p>
            </div>
          )}

        </form>

        {/* Small Note */}
        <p className="mt-5 text-center text-xs text-slate-400">
          Calculations are based on the inputs and plant configuration
          selected above.
        </p>

      </div>
    </main>
    </>
  );
}