"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Factory,
  Mail,
  Phone,
  User,
  Building2,
  X,
} from "lucide-react";

type AssessmentData = {
  industry: string;
  requirement: string;
  plantStatus: string;
  capacity: string;
  challenge: string;
  objective: string;
  name: string;
  company: string;
  email: string;
  phone: string;
};

type PlantAssessmentProps = {
  isOpen: boolean;
  onClose: () => void;
};

const initialData: AssessmentData = {
  industry: "",
  requirement: "",
  plantStatus: "",
  capacity: "",
  challenge: "",
  objective: "",
  name: "",
  company: "",
  email: "",
  phone: "",
};

const industries = [
  "Food & Beverage",
  "Sugar",
  "Starch",
  "Distillery",
  "Chemical",
  "Dairy",
  "Textile",
  "Pharmaceuticals",
  "Pulp & Paper",
  "Water & Wastewater",
  "Other",
];

const requirements = [
  {
    title: "Water & Wastewater",
    description: "Treatment, recovery and water management",
    value: "water-wastewater",
  },
  {
    title: "Evaporation",
    description: "Concentration and evaporation systems",
    value: "evaporation",
  },
  {
    title: "Zero Liquid Discharge",
    description: "Maximum water recovery and ZLD",
    value: "zld",
  },
  {
    title: "Drying",
    description: "Industrial drying and moisture removal",
    value: "drying",
  },
  {
    title: "Energy Optimization",
    description: "Reduce energy and utility consumption",
    value: "energy",
  },
  {
    title: "New Plant",
    description: "Greenfield plant or new process setup",
    value: "new-plant",
  },
];

const plantStatuses = [
  "Existing operating plant",
  "Existing plant under expansion",
  "Plant under development",
  "New / Greenfield project",
];

const challenges = [
  "High energy consumption",
  "High operating cost",
  "Water recovery",
  "Waste disposal",
  "Low production efficiency",
  "Equipment limitations",
  "Environmental compliance",
  "Other",
];

const objectives = [
  "Reduce operating cost",
  "Reduce energy consumption",
  "Increase production capacity",
  "Improve water recovery",
  "Meet environmental requirements",
  "Upgrade existing plant",
  "Build a new plant",
];

export default function PlantAssessment() {
    const [step, setStep] = useState(0);
    const [data, setData] = useState<AssessmentData>(initialData);
    const [submitted, setSubmitted] = useState(false);
  
    const totalSteps = 8;
  
    const updateData = <K extends keyof AssessmentData>(
      field: K,
      value: AssessmentData[K]
    ) => {
      setData((prev) => ({
        ...prev,
        [field]: value,
      }));
    };
  
    const capacityLabel = useMemo(() => {
      switch (data.requirement) {
        case "water-wastewater":
        case "zld":
          return {
            title: "What is your plant's water / wastewater flow?",
            placeholder: "e.g. 500",
            unit: "m³/day",
          };
  
        case "evaporation":
          return {
            title: "What is your feed capacity?",
            placeholder: "e.g. 5000",
            unit: "kg/hr",
          };
  
        case "drying":
          return {
            title: "What is your material / feed capacity?",
            placeholder: "e.g. 2000",
            unit: "kg/hr",
          };
  
        case "energy":
          return {
            title: "What is your approximate plant capacity?",
            placeholder: "Enter capacity",
            unit: "",
          };
  
        default:
          return {
            title: "What is your approximate plant capacity?",
            placeholder: "Enter capacity",
            unit: "",
          };
      }
    }, [data.requirement]);
  
    const canContinue = () => {
      switch (step) {
        case 0:
          return Boolean(data.industry);
  
        case 1:
          return Boolean(data.requirement);
  
        case 2:
          return Boolean(data.plantStatus);
  
        case 3:
          return Boolean(data.capacity);
  
        case 4:
          return Boolean(data.challenge);
  
        case 5:
          return Boolean(data.objective);
  
        case 6:
          return Boolean(
            data.name &&
              data.company &&
              data.email &&
              data.phone
          );
  
        default:
          return true;
      }
    };
  
    const nextStep = () => {
      if (!canContinue()) return;
  
      if (step < totalSteps - 1) {
        setStep((prev) => prev + 1);
      } else {
        handleSubmit();
      }
    };
  
    const previousStep = () => {
      if (step > 0) {
        setStep((prev) => prev - 1);
      }
    };
  
    const handleSubmit = async () => {
      /*
        Connect this later to:
  
        POST /api/plant-assessment
  
        Example:
  
        await fetch("/api/plant-assessment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
      */
  
      setSubmitted(true);
    };
  
    return (
        <main className="bg-white text-slate-700">
          {/* PAGE HERO */}
          <section className="bg-[#062B49]">
            <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 md:py-20 lg:px-8">
              <div className="max-w-3xl">
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#5DD5DE]">
                  MKS Intelligence
                </p>
      
                <h1 className="text-3xl font-bold leading-tight text-white md:text-4xl ">
                  Plant{" "}
                  <span className=" text-[#5DD5DE]">
                    Assessment
                  </span>
                </h1>
      
                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70 md:text-base">
                  Evaluate your plant requirements, identify key operational
                  challenges and discover potential engineering solutions from MKS.
                </p>
              </div>
            </div>
          </section>
      
          {/* ASSESSMENT */}
          <section className="bg-slate-50 px-4 py-10 sm:px-6 sm:py-14">
            <div className="mx-auto flex w-full max-w-4xl items-center justify-center">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="flex max-h-[90vh] w-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 sm:px-7">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#062B49]">
                      <Factory className="h-5 w-5 text-[#5DD5DE]" />
                    </div>
      
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#27B3C2]">
                        MKS Intelligence
                      </p>
      
                      <h2 className="text-base font-bold text-[#062B49] sm:text-lg">
                        Plant Assessment
                      </h2>
                    </div>
                  </div>
                </div>
      
                {/* Progress */}
                {!submitted && (
                  <div className="px-5 pt-5 sm:px-8">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-500">
                        Assessment Progress
                      </span>
      
                      <span className="text-xs font-semibold text-[#062B49]">
                        {step + 1} / {totalSteps}
                      </span>
                    </div>
      
                    <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                      <motion.div
                        className="h-full bg-[#27B3C2]"
                        animate={{
                          width: `${((step + 1) / totalSteps) * 100}%`,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>
                )}
      
                {/* Content */}
                <div className="min-h-0 flex-1 overflow-y-auto px-5 py-7 sm:px-8 sm:py-8">
                  {submitted ? (
                    <SuccessScreen data={data} />
                  ) : (
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={step}
                        initial={{ opacity: 0, x: 25 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -25 }}
                        transition={{ duration: 0.22 }}
                      >
                        {step === 0 && (
                          <IndustryStep
                            value={data.industry}
                            onChange={(value) =>
                              updateData("industry", value)
                            }
                          />
                        )}
      
                        {step === 1 && (
                          <RequirementStep
                            value={data.requirement}
                            onChange={(value) =>
                              updateData("requirement", value)
                            }
                          />
                        )}
      
                        {step === 2 && (
                          <PlantStatusStep
                            value={data.plantStatus}
                            onChange={(value) =>
                              updateData("plantStatus", value)
                            }
                          />
                        )}
      
                        {step === 3 && (
                          <CapacityStep
                            title={capacityLabel.title}
                            placeholder={capacityLabel.placeholder}
                            unit={capacityLabel.unit}
                            value={data.capacity}
                            onChange={(value) =>
                              updateData("capacity", value)
                            }
                          />
                        )}
      
                        {step === 4 && (
                          <ChallengeStep
                            value={data.challenge}
                            onChange={(value) =>
                              updateData("challenge", value)
                            }
                          />
                        )}
      
                        {step === 5 && (
                          <ObjectiveStep
                            value={data.objective}
                            onChange={(value) =>
                              updateData("objective", value)
                            }
                          />
                        )}
      
                        {step === 6 && (
                          <ContactStep
                            data={data}
                            updateData={updateData}
                          />
                        )}
      
                        {step === 7 && (
                          <ReviewStep data={data} />
                        )}
                      </motion.div>
                    </AnimatePresence>
                  )}
                </div>
      
                {/* Footer */}
                {!submitted && (
                  <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-5 py-4 sm:px-8">
                    <button
                      type="button"
                      onClick={previousStep}
                      disabled={step === 0}
                      className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-[#062B49] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back
                    </button>
      
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!canContinue()}
                      className="inline-flex items-center gap-2 rounded-lg bg-[#062B49] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0A4266] disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      {step === totalSteps - 1
                        ? "Generate Assessment"
                        : "Next"}
      
                      {step === totalSteps - 1 ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <ArrowRight className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                )}
              </motion.div>
            </div>
          </section>
        </main>
      );
  }

/* -------------------------------------------------------
   Shared UI
------------------------------------------------------- */

function QuestionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-7">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#27B3C2]">
        {eyebrow}
      </p>

      <h3 className="max-w-2xl text-2xl font-bold leading-tight text-[#062B49] sm:text-3xl">
        {title}
      </h3>

      {description && (
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
          {description}
        </p>
      )}
    </div>
  );
}

function OptionButton({
  selected,
  title,
  description,
  onClick,
}: {
  selected: boolean;
  title: string;
  description?: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative w-full rounded-xl border p-4 text-left transition-all duration-200 ${
        selected
          ? "border-[#27B3C2] bg-[#27B3C2]/5 shadow-sm"
          : "border-slate-200 bg-white hover:border-[#5DD5DE] hover:bg-slate-50"
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
            selected
              ? "border-[#27B3C2] bg-[#27B3C2]"
              : "border-slate-300"
          }`}
        >
          {selected && (
            <Check className="h-3 w-3 text-white" />
          )}
        </div>

        <div>
          <p className="font-semibold text-[#062B49]">
            {title}
          </p>

          {description && (
            <p className="mt-1 text-xs leading-5 text-slate-500">
              {description}
            </p>
          )}
        </div>
      </div>
    </button>
  );
}

/* -------------------------------------------------------
   Steps
------------------------------------------------------- */

function IndustryStep({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <>
      <QuestionHeader
        eyebrow="01 — Plant Profile"
        title="Which industry does your plant operate in?"
        description="Select the industry that best represents your current or planned operation."
      />

      <div className="grid gap-3 sm:grid-cols-2">
        {industries.map((industry) => (
          <OptionButton
            key={industry}
            title={industry}
            selected={value === industry}
            onClick={() => onChange(industry)}
          />
        ))}
      </div>
    </>
  );
}

function RequirementStep({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <>
      <QuestionHeader
        eyebrow="02 — Requirement"
        title="What are you looking to improve?"
        description="Choose the area where MKS engineering expertise can help your plant."
      />

      <div className="grid gap-3 sm:grid-cols-2">
        {requirements.map((item) => (
          <OptionButton
            key={item.value}
            title={item.title}
            description={item.description}
            selected={value === item.value}
            onClick={() => onChange(item.value)}
          />
        ))}
      </div>
    </>
  );
}

function PlantStatusStep({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <>
      <QuestionHeader
        eyebrow="03 — Current Setup"
        title="What is the current status of your plant?"
      />

      <div className="grid gap-3">
        {plantStatuses.map((status) => (
          <OptionButton
            key={status}
            title={status}
            selected={value === status}
            onClick={() => onChange(status)}
          />
        ))}
      </div>
    </>
  );
}

function CapacityStep({
  title,
  placeholder,
  unit,
  value,
  onChange,
}: {
  title: string;
  placeholder: string;
  unit: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <>
      <QuestionHeader
        eyebrow="04 — Capacity"
        title={title}
        description="An approximate value is enough for the initial assessment."
      />

      <div className="mx-auto max-w-xl">
        <div className="relative">
          <input
            type="text"
            inputMode="decimal"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            autoFocus
            className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 pr-24 text-lg font-semibold text-[#062B49] outline-none transition placeholder:text-slate-300 focus:border-[#27B3C2] focus:ring-4 focus:ring-[#27B3C2]/10"
          />

          {unit && (
            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-400">
              {unit}
            </span>
          )}
        </div>
      </div>
    </>
  );
}

function ChallengeStep({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <>
      <QuestionHeader
        eyebrow="05 — Challenge"
        title="What is the main challenge you're facing?"
      />

      <div className="grid gap-3 sm:grid-cols-2">
        {challenges.map((challenge) => (
          <OptionButton
            key={challenge}
            title={challenge}
            selected={value === challenge}
            onClick={() => onChange(challenge)}
          />
        ))}
      </div>
    </>
  );
}

function ObjectiveStep({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <>
      <QuestionHeader
        eyebrow="06 — Objective"
        title="What is your primary project objective?"
      />

      <div className="grid gap-3 sm:grid-cols-2">
        {objectives.map((objective) => (
          <OptionButton
            key={objective}
            title={objective}
            selected={value === objective}
            onClick={() => onChange(objective)}
          />
        ))}
      </div>
    </>
  );
}

function ContactStep({
  data,
  updateData,
}: {
  data: AssessmentData;
  updateData: <K extends keyof AssessmentData>(
    field: K,
    value: AssessmentData[K]
  ) => void;
}) {
  return (
    <>
      <QuestionHeader
        eyebrow="07 — Contact"
        title="Where should we send your assessment?"
        description="We'll use these details to prepare a more relevant engineering response."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <InputField
          icon={<User className="h-4 w-4" />}
          label="Your Name"
          value={data.name}
          onChange={(value) => updateData("name", value)}
          placeholder="Enter your name"
        />

        <InputField
          icon={<Building2 className="h-4 w-4" />}
          label="Company"
          value={data.company}
          onChange={(value) => updateData("company", value)}
          placeholder="Company name"
        />

        <InputField
          icon={<Mail className="h-4 w-4" />}
          label="Work Email"
          type="email"
          value={data.email}
          onChange={(value) => updateData("email", value)}
          placeholder="name@company.com"
        />

        <InputField
          icon={<Phone className="h-4 w-4" />}
          label="Phone"
          type="tel"
          value={data.phone}
          onChange={(value) => updateData("phone", value)}
          placeholder="+91"
        />
      </div>
    </>
  );
}

function InputField({
  icon,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center gap-2 text-xs font-semibold text-[#062B49]">
        {icon}
        {label}
      </span>

      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#062B49] outline-none transition placeholder:text-slate-300 focus:border-[#27B3C2] focus:ring-4 focus:ring-[#27B3C2]/10"
      />
    </label>
  );
}

function ReviewStep({
  data,
}: {
  data: AssessmentData;
}) {
  return (
    <>
      <QuestionHeader
        eyebrow="08 — Review"
        title="Your plant assessment is ready to generate."
        description="Review your information before we create your MKS Intelligence assessment."
      />

      <div className="grid gap-3 sm:grid-cols-2">
        <ReviewItem label="Industry" value={data.industry} />
        <ReviewItem
          label="Requirement"
          value={
            requirements.find(
              (item) => item.value === data.requirement
            )?.title || data.requirement
          }
        />
        <ReviewItem
          label="Plant Status"
          value={data.plantStatus}
        />
        <ReviewItem
          label="Capacity"
          value={data.capacity}
        />
        <ReviewItem
          label="Main Challenge"
          value={data.challenge}
        />
        <ReviewItem
          label="Primary Objective"
          value={data.objective}
        />
      </div>

      <div className="mt-5 rounded-xl border border-[#27B3C2]/20 bg-[#27B3C2]/5 p-4">
        <p className="text-sm leading-6 text-slate-600">
          MKS Intelligence will use these inputs to identify
          relevant engineering considerations and potential MKS
          solutions. A detailed technical proposal will require
          further project information.
        </p>
      </div>
    </>
  );
}

function ReviewItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
        {label}
      </p>

      <p className="mt-1 text-sm font-semibold text-[#062B49]">
        {value}
      </p>
    </div>
  );
}

function SuccessScreen({
  data,
}: {
  data: AssessmentData;
}) {
  return (
    <div className="flex min-h-[430px] flex-col items-center justify-center text-center">
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-[#27B3C2]/10"
      >
        <Check className="h-8 w-8 text-[#27B3C2]" />
      </motion.div>

      <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#27B3C2]">
        MKS Intelligence
      </p>

      <h3 className="mt-2 text-3xl font-bold text-[#062B49]">
        Assessment Submitted
      </h3>

      <p className="mt-3 max-w-lg text-sm leading-6 text-slate-500">
        Thank you, {data.name}. Your plant information has been
        recorded. The MKS team can now review your requirements
        and prepare the appropriate engineering response.
      </p>

      <div className="mt-7 rounded-xl border border-slate-200 bg-slate-50 px-6 py-4">
        <p className="text-xs text-slate-400">
          Requirement
        </p>

        <p className="mt-1 font-semibold text-[#062B49]">
          {requirements.find(
            (item) => item.value === data.requirement
          )?.title || data.requirement}
        </p>
      </div>
    </div>
  );
}