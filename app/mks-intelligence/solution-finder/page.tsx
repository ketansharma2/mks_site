"use client";

import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Factory,
  Search,
  Sparkles,
  Droplets,
  Waves,
  Zap,
  Recycle,
  Wind,
  FlaskConical,
  X,
} from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

type Industry =
  | "food-beverage"
  | "sugar"
  | "starch"
  | "distillery"
  | "chemical"
  | "dairy"
  | "textile"
  | "pharmaceuticals"
  | "pulp-paper"
  | "water-wastewater"
  | "other";

type Problem =
  | "water-recovery"
  | "wastewater-treatment"
  | "zld"
  | "energy-reduction"
  | "liquid-concentration"
  | "drying"
  | "production-capacity"
  | "chemical-recovery"
  | "waste-disposal"
  | "other";

type PlantType =
  | "new"
  | "existing"
  | "expansion"
  | "upgrade";

interface AnswerData {
  industry: Industry | "";
  problem: Problem | "";
  plantType: PlantType | "";
}

interface Solution {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: React.ElementType;
  industries: Industry[];
  problems: Problem[];
  plantTypes: PlantType[];
  benefits: string[];
  href: string;
}

/* =========================================================
   DATA
========================================================= */

const industries: {
  id: Industry;
  label: string;
  description: string;
}[] = [
  {
    id: "food-beverage",
    label: "Food & Beverage",
    description: "Process and wastewater solutions",
  },
  {
    id: "sugar",
    label: "Sugar",
    description: "Evaporation and process solutions",
  },
  {
    id: "starch",
    label: "Starch",
    description: "Process concentration and recovery",
  },
  {
    id: "distillery",
    label: "Distillery",
    description: "Evaporation and ZLD solutions",
  },
  {
    id: "chemical",
    label: "Chemical",
    description: "Process and wastewater systems",
  },
  {
    id: "dairy",
    label: "Dairy",
    description: "Water and process solutions",
  },
  {
    id: "textile",
    label: "Textile",
    description: "Wastewater and water recovery",
  },
  {
    id: "pharmaceuticals",
    label: "Pharmaceuticals",
    description: "Process and wastewater systems",
  },
  {
    id: "pulp-paper",
    label: "Pulp & Paper",
    description: "Water and process recovery",
  },
  {
    id: "water-wastewater",
    label: "Water & Wastewater",
    description: "Treatment and recovery solutions",
  },
  {
    id: "other",
    label: "Other",
    description: "Other industrial applications",
  },
];

const problems: {
  id: Problem;
  label: string;
  description: string;
  icon: React.ElementType;
}[] = [
  {
    id: "water-recovery",
    label: "Recover Water",
    description: "Improve water recovery and reuse",
    icon: Droplets,
  },
  {
    id: "wastewater-treatment",
    label: "Treat Wastewater",
    description: "Improve industrial wastewater treatment",
    icon: Waves,
  },
  {
    id: "zld",
    label: "Achieve ZLD",
    description: "Minimize or eliminate liquid discharge",
    icon: Recycle,
  },
  {
    id: "energy-reduction",
    label: "Reduce Energy",
    description: "Improve energy efficiency",
    icon: Zap,
  },
  {
    id: "liquid-concentration",
    label: "Concentrate a Liquid",
    description: "Concentrate process streams",
    icon: FlaskConical,
  },
  {
    id: "drying",
    label: "Dry a Product",
    description: "Industrial drying requirements",
    icon: Wind,
  },
  {
    id: "production-capacity",
    label: "Increase Capacity",
    description: "Expand or optimize production",
    icon: Factory,
  },
  {
    id: "chemical-recovery",
    label: "Recover Chemicals",
    description: "Recover useful chemicals or materials",
    icon: Recycle,
  },
  {
    id: "waste-disposal",
    label: "Reduce Waste Disposal",
    description: "Reduce waste generation and disposal",
    icon: Waves,
  },
  {
    id: "other",
    label: "Other Requirement",
    description: "Something else",
    icon: Search,
  },
];

const plantTypes: {
  id: PlantType;
  label: string;
  description: string;
}[] = [
  {
    id: "new",
    label: "New / Greenfield Plant",
    description: "Planning a new industrial facility",
  },
  {
    id: "existing",
    label: "Existing Plant",
    description: "Improve or modify an operating plant",
  },
  {
    id: "expansion",
    label: "Plant Expansion",
    description: "Increase existing production capacity",
  },
  {
    id: "upgrade",
    label: "Plant Upgrade",
    description: "Upgrade existing equipment or processes",
  },
];

/* =========================================================
   SOLUTIONS
========================================================= */

const solutions: Solution[] = [
  {
    id: "zld",
    name: "Zero Liquid Discharge",
    shortDescription:
      "Integrated water recovery and wastewater concentration solution.",
    description:
      "A ZLD system is designed to maximize water recovery and minimize liquid waste discharge through a combination of treatment, evaporation and concentration technologies.",
    icon: Recycle,
    industries: [
      "chemical",
      "distillery",
      "textile",
      "pharmaceuticals",
      "food-beverage",
      "sugar",
      "water-wastewater",
    ],
    problems: [
      "zld",
      "water-recovery",
      "waste-disposal",
      "wastewater-treatment",
    ],
    plantTypes: ["new", "existing", "expansion", "upgrade"],
    benefits: [
      "High water recovery",
      "Reduced liquid discharge",
      "Waste volume reduction",
      "Suitable for complex wastewater streams",
    ],
    href: "/products/water-treatment/zld",
  },

  {
    id: "mvr-evaporator",
    name: "MVR Evaporator",
    shortDescription:
      "Energy-efficient evaporation for industrial process streams.",
    description:
      "MVR evaporation systems use mechanical vapor recompression to reduce external steam requirements and improve evaporation efficiency.",
    icon: Zap,
    industries: [
      "food-beverage",
      "sugar",
      "starch",
      "distillery",
      "chemical",
      "dairy",
      "pharmaceuticals",
    ],
    problems: [
      "energy-reduction",
      "liquid-concentration",
      "water-recovery",
      "zld",
    ],
    plantTypes: ["new", "existing", "expansion", "upgrade"],
    benefits: [
      "Reduced steam consumption",
      "Energy-efficient evaporation",
      "Continuous operation",
      "Suitable for concentration applications",
    ],
    href: "/products/evaporators/mvr-evaporator",
  },

  {
    id: "evaporator",
    name: "Industrial Evaporator",
    shortDescription:
      "Process evaporation systems for concentration and recovery.",
    description:
      "Industrial evaporators can be configured for different process requirements including concentration, volume reduction and product recovery.",
    icon: Waves,
    industries: [
      "food-beverage",
      "sugar",
      "starch",
      "distillery",
      "chemical",
      "dairy",
      "pharmaceuticals",
    ],
    problems: [
      "liquid-concentration",
      "water-recovery",
      "waste-disposal",
      "zld",
    ],
    plantTypes: ["new", "existing", "expansion", "upgrade"],
    benefits: [
      "Process concentration",
      "Volume reduction",
      "Product recovery",
      "Flexible process configuration",
    ],
    href: "/products/evaporators",
  },

  {
    id: "water-treatment",
    name: "Water Treatment Plant",
    shortDescription:
      "Industrial water treatment and recovery systems.",
    description:
      "Water treatment systems are designed according to the quality and quantity of the incoming water and the required treated-water quality.",
    icon: Droplets,
    industries: [
      "food-beverage",
      "sugar",
      "starch",
      "chemical",
      "dairy",
      "textile",
      "pharmaceuticals",
      "pulp-paper",
      "water-wastewater",
    ],
    problems: [
      "water-recovery",
      "wastewater-treatment",
    ],
    plantTypes: ["new", "existing", "expansion", "upgrade"],
    benefits: [
      "Improved water quality",
      "Water reuse",
      "Reduced freshwater requirement",
      "Application-specific treatment",
    ],
    href: "/products/water-treatment",
  },

  {
    id: "dryers",
    name: "Industrial Drying System",
    shortDescription:
      "Industrial drying solutions for process and product applications.",
    description:
      "Industrial drying systems are designed according to material characteristics, moisture content, required throughput and final product specifications.",
    icon: Wind,
    industries: [
      "food-beverage",
      "sugar",
      "starch",
      "chemical",
      "pharmaceuticals",
      "dairy",
    ],
    problems: ["drying", "energy-reduction"],
    plantTypes: ["new", "existing", "expansion", "upgrade"],
    benefits: [
      "Controlled moisture reduction",
      "Process-specific design",
      "Improved product handling",
      "Energy optimization opportunities",
    ],
    href: "/products/dryers",
  },

  {
    id: "caustic-recovery",
    name: "Caustic Recovery Plant",
    shortDescription:
      "Recovery system for industrial caustic streams.",
    description:
      "Caustic recovery systems can help recover reusable caustic from industrial process streams and reduce chemical consumption and waste.",
    icon: FlaskConical,
    industries: ["chemical", "textile", "pulp-paper", "other"],
    problems: [
      "chemical-recovery",
      "waste-disposal",
      "energy-reduction",
    ],
    plantTypes: ["new", "existing", "expansion", "upgrade"],
    benefits: [
      "Chemical recovery",
      "Reduced chemical consumption",
      "Waste reduction",
      "Potential operating cost reduction",
    ],
    href: "/products/caustic-recovery-plant",
  },

  {
    id: "steam-radiator",
    name: "Steam Radiator",
    shortDescription:
      "Steam-based heating equipment for industrial applications.",
    description:
      "Steam radiators provide indirect heating for industrial process applications where controlled heat transfer is required.",
    icon: Zap,
    industries: [
      "food-beverage",
      "sugar",
      "starch",
      "dairy",
      "textile",
      "chemical",
      "pharmaceuticals",
      "other",
    ],
    problems: ["energy-reduction", "drying"],
    plantTypes: ["new", "existing", "expansion", "upgrade"],
    benefits: [
      "Controlled heat transfer",
      "Industrial heating application",
      "Process integration",
      "Potential energy optimization",
    ],
    href: "/products/steam-radiator",
  },
];

/* =========================================================
   MAIN PAGE
========================================================= */

export default function SolutionFinderPage() {
  const [step, setStep] = useState(0);

  const [answers, setAnswers] = useState<AnswerData>({
    industry: "",
    problem: "",
    plantType: "",
  });

  const [showResults, setShowResults] = useState(false);

  const updateAnswer = (
    field: keyof AnswerData,
    value: string
  ) => {
    setAnswers((previous) => ({
      ...previous,
      [field]: value,
    }));

    setShowResults(false);
  };

  const canContinue = useMemo(() => {
    if (step === 0) return Boolean(answers.industry);
    if (step === 1) return Boolean(answers.problem);
    if (step === 2) return Boolean(answers.plantType);

    return false;
  }, [step, answers]);

  const recommendations = useMemo(() => {
    if (
      !answers.industry ||
      !answers.problem ||
      !answers.plantType
    ) {
      return [];
    }

    return solutions
      .map((solution) => {
        let score = 0;

        if (solution.industries.includes(answers.industry as Industry)) {
          score += 40;
        }

        if (solution.problems.includes(answers.problem as Problem)) {
          score += 45;
        }

        if (solution.plantTypes.includes(answers.plantType as PlantType)) {
          score += 15;
        }

        return {
          ...solution,
          score,
        };
      })
      .filter((solution) => solution.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
  }, [answers]);

  const nextStep = () => {
    if (!canContinue) return;

    if (step < 2) {
      setStep((previous) => previous + 1);
      return;
    }

    setShowResults(true);
  };

  const previousStep = () => {
    if (showResults) {
      setShowResults(false);
      return;
    }

    if (step > 0) {
      setStep((previous) => previous - 1);
    }
  };

  const resetFinder = () => {
    setStep(0);
    setAnswers({
      industry: "",
      problem: "",
      plantType: "",
    });
    setShowResults(false);
  };

  return (
    <main className="bg-white text-slate-700">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="bg-[#062B49]">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 md:py-20 lg:px-8 ">
          <div className="max-w-3xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#5DD5DE]">
              MKS Intelligence
            </p>

            <h1 className="text-3xl font-bold leading-tight text-white md:text-4xl">
              Solution{" "}
              <span className="text-[#5DD5DE]">
                Finder
              </span>
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70 md:text-base">
              Identify suitable MKS industrial solutions based
              on your plant, process requirements and objectives.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <section className="bg-slate-50 py-10 md:py-14 lg:py-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">

          {!showResults ? (
            <>
              {/* PROGRESS */}

              <div className="mb-8">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#27B3C2]">
                    Solution Finder
                  </p>

                  <p className="text-xs font-medium text-slate-400">
                    Step {step + 1} of 3
                  </p>
                </div>

                <div className="h-1.5 overflow-hidden rounded-full bg-slate-200">
                  <div
                    className="h-full rounded-full bg-[#27B3C2] transition-all duration-300"
                    style={{
                      width: `${((step + 1) / 3) * 100}%`,
                    }}
                  />
                </div>
              </div>

              {/* WORKSPACE */}

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 md:p-8">

                {/* STEP 1 */}

                {step === 0 && (
                  <div>
                    <StepHeader
                      step="01"
                      title="What industry are you in?"
                      description="Select the industry that best describes your plant or project."
                    />

                    <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {industries.map((industry) => (
                        <OptionCard
                          key={industry.id}
                          title={industry.label}
                          description={industry.description}
                          active={
                            answers.industry === industry.id
                          }
                          onClick={() =>
                            updateAnswer(
                              "industry",
                              industry.id
                            )
                          }
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 2 */}

                {step === 1 && (
                  <div>
                    <StepHeader
                      step="02"
                      title="What are you trying to solve?"
                      description="Choose the primary process challenge or objective."
                    />

                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                      {problems.map((problem) => {
                        const Icon = problem.icon;

                        return (
                          <button
                            key={problem.id}
                            type="button"
                            onClick={() =>
                              updateAnswer(
                                "problem",
                                problem.id
                              )
                            }
                            className={`group flex items-start gap-4 rounded-xl border p-4 text-left transition ${
                              answers.problem === problem.id
                                ? "border-[#27B3C2] bg-[#062B49] shadow-md"
                                : "border-slate-200 bg-white hover:border-[#27B3C2] hover:shadow-sm"
                            }`}
                          >
                            <div
                              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                                answers.problem === problem.id
                                  ? "bg-white/10"
                                  : "bg-[#062B49]/5"
                              }`}
                            >
                              <Icon
                                className={`h-5 w-5 ${
                                  answers.problem === problem.id
                                    ? "text-[#5DD5DE]"
                                    : "text-[#062B49]"
                                }`}
                              />
                            </div>

                            <div className="min-w-0 flex-1">
                              <h3
                                className={`text-sm font-semibold ${
                                  answers.problem === problem.id
                                    ? "text-white"
                                    : "text-[#062B49]"
                                }`}
                              >
                                {problem.label}
                              </h3>

                              <p
                                className={`mt-1 text-xs leading-5 ${
                                  answers.problem === problem.id
                                    ? "text-white/60"
                                    : "text-slate-500"
                                }`}
                              >
                                {problem.description}
                              </p>
                            </div>

                            {answers.problem === problem.id && (
                              <Check className="mt-1 h-4 w-4 shrink-0 text-[#5DD5DE]" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 3 */}

                {step === 2 && (
                  <div>
                    <StepHeader
                      step="03"
                      title="What is your plant situation?"
                      description="Tell us where your project currently stands."
                    />

                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                      {plantTypes.map((plant) => (
                        <OptionCard
                          key={plant.id}
                          title={plant.label}
                          description={plant.description}
                          active={
                            answers.plantType === plant.id
                          }
                          onClick={() =>
                            updateAnswer(
                              "plantType",
                              plant.id
                            )
                          }
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* ACTIONS */}

                <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">

                  <button
                    type="button"
                    onClick={previousStep}
                    disabled={step === 0}
                    className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-500 transition hover:text-[#062B49] disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </button>

                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!canContinue}
                    className="inline-flex items-center gap-2 rounded-lg bg-[#062B49] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0A4266] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {step === 2
                      ? "Find Solutions"
                      : "Continue"}

                    {step === 2 ? (
                      <Search className="h-4 w-4" />
                    ) : (
                      <ArrowRight className="h-4 w-4" />
                    )}
                  </button>

                </div>
              </div>

              {/* NOTE */}

              <div className="mt-5 flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
                

                <p className="text-xs leading-5 text-slate-500">
                  The recommendations are based on the
                  information provided and are intended for
                  preliminary guidance. Detailed process and
                  engineering evaluation is required before
                  selecting or sizing equipment.
                </p>
              </div>
            </>
          ) : (
            /* =================================================
               RESULTS
            ================================================= */

            <div>

              {/* RESULTS HEADER */}

              <div className="mb-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#27B3C2]">
                      MKS Intelligence
                    </p>

                    <h2 className="mt-2 text-2xl font-bold text-[#062B49] md:text-3xl">
                      Recommended Solutions
                    </h2>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                      Based on your selected industry,
                      requirement and plant situation, these
                      MKS solutions may be relevant to your
                      project.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={resetFinder}
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:border-[#27B3C2] hover:text-[#062B49]"
                  >
                    <X className="h-4 w-4" />
                    Start Again
                  </button>
                </div>
              </div>

              {/* SELECTED REQUIREMENTS */}

              <div className="mb-6 grid gap-3 sm:grid-cols-3">
                <SummaryCard
                  label="Industry"
                  value={
                    industries.find(
                      (item) =>
                        item.id === answers.industry
                    )?.label || "-"
                  }
                />

                <SummaryCard
                  label="Primary Requirement"
                  value={
                    problems.find(
                      (item) =>
                        item.id === answers.problem
                    )?.label || "-"
                  }
                />

                <SummaryCard
                  label="Plant Situation"
                  value={
                    plantTypes.find(
                      (item) =>
                        item.id === answers.plantType
                    )?.label || "-"
                  }
                />
              </div>

              {/* RECOMMENDATIONS */}

              <div className="space-y-5">
                {recommendations.map(
                  (solution, index) => {
                    const Icon = solution.icon;

                    return (
                      <div
                        key={solution.id}
                        className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                      >
                        <div className="p-5 sm:p-7">

                          <div className="flex flex-col gap-5 sm:flex-row">

                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#062B49]/5">
                              <Icon className="h-6 w-6 text-[#062B49]" />
                            </div>

                            <div className="min-w-0 flex-1">

                              <div className="flex flex-wrap items-center gap-2">
                                <h3 className="text-xl font-bold text-[#062B49]">
                                  {solution.name}
                                </h3>

                                {index === 0 && (
                                  <span className="rounded-full bg-[#27B3C2]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0A4266]">
                                    Best Match
                                  </span>
                                )}
                              </div>

                              <p className="mt-2 text-sm font-medium text-slate-600">
                                {solution.shortDescription}
                              </p>

                              <p className="mt-3 text-sm leading-6 text-slate-500">
                                {solution.description}
                              </p>

                              <div className="mt-5">
                                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#27B3C2]">
                                  Potential Benefits
                                </p>

                                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                                  {solution.benefits.map(
                                    (benefit) => (
                                      <div
                                        key={benefit}
                                        className="flex items-start gap-2"
                                      >
                                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#27B3C2]" />

                                        <span className="text-sm text-slate-600">
                                          {benefit}
                                        </span>
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>

                              <div className="mt-6">
                                <a
                                  href={solution.href}
                                  className="inline-flex items-center gap-2 rounded-lg bg-[#062B49] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0A4266]"
                                >
                                  Explore Solution
                                  <ArrowRight className="h-4 w-4" />
                                </a>
                              </div>

                            </div>

                            {/* MATCH SCORE */}

                            <div className="shrink-0 sm:w-28">
                              <div className="rounded-xl bg-[#062B49] p-4 text-center">
                                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">
                                  Requirement Match
                                </p>

                                <p className="mt-1 text-2xl font-bold text-[#5DD5DE]">
                                  {solution.score}%
                                </p>

                                <p className="mt-1 text-[10px] text-white/40">
                                  Preliminary
                                </p>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    )
                  }
                )}

                {recommendations.length === 0 && (
                  <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
                    <Factory className="mx-auto h-10 w-10 text-slate-300" />

                    <h3 className="mt-4 text-lg font-bold text-[#062B49]">
                      No direct solution match
                    </h3>

                    <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                      Your requirements may need a customized
                      engineering solution. Contact MKS to
                      discuss your process in detail.
                    </p>

                    <a
                      href="/contact"
                      className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#062B49] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0A4266]"
                    >
                      Contact MKS
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                )}
              </div>

              {/* DISCLAIMER */}

              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-xs leading-5 text-slate-500">
                  <span className="font-semibold text-slate-700">
                    Engineering note:
                  </span>{" "}
                  Solution recommendations are preliminary
                  requirement matches and do not constitute
                  final process design, equipment selection or
                  engineering approval. Final recommendations
                  require detailed process data and technical
                  evaluation by MKS Industrial Solutions.
                </p>
              </div>

            </div>
          )}
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   STEP HEADER
========================================================= */

function StepHeader({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#062B49] text-xs font-bold text-[#5DD5DE]">
          {step}
        </span>

        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#27B3C2]">
          Tell us about your project
        </p>
      </div>

      <h2 className="mt-4 text-2xl font-bold text-[#062B49] md:text-3xl">
        {title}
      </h2>

      <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
        {description}
      </p>
    </div>
  );
}

/* =========================================================
   OPTION CARD
========================================================= */

function OptionCard({
  title,
  description,
  active,
  onClick,
}: {
  title: string;
  description: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex items-start gap-3 rounded-xl border p-4 text-left transition ${
        active
          ? "border-[#27B3C2] bg-[#062B49] shadow-md"
          : "border-slate-200 bg-white hover:border-[#27B3C2] hover:shadow-sm"
      }`}
    >
      <div className="min-w-0 flex-1">
        <h3
          className={`text-sm font-semibold ${
            active
              ? "text-white"
              : "text-[#062B49]"
          }`}
        >
          {title}
        </h3>

        <p
          className={`mt-1 text-xs leading-5 ${
            active
              ? "text-white/60"
              : "text-slate-500"
          }`}
        >
          {description}
        </p>
      </div>

      {active && (
        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#5DD5DE]" />
      )}
    </button>
  );
}

/* =========================================================
   SUMMARY CARD
========================================================= */

function SummaryCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
        {label}
      </p>

      <p className="mt-1 text-sm font-semibold text-[#062B49]">
        {value}
      </p>
    </div>
  );
}