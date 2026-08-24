// components/EngineeringProcess.tsx
const steps = [
    {
      number: "01",
      title: "Feasibility",
      desc: "Initial assessment and project viability analysis.",
    },
    {
      number: "02",
      title: "Engineering & Design",
      desc: "Detailed process engineering and system design.",
    },
    {
      number: "03",
      title: "Manufacturing",
      desc: "In-house fabrication and quality-controlled production.",
    },
    {
      number: "04",
      title: "Installation",
      desc: "On-site installation and integration.",
    },
    {
      number: "05",
      title: "Commissioning",
      desc: "Start-up, testing, and performance validation.",
    },
  ];
  
  export default function EngineeringProcess() {
    return (
      <section className="py-16 md:py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className=" flex items-center gap-3 justify-center">
          <span className="h-px w-10 bg-[#0A4266]" />
            <span className="text-blue-600 text-xs font-semibold tracking-[0.3em] uppercase">
              Process
            </span></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mt-2">
              From Concept to Commissioning
            </h2>
            <p className="text-slate-600 mt-4">
              End-to-end EPC capabilities delivering complete turnkey solutions.
            </p>
          </div>
  
          <div className="grid md:grid-cols-5 gap-4 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-slate-50 p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-100">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-slate-800 text-sm">{step.title}</h3>
                  <p className="text-slate-500 text-xs mt-2">{step.desc}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-blue-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }