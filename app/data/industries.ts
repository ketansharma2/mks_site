export interface Industry {
  slug: string;
  name: string;
  title: string;
  description: string;
  image: string;

  overview: string;

  applications: string[];

  solutions: {
    title: string;
    description: string;
  }[];

  benefits: string[];

  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const industries: Industry[] = [
  {
    slug: "food-beverage",
    name: "Food & Beverage",
    title: "Industrial Process Solutions for Food & Beverage",
    description:
      "Efficient evaporation, water treatment, and wastewater management systems for food and beverage processing facilities.",

    image: "/images/industries/food.jpg",

    overview:
      "Food and beverage manufacturing involves substantial water consumption, process streams, and wastewater generation. MKS Industrial Solutions supports these operations with systems for water treatment, evaporation, concentration, and wastewater management, helping plants improve resource utilization and process efficiency.",

    applications: [
      "Food processing plants",
      "Beverage manufacturing",
      "Ingredient processing",
      "Process water treatment",
      "Wastewater treatment",
    ],

    solutions: [
      {
        title: "Water & Wastewater Treatment",
        description:
          "Treatment systems for managing process wastewater and improving water recovery within manufacturing facilities.",
      },
      {
        title: "Evaporation Systems",
        description:
          "Industrial evaporators for concentration and volume reduction of suitable process streams.",
      },
      {
        title: "MVR Evaporators",
        description:
          "Mechanical vapor recompression technology for applications where reducing steam consumption is a key requirement.",
      },
      {
        title: "Zero Liquid Discharge",
        description:
          "Integrated treatment and evaporation processes for facilities targeting minimum or zero liquid discharge.",
      },
    ],

    benefits: [
      "Improved water recovery",
      "Reduced wastewater volume",
      "Lower steam consumption",
      "Better resource utilization",
      "Improved plant sustainability",
    ],

    seo: {
      title:
        "Food & Beverage Industry Solutions | MKS Industrial Solutions",
      description:
        "Explore MKS Industrial Solutions for food and beverage processing, including water treatment, evaporation, MVR evaporators, and wastewater management.",
      keywords: [
        "food beverage industry solutions",
        "food processing wastewater treatment",
        "food industry evaporation",
        "industrial water treatment",
        "MKS Industrial Solutions",
      ],
    },
  },

  {
    slug: "sugar",
    name: "Sugar",
    title: "Process Engineering Solutions for the Sugar Industry",
    description:
      "Evaporation, water treatment, and process systems designed for efficient sugar manufacturing and resource management.",

    image: "/images/industries/sugar.jpg",

    overview:
      "Sugar manufacturing depends on efficient handling of process streams, steam, water, and concentrated solutions. MKS focuses on evaporation, water treatment, wastewater management, and energy-efficient process systems that support reliable sugar plant operations.",

    applications: [
      "Sugar manufacturing",
      "Process water management",
      "Evaporation and concentration",
      "Effluent treatment",
      "Water recovery",
    ],

    solutions: [
      {
        title: "Evaporation Plants",
        description:
          "Evaporation systems for concentrating process streams while supporting efficient plant operation.",
      },
      {
        title: "MVR Evaporators",
        description:
          "Energy-efficient mechanical vapor recompression systems for suitable evaporation applications.",
      },
      {
        title: "Water Treatment",
        description:
          "Treatment systems for process and utility water requirements within sugar manufacturing facilities.",
      },
      {
        title: "Effluent Treatment",
        description:
          "Systems for treating industrial wastewater and reducing the environmental impact of plant operations.",
      },
    ],

    benefits: [
      "Improved steam utilization",
      "Efficient concentration",
      "Better water management",
      "Reduced wastewater load",
      "Reliable continuous operation",
    ],

    seo: {
      title: "Sugar Industry Solutions | MKS Industrial Solutions",
      description:
        "MKS provides evaporation, MVR, water treatment, and effluent management solutions for sugar manufacturing plants.",
      keywords: [
        "sugar industry solutions",
        "sugar plant evaporation",
        "sugar industry wastewater treatment",
        "MVR evaporator sugar industry",
        "sugar process engineering",
      ],
    },
  },

  {
    slug: "starch",
    name: "Starch",
    title: "Industrial Solutions for Starch Processing",
    description:
      "Water treatment, evaporation, and wastewater management systems for starch processing facilities.",

    image: "/images/industries/starch.jpg",

    overview:
      "Starch processing involves significant water use and generates process wastewater that requires effective treatment and recovery. MKS addresses these requirements through water treatment, evaporation, concentration, and wastewater management systems.",

    applications: [
      "Starch manufacturing",
      "Process water recovery",
      "Concentration systems",
      "Wastewater treatment",
      "Effluent management",
    ],

    solutions: [
      {
        title: "Water Treatment",
        description:
          "Industrial water treatment systems supporting process water requirements and reuse.",
      },
      {
        title: "Evaporation Systems",
        description:
          "Evaporators for concentration and reduction of liquid process streams.",
      },
      {
        title: "MVR Evaporation",
        description:
          "Mechanical vapor recompression for applications where energy efficiency is important.",
      },
      {
        title: "Wastewater Treatment",
        description:
          "Treatment systems designed to manage wastewater generated during starch processing.",
      },
    ],

    benefits: [
      "Reduced water consumption",
      "Improved water recovery",
      "Efficient concentration",
      "Better wastewater management",
      "Lower resource consumption",
    ],

    seo: {
      title: "Starch Industry Solutions | MKS Industrial Solutions",
      description:
        "Industrial water treatment, evaporation, MVR, and wastewater solutions for starch processing plants from MKS Industrial Solutions.",
      keywords: [
        "starch industry solutions",
        "starch processing wastewater",
        "starch evaporation plant",
        "starch industry water treatment",
        "MVR starch industry",
      ],
    },
  },
  {
    slug: "pulp-paper",
    name: "Pulp & Paper",
    title: "Process & Water Management Solutions for Pulp & Paper",
    description:
      "Evaporation, water treatment, and wastewater management systems supporting efficient and resource-conscious pulp and paper manufacturing.",

    image: "/images/industries/paper.jpg",

    overview:
      "Pulp and paper manufacturing involves significant water usage, process liquor handling, evaporation, and wastewater generation. MKS Industrial Solutions provides process and treatment systems for water management, evaporation, concentration, and effluent reduction across pulp and paper operations.",

    applications: [
      "Pulp and paper manufacturing",
      "Process water treatment",
      "Black liquor concentration",
      "Evaporation systems",
      "Effluent treatment",
      "Water recovery",
    ],

    solutions: [
      {
        title: "Evaporation Systems",
        description:
          "Industrial evaporation systems for concentrating process streams and reducing liquid volume in pulp and paper applications.",
      },
      {
        title: "MVR Evaporators",
        description:
          "Mechanical vapor recompression systems for suitable applications where improved thermal efficiency and reduced steam consumption are required.",
      },
      {
        title: "Water & Wastewater Treatment",
        description:
          "Treatment systems for managing process water and wastewater generated throughout pulp and paper manufacturing.",
      },
      {
        title: "Effluent Treatment",
        description:
          "Industrial effluent treatment solutions focused on improving wastewater quality and supporting responsible discharge or reuse.",
      },
    ],

    benefits: [
      "Improved water recovery",
      "Reduced wastewater load",
      "Efficient process stream concentration",
      "Lower steam consumption",
      "Better resource utilization",
    ],

    seo: {
      title: "Pulp & Paper Industry Solutions | MKS Industrial Solutions",
      description:
        "MKS Industrial Solutions provides evaporation, MVR, water treatment, and wastewater management systems for pulp and paper manufacturing plants.",
      keywords: [
        "pulp paper industry solutions",
        "pulp paper wastewater treatment",
        "pulp paper evaporation plant",
        "pulp paper water treatment",
        "MVR evaporator pulp paper",
      ],
    },
  },

  {
    slug: "pharma",
    name: "Pharmaceuticals",
    title: "Process & Water Treatment Solutions for Pharmaceuticals",
    description:
      "Water treatment, wastewater management, and process systems designed for the demanding requirements of pharmaceutical manufacturing.",

    image: "/images/industries/pharma.jpg",

    overview:
      "Pharmaceutical manufacturing requires controlled process environments, reliable water systems, and effective management of wastewater generated during production and cleaning operations. MKS Industrial Solutions provides treatment and process systems suited to pharmaceutical facilities, with emphasis on water quality, wastewater management, recovery, and efficient plant operation.",

    applications: [
      "Pharmaceutical manufacturing",
      "Process water treatment",
      "Wastewater treatment",
      "Water recovery",
      "Effluent management",
      "Liquid waste reduction",
    ],

    solutions: [
      {
        title: "Water Treatment Systems",
        description:
          "Industrial water treatment systems supporting process and utility water requirements within pharmaceutical manufacturing facilities.",
      },
      {
        title: "Effluent Treatment Plants",
        description:
          "Treatment systems for managing wastewater generated from pharmaceutical production and associated plant operations.",
      },
      {
        title: "Evaporation Systems",
        description:
          "Evaporation technology for suitable process streams requiring concentration or liquid volume reduction.",
      },
      {
        title: "Zero Liquid Discharge",
        description:
          "Integrated treatment and evaporation systems for pharmaceutical facilities requiring significant reduction in liquid waste discharge.",
      },
    ],

    benefits: [
      "Improved water management",
      "Effective wastewater treatment",
      "Reduced liquid waste volume",
      "Higher water recovery potential",
      "Better resource efficiency",
    ],

    seo: {
      title:
        "Pharmaceutical Industry Solutions | MKS Industrial Solutions",
      description:
        "MKS Industrial Solutions provides water treatment, ETP, evaporation, wastewater management, and ZLD solutions for pharmaceutical manufacturing.",
      keywords: [
        "pharmaceutical industry solutions",
        "pharmaceutical wastewater treatment",
        "pharmaceutical ETP plant",
        "pharmaceutical water treatment",
        "pharmaceutical ZLD",
      ],
    },
  },

  {
    slug: "distillery",
    name: "Distillery",
    title: "Process & Wastewater Solutions for Distilleries",
    description:
      "Evaporation, distillation, water treatment, and wastewater management systems for distillery operations.",

    image: "/images/industries/process.jpg",

    overview:
      "Distillery operations generate concentrated process streams and high-strength wastewater while requiring significant energy and water resources. MKS works across evaporation, distillation, water treatment, and wastewater management applications relevant to these operations.",

    applications: [
      "Distillery plants",
      "Process stream concentration",
      "Spent wash management",
      "Wastewater treatment",
      "Water recovery",
    ],

    solutions: [
      {
        title: "Evaporation Systems",
        description:
          "Systems for concentrating suitable distillery process streams and reducing liquid volume.",
      },
      {
        title: "MVR Evaporators",
        description:
          "Mechanical vapor recompression systems aimed at improving evaporation energy efficiency.",
      },
      {
        title: "Distillation Systems",
        description:
          "Process distillation equipment for industrial separation and recovery requirements.",
      },
      {
        title: "Wastewater Treatment",
        description:
          "Treatment solutions for managing wastewater generated by distillery operations.",
      },
    ],

    benefits: [
      "Improved energy efficiency",
      "Reduced wastewater volume",
      "Better water recovery",
      "Improved resource utilization",
      "Efficient process operation",
    ],

    seo: {
      title: "Distillery Industry Solutions | MKS Industrial Solutions",
      description:
        "Explore MKS distillery solutions including evaporation, MVR evaporators, distillation, water treatment, and wastewater management.",
      keywords: [
        "distillery industry solutions",
        "distillery evaporation plant",
        "distillery wastewater treatment",
        "MVR distillery",
        "distillery process engineering",
      ],
    },
  },

  {
    slug: "chemical",
    name: "Chemical",
    title: "Industrial Process Solutions for Chemical Manufacturing",
    description:
      "Evaporation, water treatment, and resource recovery systems for demanding chemical manufacturing applications.",

    image: "/images/industries/chemical.jpg",

    overview:
      "Chemical manufacturing involves diverse process streams and wastewater characteristics that can vary significantly between plants. MKS develops process and treatment systems around applications involving evaporation, water management, concentration, and liquid waste reduction.",

    applications: [
      "Chemical manufacturing",
      "Process wastewater treatment",
      "Evaporation and concentration",
      "Water recovery",
      "Zero liquid discharge",
    ],

    solutions: [
      {
        title: "Evaporation Systems",
        description:
          "Industrial evaporation systems for concentrating process liquids and reducing wastewater volume.",
      },
      {
        title: "MVR Evaporators",
        description:
          "Energy-efficient evaporation technology for suitable chemical process applications.",
      },
      {
        title: "Industrial Water Treatment",
        description:
          "Treatment systems for process water and wastewater generated by chemical facilities.",
      },
      {
        title: "Zero Liquid Discharge",
        description:
          "Integrated treatment and evaporation processes for minimizing liquid discharge.",
      },
    ],

    benefits: [
      "Reduced liquid discharge",
      "Improved water recovery",
      "Energy-efficient evaporation",
      "Better resource utilization",
      "Improved environmental performance",
    ],

    seo: {
      title: "Chemical Industry Solutions | MKS Industrial Solutions",
      description:
        "MKS Industrial Solutions provides evaporation, MVR, water treatment, and zero liquid discharge systems for chemical industries.",
      keywords: [
        "chemical industry solutions",
        "chemical wastewater treatment",
        "chemical industry evaporation",
        "MVR evaporator chemical industry",
        "zero liquid discharge chemical industry",
      ],
    },
  },

  {
    slug: "dairy",
    name: "Dairy",
    title: "Water & Process Solutions for the Dairy Industry",
    description:
      "Water treatment, wastewater management, and evaporation systems for dairy processing facilities.",

    image: "/images/industries/dairy.jpg",

    overview:
      "Dairy processing requires effective management of process water and wastewater generated across production and cleaning operations. MKS provides treatment and process systems that address water recovery, effluent management, and suitable evaporation applications.",

    applications: [
      "Dairy processing plants",
      "Milk processing",
      "Food ingredient production",
      "Effluent treatment",
      "Process water treatment",
    ],

    solutions: [
      {
        title: "Effluent Treatment Plants",
        description:
          "Treatment systems for wastewater generated from dairy processing and associated plant operations.",
      },
      {
        title: "Water Treatment",
        description:
          "Systems for treating process and utility water according to plant requirements.",
      },
      {
        title: "Evaporation Systems",
        description:
          "Evaporation solutions for suitable concentration and volume reduction applications.",
      },
      {
        title: "Water Recovery",
        description:
          "Treatment and recovery approaches that help reduce dependence on fresh water.",
      },
    ],

    benefits: [
      "Improved water management",
      "Reduced freshwater demand",
      "Effective wastewater treatment",
      "Water recovery",
      "More efficient resource utilization",
    ],

    seo: {
      title: "Dairy Industry Solutions | MKS Industrial Solutions",
      description:
        "Water treatment, wastewater management, evaporation, and water recovery solutions for dairy processing plants by MKS Industrial Solutions.",
      keywords: [
        "dairy industry solutions",
        "dairy wastewater treatment",
        "dairy ETP plant",
        "dairy water treatment",
        "dairy evaporation system",
      ],
    },
  },

  {
    slug: "textile",
    name: "Textile",
    title: "Industrial Process Solutions for the Textile Industry",
    description:
      "Engineered process, evaporation, water treatment, and resource management solutions designed for modern textile manufacturing and processing facilities.",
    image: "/images/industries/textile.jpg",

    overview:
      "Textile processing can consume substantial quantities of water and generate wastewater containing dyes, chemicals, and other process contaminants. MKS focuses on treatment, recovery, recycling, and liquid discharge reduction for textile manufacturing operations.",

    applications: [
      "Textile manufacturing",
      "Dyeing units",
      "Textile processing",
      "Effluent treatment",
      "Water recycling",
      "Zero liquid discharge",
    ],

    solutions: [
      {
        title: "Effluent Treatment Plants",
        description:
          "Treatment systems designed for industrial wastewater generated by textile processing operations.",
      },
      {
        title: "Industrial Water Treatment",
        description:
          "Water treatment systems supporting process and utility requirements.",
      },
      {
        title: "Water Recovery",
        description:
          "Recovery systems aimed at increasing reuse and reducing freshwater requirements.",
      },
      {
        title: "Zero Liquid Discharge",
        description:
          "Treatment and evaporation systems for facilities targeting minimal liquid discharge.",
      },
    ],

    benefits: [
      "Reduced freshwater consumption",
      "Improved water reuse",
      "Better effluent management",
      "Reduced liquid discharge",
      "Improved resource efficiency",
    ],

    seo: {
      title: "Textile Industry Solutions | MKS Industrial Solutions",
      description:
        "MKS provides textile industry water treatment, ETP, water recovery, and zero liquid discharge solutions for textile processing plants.",
      keywords: [
        "textile industry solutions",
        "textile wastewater treatment",
        "textile ETP plant",
        "textile water recycling",
        "textile zero liquid discharge",
      ],
    },
  },

  {
    slug: "wastewater",
    name: "Wastewater",
    title: "Industrial Water & Wastewater Treatment Solutions",
    description:
      "Industrial water and wastewater treatment systems for water recovery, reuse, effluent management, and zero liquid discharge.",

    image: "/images/industries/waste.jpg",

    overview:
      "Industrial facilities generate wastewater with characteristics that depend on the manufacturing process. MKS provides treatment systems including ETP, STP, industrial RO, and ZLD solutions to address water quality, reuse, recovery, and discharge requirements.",

    applications: [
      "Industrial wastewater treatment",
      "Effluent treatment",
      "Sewage treatment",
      "Industrial RO",
      "Water recycling",
      "Zero liquid discharge",
    ],

    solutions: [
      {
        title: "Effluent Treatment Plants",
        description:
          "Systems for treating industrial effluent before reuse or compliant discharge.",
      },
      {
        title: "Sewage Treatment Plants",
        description:
          "Treatment systems for domestic and sanitary wastewater generated at industrial facilities.",
      },
      {
        title: "Industrial RO Plants",
        description:
          "Reverse osmosis systems for producing treated water for suitable industrial applications.",
      },
      {
        title: "Zero Liquid Discharge",
        description:
          "Integrated treatment and evaporation systems designed to minimize or eliminate liquid discharge.",
      },
    ],

    benefits: [
      "Improved water recovery",
      "Reduced freshwater requirement",
      "Lower wastewater discharge",
      "Water reuse",
      "Better resource management",
    ],

    seo: {
      title:
        "Industrial Water & Wastewater Treatment | MKS Industrial Solutions",
      description:
        "MKS provides industrial ETP, STP, RO, water recycling, and zero liquid discharge solutions for industrial wastewater management.",
      keywords: [
        "industrial wastewater treatment",
        "industrial ETP plant",
        "industrial RO plant",
        "zero liquid discharge",
        "industrial water treatment",
      ],
    },
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}

