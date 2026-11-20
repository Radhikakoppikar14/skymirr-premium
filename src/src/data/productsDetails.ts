// Rich content for the product detail page (src/data/productDetails.ts).
// Basic info (name, subtitle, image, category) still comes from catalog.ts.
// Anything not listed here falls back to CATEGORY_DEFAULTS + whatever data exists in
// skymirrData.ts / products.ts, so every product always renders a proper page.

export const norm = (s: string) => s.replace(/[^a-z0-9]/gi, "").toLowerCase();

/** Detail-only images live in /public/images/antennas/details/<model>/<file> */
const img = (model: string, file: string) => `/images/antennas/details/${model}/${file}`;

export type ChipKind = "eff" | "freq" | "size" | "gain";

export interface Section {
  title: string;
  text?: string[];
  list?: string[]; // "Label: value" items get a bold label automatically
  tags?: string[]; // highlighted inline words, e.g. Routers, Gateways
}

export type Block =
  | {
      type: "table";
      title?: string;
      head?: string[];
      bands?: { label: string; span: number }[]; // optional band-label row above head (needs head)
      rows: string[][]; // short rows stretch their last cell across the table
      note?: string;
      wide?: boolean;
    }
  | { type: "figure"; title?: string; src: string; wide?: boolean }
  | { type: "text"; title: string; text: string; src?: string; wide?: boolean };

export interface Group {
  heading?: string; // centered blue heading, e.g. "Performance"
  blocks: Block[];
}

export interface ProductDetail {
  description?: string;
  chips?: { kind: ChipKind; text: string }[];
  datasheetUrl?: string;
  buyUrl?: string;
  buyLinks?: { label: string; url: string }[]; // several retailers, one button each
  left?: Section[];
  right?: Section[];
  groups?: Group[];
}

export const CATEGORY_LABELS: Record<string, string> = {
  cellular: "Cellular",
  wifi: "Wi-Fi",
  fpcb: "FPCB",
  embedded: "Embedded",
  gnss: "GNSS",
  customized: "Customized",
  chip: "Chip",
};

export const CATEGORY_DEFAULTS: Record<string, { intro: string; tags: string[] }> = {
  cellular: {
    intro:
      "{model} is a SkyMirr 4G LTE / 5G cellular antenna built for dependable wideband connectivity, giving routers, gateways and IoT devices a stronger link to the network.",
    tags: ["Routers", "Gateways", "CPEs", "Telematics", "IoT Devices"],
  },
  wifi: {
    intro:
      "{model} is a SkyMirr Wi-Fi 6E / Wi-Fi 7 antenna covering the 2.4, 5 and 6 GHz bands for wider coverage and a steadier connection on client devices and access points.",
    tags: ["Routers", "Access Points", "Gateways", "Consumer Electronics", "IoT Devices"],
  },
  fpcb: {
    intro:
      "{model} is a flexible printed circuit board (FPCB) antenna that mounts inside the device enclosure, a good fit where space is tight and an internal antenna is required.",
    tags: ["IoT Devices", "Asset Trackers", "Telematics", "Smart Meters", "Data Loggers"],
  },
  embedded: {
    intro:
      "{model} is an ultra-compact embedded antenna for wireless healthcare and other designs where size is the main constraint.",
    tags: ["Wireless Healthcare", "Embedded Devices"],
  },
  gnss: {
    intro:
      "{model} is a SkyMirr GPS / GNSS antenna that gives positioning devices a clean, accurate satellite signal.",
    tags: ["Asset Trackers", "Telematics", "Fleet Management", "Navigation"],
  },
  customized: {
    intro:
      "SkyMirr designs custom antennas around your device, your bands and your enclosure, from first simulation to volume production.",
    tags: ["Custom Designs", "OEM Devices"],
  },
  chip: {
    intro:
      "{model} is a surface-mount chip antenna that goes straight onto the product PCB, saving space and assembly cost.",
    tags: ["Wearables", "Trackers", "Telematics", "OBD Devices"],
  },
};

const BUY_URL = "https://www.digikey.com/";

const GNSS_ACTIVE_ENV = [
  "Operating temperature range: -40 °C to +85 °C",
  "Storage temperature range: -40 °C to +85 °C",
  "Vibration Resistance: applied vibration of 10–55 Hz (1.5 mm amplitude) for 2 hours each in X, Y, and Z directions",
];

const gnssTable = (f1: string, f2: string, axial: [string, string], gain: [string, string]): Block => ({
  type: "table",
  wide: true,
  head: ["Items", "Specifications"],
  rows: [
    ["Frequency [MHz]", f1, f2],
    ["Peak Axial Ratio [dB]", axial[0], axial[1]],
    ["Typical Peak Gain [dBic]", gain[0], gain[1]],
    ["VSWR", "Less than 2:1"],
    ["Impedance", "50 Ω"],
    ["Polarization", "RHCP"],
    ["Directivity", "Directional"],
    ["Frequency Temperature Coefficient", "0 ± 10 ppm/°C"],
  ],
});

const fpcbTable = (
  bands: [string, number][],
  freq: string[],
  eff: string[],
  gain: string[],
): Block => ({
  type: "table",
  title: "Gain and Efficiency",
  wide: true,
  bands: bands.map(([label, span]) => ({ label, span })),
  head: ["Frequency [MHz]", ...freq],
  rows: [
    ["Efficiency [%]", ...eff],
    ["Peak Gain [dBi]", ...gain],
    ["Impedance", "50 Ω"],
    ["Polarization", "Vertical"],
    ["Directivity", "Omni Directional"],
  ],
});

const FPCB_APP_TAGS = ["Routers", "Gateways", "CPEs", "Automotive Devices", "IoT Devices"];
const WFL_CONNECTOR = "Connector: WFL (Male) connector with a 150 mm coaxial cable";

const BUY_AMAZON_DIGIKEY = [
  { label: "Amazon", url: "https://www.amazon.com/" },
  { label: "DigiKey", url: "https://www.digikey.com/" },
];

const foldTable = (
  bands: [string, number][],
  freq: string[],
  uEff: string[],
  uGain: string[],
  fEff: string[],
  fGain: string[],
): Block => ({
  type: "table",
  title: "Peak Gain / Efficiency",
  wide: true,
  bands: bands.map(([label, span]) => ({ label, span })),
  head: ["Frequency [MHz]", ...freq],
  rows: [
    ["Efficiency [%] (unfolded)", ...uEff],
    ["Peak Gain [dBi] (unfolded)", ...uGain],
    ["Efficiency [%] (folded)", ...fEff],
    ["Peak Gain [dBi] (folded)", ...fGain],
    ["Impedance", "50 Ω"],
    ["Polarization", "Vertical"],
    ["Directivity", "Omni Directional"],
  ],
});

const WIFI_APP = "Any wireless device that requires an antenna covering Wi-Fi frequency bands. Example uses:";

export type BlockWithWide = Block & {
  wide?: boolean;
}

export const PRODUCT_DETAILS: Record<string, ProductDetail> = {
  tamp154: {
    description:
      "The TAMP154 is a high-gain broadband 4G LTE / 5G external MIMO directional antenna module. Its focused beam improves signal strength, data throughput and connection reliability for fixed wireless access installations.",
    chips: [
      { kind: "gain", text: "10 dBi High Gain" },
      { kind: "freq", text: "617–5925 MHz" },
      { kind: "size", text: "450 × 330.0 × 63.15 mm" },
    ],
    left: [
      {
        title: "Introduction",
        text: [
          "The TAMP154 is an advanced wireless communication component designed to transmit and receive multiple data streams simultaneously, significantly enhancing signal strength, data throughput, and connection reliability. With its directional gain capabilities, this type of antenna focuses radio frequency energy in specific directions, reducing interference and extending range significantly for FWA installations.",
        ],
      },
      {
        title: "Application",
        text: ["Any cellular wireless device that requires a high gain antenna covering 4G LTE and 5G Sub6 frequency bands. Example uses:"],
        tags: ["Routers", "Gateways", "CPEs", "Automotive Devices", "IoT Devices"],
      },
    ],
    right: [
      {
        title: "Features and Benefits",
        list: [
          "High Gain Antenna Module Covering 4G LTE and 5G Sub 6 Bands",
          "Broadband 4×4 MIMO Panel Antenna",
          "Connector: SMA (Female); optional cable 1 m, 3 m or 6 m with SMA (Male) connector",
          "Operating Frequency Bands: 600–6000 MHz",
          "High Peak Gain: up to 9.7 dBi",
        ],
      },
    ],
    groups: [
      {
        heading: "Performance",
        blocks: [
          {
            type: "table",
            title: "Electrical",
            wide: true,
            rows: [
              ["Frequency Range", "617–960 MHz", "1710–2690 MHz", "3300–5000 MHz", "5150–5925 MHz"],
              ["Gain (Peak)", "4.6–6.7 dBi", "6.1–9.4 dBi", "6.5–9.7 dBi", "6.3–8.7 dBi"],
              ["VSWR", "≤3.0", "≤3.0", "≤3.3", "≤2.8"],
              ["Isolation", "≤20 dB", "≤25 dB", "≤25 dB", "≤25 dB"],
              ["Efficiency", "60–90%", "55–85%", "50–80%", "60–70%"],
              ["Input Impedance", "50 Ω"],
              ["Antenna Type", "Directional"],
              ["Power Rating", "20 W"],
            ],
          },
          {
            type: "table",
            title: "Physical",
            rows: [
              ["Radome Color", "Pantone Blue"],
              ["Dimensions (W × H × D), antenna only", "450 × 330.0 × 63.15 mm"],
              ["Connector", "SMA-Female"],
              ["Extension Cable Length", "1 m, 3 m and 6 m (SMA Male to SMA Male)"],
              ["Weight", "3.0 ± 0.1 kg"],
            ],
          },
          {
            type: "table",
            title: "Extension RF Cable Attenuation (per 1 m)",
            rows: [
              ["617 MHz", "-0.33"],
              ["960 MHz", "-0.42"],
              ["1710 MHz", "-0.55"],
              ["2690 MHz", "-0.71"],
              ["3300 MHz", "-0.84"],
              ["5000 MHz", "-1.03"],
              ["5150 MHz", "-1.07"],
              ["5925 MHz", "-1.11"],
            ],
          },
          { type: "figure", title: "VSWR: ANT1", src: img("tamp154", "vswr-ant1.png") },
          { type: "figure", title: "VSWR: ANT2", src: img("tamp154", "vswr-ant2.png") },
          { type: "figure", title: "VSWR: ANT3", src: img("tamp154", "vswr-ant3.png") },
          { type: "figure", title: "VSWR: ANT4", src: img("tamp154", "vswr-ant4.png") },
          { type: "figure", title: "Peak Gain", src: img("tamp154", "peak-gain.png") },
          { type: "figure", title: "Radiation Direction", src: img("tamp154", "radiation-direction.png") },
        ],
      },
      {
        heading: "Radiation Patterns",
        blocks: [
          { type: "figure", title: "Radiation Pattern: ANT1", src: img("tamp154", "radiation-ant1.png") },
          { type: "figure", title: "Radiation Pattern: ANT2", src: img("tamp154", "radiation-ant2.png") },
          { type: "figure", title: "Radiation Pattern: ANT3", src: img("tamp154", "radiation-ant3.png") },
          { type: "figure", title: "Radiation Pattern: ANT4", src: img("tamp154", "radiation-ant4.png") },
        ],
      },
      {
        heading: "Peak Gain / Efficiency",
        blocks: [
          { type: "figure", title: "ANT1", src: img("tamp154", "efficiency-ant1.png"), wide: true },
          { type: "figure", title: "ANT2", src: img("tamp154", "efficiency-ant2.png"), wide: true },
          { type: "figure", title: "ANT3", src: img("tamp154", "efficiency-ant3.png"), wide: true },
          { type: "figure", title: "ANT4", src: img("tamp154", "efficiency-ant4.png"), wide: true },
        ],
      },
      { heading: "Dimension (unit: mm)", blocks: [{ type: "figure", src: img("tamp154", "dimension.png"), wide: true }] },
    ],
  },

  taep162: {
    description:
      "The TAEP162 is a surface mount compact chip style antenna with high performance covering LTE bands from 600 to 2700 MHz. It can be directly mounted to the PCBA of any wireless communication device.",
    chips: [
      { kind: "eff", text: "90% Efficiency" },
      { kind: "freq", text: "617–2690 MHz" },
      { kind: "size", text: "45 × 9 × 1.6 mm" },
    ],
    left: [
      {
        title: "Introduction",
        text: [
          "The TAEP162 is a surface mount compact chip style antenna with high performance covering LTE bands from 600 to 2700 MHz. It can be directly mounted to the PCBA of any wireless communication device.",
        ],
      },
      {
        title: "Application",
        text: [
          "TAEP162 provides a solution for applications where cost and space must be minimized. The antenna is mounted to the same PCB assembly that holds the radio and other system components. The PCB must include a ground filled region that will act as the counterpoise for the antenna.",
        ],
      },
    ],
    right: [
      {
        title: "Features and Benefits",
        list: [
          "Surface Mount Part",
          "Size: 45 mm × 9 mm × 1.6 mm",
          "Weight: 1.2 grams",
          "Color: Black",
          "Operating Frequency Bands: 617–960 MHz, 1710–2690 MHz",
          "Efficiency: up to 90%",
          "Peak Gain: -2.3 to 3.6 dBi",
          "Impedance: 50 Ω",
          "Polarization: Vertical",
          "Directivity: Omnidirectional",
          "Operating Temperature Range: -40 °C to +85 °C",
        ],
      },
    ],
    groups: [
      {
        heading: "Performance",
        blocks: [
          {
            type: "table",
            title: "Gain and Efficiency",
            head: ["Frequency [MHz]", "617", "960", "1710", "2155", "2690"],
            rows: [
              ["Efficiency [%]", "35", "68", "38", "90", "53"],
              ["Peak Gain [dBi]", "-2.3", "1.3", "0.5", "3.6", "1.1"],
            ],
            note: "* Measured on TAEP EVK Evaluation Kit",
          },
          { type: "figure", title: "VSWR", src: img("taep162", "vswr.png") },
          { type: "figure", title: "Radiation Patterns", src: img("taep162", "radiation-3d.png") },
          { type: "figure", title: "Measurement Set-up", src: img("taep162", "radiation-setup.png") },
        ],
      },
      {
        heading: "Dimension (unit: mm)",
        blocks: [
          { type: "figure", src: img("taep162", "dimension.png"), wide: true },
          { type: "figure", title: "TAEP162 Footprint", src: img("taep162", "footprint.png"), wide: true },
          { type: "figure", title: "Suggested Layout for Antenna Mounting", src: img("taep162", "layout.png") },
          { type: "figure", title: "Matching Network Components", src: img("taep162", "matching.png") },
          {
            type: "text",
            title: "TAEP162EVK",
            text: "The TAEP162EVK provides a complete antenna assembly with SMA connector that may be used to evaluate the antenna. The assembly includes the reference PCB with SMA connector, RF matching components and the TAEP162 antenna pre-assembled.",
            src: img("taep162", "evk.png"),
            wide: true,
          },
          { type: "figure", title: "Efficiency and Peak Gain Table", src: img("taep162", "efficiency-table.png"), wide: true },
          { type: "figure", title: "Measured Efficiency", src: img("taep162", "measured-efficiency.png") },
          { type: "figure", title: "Anechoic Chamber Measurement", src: img("taep162", "chamber.png") },
        ],
      },
    ],
  },

  tamp172: {
    description:
      "The TAMP172 is a wideband LTE 4G magnetic-mount antenna designed for stable, high-efficiency performance across 698–960 MHz and 1710–2700 MHz bands. With 3 dBi gain, 50 Ω impedance, and a flexible 3-meter RG174 cable, it enables easy deployment and reliable signal reception in both fixed and mobile environments.",
    chips: [
      { kind: "gain", text: "3 dBi Gain" },
      { kind: "freq", text: "698–2700 MHz" },
      { kind: "size", text: "Φ30 × 220 mm" },
    ],
    left: [
      {
        title: "Introduction",
        text: [
          "The TAMP172 is a wideband LTE 4G magnetic-mount antenna designed for stable, high-efficiency performance across 698–960 MHz and 1710–2700 MHz bands. With 3 dBi gain, 50 Ω impedance, and a flexible 3-meter RG174 cable, it enables easy deployment and reliable signal reception in both fixed and mobile environments.",
        ],
      },
      {
        title: "Application",
        text: [
          "The TAMP172 is ideal for routers, gateways, and IoT devices requiring quick, non-permanent installation. Its magnetic base allows for rapid placement on metal surfaces, making it well suited for vehicle tracking, temporary deployments, industrial equipment, and remote monitoring systems where consistent LTE connectivity and installation flexibility are essential.",
        ],
      },
      {
        title: "Operating Conditions",
        list: [
          "Operating temperature range: -40 °C to +85 °C",
          "Vibration Resistance: applied vibration of 10–55 Hz with 1.5 cm amplitude for 2 hours",
          "Humidity: 5–95%",
        ],
      },
    ],
    right: [
      {
        title: "Features and Benefits",
        list: [
          "High Band: 1710–2690 MHz",
          "Low Band: 698–960 MHz",
          "VSWR: <2.0",
          "Impedance: 50 Ω",
          "Gain: 3 dBi",
          "Polarization: Linear",
        ],
      },
      {
        title: "Physical Characteristics",
        list: [
          "Cable Length: RG174, 3 m",
          "Connector: SMA Male",
          "Antenna Dimensions: Φ30 × 220 mm",
          "Installation: Magnet",
          "Material: PVC or Fiberglass",
        ],
      },
    ],
  },

  tamp173: {
    description:
      "The TAMP173 is a compact, screw-mount 4G LTE antenna designed for reliable wideband cellular performance across 698–960 MHz and 1710–2690 MHz. Featuring a low VSWR (<1.5), 50 Ω impedance, and durable IP65–IP67 rated housing, it delivers stable connectivity in demanding environments.",
    chips: [
      { kind: "freq", text: "698–2690 MHz" },
      { kind: "size", text: "Φ46.6 × 14.5 mm" },
    ],
    buyUrl: "https://www.digikey.com/",
    left: [
      {
        title: "Introduction",
        text: [
          "The TAMP173 is a compact, screw-mount 4G LTE antenna designed for reliable wideband cellular performance across 698–960 MHz and 1710–2690 MHz. Featuring a low VSWR (<1.5), 50 Ω impedance, and durable IP65–IP67 rated housing, it delivers stable connectivity in demanding environments.",
        ],
      },
      {
        title: "Application",
        text: [
          "Ideal for embedded and external cellular applications, the TAMP173 is well suited for routers, gateways, IoT devices, and industrial equipment requiring dependable LTE connectivity. Its rugged, screw-mount design makes it particularly effective in outdoor deployments, vehicle systems, smart infrastructure, and remote monitoring solutions operating across harsh environmental conditions.",
        ],
      },
      {
        title: "Operating Conditions",
        list: [
          "Operating temperature range: -40 °C to +85 °C",
          "Vibration Resistance: applied vibration of 10–55 Hz with 1.5 cm amplitude for 2 hours",
          "Humidity: 5–95%",
        ],
      },
    ],
    right: [
      {
        title: "Features and Benefits",
        list: [
          "High Band: 1710–2690 MHz",
          "Low Band: 698–960 MHz",
          "VSWR: <1.5",
          "Impedance: 50 Ω",
          "Polarization: Linear",
        ],
      },
      {
        title: "Physical Characteristics",
        list: [
          "Cable Length: RG174, 3000 mm",
          "Connector: SMA Male",
          "Antenna Dimensions: Φ46.6 × 14.5 mm",
          "Installation: Screw",
          "Ingress Protection: IP64–IP67 (excluding cable outlet)",
        ],
      },
    ],
    groups: [
      {
        heading: "Dimension (unit: mm)",
        blocks: [{ type: "figure", src: img("tamp173", "dimension.png"), wide: true }],
      },
    ],
  },

  tamp163: {
    description:
      "The TAMP163 is a high-performance multi-band 4G LTE / 5G antenna engineered to deliver reliable wireless connectivity to both traditional cellular tower networks and emerging Direct-to-Satellite (NTN) services.",
    chips: [
      { kind: "eff", text: "70% Efficiency" },
      { kind: "freq", text: "617–4200 MHz" },
      { kind: "size", text: "250 mm × Φ32.87 mm" },
    ],
    left: [
      {
        title: "Introduction",
        text: [
          "The TAMP163 is a high-performance multi-band 4G LTE / 5G antenna engineered to deliver reliable wireless connectivity to both traditional cellular tower networks and emerging Direct-to-Satellite (NTN) services.",
          "Featuring an optimized dipole design with enhanced overhead pattern characteristics for Band 25, it provides excellent performance for conventional terrestrial communications while improving connectivity to satellite-based cellular networks where tower coverage is limited or unavailable.",
        ],
      },
      {
        title: "Application",
        text: [
          "The TAMP163 is an ideal solution for next-generation applications requiring seamless connectivity across both terrestrial and satellite networks.",
        ],
      },
    ],
    right: [
      {
        title: "Mechanics and Electrical Specifications",
        list: [
          "Operating Frequencies: 617–960 MHz / 1710–2690 MHz / 3300–4200 MHz",
          "Connector: N type male",
          "Dimension: 250 mm × Φ32.87 mm",
          "Weight: 116.2 g",
          "Peak Gain: up to 6.9 dBi",
        ],
      },
    ],
    groups: [
      {
        heading: "Performance",
        blocks: [
          { type: "figure", title: "VSWR", src: img("tamp163", "vswr.png") },
          { type: "figure", title: "Radiation Pattern @ Band 25 (1850 MHz)", src: img("tamp163", "radiation-band25.png") },
          {
            type: "table",
            title: "Peak Gain / Efficiency: Low Band",
            wide: true,
            head: ["Frequency [MHz]", "617", "699", "746", "824", "894", "960"],
            rows: [
              ["Efficiency [%]", "77.1", "76.3", "75.5", "79.3", "76.8", "59.1"],
              ["Peak Gain [dBi]", "3.95", "4.26", "4.28", "5.30", "5.04", "4.44"],
            ],
          },
          {
            type: "table",
            title: "Peak Gain / Efficiency: Mid / High Band",
            wide: true,
            head: ["Frequency [MHz]", "1710", "1850", "1915", "1920", "1930", "1995", "2170", "2305", "2360", "2496", "2590"],
            rows: [
              ["Efficiency [%]", "56.5", "67.6", "59.4", "58.8", "66.5", "64.0", "70.1", "56.4", "53.0", "67.9", "59.8"],
              ["Peak Gain [dBi]", "2.61", "2.65", "1.91", "2.06", "2.66", "2.55", "3.21", "2.99", "1.27", "2.73", "3.29"],
            ],
          },
          { type: "figure", title: "Efficiency and Peak Gain", src: img("tamp163", "efficiency-chart.png"), wide: true },
          { type: "figure", title: "Radiation Pattern (3D)", src: img("tamp163", "radiation-3d.png") },
          { type: "figure", title: "Radiation Pattern (2D)", src: img("tamp163", "radiation-2d.png") },
        ],
      },
      {
        heading: "Dimension (unit: mm)",
        blocks: [{ type: "figure", src: img("tamp163", "dimension.png"), wide: true }],
      },
    ],
  },

  cgma174: {
    description:
      "The CGMA174 is a high-performance active GPS/GNSS magnetic-mount antenna engineered for precise positioning and reliable satellite reception. Operating across 1565–1605 MHz, it features RHCP polarization, a low-noise figure (<1.5), and an integrated LNA with 28 dB gain to enhance signal sensitivity. Its compact, rugged design and IP65–IP67 rated housing make it well suited for demanding environments.",
    chips: [
      { kind: "gain", text: "3.0 dBic Active Gain" },
      { kind: "freq", text: "1564.42–1605.89 MHz" },
    ],
    buyUrl: BUY_URL,
    left: [
      {
        title: "Introduction",
        text: [
          "The CGMA174 is a high-performance active GPS/GNSS magnetic-mount antenna engineered for precise positioning and reliable satellite reception. Operating across 1565–1605 MHz, it features RHCP polarization, a low-noise figure (<1.5), and an integrated LNA with 28 dB gain to enhance signal sensitivity. Its compact, rugged design and IP65–IP67 rated housing make it well suited for demanding environments.",
        ],
      },
      {
        title: "Application",
        text: [
          "The CGMA174 is ideal for navigation and positioning systems requiring accurate, stable satellite reception. Common applications include vehicle tracking, fleet management, asset tracking, telematics, and industrial IoT devices. Its magnetic mount and extended cable enable flexible placement on vehicles or equipment, ensuring optimal satellite visibility in both mobile and fixed installations.",
        ],
      },
      { title: "Operating Conditions", list: [...GNSS_ACTIVE_ENV] },
    ],
    right: [
      {
        title: "Key Specifications",
        list: [
          "Frequency Range: 1564.42–1605.89 MHz",
          "VSWR: <1.5",
          "Impedance: 50 Ω",
          "Polarization: RHCP",
          "Axial Ratio: 3 dB max",
          "LNA Gain: 28 ± 2 dB",
          "Noise Figure: <1.5",
          "Supply Voltage: 3–5 V DC",
          "Current Consumption: 5–15 mA",
        ],
      },
      {
        title: "Physical Characteristics",
        list: [
          "Antenna Dimensions: 48.6 × 37.5 × 17 mm",
          "Cable Length: RG174, 3 m",
          "Connector: SMA Male",
          "Installation: Magnet",
        ],
      },
      {
        title: "Operating Conditions",
        list: [
          "Operating temperature range: -40 °C to +85 °C",
          "Vibration Resistance: applied vibration of 10–55 Hz with 1.5 mm amplitude for 2 hours",
          "Humidity: 5–95%",
          "Ingress Protection: IP64–IP67 (excluding cable outlet)",
        ],
      },
    ],
    groups: [
      {
        heading: "Dimension (unit: mm)",
        blocks: [{ type: "figure", src: img("cgma174", "dimension.png"), wide: true }],
      },
    ],
  },

  cgma175: {
    description:
      "The CGMA175 is a compact, high-sensitivity active GNSS antenna designed for reliable GPS and multi-constellation signal reception. With RHCP polarization, a low-noise amplifier delivering 28 dB gain, and excellent impedance matching (VSWR <1.5), it ensures consistent positioning performance even in challenging environments. Its rugged, screw-mount design supports stable integration into embedded and outdoor systems.",
    chips: [
      { kind: "eff", text: "85% Efficiency" },
      { kind: "freq", text: "1575.42 ± 1 / 1601–1610 MHz" },
    ],
    buyUrl: BUY_URL,
    left: [
      {
        title: "Introduction",
        text: [
          "The CGMA175 is a compact, high-sensitivity active GNSS antenna designed for reliable GPS and multi-constellation signal reception. With RHCP polarization, a low-noise amplifier delivering 28 dB gain, and excellent impedance matching (VSWR <1.5), it ensures consistent positioning performance even in challenging environments. Its rugged, screw-mount design supports stable integration into embedded and outdoor systems.",
        ],
      },
      {
        title: "Application",
        text: [
          "The CGMA175 is ideal for precision positioning in both fixed and mobile deployments. It is commonly used in vehicle navigation, fleet and asset tracking, telematics systems, and industrial IoT devices. Its secure mounting and durable construction make it well suited for outdoor equipment, smart infrastructure, and applications where reliable, continuous GNSS performance is critical.",
        ],
      },
      { title: "Operating Conditions", list: [...GNSS_ACTIVE_ENV] },
    ],
    right: [
      {
        title: "Key Specifications",
        list: [
          "Frequency Range: 1575.42 ± 1 / 1601–1610 MHz",
          "VSWR: <1.5",
          "Impedance: 50 Ω",
          "Polarization: RHCP",
          "Axial Ratio: 3 dB max",
          "LNA Gain: 28 ± 2 dB",
          "Noise Figure: <1.5",
          "Supply Voltage: 3–5 V DC",
          "Current Consumption: 5–15 mA",
        ],
      },
      {
        title: "Physical Characteristics",
        list: [
          "Cable Length: RG174, 3 m",
          "Connector: SMA Male",
          "Antenna Dimensions: Φ46.6 × 14.5 mm",
          "Installation: Screw",
          "Ingress Protection: IP64–IP67 (excluding cable outlet)",
        ],
      },
      {
        title: "Operating Conditions",
        list: [
          "Operating temperature range: -40 °C to +85 °C",
          "Vibration Resistance: applied vibration of 10–55 Hz with 1.5 mm amplitude for 2 hours",
          "Humidity: 5–95%",
          "Ingress Protection: IP64–IP67 (excluding cable outlet)",
        ],
      },
    ],
    groups: [
      {
        heading: "Dimension (unit: mm)",
        blocks: [{ type: "figure", src: img("cgma175", "dimension.png"), wide: true }],
      },
    ],
  },

  cgmp165: {
    description:
      "The CGMP165 is a compact, high-performance GNSS antenna designed for reliable satellite reception across GPS and GLONASS bands. Built with a dielectric ceramic substrate and optimized for right-hand circular polarization, it delivers strong signal capture, low reflection loss, and stable performance in space-constrained designs.",
    chips: [
      { kind: "gain", text: "3.4 dBic Gain" },
      { kind: "freq", text: "1575 MHz (GPS)" },
      { kind: "size", text: "25 × 25 × 4.0 mm" },
    ],
    buyUrl: BUY_URL,
    left: [
      {
        title: "Introduction",
        text: [
          "The CGMP165 is a compact, high-performance GNSS antenna designed for reliable satellite reception across GPS and GLONASS bands. Built with a dielectric ceramic substrate and optimized for right-hand circular polarization, it delivers strong signal capture, low reflection loss, and stable performance in space-constrained designs.",
        ],
      },
      {
        title: "Application",
        text: [
          "This antenna is ideal for position and navigation applications where accuracy and consistency are critical. Typical use cases include Asset Tracking Devices, Automotive Navigation Systems, Telematics Units, Drones and Wearables.",
        ],
      },
      {
        title: "Operating Conditions",
        list: [
          "Operating temperature range: -40 °C to +85 °C",
          "Storage temperature range: -40 °C to +150 °C",
        ],
      },
    ],
    right: [
      {
        title: "Key Specifications",
        list: [
          "Embedded SMD Antenna",
          "Covering GPS and GLONASS bands",
          "Antenna Size: 25 × 25 × 4.0 mm",
          "Frequency: 1575 MHz (GPS) and 1602 MHz (GLONASS)",
          "Impedance: 50 Ω",
          "Polarization: Right-hand circular",
          "Peak Gain: 3.3 dBic",
          "VSWR: ≤2.0",
        ],
      },
      {
        title: "Materials",
        text: ["Constructed with a dielectric ceramic substrate and silver-plated electrodes, ground base, and feed point."],
      },
      {
        title: "Soldering and Handling",
        list: [
          "Recommended peak reflow temperature is 210–240 °C for 5–10 seconds.",
          "It is an electrostatic-sensitive device and must be used within 24 hours of opening or be vacuum resealed.",
        ],
      },
    ],
    groups: [
      {
        heading: "Performance",
        blocks: [
          gnssTable("1575.42 (GPS L1)", "1602 (GLONASS G1)", ["2.88", "0.61"], ["3.14", "3.36"]),
          { type: "figure", title: "VSWR", src: img("cgmp165", "vswr.png") },
          { type: "figure", title: "Evaluation Board (EVB size: 70 × 70 mm)", src: img("cgmp165", "evb.png") },
          { type: "figure", title: "Radiation Pattern: 1575.42 MHz", src: img("cgmp165", "radiation-1575.png") },
          { type: "figure", title: "Radiation Pattern: 1602 MHz", src: img("cgmp165", "radiation-1602.png") },
        ],
      },
      { heading: "Dimension (unit: mm)", blocks: [{ type: "figure", src: img("cgmp165", "dimension.png"), wide: true }] },
    ],
  },

  cgmp166: {
    description:
      "This antenna is a compact ceramic microstrip patch antenna engineered for satellite navigation frequencies around 1575–1602 MHz (GPS and GLONASS bands). It uses a dielectric ceramic substrate with a metalized patch and ground plane to create a highly efficient resonant structure in a very small form factor (18 × 18 × 4 mm).",
    chips: [
      { kind: "gain", text: "2.4 dBic Gain" },
      { kind: "freq", text: "1575 MHz (GPS)" },
      { kind: "size", text: "18 × 18 × 4.0 mm" },
    ],
    buyUrl: BUY_URL,
    left: [
      {
        title: "Introduction",
        text: [
          "This antenna is a compact ceramic microstrip patch antenna engineered for satellite navigation frequencies around 1575–1602 MHz (GPS and GLONASS bands). It uses a dielectric ceramic substrate with a metalized patch and ground plane to create a highly efficient resonant structure in a very small form factor (18 × 18 × 4 mm).",
        ],
      },
      {
        title: "Application",
        text: [
          "Because of its small size, surface-mount capability, and stable performance across temperature and environmental conditions, it is especially well suited for embedded systems such as automotive trackers, drones, fleet management devices, and smart infrastructure. Its RHCP design ensures reliable satellite signal acquisition in real-world environments where orientation and multipath effects are common.",
        ],
      },
      {
        title: "Operating Conditions",
        list: [
          "Operating temperature range: -40 °C to +85 °C",
          "Storage temperature range: -40 °C to +110 °C",
          "Relative Humidity range: 55–75% RH",
          "Moisture Proof: exposure to 40 ± 2 °C and 90–95% RH for 96 hours and 1–2 hours recovery time",
          "Vibration Resistance: applied vibration of 10–55 Hz (1.5 mm amplitude) for 2 hours each in X, Y, and Z directions",
        ],
      },
    ],
    right: [
      {
        title: "Key Specifications",
        list: [
          "Antenna Size: 18 × 18 × 4.0 mm",
          "Frequency: 1575 MHz (GPS) and 1602 MHz (GLONASS)",
          "Impedance: 50 Ω",
          "Polarization: Right-hand circular (RHCP)",
          "Peak Gain: 2.4 dBic",
          "VSWR: ≤2.0",
        ],
      },
      {
        title: "Materials",
        text: [
          "Constructed with a dielectric ceramic element; pins are copper with tin plating. Silver-plated electrodes are situated at the ground base and feed point.",
          "Double-sided adhesive used is NITTO 5000NS.",
        ],
      },
      {
        title: "Soldering and Handling",
        list: [
          "Adhesion strength of soldering: the antenna is tested to ensure it can withstand a force of 2 kg applied to the lead in an axial direction for 10 ± 1 seconds.",
          "Device must be used within 24 hours of opening or be vacuum resealed.",
        ],
      },
    ],
    groups: [
      {
        heading: "Performance",
        blocks: [
          gnssTable("1575.42 (GPS L1)", "1602 (GLONASS G1)", ["5.43", "1.31"], ["1.88", "2.40"]),
          { type: "figure", title: "VSWR", src: img("cgmp166", "vswr.png") },
          { type: "figure", title: "Evaluation Board (EVB size: 70 × 70 mm)", src: img("cgmp166", "evb.png") },
          { type: "figure", title: "Radiation Pattern: 1575.42 MHz", src: img("cgmp166", "radiation-1575.png") },
          { type: "figure", title: "Radiation Pattern: 1602 MHz", src: img("cgmp166", "radiation-1602.png") },
        ],
      },
      { heading: "Dimension (unit: mm)", blocks: [{ type: "figure", src: img("cgmp166", "dimension.png"), wide: true }] },
    ],
  },

  cgmp167: {
    description:
      "The CGMP167 is a compact ceramic microstrip patch antenna engineered for applications operating at 1575–1602 MHz (GPS and GLONASS bands).",
    chips: [
      { kind: "gain", text: "3.6 dBic Gain" },
      { kind: "freq", text: "1575 MHz (GPS)" },
      { kind: "size", text: "25 × 25 × 4.0 mm" },
    ],
    buyUrl: BUY_URL,
    left: [
      {
        title: "Introduction",
        text: [
          "The CGMP167 is a compact ceramic microstrip patch antenna engineered for applications operating at 1575–1602 MHz (GPS and GLONASS bands).",
          "It is well suited for reliable satellite reception, even in environments with orientation variability or multipath interference.",
        ],
      },
      {
        title: "Application",
        text: [
          "Its compact size, surface-mount design, and environmental durability (operating from -40 °C to +85 °C) make it ideal for industrial, automotive, and portable electronics where space is limited but reliable satellite connectivity is critical.",
        ],
      },
      {
        title: "Operating Conditions",
        list: [
          "Adhesion strength of soldering: the antenna is tested to ensure it can withstand a force of 2 kg applied to the lead in an axial direction for 10 ± 1 seconds.",
          "Device must be used within 24 hours of opening or be vacuum resealed.",
        ],
      },
    ],
    right: [
      {
        title: "Key Specifications",
        list: [
          "Antenna Size: 25 × 25 × 4.0 mm",
          "Frequency: 1575 MHz (GPS) and 1602 MHz (GLONASS)",
          "Center Frequency: 1583 MHz (with ground plane)",
          "Impedance: 50 Ω",
          "Polarization: Right-hand circular (RHCP)",
          "Peak Gain: 3.5 dBi",
          "VSWR: <1.5",
        ],
      },
      {
        title: "Materials",
        list: [
          "Antenna Substrate: Dielectric ceramics",
          "Pin: Copper and tin-plated alloy",
          "Electrode and Ground Base: silver-plated",
          "Adhesive: NITTO 5000NS",
        ],
      },
      {
        title: "Soldering and Handling",
        list: [
          "Operating temperature range: -40 °C to +110 °C",
          "Storage temperature range: -40 °C to +110 °C",
          "Relative Humidity range: 55–75% RH",
          "Moisture Proof: exposure to 40 ± 2 °C and 90–95% RH for 96 hours and 1–2 hours recovery time",
          "Vibration Resistance: applied vibration of 10–55 Hz (1.5 mm amplitude) for 2 hours each in X, Y, and Z directions",
        ],
      },
    ],
    groups: [
      {
        heading: "Performance",
        blocks: [
          gnssTable("1575.42 (GPS L1)", "1602 (GLONASS G1)", ["3.60", "0.11"], ["3.17", "3.58"]),
          { type: "figure", title: "VSWR", src: img("cgmp167", "vswr.png") },
          { type: "figure", title: "Evaluation Board (EVB size: 70 × 70 mm)", src: img("cgmp167", "evb.png") },
          { type: "figure", title: "Radiation Pattern: 1575.42 MHz", src: img("cgmp167", "radiation-1575.png") },
          { type: "figure", title: "Radiation Pattern: 1602 MHz", src: img("cgmp167", "radiation-1602.png") },
        ],
      },
      { heading: "Dimension (unit: mm)", blocks: [{ type: "figure", src: img("cgmp167", "dimension.png"), wide: true }] },
    ],
  },

  cgmp168: {
    description:
      "CGMP168 is a compact, high-performance multi-band GNSS patch antenna engineered for precise positioning across multiple satellite constellations. Its single-feed design and dual-stack architecture enable wideband coverage (L1/L5 and beyond) while maintaining strong gain, low reflection loss, and stable axial ratio.",
    chips: [
      { kind: "gain", text: "3.9 dBic Gain" },
      { kind: "freq", text: "L1/L5 GNSS" },
      { kind: "size", text: "25 × 25 × 8.0 mm" },
    ],
    buyUrl: BUY_URL,
    left: [
      {
        title: "Introduction",
        text: [
          "CGMP168 is a compact, high-performance multi-band GNSS patch antenna engineered for precise positioning across multiple satellite constellations. Its single-feed design and dual-stack architecture enable wideband coverage (L1/L5 and beyond) while maintaining strong gain, low reflection loss, and stable axial ratio.",
        ],
      },
      {
        title: "Application",
        text: ["This antenna is designed for high-precision positioning and multi-constellation GNSS applications. Typical use cases include:"],
        list: [
          "Asset tracking and fleet management systems",
          "Navigation equipment and autonomous platforms (drones, robotics)",
          "Telematics and vehicle positioning systems",
          "Industrial IoT (M2M) devices requiring location awareness",
          "Surveying, mapping, and precision agriculture systems",
        ],
      },
      { title: "Operating Conditions", list: [...GNSS_ACTIVE_ENV.slice(0, 3)] },
    ],
    right: [
      {
        title: "Key Specifications",
        list: [
          "Antenna Size: 25 × 25 × 8.0 mm",
          "Frequency Coverage: multiple bands including GPS (L1/L5), GLONASS (G1/G3), Galileo (E1/E5a), BeiDou (B1/B1C/B2a), QZSS (L1/L5), IRNSS (L5)",
          "High Band: 1559–1592 MHz",
          "Low Band: 1164–1189 MHz",
          "Impedance: 50 Ω",
          "Polarization: Right-hand circular (RHCP)",
        ],
      },
      {
        title: "Materials",
        list: [
          "Antenna Substrate: Dielectric ceramics",
          "Pin: Copper and tin-plated alloy",
          "Electrode and Ground Base: silver-plated",
          "Adhesive: NITTO 5000NS",
        ],
      },
      {
        title: "Soldering and Handling",
        list: [
          "Must be soldered by hand within 3 seconds at a temperature of 390 ± 20 °C. Reflow soldering should not be used.",
          "Device must be used within 24 hours of opening or be vacuum resealed.",
        ],
      },
    ],
    groups: [
      {
        heading: "Performance",
        blocks: [
          {
            type: "table",
            wide: true,
            head: ["Items", "Specifications"],
            rows: [
              ["Frequency [MHz]", "1176.45 (GPS L5)", "1561.098 (Beidou B1I)", "1575.42 (GPS L1)"],
              ["Average Axial Ratio [dB]", "3.44", "7.82", "5.67"],
              ["Peak Axial Ratio [dB]", "0.33", "4.94", "0.84"],
              ["Typical Peak Gain [dBic]", "2.01", "3.76", "3.62"],
              ["VSWR", "Less than 3:1"],
              ["Impedance", "50 Ω"],
              ["Polarization", "RHCP"],
              ["Directivity", "Directional"],
              ["Frequency Temperature Coefficient", "0 ± 10 ppm/°C"],
            ],
          },
          { type: "figure", title: "VSWR (bottom patch and top patch antenna)", src: img("cgmp168", "vswr.png") },
          { type: "figure", title: "Evaluation Board (EVB size: 70 × 70 mm)", src: img("cgmp168", "evb.png") },
          { type: "figure", title: "Radiation Pattern: 1176.45 MHz", src: img("cgmp168", "radiation-1176.png") },
          { type: "figure", title: "Radiation Pattern: 1561.098 MHz", src: img("cgmp168", "radiation-1561.png") },
          { type: "figure", title: "Radiation Pattern: 1575.42 MHz", src: img("cgmp168", "radiation-1575.png"), wide: true },
        ],
      },
      { heading: "Dimension (unit: mm)", blocks: [{ type: "figure", src: img("cgmp168", "dimension.png"), wide: true }] },
    ],
  },

  taep177: {
    description:
      "TAEP177 is a Flex PCB combo embedded antenna for cellular and GNSS applications. It puts two antennas on one flex PCB with two ports, one for cellular and one for GNSS, and the cable and connector can be customized for your use case.",
    chips: [
      { kind: "eff", text: "80% Efficiency" },
      { kind: "freq", text: "GNSS 1559–1605 MHz" },
      { kind: "freq", text: "5G: 690–960 / 1700–5000 MHz" },
      { kind: "size", text: "150 × 20 × 0.25 mm" },
    ],
    left: [
      {
        title: "Introduction",
        text: [
          "TAEP177 is a Flex PCB combo embedded antenna for cellular and GNSS applications. Easy to use: 2 antennas in one flex PCB with 2 ports for cellular and GNSS, with easy customization of cable and connector as per use case.",
          "Note: Adhesive tape is required to stick the antenna.",
        ],
      },
      { title: "Application", text: ["Telematics, infotainment, IoT gateways, etc."] },
    ],
    right: [
      {
        title: "Mechanics and Electrical Specification",
        list: [
          "Frequency Range (GNSS): 1559–1605 MHz",
          "Frequency Range (5G): 690–960 / 1700–5000 MHz",
          "Impedance: 50 Ω",
          "VSWR: 690–960 MHz ≤4 / 1700–5000 MHz ≤3 / GNSS ≤2",
          "Connector: IPEX-I",
          "Gain: 4.25 dBi (max)",
          "Dimensions: 150 × 20 × 0.25 mm",
          "Radome Material: FPC",
          "Working Temperature: -40 °C to +85 °C",
        ],
      },
    ],
    groups: [
      {
        heading: "Performance",
        blocks: [
          { type: "figure", title: "VSWR (5G)", src: img("taep177", "vswr-5g.png") },
          { type: "figure", title: "VSWR (GNSS)", src: img("taep177", "vswr-gnss.png") },
          { type: "figure", title: "Peak and Gain Efficiency", src: img("taep177", "efficiency-table.png"), wide: true },
          { type: "figure", title: "Radiation Patterns (3D, set 1)", src: img("taep177", "radiation-3d-1.png") },
          { type: "figure", title: "Radiation Patterns (2D, set 1)", src: img("taep177", "radiation-2d-1.png") },
          { type: "figure", title: "Radiation Patterns (3D, set 2)", src: img("taep177", "radiation-3d-2.png") },
          { type: "figure", title: "Radiation Patterns (2D, set 2)", src: img("taep177", "radiation-2d-2.png") },
        ],
      },
      { heading: "Dimension (unit: mm)", blocks: [{ type: "figure", src: img("taep177", "dimension.png"), wide: true }] },
    ],
  },

  taep134: {
    description:
      "The TAEP134 antenna is an omni-directional FPCB antenna for any 4G/5G device. It covers the entire 4G/5G bands from 617 MHz to 5 GHz plus the GNSS L1 band, and works particularly well with 4G/5G modules including the Quectel RM520N (Ant 3 port).",
    chips: [
      { kind: "eff", text: "93% Efficiency" },
      { kind: "freq", text: "617–5925 MHz" },
      { kind: "size", text: "136.4 × 26.4 × 0.5 mm" },
    ],
    left: [
      {
        title: "Introduction",
        text: [
          "The TAEP134 antenna is an omni-directional FPCB antenna for any 4G/5G bands from 617 MHz to 5 GHz plus GNSS L1 band. This product particularly works fine with the 4G/5G module including Quectel RM520N (Ant 3 port).",
        ],
      },
      {
        title: "Application",
        text: ["Any wireless device that requires a high efficiency antenna covering entire 4G/5G Sub 6 and GNSS L1 frequency bands. Example uses:"],
        tags: FPCB_APP_TAGS,
      },
    ],
    right: [
      {
        title: "Features and Benefits",
        list: [
          "Ultra-Wideband FPCB Antenna Covering Entire 4G LTE / 5G Sub 6 and GNSS L1 bands",
          "Antenna Size: 136.4 × 26.4 × 0.5 mm (not including cable and connector)",
          WFL_CONNECTOR,
          "Operating Frequency Band 1: 617–960 MHz",
          "Operating Frequency Band 2: 1432–2690 MHz",
          "Operating Frequency Band 3: 3300–5925 MHz",
          "GNSS L1: 1575.42 MHz",
          "High efficiency: up to 93%",
          "Peak Gain: 2.7–4.5 dBi",
          "RoHS Compliant",
        ],
      },
    ],
    groups: [
      {
        heading: "Performance",
        blocks: [
          fpcbTable(
            [["Low Band", 4], ["L1", 1], ["Mid/High Band", 5], ["Ultra High Band", 4], ["LAA", 2]],
            ["617", "746", "824", "960", "1575", "1432", "1710", "2170", "2496", "2690", "3300", "3600", "4200", "5000", "5150", "5925"],
            ["31.0", "76.8", "93.0", "87.1", "67.7", "39.0", "54.9", "72.6", "76.4", "73.1", "71.6", "67.3", "68.4", "43.8", "42.1", "59.3"],
            ["-2.70", "1.70", "2.65", "3.39", "3.26", "0.76", "1.31", "3.05", "4.49", "4.35", "4.16", "3.45", "3.85", "1.55", "1.65", "3.04"],
          ),
          { type: "figure", title: "VSWR", src: img("taep134", "vswr.png") },
          { type: "figure", title: "Radiation Pattern", src: img("taep134", "radiation.png") },
        ],
      },
      { heading: "Dimension (unit: mm)", blocks: [{ type: "figure", src: img("taep134", "dimension.png"), wide: true }] },
    ],
  },

  taep132: {
    description:
      "The TAEP132 antenna is an omni-directional FPCB antenna for any 4G/5G device. It covers the frequency bands from 1452 MHz to 5 GHz, plus 1176 MHz for GNSS L5, and works particularly well with 4G/5G modules including the Quectel RM520N (Ant 1 port).",
    chips: [
      { kind: "eff", text: "82% Efficiency" },
      { kind: "freq", text: "1432–5925 MHz" },
      { kind: "size", text: "83.9 × 26.4 × 0.5 mm" },
    ],
    left: [
      {
        title: "Introduction",
        text: [
          "The TAEP132 antenna is an omni-directional FPCB antenna for any 4G/5G devices. TAEP132 can cover entire frequency bands from 1452 MHz to 5 GHz, and 1176 MHz for GNSS L5. This product particularly works fine with the 4G/5G module including Quectel RM520N (Ant 1 port).",
        ],
      },
      {
        title: "Application",
        text: ["Any wireless device that requires a high efficiency antenna covering entire 4G LTE/5G Sub6 and GNSS L5 frequency bands. Example uses:"],
        tags: FPCB_APP_TAGS,
      },
    ],
    right: [
      {
        title: "Features and Benefits",
        list: [
          "Ultra-Wideband FPCB Antenna Covering Entire 4G LTE / 5G Sub 6 Mid & High Bands plus GNSS L5 band",
          "Antenna Size: 83.9 × 26.4 × 0.5 mm (not including cable and connector)",
          WFL_CONNECTOR,
          "Operating Frequency Band 1: 1432–2690 MHz",
          "Operating Frequency Band 2: 3300–5925 MHz",
          "GNSS L5: 1176.45 MHz",
          "High efficiency: up to 82%",
          "Peak Gain: 1.1–2.5 dBi",
          "RoHS Compliant",
        ],
      },
    ],
    groups: [
      {
        heading: "Performance",
        blocks: [
          fpcbTable(
            [["L5", 1], ["Mid/High Band", 6], ["Ultra High Band", 5], ["LAA", 2]],
            ["1176", "1432", "1710", "1920", "2170", "2496", "2690", "3300", "3600", "4200", "4400", "5000", "5150", "5925"],
            ["77.6", "43.1", "66.5", "72.1", "60.9", "55.9", "60.4", "75.0", "69.1", "56.7", "51.0", "43.7", "41.1", "49.3"],
            ["2.71", "-1.12", "2.16", "1.88", "0.55", "0.76", "1.37", "2.07", "2.53", "3.27", "2.19", "1.22", "1.01", "0.98"],
          ),
          { type: "figure", title: "VSWR", src: img("taep132", "vswr.png") },
          { type: "figure", title: "Radiation Pattern", src: img("taep132", "radiation.png") },
        ],
      },
      { heading: "Dimension (unit: mm)", blocks: [{ type: "figure", src: img("taep132", "dimension.png"), wide: true }] },
    ],
  },

  taep131: {
    description:
      "The TAEP131 antenna is an omni-directional FPCB antenna for any 4G/5G device. It covers the entire frequency bands from 600 MHz to 6 GHz and works particularly well with 4G/5G modules including the Quectel RM520N (Ant 0 port).",
    chips: [
      { kind: "eff", text: "92% Efficiency" },
      { kind: "freq", text: "617–5000 MHz" },
      { kind: "size", text: "136.4 × 26.4 × 0.5 mm" },
    ],
    left: [
      {
        title: "Introduction",
        text: [
          "The TAEP131 antenna is an omni-directional FPCB antenna for any 4G/5G devices. TAEP131 can cover entire frequency bands from 600 MHz to 6 GHz. This product particularly works fine with the 4G/5G module including Quectel RM520N (Ant 0 port).",
        ],
      },
      {
        title: "Application",
        text: ["Any wireless device that requires a high efficiency antenna covering entire 4G LTE and 5G Sub6 frequency bands. Example uses:"],
        tags: FPCB_APP_TAGS,
      },
    ],
    right: [
      {
        title: "Features and Benefits",
        list: [
          "Ultra-Wideband FPCB Antenna Covering ALL 4G LTE and 5G Sub 6 Bands",
          "Antenna Size: 136.4 × 26.4 × 0.5 mm (not including cable and connector)",
          "Connector: WFL (Male) with a 150 mm coaxial cable",
          "Operating Frequency Band 1: 617–960 MHz",
          "Operating Frequency Band 2: 1432–2690 MHz",
          "Operating Frequency Band 3: 3300–5000 MHz",
          "High efficiency: up to 92%",
          "Peak Gain: -3.0 to 4.8 dBi",
          "RoHS Compliant",
        ],
      },
    ],
    groups: [
      {
        heading: "Performance",
        blocks: [
          fpcbTable(
            [["Low Band", 4], ["Mid/High Band", 6], ["Ultra High Band", 5]],
            ["617", "746", "824", "960", "1432", "1710", "1920", "2170", "2360", "2690", "3300", "3600", "4200", "4400", "5000"],
            ["30.6", "80.5", "92.0", "83.0", "34.9", "50.7", "54.4", "71.6", "60.2", "77.2", "67.5", "58.7", "60.3", "53.8", "41.7"],
            ["-3.03", "1.62", "3.01", "3.57", "-0.56", "1.30", "2.27", "3.04", "2.53", "4.81", "4.66", "4.09", "3.69", "3.79", "3.00"],
          ),
          { type: "figure", title: "VSWR", src: img("taep131", "vswr.png") },
          { type: "figure", title: "Radiation Pattern", src: img("taep131", "radiation.png") },
        ],
      },
      { heading: "Dimension (unit: mm)", blocks: [{ type: "figure", src: img("taep131", "dimension.png"), wide: true }] },
    ],
  },

  taep133: {
    description:
      "The TAEP133 antenna is an omni-directional FPCB antenna for any 4G/5G device. It covers the frequency bands from 1452 MHz to 5 GHz and works particularly well with 4G/5G modules including the Quectel RM520N (Ant 2 port).",
    chips: [
      { kind: "eff", text: "80% Efficiency" },
      { kind: "freq", text: "1452–5000 MHz" },
      { kind: "size", text: "62.4 × 26.4 × 0.5 mm" },
    ],
    left: [
      {
        title: "Introduction",
        text: [
          "The TAEP133 antenna is an omni-directional FPCB antenna for any 4G/5G devices. TAEP133 can cover entire frequency bands from 1452 MHz to 5 GHz. This product particularly works fine with the 4G/5G module including Quectel RM520N (Ant 2 port).",
        ],
      },
      {
        title: "Application",
        text: ["Any wireless device that requires a high efficiency antenna covering entire 4G LTE and 5G Sub6 frequency bands. Example uses:"],
        tags: FPCB_APP_TAGS,
      },
    ],
    right: [
      {
        title: "Features and Benefits",
        list: [
          "Ultra-Wideband FPCB Antenna Covering Entire 4G LTE / 5G Sub 6 Mid & High Bands",
          "Antenna Size: 62.4 × 26.4 × 0.5 mm (not including cable and connector)",
          WFL_CONNECTOR,
          "Operating Frequency Band 1: 1452–2690 MHz",
          "Operating Frequency Band 2: 3300–5000 MHz",
          "High efficiency: up to 80%",
          "Peak Gain: -1.2 to 3.5 dBi",
          "RoHS Compliant",
        ],
      },
    ],
    groups: [
      {
        heading: "Performance",
        blocks: [
          fpcbTable(
            [["Mid/High Band", 6], ["Ultra High Band", 5]],
            ["1432", "1710", "1920", "2170", "2305", "2690", "3300", "3600", "4200", "4400", "5000"],
            ["42.6", "67.9", "78.1", "72.5", "59.3", "67.6", "71.9", "58.1", "46.9", "43.2", "40.4"],
            ["-0.84", "1.66", "2.19", "2.01", "1.16", "2.10", "3.43", "2.77", "1.22", "1.07", "-1.23"],
          ),
          { type: "figure", title: "VSWR", src: img("taep133", "vswr.png") },
          { type: "figure", title: "Radiation Pattern", src: img("taep133", "radiation.png") },
        ],
      },
      { heading: "Dimension (unit: mm)", blocks: [{ type: "figure", src: img("taep133", "dimension.png"), wide: true }] },
    ],
  },

  taep135: {
    description:
      "The TAEP135 antenna is a high-performance FPCB antenna optimized for Wi-Fi 6E/7 applications. It covers the Wi-Fi 6E/7 bands at 2400 / 5200 / 7100 MHz.",
    chips: [
      { kind: "eff", text: "85% Efficiency" },
      { kind: "freq", text: "2400–7125 MHz" },
      { kind: "size", text: "35.4 × 13.4 × 0.5 mm" },
    ],
    left: [
      {
        title: "Introduction",
        text: [
          "The TAEP135 antenna is a high-performance FPCB antenna optimized for Wi-Fi 6E/7 applications. TAEP135 can cover Wi-Fi 6E/7 bands at 2400 / 5200 / 7100 MHz.",
        ],
      },
      {
        title: "Application",
        text: ["Any wireless device that requires a high efficiency antenna covering entire Wi-Fi 6E/7 frequency bands. Example uses:"],
        tags: FPCB_APP_TAGS,
      },
    ],
    right: [
      {
        title: "Features and Benefits",
        list: [
          "Ultra-Wideband FPCB Antenna Covering Entire Wi-Fi 6E/7 bands",
          "Antenna Size: 35.4 × 13.4 × 0.5 mm (not including cable and connector)",
          "Connector: UFL (Male) connector with a 150 mm coaxial cable",
          "Operating Frequency Band 1: 2400–2500 MHz",
          "Operating Frequency Band 2: 5150–7125 MHz",
          "High efficiency: up to 85%",
          "Peak Gain: 1.0–3.5 dBi",
          "RoHS Compliant",
        ],
      },
    ],
    groups: [
      {
        heading: "Performance",
        blocks: [
          fpcbTable(
            [["2.4 GHz Band", 3], ["5 GHz Band", 7]],
            ["2401", "2442", "2478", "5150", "5220", "5500", "5750", "5805", "5825", "5855"],
            ["79.3", "84.6", "85.1", "63.0", "56.9", "72.6", "69.5", "68.6", "75.9", "85.5"],
            ["2.34", "2.86", "2.71", "1.50", "1.09", "2.39", "2.41", "2.29", "2.90", "3.50"],
          ),
          { type: "figure", title: "VSWR", src: img("taep135", "vswr.png") },
          { type: "figure", title: "Radiation Pattern", src: img("taep135", "radiation.png") },
        ],
      },
      { heading: "Dimension (unit: mm)", blocks: [{ type: "figure", src: img("taep135", "dimension.png"), wide: true }] },
    ],
  },

  taep184: {
    description:
      "TAEP184 is a small form factor 4G cellular antenna, typically suitable for applications with small form factor IoT devices. It comes with a micro coaxial cable and MHF 1 connector.",
    chips: [
      { kind: "eff", text: "90% Efficiency" },
      { kind: "freq", text: "824–960 / 1710–2690 MHz" },
      { kind: "size", text: "40 × 20 × 0.25 mm" },
    ],
    left: [
      {
        title: "Introduction",
        text: [
          "TAEP184 is a small form factor 4G cellular antenna, typically suitable for applications with small form factor IoT devices. It comes with micro coaxial cable and MHF 1 connector.",
        ],
      },
      {
        title: "Application",
        text: [
          "Telematics, vehicle tracking systems, infotainment, data loggers, asset trackers, smart meters, etc.",
          "Note: Easy configurations on cable and connector are available.",
        ],
      },
    ],
    right: [
      {
        title: "Mechanics and Electrical Specification",
        list: [
          "Frequency Range: 824–960 / 1710–2690 MHz",
          "Impedance: 50 Ω",
          "VSWR: 690–960 MHz ≤ 6.5, 1710–2690 MHz ≤ 5",
          "Gain: 4.35 dBi (max)",
          "Dimensions: 40 × 20 × 0.25 mm",
          "Connector: IPEX-I",
          "Radome Material: FPC",
          "Working Temperature: -40 °C to +85 °C",
        ],
      },
    ],
    groups: [
      {
        heading: "Performance",
        blocks: [
          { type: "figure", title: "VSWR", src: img("taep184", "vswr.png") },
          { type: "figure", title: "Peak and Gain Efficiency", src: img("taep184", "efficiency-table.png"), wide: true },
          { type: "figure", title: "Radiation Patterns (3D)", src: img("taep184", "radiation-3d.png") },
          { type: "figure", title: "Radiation Patterns (2D)", src: img("taep184", "radiation-2d.png") },
        ],
      },
      { heading: "Dimension (unit: mm)", blocks: [{ type: "figure", src: img("taep184", "dimension.png"), wide: true }] },
    ],
  },

  tamp156: {
    description:
      "The SkyMirr TAMP156 Wi-Fi directional antenna delivers high-gain, high-efficiency performance across the 2.4 GHz, 5 GHz, and 6 GHz Wi-Fi bands. With efficiency up to 77% and peak gain ranging from 6.6 to 10.0 dBi, it provides focused, reliable signal delivery where standard antennas fall short. Its directional beam improves throughput, reduces interference, and extends usable range, which suits environments that demand stable and targeted RF performance.",
    chips: [
      { kind: "gain", text: "10 dBi High Gain" },
      { kind: "freq", text: "2400–7125 MHz" },
      { kind: "size", text: "75.52 × 133.58 × 25.26 mm" },
    ],
    left: [
      {
        title: "Introduction",
        text: [
          "The SkyMirr TAMP156 Wi-Fi directional antenna delivers high-gain, high-efficiency performance across the 2.4 GHz, 5 GHz, and 6 GHz Wi-Fi bands. With efficiency up to 77% and peak gain ranging from 6.6 to 10.0 dBi, it provides focused, reliable signal delivery where standard antennas fall short. Its directional beam improves throughput, reduces interference, and extends usable range, which suits environments that demand stable and targeted RF performance.",
        ],
      },
      {
        title: "Applications",
        list: [
          "Indoor coverage enhancement: for offices, homes, and commercial buildings",
          "Warehouse and industrial connectivity: delivering focused RF along aisles or long corridors",
          "Point-to-point Wi-Fi links: requiring directional precision",
          "Wi-Fi 6 / Wi-Fi 7 access points: needing stronger, targeted performance",
          "CPEs, repeaters, and IoT gateways: that benefit from high-gain, triple-band support",
        ],
      },
    ],
    right: [
      {
        title: "Features and Benefits",
        list: [
          "External directional antenna with hinge, covering Wi-Fi 2.4 / 5.2 / 6 GHz triple bands",
          "Operating Frequency Band 1: 2400–2500 MHz",
          "Operating Frequency Band 2: 5100–5900 MHz",
          "Operating Frequency Band 3: 5925–7125 MHz",
          "High Efficiency: up to 77%",
          "Peak Gain: 6.6–10.0 dBi",
          "Connector: SMA (Male)",
        ],
      },
    ],
    groups: [
      {
        heading: "Performance",
        blocks: [
          {
            type: "table",
            title: "Electrical",
            wide: true,
            rows: [
              ["Frequency Range", "2400–2500 MHz", "5150–5850 MHz", "5945–7125 MHz"],
              ["Gain (Peak)", "7.0 dBi", "10.0 dBi", "9.6 dBi"],
              ["VSWR", "≤2.0", "≤2.0", "≤2.5"],
              ["Efficiency (Peak)", "90%", "93%", "88%"],
              ["Input Impedance", "50 Ω"],
              ["Antenna Type", "Directional"],
              ["Power Rating", "10 W"],
            ],
          },
          {
            type: "table",
            title: "Mechanical (Antenna)",
            wide: true,
            rows: [
              ["Radome Color", "Black"],
              ["Dimensions (W × H × D)", "75.52 × 133.58 × 25.26 mm"],
              ["Connector", "SMA-Male"],
              ["Weight", "60 g"],
            ],
          },
          { type: "figure", title: "VSWR", src: img("tamp156", "vswr.png") },
          { type: "figure", title: "Peak Gain / Efficiency", src: img("tamp156", "gain-efficiency-chart.png") },
          {
            type: "table",
            wide: true,
            head: ["Frequency [MHz]", "2401", "2442", "2478", "5150", "5220", "5500", "5750", "5805", "5825", "5855", "5955", "6187", "6419", "6651", "6883", "7115"],
            rows: [
              ["Efficiency [%]", "89.5", "87.3", "90.3", "72.5", "76.8", "90.7", "94.2", "80.9", "80.6", "93.4", "88.7", "72.6", "73.0", "73.6", "73.8", "69.8"],
              ["Peak Gain [dBi]", "7.1", "6.7", "6.7", "8.8", "9.0", "9.8", "9.99", "9.1", "9.2", "10.0", "9.7", "8.6", "8.2", "8.1", "8.2", "8.3"],
            ],
          },
          { type: "figure", title: "Radiation Patterns", src: img("tamp156", "radiation.png") },
          { type: "figure", title: "Antenna Radiation Direction", src: img("tamp156", "radiation-direction.png") },
        ],
      },
      { heading: "Dimension (unit: mm)", blocks: [{ type: "figure", src: img("tamp156", "dimension.png"), wide: true }] },
    ],
  },

  tamp159: {
    description:
      "The TAMP159 is a high-performance omnidirectional Wi-Fi antenna designed to enhance Wi-Fi 6E and Wi-Fi 7 networks with broader coverage, improved signal quality, and dependable connectivity for client devices.",
    chips: [
      { kind: "eff", text: "95% Efficiency" },
      { kind: "freq", text: "2400–7125 MHz" },
      { kind: "size", text: "156.1 × Φ13 mm" },
    ],
    buyLinks: BUY_AMAZON_DIGIKEY,
    left: [
      {
        title: "Introduction",
        text: [
          "The TAMP159 is a high-performance omnidirectional Wi-Fi antenna designed to enhance Wi-Fi 6E and Wi-Fi 7 networks with broader coverage, improved signal quality, and dependable connectivity for client devices.",
        ],
      },
      { title: "Application", text: [WIFI_APP], tags: FPCB_APP_TAGS },
    ],
    right: [
      {
        title: "Features and Benefits",
        list: [
          "External Antenna with hinge, covering Wi-Fi 2.4 / 5 / 6 GHz triple bands",
          "Antenna Size: 156.1 × Φ13 mm",
          "Connector: SMA male (RP-SMA available upon request)",
          "Packaging: available in a pack of two",
          "Color: Black / White",
          "Operating Frequency Band 1: 2400–2500 MHz",
          "Operating Frequency Band 2: 5100–5900 MHz",
          "Operating Frequency Band 3: 5925–7125 MHz",
          "High Efficiency: up to 95%",
          "Peak Gain: 2.2–4.6 dBi",
          "Operating Temperature Range: -40 °C to +85 °C",
        ],
      },
    ],
    groups: [
      {
        heading: "Performance",
        blocks: [
          { type: "figure", title: "VSWR", src: img("tamp159", "vswr.png") },
          { type: "figure", title: "Radiation Patterns", src: img("tamp159", "radiation.png") },
          foldTable(
            [["2.4 GHz Band", 3], ["5 GHz Band", 4], ["6 GHz Band", 4]],
            ["2401", "2442", "2476", "5150", "5500", "5805", "5855", "5955", "6419", "6651", "7115"],
            ["79.0", "86.4", "86.6", "72.4", "88.4", "85.4", "73.4", "71.6", "66.9", "64.5", "63.7"],
            ["3.31", "3.50", "3.16", "3.41", "2.52", "3.73", "2.99", "3.04", "2.52", "2.95", "3.10"],
            ["86.3", "94.6", "93.9", "76.5", "81.1", "93.6", "86.7", "82.7", "74.3", "72.8", "73.7"],
            ["2.76", "2.62", "3.27", "4.12", "4.04", "4.63", "4.55", "4.05", "3.15", "3.61", "3.98"],
          ),
        ],
      },
      { heading: "Dimension (unit: mm)", blocks: [{ type: "figure", src: img("tamp159", "dimension.png"), wide: true }] },
    ],
  },

  tamp118: {
    description:
      "The TAMP118 is an omnidirectional Wi-Fi external antenna used for connecting wireless communication equipment such as a Wi-Fi 6E or Wi-Fi 7 router to client devices.",
    chips: [
      { kind: "eff", text: "90% Efficiency" },
      { kind: "freq", text: "2400–7125 MHz" },
      { kind: "size", text: "156.4 × Φ13 mm" },
    ],
    buyLinks: BUY_AMAZON_DIGIKEY,
    left: [
      {
        title: "Introduction",
        text: [
          "The TAMP118 is an omnidirectional Wi-Fi external antenna used for connecting wireless communication equipment such as a Wi-Fi 6E or Wi-Fi 7 router to client devices.",
        ],
      },
      { title: "Application", text: [WIFI_APP], tags: FPCB_APP_TAGS },
    ],
    right: [
      {
        title: "Features and Benefits",
        list: [
          "External Antenna with hinge, covering Wi-Fi 2.4 / 5 / 6 GHz triple bands",
          "Antenna Size: 156.4 × Φ13 mm",
          "Connector: SMA male",
          "Color: Black / White",
          "Operating Frequency Band 1: 2400–2500 MHz",
          "Operating Frequency Band 2: 5100–5900 MHz",
          "Operating Frequency Band 3: 5925–7125 MHz",
          "High Efficiency: up to 90%",
          "Peak Gain: 1.9–4.1 dBi",
        ],
      },
    ],
    groups: [
      {
        heading: "Performance",
        blocks: [
          { type: "figure", title: "VSWR", src: img("tamp118", "vswr.png") },
          { type: "figure", title: "Radiation Patterns", src: img("tamp118", "radiation.png") },
          foldTable(
            [["2.4 GHz Band", 3], ["5 GHz Band", 4], ["6 GHz Band", 4]],
            ["2401", "2442", "2478", "5150", "5500", "5805", "5855", "5955", "6419", "6651", "7115"],
            ["68.2", "72.7", "74.3", "63.0", "66.8", "73.9", "77.2", "75.3", "63.9", "64.2", "50.5"],
            ["2.70", "3.05", "3.26", "1.88", "3.15", "2.35", "2.70", "2.52", "2.99", "3.40", "2.15"],
            ["78.8", "88.2", "85.0", "67.2", "81.5", "85.4", "89.5", "86.1", "71.8", "71.2", "57.5"],
            ["2.93", "3.26", "3.11", "2.31", "3.20", "3.91", "3.81", "3.19", "3.57", "4.12", "3.03"],
          ),
        ],
      },
      { heading: "Dimension (unit: mm)", blocks: [{ type: "figure", src: img("tamp118", "dimension.png"), wide: true }] },
    ],
  },

  taep121: {
    description:
      "The TAEP121 is an omnidirectional triple band antenna used to connect wireless communication devices such as laptop computers, printers, and cameras to a Wi-Fi 6E router.",
    chips: [
      { kind: "eff", text: "85% Efficiency" },
      { kind: "freq", text: "2400–7125 MHz" },
      { kind: "size", text: "35.3 × 9 mm (FPC)" },
    ],
    buyLinks: BUY_AMAZON_DIGIKEY,
    left: [
      {
        title: "Introduction",
        text: [
          "The TAEP121 is an omnidirectional Wi-Fi triple band antenna used to connect wireless communication devices such as laptop computers, printers, and cameras to a Wi-Fi 6E router.",
        ],
      },
      {
        title: "Application",
        text: ["Any wireless device that requires an embedded (internal) antenna covering Wi-Fi 6E frequency bands. Example uses:"],
        tags: FPCB_APP_TAGS,
      },
    ],
    right: [
      {
        title: "Features and Benefits",
        list: [
          "Embedded Antenna Covering Wi-Fi 2.4 / 5 / 6 GHz Triple Bands",
          "Antenna Size: 35.3 × 9 mm (FPC)",
          "Connector: MHF1 (or MHF4) plug",
          "Coaxial Cable: Φ1.13 × 100 mm (length is customizable)",
          "Operating Frequency Band 1: 2400–2500 MHz",
          "Operating Frequency Band 2: 5100–7125 MHz",
          "High Efficiency: up to 85%",
          "Peak Gain: 1.5–3.8 dBi",
          "RoHS Compliant",
        ],
      },
    ],
    groups: [
      {
        heading: "Performance",
        blocks: [
          { type: "figure", title: "VSWR", src: img("taep121", "vswr.png") },
          { type: "figure", title: "Radiation Patterns", src: img("taep121", "radiation.png") },
          fpcbTable(
            [["2.4 GHz Band", 3], ["5 GHz Band", 7]],
            ["2401", "2442", "2478", "5150", "5220", "5500", "5750", "5805", "5825", "5855"],
            ["78.0", "85.0", "81.5", "55.6", "56.9", "71.0", "80.2", "70.5", "71.2", "78.2"],
            ["1.51", "1.80", "1.60", "1.69", "1.39", "3.38", "3.77", "3.29", "3.27", "3.66"],
          ),
        ],
      },
      { heading: "Dimension (unit: mm)", blocks: [{ type: "figure", src: img("taep121", "dimension.png"), wide: true }] },
    ],
  },

  tamp176: {
    description:
      "The TAMP176 is a compact, omni-directional Wi-Fi external antenna designed for space-constrained wireless communication equipment. While offering a significantly smaller form factor, it reliably connects dual-band (2.4 GHz and 5 GHz) Wi-Fi routers, access points, and client devices without compromising performance.",
    chips: [
      { kind: "eff", text: "92% Efficiency" },
      { kind: "freq", text: "2400–5900 MHz" },
      { kind: "size", text: "85.2 × Φ9.35 mm" },
    ],
    buyUrl: BUY_URL,
    left: [
      {
        title: "Introduction",
        text: [
          "The TAMP176 is a compact, omni-directional Wi-Fi external antenna designed for space-constrained wireless communication equipment. While offering a significantly smaller form factor, it reliably connects dual-band (2.4 GHz and 5 GHz) Wi-Fi routers, access points, and client devices without compromising performance.",
        ],
      },
      {
        title: "Application",
        text: ["Any compact or portable wireless device that requires a high-performance antenna covering 2.4 GHz and 5 GHz Wi-Fi frequency bands. Use cases:"],
        tags: ["Mini Routers", "Compact Gateways", "Mobile CPEs", "Smart Home/IoT Devices", "Automotive Infotainment Systems", "Industrial Wireless Terminals"],
      },
    ],
    right: [
      {
        title: "Features and Benefits",
        list: [
          "External Antenna with hinge, covering Wi-Fi 2.4 / 5 GHz dual bands",
          "Connector Type: RP-SMA(M) and SMA(M)",
          "Color: Black",
          "Operating Frequency Band 1: 2400–2500 MHz",
          "Operating Frequency Band 2: 5100–5900 MHz",
          "Efficiency: up to 92%",
          "Peak Gain: 1.5–4.6 dBi",
          "Operating Temperature Range: -40 °C to +85 °C",
        ],
      },
    ],
    groups: [
      {
        heading: "Performance",
        blocks: [
          { type: "figure", title: "Peak Gain", src: img("tamp176", "peak-gain-chart.png") },
          { type: "figure", title: "Efficiency", src: img("tamp176", "efficiency-chart.png") },
          foldTable(
            [["2.4 GHz Band", 3], ["5 GHz Band", 7]],
            ["2401", "2442", "2478", "5150", "5220", "5500", "5750", "5805", "5825", "5855"],
            ["83.5", "73.7", "72.9", "76.8", "80.9", "88.7", "85.9", "80.4", "88.0", "80.9"],
            ["2.83", "2.52", "2.27", "2.97", "3.46", "4.18", "4.46", "4.25", "4.26", "4.07"],
            ["89.7", "80.1", "76.7", "77.5", "79.2", "88.3", "89.6", "85.2", "89.0", "91.9"],
            ["2.13", "1.60", "1.46", "3.42", "3.88", "3.96", "4.59", "4.26", "4.34", "4.19"],
          ),
          { type: "figure", title: "Radiation Pattern", src: img("tamp176", "radiation.png"), wide: true },
        ],
      },
      { heading: "Dimension (unit: mm)", blocks: [{ type: "figure", src: img("tamp176", "dimension.png"), wide: true }] },
    ],
  },

  taep169: {
    description:
      "TAEP169 is a compact, high-efficiency dual-band SMD ceramic antenna engineered for modern wireless connectivity. Using a multi-layer internal structure, it supports operation across both 2.4 GHz and 5 GHz frequency bands, enabling reliable performance for Wi-Fi, Bluetooth, and other short-range wireless protocols.",
    chips: [
      { kind: "size", text: "Ultra-Compact Size" },
      { kind: "freq", text: "2400–5850 MHz" },
      { kind: "size", text: "3.2 × 1.6 × 1.2 mm" },
    ],
    buyUrl: BUY_URL,
    left: [
      {
        title: "Introduction",
        text: [
          "TAEP169 is a compact, high-efficiency dual-band SMD ceramic antenna engineered for modern wireless connectivity. Using a multi-layer internal structure, it supports operation across both 2.4 GHz and 5 GHz frequency bands, enabling reliable performance for Wi-Fi, Bluetooth, and other short-range wireless protocols.",
        ],
      },
      {
        title: "Applications",
        text: ["This antenna is intended for short-range wireless communication systems operating in the 2.4 GHz and 5 GHz bands. Typical applications include:"],
        list: [
          "Wi-Fi (2.4 GHz / 5 GHz) devices and routers",
          "Bluetooth-enabled products and wearables",
          "Smart home and IoT devices",
          "Wireless modules in consumer electronics (tablets, laptops, cameras)",
        ],
      },
    ],
    right: [
      {
        title: "Key Specifications",
        list: [
          "Antenna Size: 3.2 ± 0.2 × 1.6 ± 0.2 × 1.2 ± 0.3 mm",
          "Frequency Range: 2400–2500 MHz and 5150–5850 MHz",
          "Peak Gain: 2.23 dBi at 2450 MHz and 4.05 dBi at 5500 MHz",
          "Bandwidth: 100 MHz for the lower band and 800 MHz for the higher band",
          "Polarization: Linear",
          "Azimuth Beam Width: Omnidirectional",
          "Return Loss: -7 dB (max)",
          "Impedance: 50 Ω",
        ],
      },
      {
        title: "Operating Conditions",
        list: [
          "Operating temperature range: -40 °C to +85 °C",
          "Storage temperature range: -40 °C to +85 °C",
          "Vibration Resistance: applied vibration of 10–55 Hz (1.5 mm amplitude) for 2 hours each in X, Y, and Z directions",
          "Storage Environment: less than 30 °C with humidity below 85%",
          "Moisture sensitivity level 1",
        ],
      },
      {
        title: "Soldering and Handling",
        list: [
          "Product can withstand 255 °C ± 10 °C for 5 seconds or an electric iron at 300 °C ± 10 °C for 3 seconds. Compatible with lead-free soldering processes, specifically Sn (tin) soldering at 255 °C.",
          "Usage Requirement: the product should be used within six months of receipt.",
        ],
      },
    ],
    groups: [
      {
        heading: "Performance",
        blocks: [
          { type: "figure", title: "EVB (Evaluation Board)", src: img("taep169", "evb.png") },
          { type: "figure", title: "Performance (VSWR and Efficiency)", src: img("taep169", "performance.png") },
          {
            type: "table",
            title: "Gain and Efficiency",
            wide: true,
            bands: [{ label: "2.4 GHz", span: 3 }, { label: "5 GHz", span: 7 }],
            head: ["Frequency [MHz]", "2401", "2442", "2478", "5150", "5220", "5500", "5750", "5805", "5825", "5855"],
            rows: [
              ["Efficiency [%]", "34.8", "47.7", "37.4", "68.2", "70.1", "58.7", "53.2", "57.2", "65.5", "64.5"],
              ["Peak Gain [dBi]", "-1.49", "-0.31", "-1.43", "2.63", "2.41", "2.16", "1.77", "2.48", "2.96", "2.56"],
            ],
          },
          { type: "figure", title: "Radiation Patterns", src: img("taep169", "radiation.png") },
          { type: "figure", title: "Characteristic Curve", src: img("taep169", "characteristic-curve.png") },
        ],
      },
      {
        heading: "Dimension (unit: mm)",
        blocks: [
          { type: "figure", src: img("taep169", "dimension.png"), wide: true },
          {
            type: "table",
            wide: true,
            head: ["Symbol", "L", "W", "T", "a", "b", "c"],
            rows: [["Dimension", "3.2 ± 0.2", "1.6 ± 0.2", "1.2 ± 0.3", "0.5 ± 0.1", "0.7 ± 0.1", "1.0 ± 0.1"]],
          },
        ],
      },
    ],
  },

  tamp141: {
    description:
      "The TAMP141 is an ultra wideband omnidirectional external antenna designed with high performance, covering the entire 4G LTE and 5G Sub6 frequency bands. It can be used for connecting wireless communication devices such as Consumer Premise Equipment (CPE) or various IoT applications, sensors, trackers, and smart devices to the mobile network.",
    chips: [
      { kind: "eff", text: "82% Efficiency" },
      { kind: "freq", text: "617–5925 MHz" },
      { kind: "size", text: "196.32 × 36 × Φ13 mm" },
    ],
    buyLinks: [
      { label: "Walmart", url: "https://www.walmart.com/" },
      { label: "DigiKey", url: "https://www.digikey.com/" },
    ],
    left: [
      {
        title: "Introduction",
        text: [
          "The TAMP141 is an ultra wideband omnidirectional external antenna designed with high performance, covering the entire 4G LTE and 5G Sub6 frequency bands. It can be used for connecting wireless communication devices such as Consumer Premise Equipment (CPE) or various IoT applications, sensors, trackers, and smart devices to the mobile network.",
        ],
      },
      {
        title: "Application",
        text: [
          "Any wireless device using 4G and/or 5G Sub6 frequency bands operating in any region throughout the world.",
          "The TAMP141 performs especially well in the lower 600 MHz bands where newer Sub6 5G bands operate.",
          "Example uses: Wireless Routers, Gateways, CPEs, Automotive Devices, IoT Devices, etc.",
        ],
      },
    ],
    right: [
      {
        title: "Features and Benefits",
        list: [
          "External Antenna with Hinge Covering All 4G/5G Sub6 Bands with high Performance",
          "Antenna Size: 196.32 × 36 × Φ13 mm",
          "Connector: SMA (male)",
          "Color: Black / White",
          "Operating Frequency Band 1: 617–960 MHz",
          "Operating Frequency Band 2: 1447–2690 MHz",
          "Operating Frequency Band 3: 3300–5925 MHz",
          "High Efficiency: up to 82%",
          "Peak Gain: 2.1–6.4 dBi",
          "RoHS Compliant",
        ],
      },
    ],
    groups: [
      {
        heading: "Performance",
        blocks: [
          {
            type: "table",
            title: "Gain and Efficiency",
            wide: true,
            head: ["Frequency [MHz]", "617", "960", "1447", "2170", "2305", "2690", "3300", "4200", "5000", "5925"],
            rows: [
              ["Efficiency [%]", "57.7", "77.2", "72.6", "82.2", "70.6", "77.5", "75.3", "76.3", "77.5", "66.0"],
              ["Peak Gain [dBi]", "2.12", "3.23", "2.90", "2.24", "1.82", "2.07", "6.41", "2.99", "3.76", "4.16"],
              ["Impedance", "50 Ω"],
              ["Polarization", "Vertical"],
              ["Directivity", "Omnidirectional"],
            ],
          },
          { type: "figure", title: "VSWR", src: img("tamp141", "vswr.png") },
          { type: "figure", title: "Radiation Pattern", src: img("tamp141", "radiation.png") },
        ],
      },
      { heading: "Dimension (unit: mm)", blocks: [{ type: "figure", src: img("tamp141", "dimension.png"), wide: true }] },
    ],
  },

  tamp114: {
    description:
      "The TAMP114 is a compact, high-efficiency 4G/5G cellular antenna engineered for reliable MIMO performance in mobile and fixed applications.",
    chips: [
      { kind: "eff", text: "80% Efficiency" },
      { kind: "freq", text: "824–2690 MHz" },
      { kind: "size", text: "125.5 × Φ13 mm" },
    ],
    buyUrl: BUY_URL,
    left: [
      {
        title: "Introduction",
        text: [
          "The TAMP114 is a compact, high-efficiency 4G/5G cellular antenna engineered for reliable MIMO performance in mobile and fixed applications.",
          "Its low-profile design and optimized isolation deliver strong signal integrity in space-constrained and high-interference environments.",
        ],
      },
      {
        title: "Application",
        text: [
          "Ideal for fleet telematics, industrial IoT gateways, enterprise routers, and cellular failover applications. The TAMP114 supports mobile and fixed installations requiring dependable connectivity, stable throughput, and consistent performance across challenging RF environments.",
        ],
      },
    ],
    right: [
      {
        title: "Features and Benefits",
        list: [
          "External Antenna without Hinge Covering Key 4G/5G Sub6 Bands",
          "Antenna Size: 125.5 × Φ13 mm",
          "Connector: SMA (male)",
          "Color: Black / White",
          "Operating Frequency Band 1: 824–960 MHz",
          "Operating Frequency Band 2: 1710–2170 MHz",
          "Operating Frequency Band 3: 2500–2690 MHz",
          "High Efficiency: up to 80%",
          "Peak Gain: 1.1–3.8 dBi",
          "Impedance / Connector: 50 Ω / SMA male",
          "RoHS Compliant",
        ],
      },
    ],
    groups: [
      {
        heading: "Performance",
        blocks: [
          fpcbTable(
            [["Low Band", 4], ["Mid/High Band", 6]],
            ["824", "880", "894", "960", "1710", "1880", "1920", "2170", "2500", "2690"],
            ["64.4", "66.5", "75.7", "77.9", "46.4", "64.0", "56.9", "41.3", "53.3", "61.6"],
            ["1.11", "1.51", "2.21", "2.09", "2.65", "3.67", "3.06", "1.30", "1.97", "2.76"],
          ),
          { type: "figure", title: "VSWR", src: img("tamp114", "vswr.png") },
          { type: "figure", title: "Radiation Pattern", src: img("tamp114", "radiation.png") },
        ],
      },
      { heading: "Dimension (unit: mm)", blocks: [{ type: "figure", src: img("tamp114", "dimension.png"), wide: true }] },
    ],
  },
};