export interface ProductSpec {
  id: string;
  name: string;
  category: "router" | "antenna" | "healthcare" | "tracker";
  badge?: string;
  image: string;
  fallbackImg?: string;
  tagline: string;
  description: string;
  frequencyRange: string;
  keyFeatures: string[];
  specs: {
    label: string;
    value: string;
  }[];
  dimensions: string;
  certifications: string[];
  applications: string[];
  datasheetUrl?: string;
}

export const SKYMIRR_TAGLINES = {
  main: "Technology to improve Quality of Life",
  signal: "SIGNAL WITHOUT LIMITS",
  signalSub:
    "We develop and manufacture advanced RF technology-based products that better connect the world, such as cost-effective better-performing broadband wireless for everyone",
  whenItHasToConnect: "WHEN IT HAS TO CONNECT, IT HAS TO BE SKYMIRR",
  missionDetail:
    "We develop and manufacture advanced RF technology-based products that better our lives, such as cost-effective, better performing, broadband wireless communications for everyone and medical applications that treat serious disease far more effectively",
};

export const LATEST_NEWS = [
  {
    id: "news-1",
    title: "SkyMirr Sky5G Router Achieves AT&T Network Certification",
    tag: "Carrier Approval",
    date: "Latest",
    link: "https://skymirr.com/skymirrs-sky5g-router-achieves-att-network-certification-expanding-carrier-choice-for-reliable-connectivity/",
  },
  {
    id: "news-2",
    title:
      "SkyMirr Expands Its Antenna Portfolio with New High-Performance 4G/5G and Wi-Fi Solutions",
    tag: "Product Release",
    date: "Latest",
    link: "https://skymirr.com/skymirr-expands-its-antenna-portfolio-with-new-high-performance-4g-5g-and-wi-fi-solutions/",
  },
  {
    id: "news-3",
    title:
      "Introducing SkyMirr's Next Generation Antennas – Powered by MuLCAT™ Technology",
    tag: "RF Innovation",
    date: "Technology",
    link: "https://skymirr.com/press-releases/",
  },
  {
    id: "news-4",
    title:
      "Antenna-First Design: Why Real-World 5G Performance Starts at the RF Layer",
    tag: "Engineering Whitepaper",
    date: "Insight",
    link: "https://skymirr.com/antenna-first-design-why-real-world-5g-performance-starts-at-the-rf-layer/",
  },
  {
    id: "news-5",
    title:
      "SkyMirr's Sky5G Wireless Router Named CES 2026 Innovation Awards Honoree",
    tag: "Industry Award",
    date: "Honoree",
    link: "https://skymirr.com/press-releases/",
  },
];

export const SKYMIRR_METRICS = [
  {
    value: "+42%",
    label: "Farther 5G Tower Reach",
    subtext: "Demonstrated reach to carrier cellular towers vs. standard CPEs",
  },
  {
    value: "+65%",
    label: "Radiation Gain Across FR1",
    subtext: "Uniform signal gain from 600 MHz (Band 71) to 6000 MHz",
  },
  {
    value: "+92%",
    label: "Data Recognition Distance",
    subtext: "Expanded reception threshold in high-interference environments",
  },
  {
    value: ">75%",
    label: "Antenna Efficiency",
    subtext:
      "Maintained across ultra-wideband spectrum where legacy antennas drop <40%",
  },
];

export const PARTNERS_DATA = {
  online: [
    { name: "Amazon", region: "USA", logo: "/images/partners/amazon.jpg" },
    { name: "Walmart", region: "USA", logo: "/images/partners/wallmart.jpg" },
    {
      name: "Semikart",
      region: "India",
      logo: "/images/partners/semikart.jpg",
    },
    {
      name: "Central Computers",
      region: "USA",
      logo: "/images/partners/central-computers.png",
    },
    { name: "ThinkEDU", region: "USA", logo: "/images/partners/think-edu.png" },
  ],
  distributors: [
    { name: "DigiKey", region: "Global", logo: "/images/partners/digikey.jpg" },
    { name: "Advent", region: "India", logo: "/images/partners/advent.jpg" },
    {
      name: "Aqtronics",
      region: "India",
      logo: "/images/partners/aqtronics.jpg",
    },
    {
      name: "D&H",
      region: "North America",
      logo: "/images/partners/dandh.jpg",
    },
    { name: "Cellhub", region: "USA", logo: "/images/partners/cellhub.jpg" },
    {
      name: "B&H Photo Video",
      region: "Global",
      logo: "/images/partners/bandh.jpg",
    },
  ],
};

export const LEADERSHIP_TEAM = [
  {
    name: "Dr. Eric (Youngmin) Jo, Ph.D.",
    role: "Co-Founder and Chief Executive Officer",
    bio: "Over 25 years of experience in RF/antenna technology and operations management. Various executive and technical positions including CEO, CTO, COO, VP and President for industry leading companies such as Taoglas, SkyCross, and Samsung Electronics. Dr. Jo holds a Ph.D. in Electrical Engineering from Florida Tech and BE from Korea University. He owns over 35 patents for antenna and RF system design.",
  },
  {
    name: "Christopher Morton, Ph.D.",
    role: "Co-Founder and Board Chairman",
    bio: "Over 30 years of experience in executive roles in IT, Display, and Wireless Industries. An industry leader in business development, fundraising, and startups. Currently CEO of NanoPhotonica, Operating Partner in Orchid Black, and Member of Orlando Tech Council. Securing institutional and strategic investment over $85M from leading VCs. Ph.D. in Communication Systems from University of Pennsylvania.",
  },
  {
    name: "Kerry Greer, MSEE, MBA",
    role: "CSO and Co-Founder",
    bio: "Over 30 years of experience leading R&D, Business Development, Product Development, Volume Manufacturing, and Sales teams in wireless telecommunications. Prior executive positions at Globalstar, L3Harris Communications, and ACR Electronics. Over 10 patents for RF/antenna and communication systems design. MBA and MSEE from University of Florida.",
  },
  {
    name: "Frank (Tae Ho) Son, Ph.D.",
    role: "Chief Scientist",
    bio: "Over 30 years of experience in RF, Antenna, and Medical devices as an academic and industrial leader. Professor at Soonchunhyang University, Senior Researcher at LGE, and Chairman of ITS (Intelligent Transportation System). Prior experience at Gold Star Precision Co. LTD (R&D for RADARs and guided systems) and KASI. Published over 316 papers and 34 patents.",
  },
  {
    name: "Bob Miller",
    role: "Chief Financial Officer",
    bio: "Deep executive experience having served as CFO and COO for two decades commercializing high-tech innovations. Stanford graduate in economics and industrial engineering, Columbia MBA in finance and accounting. Former CFO of GAF Corporation ($1B conglomerate) and Treasurer of Mead Corporation ($4B revenue) securing $3B+ in creative financing.",
  },
  {
    name: "Carl Lee, MSEE",
    role: "VP of Sales and PM, Korea",
    bio: "Over 25 years of sales and project management experience in RF/Antenna industries. Previously Carl served top-tier global companies such as SkyCross, LGE, and ePlus in leadership positions including regional manager, Sales VP, and General Manager. Received Master's degree in Electrical Engineering from Florida Tech.",
  },
  {
    name: "Natasha Tamaskar, Ph.D.",
    role: "Chief Revenue Officer",
    bio: "20+ years of experience in wireless, telecom, AI, and security. Former SVP & Head of Business Strategy and Global Marketing at Radisys (a Jio Platforms Company), and VP of Cloud Strategy & Marketing at GENBAND/Kandy.io. Recognized in Global Telecoms Business '50 Women to Watch.' Ph.D. in Computational Physics from Kent State University, MIT Certification in Applied Generative AI.",
  },
  {
    name: "Mark Banish",
    role: "Senior Director of Operations",
    bio: "30+ years of leadership in global contract logistics, manufacturing, and operations. Former President at Kontane Logistics, VP Shared Services at Jenoptik North America, and VP Production at Containers Direct. MBA from University of Portland, B.S. in Packaging Engineering from Michigan State University.",
  },
  {
    name: "Greg Khachatrian",
    role: "Board Director",
    bio: "18+ years of leadership, finance, accounting, and operational experience. Completed corporate transactions over $1B in aggregate value with a 100% success rate in restructuring. Former CFO for Casino Miami, growing company value from $125M to over $250M. Bachelor's in accounting, MBA in Finance.",
  },
  {
    name: "David Carrier",
    role: "Advisory Board Member",
    bio: "Industrial expert in sales and manufacturing. Founder and President of QuantumFlo, Inc., leader in variable speed controlled packaged pump systems. Advisory board chairman in GrowFL. BS in Business Administration from University of South Florida.",
  },
  {
    name: "Yoshioki Chika",
    role: "Advisory Board Member",
    bio: "Telecommunication and mobile expert. Experienced CTO of mobile carriers in Japan and technical advisor for US T-1 carrier. Sits on the board of the MulteFire Alliance. Formerly with Sprint as technical advisor for the CTO, VP of Softbank's Solution Strategy Office, and 20 years at KDDI. BA in Physics from Ibaraki University.",
  },
  {
    name: "Alex Wissner-Gross, Ph.D.",
    role: "Advisory Board Member",
    bio: "Award-winning computer scientist, entrepreneur, advisor, and investor. President and Chief Scientist of Gemedy and Managing Director of Reified; taught at Harvard and MIT. Founded, advised, and invested in 27 technology companies with a combined valuation of over $850 million. Ph.D. in Physics from Harvard, S.B. from MIT.",
  },
  {
    name: "Don Hawley",
    role: "Company Board Member",
    bio: "Industry expert in Finance, Business, and Operations. Partner in 2Go Advisory Group, President of hhharvest.co, former chairman in Vistage Worldwide, Inc. BS from UC Berkeley.",
  },
  {
    name: "Dr. Donna Hamlin, Ph.D.",
    role: "Independent Board Member",
    bio: "Board Director, Executive and Advisor in Strategy, Global Governance and Business Transformation. Award-winning developer of CASCADE® and Board Bona Fide® management tools. Founder of Boardwise, Inc. Ph.D. and M.S. from Rensselaer Polytechnic Institute.",
  },
];

export const PRODUCTS_DATA: ProductSpec[] = [
  {
    id: "sky5g-tcpa117",
    name: "Sky5G® Wireless Router (TCPA 117)",
    category: "router",
    badge: "CES 2026 Honoree",
    image: "/images/5g-routers.jpg",
    tagline: "World-Class 5G Fixed Wireless Access with MuLCAT™ and Wi-Fi 7",
    description:
      "The award-winning Sky5G Router combines SkyMirr’s proprietary MuLCAT™ antenna system with next-generation Wi-Fi 7 tri-band architecture. Engineered to conquer cell-edge dropouts, provide up to 42% farther reach to 5G towers, and support 512 simultaneous devices.",
    frequencyRange: "5G NR FR1 (600 MHz - 6000 MHz) & Tri-Band Wi-Fi 7",
    keyFeatures: [
      "CES® 2026 Innovation Awards Honoree (Mobile Devices & Accessories)",
      "Certified on T-Mobile 5G Network & T-Priority (First Responder Tier-1)",
      "Achieved AT&T Network Certification",
      "Wi-Fi 7 (802.11be) Tri-Band with Multi-Link Operation (MLO)",
      "Up to 3.4 Gbps 5G NR download throughput",
      "Connects up to 512 simultaneous devices with 4x4 MU-MIMO",
      "Dual 2.5 Gigabit Ethernet ports (1x WAN, 1x LAN)",
      "Quad-Core ARM Cortex-A73 @ 2.2 GHz, 2GB DDR4 RAM",
    ],
    specs: [
      {
        label: "Cellular Technology",
        value: "5G NR Sub-6 GHz (SA/NSA) / 4G LTE Cat 20",
      },
      {
        label: "5G Peak Speeds",
        value: "Up to 3.4 Gbps Downlink / 900 Mbps Uplink",
      },
      { label: "Wi-Fi Standards", value: "Wi-Fi 7 (802.11 a/b/g/n/ac/ax/be)" },
      {
        label: "Wi-Fi Frequency Bands",
        value: "Tri-band: 2.4 GHz, 5 GHz, 6 GHz",
      },
      { label: "Device Capacity", value: "Up to 512 Concurrent Clients" },
      {
        label: "Antenna Architecture",
        value: "Internal MuLCAT™ High-Isolation 8x8 MIMO Array",
      },
      { label: "Processor", value: "Quad-Core ARM Cortex-A73 2.2 GHz" },
      {
        label: "System Memory",
        value: "2 GB DDR4 RAM + 256 MB SPI-NAND Flash",
      },
      {
        label: "Network Ports",
        value: "1x 2.5GbE WAN, 1x 2.5GbE LAN, 1x USB 3.0 Type-C",
      },
      { label: "SIM Support", value: "Nano-SIM (4FF) + eSIM Dual Standby" },
      {
        label: "Power Supply",
        value: "DC 12V / 3.5A Adapter (Universal 100-240V)",
      },
      { label: "Operating Temp", value: "-10°C to +50°C (14°F to 122°F)" },
    ],
    dimensions: "177 x 184 x 120 mm (7.0 x 7.2 x 4.7 inches), 890g",
    certifications: [
      "CES 2026 Honoree",
      "T-Mobile Certified",
      "T-Priority",
      "AT&T Certified",
      "FCC Part 15/27",
      "PTCRB",
      "Wi-Fi Alliance",
    ],
    applications: [
      "Rural Fixed Wireless",
      "Public Safety / First Responders",
      "Enterprise Branch Office",
      "Industrial IoT & Logistics",
    ],
    datasheetUrl:
      "https://skymirr.com/wp-content/uploads/2025/12/SkyMirr-Data-Sheet-TCPA117.pdf",
  },
  {
    id: "tamp-161",
    name: "SkyBlade™ TAMP161 4G/5G MIMO Antenna",
    category: "antenna",
    badge: "Flagship MIMO",
    image: "/images/skymirr-next-gen-antennas.jpg",
    tagline: "High-Isolation Dual/Quad MIMO Omnidirectional Array",
    description:
      "The TAMP161 is a high-efficiency MIMO Omnidirectional Antenna module engineered to support the full spectrum of 4G LTE and 5G Sub-6 frequencies with isolation >25 dB. Up to 6 dBi peak gain and up to 90% efficiency.",
    frequencyRange: "617 MHz – 5925 MHz (Continuous Full-Band)",
    keyFeatures: [
      "Multi-element MIMO with inter-port isolation >25 dB",
      "Low-profile aerodynamic housing for emergency fleet and bus transit",
      "Supports concurrent 5G NR carrier aggregation",
      "Up to 90% radiation efficiency across bands",
      "Direct connectorized SMA male terminals",
    ],
    specs: [
      {
        label: "Configuration",
        value: "4x4 MIMO Cellular + Optional Active GNSS",
      },
      {
        label: "Frequency Span",
        value: "617 - 960 MHz / 1710 - 2700 MHz / 3300 - 5925 MHz",
      },
      { label: "Isolation", value: "> 25 dB between antenna elements" },
      { label: "Efficiency", value: "> 70% typical, up to 90% peak" },
      { label: "Peak Gain", value: "Up to 6 dBi" },
      {
        label: "Connector Type",
        value: "4x SMA-Male (Cellular) + 1x SMA (GNSS)",
      },
      {
        label: "Cable Length",
        value: "1.0m / 3.0m low-loss CFD200 (customizable)",
      },
    ],
    dimensions: "190 x 140 x 22.5 mm, 520g",
    certifications: [
      "IP69K High-Pressure Wash",
      "IK10 Vandal-Proof",
      "FCC",
      "CE",
    ],
    applications: [
      "First Responder Vehicles",
      "Public Transit",
      "Remote SCADA",
      "Robotic AGVs",
      "Cellular Routers",
    ],
    datasheetUrl: "https://skymirr.com/wp-content/uploads/2026/06/TAMP161.pdf",
  },
  {
    id: "tamp-141",
    name: "TAMP 141",
    category: "antenna",
    image: "/images/antennas/tamp141.png",
    tagline: "4G LTE / 5G Ultra Broadband Omni Antenna",
    description:
      "The TAMP141 antenna is an ultra-wideband omnidirectional, connectorized antenna used for connecting wireless communication devices such as wireless Consumer Premise Equipment (CPE) / repeaters to a network base station for any IoT device connecting to the cellular network. This antenna delivers best in class ultra-wideband operation for 4G LTE bands from 600 MHz to 6GHz.",
    frequencyRange: "600 MHz – 6 GHz",
    keyFeatures: [
      "Omnidirectional peak gain from -1.0 to +2.1 dBi throughout the entire band",
      "Greater than 40% efficiency (peak = 80%) throughout the entire band",
      "Horizontal or Vertical orientation",
      "SMA Male connector type",
      "Available in white and black colors",
    ],
    specs: [
      { label: "Frequency Range", value: "600 MHz – 6 GHz" },
      { label: "Peak Gain", value: "-1.0 to +2.1 dBi" },
      { label: "Efficiency", value: "Greater than 40% (80% peak)" },
      { label: "Orientation", value: "Horizontal or Vertical" },
      { label: "Connector", value: "SMA Male" },
    ],
    dimensions: "",
    certifications: [],
    applications: [
      "Enhanced coverage range in rural areas",
      "Upgrade from 4G/LTE to 5G service coverage",
      "HD Video / high data rates over mobile",
    ],
    datasheetUrl:
      "https://skymirr.com/wp-content/uploads/2026/04/TAMP141-Data-Sheet.pdf",
  },
  {
    id: "tamp-154",
    name: "TAMP154",
    category: "antenna",
    image: "/images/antennas/tamp154-round.png",
    tagline:
      "High Gain Broadband 4G/5G External MIMO Directional Antenna Module",
    description:
      "The TAMP154 is a high-performance omnidirectional Wi-Fi antenna engineered to enhance Wi-Fi 6E and Wi-Fi 7 networks with improved coverage, dependable connectivity, and optimized wireless performance.",
    frequencyRange: "617–5925 MHz",
    keyFeatures: [
      "High Gain Antenna Module Covering 4G LTE and 5G Sub 6 Bands",
      "Broadband 4×4 MIMO Panel Antenna",
      "Connector: SMA (Female), Optional Cable: 1m, 3m, 6m with SMA (Male) Connector",
      "Operating Frequency Bands: 600~6000MHz",
      "High Peak Gain up to 9.5 dBi",
    ],
    specs: [
      {
        label: "Frequency Range",
        value: "617–960 MHz / 1710–2690 MHz / 3300–5000 MHz / 5150–5925 MHz",
      },
      { label: "Peak Gain", value: "4.6–9.7 dBi across bands" },
      { label: "VSWR", value: "≤3.0 / ≤3.0 / ≤3.3 / ≤2.8 across bands" },
      { label: "Isolation", value: "≤20 dB / ≤25 dB across bands" },
      { label: "Efficiency", value: "50–90% across bands" },
      { label: "Input Impedance", value: "50Ω" },
      { label: "Antenna Type", value: "Directional" },
      { label: "Power Rating", value: "20 W" },
      { label: "Connector", value: "SMA-Female" },
      { label: "Extension RF Cable", value: "1m, 3m, and 6m options" },
    ],
    dimensions: "450 × 330.0 × 63.15 mm; 3.0 ± 0.1 kg",
    certifications: [],
    applications: [
      "Routers",
      "Gateways",
      "CPEs",
      "Automotive Devices",
      "IoT Devices",
    ],
    datasheetUrl: "https://skymirr.com/wp-content/uploads/2026/06/TAMP154.pdf",
  },
  {
    id: "tamp-159",
    name: "TAMP159",
    category: "antenna",
    image: "/images/antennas/tamp159-round.png",
    tagline: "Wi-Fi 6e/7 External Antenna",
    description:
      "The TAMP159 is a high-performance omnidirectional Wi-Fi antenna designed to enhance Wi-Fi 6E and Wi-Fi 7 networks with broader coverage, improved signal quality, and dependable connectivity for client devices.",
    frequencyRange: "2400–7125 MHz",
    keyFeatures: [
      "External Antenna with Hinge Covering WiFi 2.4/5/6 GHz Triple Bands",
      "Antenna Size: 156.1 X Φ13mm",
      "Connector: SMA male (RP-SMA Available upon request)",
      "Packaging: Available in a pack of two",
      "Color: Black / White",
      "Operating Frequency Bands: 2400~2500MHz, 5100~5900MHz, 5925~7125MHz",
      "High Efficiency up to 95%",
      "Peak Gain: 2.2~4.6 dBi",
      "Operating Temperature Range: -40ºC to +85ºC",
    ],
    specs: [
      {
        label: "Frequency Spectrum",
        value: "2400–2500 MHz / 5100–5900 MHz / 5925–7125 MHz",
      },
      {
        label: "Peak Gain",
        value: "2.2–4.6 dBi",
      },
      { label: "Efficiency", value: "Up to 95%" },
      { label: "Impedance", value: "50Ω" },
      { label: "Polarization", value: "Vertical" },
      { label: "Directivity", value: "Omni Directional" },
      { label: "Connector", value: "SMA male (RP-SMA available upon request)" },
      { label: "Operating Temperature", value: "-40ºC to +85ºC" },
    ],
    dimensions: "156.1 × Φ13 mm",
    certifications: ["RoHS"],
    applications: [
      "Routers",
      "Gateways",
      "CPEs",
      "Automotive Devices",
      "IoT Devices",
    ],
    datasheetUrl: "https://skymirr.com/wp-content/uploads/2026/06/TAMP159.pdf",
  },
  {
    id: "lipa122",
    name: "LIPA122 SkyTracker Module",
    category: "tracker",
    badge: "Real-Time Telemetry",
    image: "/images/asset-trackers-2.jpg",
    tagline: "Real-Time IoT Asset Tracking Module (RATM)",
    description:
      "The ultimate real-time asset tracker engineered for mission-critical cargo visibility and control, leapfrogging conventional RFID and GPS solutions with cellular, GPS, and multi-sensor telemetry.",
    frequencyRange: "4G LTE-M / NB-IoT & Multi-Constellation GNSS",
    keyFeatures: [
      "Real-time temperature (-20°C to +50°C) and humidity sensing",
      "3-axis accelerometer detecting shock, drop, and orientation",
      "Ambient light tamper alert triggered upon container opening",
      "Multi-year battery longevity with intelligent power states",
      "Direct cloud dashboard integration via secure MQTT/TLS",
    ],
    specs: [
      {
        label: "Cellular Technology",
        value: "LTE Cat M1 / NB-IoT with 2G Fallback",
      },
      {
        label: "Location Tracking",
        value: "GPS / GLONASS / Galileo / BeiDou (GNSS)",
      },
      { label: "Operating Temp", value: "-20°C to +60°C" },
      {
        label: "Battery Capacity",
        value: "High-density Li-SOCl2 primary battery",
      },
      { label: "Environmental Rating", value: "IP67 Waterproof radome" },
      { label: "Sensors", value: "Temp, Humidity, 3-Axis Shock, Light Sensor" },
    ],
    dimensions: "115 x 65 x 28 mm, 160g",
    certifications: ["PTCRB", "FCC Part 15", "CE-RED", "ATEX Safe Zone 2"],
    applications: [
      "Pharma Cold Chain",
      "Heavy Machinery Fleet",
      "Intermodal Containers",
      "High-Value Cargo",
    ],
    datasheetUrl:
      "https://skymirr.com/wp-content/uploads/2026/02/SkyTracker-Data-Sheet-final.pdf",
  },
  {
    id: "maep103",
    name: "MAEP 103",
    category: "healthcare",
    image: "/images/antennas/maep-103.png",
    tagline: "Ultra Compact Wireless Healthcare NFC Antenna",
    description:
      "The MAEP 103 antenna is an ultra-compact NFC coil antenna used for embedded and implanted applications in markets such as wireless healthcare.",
    frequencyRange: "",
    keyFeatures: [],
    specs: [],
    dimensions: "",
    certifications: [],
    applications: [],
    datasheetUrl:
      "https://skymirr.com/wp-content/uploads/2024/01/MAEP103-Chip-NFC-antenna.pdf",
  },
  {
    id: "tamp-118",
    name: "TAMP 118",
    category: "antenna",
    image: "/images/antennas/tamp118.png",
    tagline: "Wi-Fi 6e/7 Dual Band External Antenna With Hinge",
    description:
      "The TAMP118 is an omnidirectional external antenna used on newer wireless communication equipment such as Wi-Fi 6e or Wi-Fi 7 routers and client devices.",
    frequencyRange: "2.4 GHz / 5 GHz / 6 GHz",
    keyFeatures: [
      "External omnidirectional coverage with hinge",
      "Minimum efficiency of >85% in the lower 2.4 GHz band",
      "Minimum efficiency of >63% in the upper 5 and 6 GHz bands",
      "Color: Black or White",
      "SMA Male Connector",
      "50Ω Impedance",
      "IP54",
      "RoHS Compliant",
    ],
    specs: [
      { label: "Antenna Size", value: "156.4 mm × Φ13 mm" },
      { label: "Frequency Bands", value: "2.4 GHz / 5 GHz / 6 GHz" },
      {
        label: "Minimum Efficiency",
        value: ">85% at 2.4 GHz; >63% at 5 and 6 GHz",
      },
      { label: "Connector", value: "SMA Male" },
      { label: "Impedance", value: "50Ω" },
      { label: "Ingress Protection", value: "IP54" },
    ],
    dimensions: "156.4 mm × Φ13 mm",
    certifications: ["RoHS Compliant"],
    applications: [
      "Wi-Fi 6e and 7 routers",
      "IoT devices",
      "Customer Premises Equipment (CPE)",
    ],
    datasheetUrl:
      "https://skymirr.com/wp-content/uploads/2026/04/TAEP118-Data-Sheet.pdf",
  },
  {
    id: "temp-121",
    name: "TAEP 121",
    category: "antenna",
    image: "/images/antennas/temp121.png",
    tagline: "Wi-Fi 6 Dual Band Internal Antenna With Connectorized Cable",
    description:
      "The TAEP121 is an omnidirectional internal antenna used in wireless communication equipment to the local Wi-Fi router. It is typically used to embed the antenna into a consumer electronics product.",
    frequencyRange: "2.4 GHz / 5 GHz",
    keyFeatures: [
      "Minimum efficiency of >72% in the lower 2.4 GHz band",
      "Minimum efficiency of >47% in the upper 5 GHz band",
      "Coaxial cable: Φ1.13 mm × 100 mm (length is customizable)",
      "Connector: MHF1 or MHF4 plug",
      "RoHS Compliant",
    ],
    specs: [
      { label: "Antenna Size", value: "35.3 mm × 9.0 mm, excluding cable" },
      { label: "Frequency Bands", value: "2.4 GHz / 5 GHz" },
      { label: "Minimum Efficiency", value: ">72% at 2.4 GHz; >47% at 5 GHz" },
      {
        label: "Coaxial Cable",
        value: "Φ1.13 mm × 100 mm; customizable length",
      },
      { label: "Connector", value: "MHF1 or MHF4 plug" },
    ],
    dimensions: "35.3 mm × 9.0 mm, excluding cable",
    certifications: ["RoHS Compliant"],
    applications: [
      "Wi-Fi 6 IoT devices",
      "Printers",
      "Cameras",
      "VR goggles",
      "HD Displays",
      "Consumer Electronics",
    ],
    datasheetUrl:
      "https://skymirr.com/wp-content/uploads/2026/04/TAEP121-Data-Sheet.pdf",
  },
  {
    id: "tamp-125",
    name: "TAMP 125",
    category: "antenna",
    image: "/images/antennas/tamp125-1.png",
    tagline: "4G LTE/5G Broadband MIMO Antenna Module",
    description:
      "The TAMP125 is an omnidirectional high gain MIMO external antenna used in wireless communications to enhance the connection to a cellular tower. It is typically used by a 4G/5G router or CPE that is equipped with external antenna ports. The TAMP125 supports the entire 4G LTE and 5G sub6 bands, including the very low 600 MHz band, with good gain and isolation. It supports 2×2 MIMO at the low bands and 4×4 MIMO in the mid/high bands.",
    frequencyRange:
      "600–960 MHz / 1710–2170 MHz / 2500–2690 MHz / 3300–6000 MHz",
    keyFeatures: [
      "Antenna Size: 125 mm × 80 mm × 22 mm (excluding cables and connectors)",
      "Supports 4×4 MIMO at 1710–6000 MHz",
      "Supports 2×2 MIMO at 600–960 MHz",
      "High Peak Gain up to 2.7 dBi",
      "Connectors: (4) SMA",
      "RoHS Compliant",
    ],
    specs: [
      {
        label: "Frequency Bands",
        value: "600–960 / 1710–2170 / 2500–2690 / 3300–6000 MHz",
      },
      { label: "MIMO", value: "4×4 at 1710–6000 MHz; 2×2 at 600–960 MHz" },
      { label: "Peak Gain", value: "Up to 2.7 dBi" },
      { label: "Connectors", value: "4 × SMA" },
      {
        label: "Antenna Size",
        value: "125 mm × 80 mm × 22 mm, excluding cables and connectors",
      },
    ],
    dimensions: "125 mm × 80 mm × 22 mm, excluding cables and connectors",
    certifications: ["RoHS Compliant"],
    applications: ["4G / 5G cellular routers or CPEs"],
    datasheetUrl:
      "https://skymirr.com/wp-content/uploads/2026/04/TAMP125-Data-Sheet.pdf",
  },
];

export const COMPANY_INFO = {
  name: "SkyMirr Technologies",
  tagline: "Technology to improve Quality of Life",
  slogan: "SIGNAL WITHOUT LIMITS",
  whenConnect: "WHEN IT HAS TO CONNECT, IT HAS TO BE SKYMIRR",
  logo: "/images/skymirr-logo-3d.png",
  logoHd: "/images/skymirr-logo-3d-hd.png",
  logoFooter: "/images/skymirr-logo-footer.png",
  founded: "2021",
  founder: "Dr. Eric (Youngmin) Jo, CEO",
  description:
    "We develop and manufacture advanced RF technology-based products that better connect the world, such as cost-effective better-performing broadband wireless for everyone, and medical applications that treat serious disease far more effectively.",
  address: "930 S. Harbor City Blvd, Suite 403, Melbourne, FL 32901",
  phone: "321-393-1039",
  emailSales: "sales@skymirr.com",
  emailSupport: "support@skymirr.com",
  social: {
    instagram: "https://www.instagram.com/skymirr_inc/",
    linkedin: "https://www.linkedin.com/company/skymirr/",
    youtube: "https://www.youtube.com/@skymirr",
    twitter: "https://twitter.com/skymirr_inc",
  },
  locations: [
    {
      city: "Melbourne, Florida, USA",
      role: "Corporate Headquarters & Commercialization",
      detail: "930 S. Harbor City Blvd, Suite 403, Melbourne, FL 32901",
    },
    {
      city: "Incheon, South Korea",
      role: "Global R&D Center & RF Anechoic Chamber",
      detail:
        "Full 3D spherical anechoic testing, EM simulations, positive-coupling prototyping",
    },
    {
      city: "Vietnam & Korea",
      role: "Precision Manufacturing & SMT Assembly",
      detail:
        "Bac Ninh & Incheon contract production facilities with 100% QA inspection",
    },
  ],
};
