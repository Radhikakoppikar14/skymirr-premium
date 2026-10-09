// Rich antenna detail content (Introduction / Features / Performance / VSWR / Radiation / Dimension),
// transcribed from the live skymirr.com product pages. Keyed by normalized product id/name.
export interface AntennaDetail {
  hero?: string;
  frequencyRange?: string;
  dimensions?: string;
  applicationList?: boolean;
  intro?: string[];
  application?: string[];
  conditions?: string[];
  features?: string[];
  featuresTitle?: string;
  tables?: { title?: string; rows: string[][]; kv?: boolean }[];
  images?: { title: string; src: string; wide?: boolean }[];
}

const img = (id: string, n: string) => `/images/antennas/detail/${id}-${n}.png`;
const COMMON_CONDITIONS = [
  "Operating temperature range: -40°C to +85°C",
  "Vibration Resistance: Applied vibration of 10-55Hz (1.5CM amplitude) for 2 hours",
  "Humidity: 5-95%",
];
const kv = (rows: [string, string][]) => ({ kv: true, rows });

export const ANTENNA_DETAILS: Record<string, AntennaDetail> = {
  tamp141: {
    intro: ["The TAMP141 is an ultra wideband omnidirectional external antenna with high performance, covering the entire LTE and 5G Sub6 frequency bands. It can be used for connecting wireless communication devices such as Consumer Premise Equipment (CPE) or various IoT applications, sensors, trackers, and smart devices to the mobile network."],
    application: ["Any wireless device using 4G and/or 5G Sub6 frequency bands operating in any region throughout the world.", "The TAMP141 performs especially well in the lower 600 MHz bands where newer sub6 5G bands operate.", "Example Uses - Wireless Routers, Gateways, CPEs, Automotive devices, IoT devices, etc."],
    features: ["External Antenna with Hinge Covering All 4G/5G Sub6 Bands with high Performance", "Antenna Size: 196.32 mm x 36 mm x Φ13 mm", "Connector: SMA (male)", "Color: Black / White", "Operating Frequency Bands: 617-960MHz, 1447-2690MHz, 3300-5925MHz", "High Efficiency up to 82%", "RoHS Compliance"],
    tables: [
      { title: "Gain and Efficiency", rows: [["Frequency [MHz]","617","960","1447","2170","2305","2690","3300","4200","5000","5925"],["Efficiency [%]","57.7","77.2","72.6","82.2","70.6","77.5","75.3","76.3","77.5","66.0"],["Peak Gain [dBi]","2.12","3.23","2.90","2.24","1.82","2.07","6.41","2.99","3.76","4.16"]] },
      kv([["Impedance","50 Ω"],["Polarization","Vertical"],["Directivity","Omnidirectional"]]),
    ],
    images: [{ title: "VSWR", src: img("tamp141","vswr") }, { title: "Radiation Pattern", src: img("tamp141","radiation") }, { title: "Dimension (unit: mm)", src: img("tamp141","dimension"), wide: true }],
  },
  tamp114: {
    intro: ["The TAMP 114 is a compact high-efficiency 4G/5G cellular antenna engineered for reliable MIMO performance in mobile and fixed applications.", "Its low-profile design and optimized isolation deliver strong signal integrity in space-constrained and high-interference environments."],
    application: ["Ideal for fleet telematics, industrial IoT gateways, enterprise routers, and cellular failover applications. The TAMP114 supports mobile and fixed installations requiring dependable connectivity, stable throughput, and consistent performance across challenging RF environments."],
    features: ["External Antenna without Hinge Covering Key 4G/5G Sub6 Bands", "Antenna Size: 125.5 x Φ13mm", "Connector: SMA (male)", "Color: Black / White", "Operating Frequency Bands: 824-960MHz, 1710-2170MHz, 2500-2690MHz", "High Efficiency up to 80%", "50 ohm / SMA male connector", "RoHS compliance"],
    tables: [
      { title: "Gain and Efficiency", rows: [["Frequency [MHz]","824","860","894","960","1710","1880","1920","2170","2500","2690"],["Efficiency [%]","64.4","66.5","75.7","77.9","46.4","64.0","56.9","41.3","53.3","61.6"],["Peak Gain [dBi]","1.11","1.51","2.21","2.09","2.65","3.67","3.06","1.30","1.97","2.76"]] },
      kv([["Impedance","50Ω"],["Polarization","Vertical"],["Directivity","Omni Directional"]]),
    ],
    images: [{ title: "VSWR", src: img("tamp114","vswr") }, { title: "Radiation Pattern", src: img("tamp114","radiation") }, { title: "Dimension (unit: mm)", src: img("tamp114","dimension"), wide: true }],
  },
  tamp154: {
    intro: ["The TAMP154 is an advanced wireless communication component designed to transmit and receive multiple data streams simultaneously, significantly enhancing signal strength, data throughput, and connection reliability. With its directional gain capability, this type of antenna focuses radio frequency energy in specific directions, reducing interference and extending range significantly for FWA installations."],
    application: ["Any cellular wireless device that requires a high gain antenna covering 4G LTE and 5G Sub6 frequency bands. Example Uses - Routers, Gateways, CPEs, Automotive Devices, IoT Devices, etc"],
    features: ["High Gain Broadband Antenna Module Covering 4G LTE and 5G Sub 6 Bands", "Broadband 4×4 MIMO Panel Antenna", "Connector: SMA (Female), Optional Cable: 1m, 3m, 6m with SMA (Male) Connector", "Operating Frequency Bands: 600-6000MHz", "High Peak Gain up to 9.5 dBi"],
    tables: [
      { title: "Electrical", rows: [["","617-960 MHz","1710-2690 MHz","3300-5000 MHz","5150-5925 MHz"],["Gain (Peak)","4.8-8.7 dBi","6.1-9.4 dBi","6.3-9.7 dBi","6.3-8.7 dBi"],["VSWR","≤3.0","≤3.0","≤3.3","≤2.8"],["Isolation","≤20 dB","≤25 dB","≤25 dB","≤25 dB"],["Efficiency","60-90%","55-85%","50-80%","60-70%"]] },
      kv([["Input Impedance","50Ω"],["Antenna Type","Directional"],["Power Rating","20 W"]]),
      { title: "Physical", kv: true, rows: [["Radome Color","Pantone Blue"],["Dimensions (W × H × D) Antenna Only","450 × 330.0 × 63.15 mm"],["Connector","SMA-Female"],["Extension Cable Length","1m, 3m and 6m (SMA Male to SMA Male)"],["Weight","3.0 ± 0.1 kg"]] },
      { title: "Extension RF Cable Attenuation (per 1m)", rows: [["Frequency","617 MHz","960 MHz","1710 MHz","2690 MHz","3300 MHz","5000 MHz","5150 MHz","5925 MHz"],["Attenuation","-0.33","-0.42","-0.55","-0.71","-0.84","-1.03","-1.07","-1.1"]] },
    ],
    images: [{ title: "VSWR — ANT1", src: img("tamp154","vswr-ant1") }, { title: "VSWR — ANT2", src: img("tamp154","vswr-ant2") }, { title: "VSWR — ANT3", src: img("tamp154","vswr-ant3") }, { title: "VSWR — ANT4", src: img("tamp154","vswr-ant4") }, { title: "Peak Gain", src: img("tamp154","peak-gain") }, { title: "Radiation Direction", src: img("tamp154","direction") }, { title: "Radiation Pattern — ANT1", src: img("tamp154","rad-ant1") }, { title: "Radiation Pattern — ANT2", src: img("tamp154","rad-ant2") }, { title: "Radiation Pattern — ANT3", src: img("tamp154","rad-ant3") }, { title: "Radiation Pattern — ANT4", src: img("tamp154","rad-ant4") }, { title: "Dimension (unit: mm)", src: img("tamp154","dimension"), wide: true }],
  },
  taep162: {
    intro: ["The TAEP162 is a surface mount compact chip style antenna with high performance covering LTE bands from 600 to 2700 MHz. It can be directly mounted to the PCBA of any wireless communication"],
    application: ["TAEP162 provides a solution for applications where cost and space must be minimized. The antenna is mounted to the same PCB assembly that holds the radio and other system components. The PCB must include a ground filled region that will act as the counterpoise for the antenna. device for various applications."],
    features: ["Surface Mount Part", "Size: 45mm x 9 mm x 1.6mm", "Weight: 1.2 grams", "Color: Black", "Operating Frequency Bands: 617-960MHz, 1710-2690MHz", "Peak Gain: -2.3 – 3.6 dBi", "Impedance: 50 Ω", "Polarization: Vertical", "Directivity: Omnidirectional", "Operating Temperature Range: -40°C to +85°C"],
    tables: [{ title: "Gain and Efficiency", rows: [["Frequency [MHz]","617","960","1710","2155","2690"],["Efficiency [%]","35","66","38","90","53"],["Peak Gain [dBi]","-2.3","1.3","0.5","3.6","1.1"]] }],
    images: [{ title: "VSWR", src: img("taep162","vswr") }, { title: "Radiation Patterns", src: img("taep162","radiation"), wide: true }, { title: "Dimension (unit: mm)", src: img("taep162","dimension"), wide: true }, { title: "Taep162 Footprint", src: img("taep162","footprint"), wide: true }, { title: "Suggested Layout for Antenna Mounting", src: img("taep162","layout"), wide: true }, { title: "Measured Efficiency", src: img("taep162","measured-efficiency"), wide: true }],
  },
  tamp172: {
    intro: ["The TAMP172 is a wideband LTE 4G magnetic-mount antenna designed for stable, high-efficiency performance across 698–960 MHz and 1710–2700 MHz bands. With 3 dBi gain, 50Ω impedance, and a flexible 3-meter RG174 cable, it enables easy deployment and reliable signal reception in both fixed and mobile environments."],
    application: ["The TAMP172 is ideal for routers, gateways, and IoT devices requiring quick, non-permanent installation. Its magnetic base allows for rapid placement on metal surfaces, making it well-suited for vehicles, fleet tracking, temporary deployments, industrial equipment, and remote monitoring systems where seamless LTE connectivity and installation flexibility are essential."],
    conditions: COMMON_CONDITIONS,
    features: ["Frequency Ranges:", "High Band: 1710-2700 MHz", "Low Band: 698-960 MHz", "VSWR<2.0", "Impedance: 50Ω", "Gain: 3 dBi", "Polarization: Linear"],
    tables: [{ title: "Physical Characteristics", kv: true, rows: [["Cable Length (mm)","RG174 3m"],["Connector","SMA Male"],["Antenna Dimensions","ϕ30*220mm"],["Installation","Magnet"],["Material","PVC or Fiberglass"]] }],
  },
  tamp173: {
    intro: ["The TAMP173 is a compact, screw-mount 4G LTE antenna designed for reliable wideband cellular performance across 698–960 MHz and 1710–2690 MHz. Featuring a low VSWR (≤1.5), 50 Ω impedance, and durable IP65–IP67-rated housing, it delivers stable connectivity in demanding environments."],
    application: ["Ideal for embedded and external cellular applications, the TAMP173 is well-suited for routers, gateways, IoT devices, and industrial equipment requiring dependable LTE connectivity. Its rugged, screw-mount design makes it particularly effective in outdoor deployments, vehicle systems, smart infrastructure, and remote monitoring solutions operating across harsh environmental conditions."],
    conditions: COMMON_CONDITIONS,
    features: ["Frequency Ranges:", "High Band: 1710-2690MHz", "Low Band: 698-960MHz", "VSWR≤1.5", "Impedance: 50 Ω", "Polarization: Linear"],
    tables: [{ title: "Physical Characteristics", kv: true, rows: [["Cable Length (mm)","RG174 3000"],["Connector","SMA Male"],["Antenna Dimensions","Φ46.6*14.5mm"],["Installation","Screw"],["Ingress Protection","IP64–IP67 (excluding cable outlet)"]] }],
    images: [{ title: "Dimension (unit: mm)", src: img("tamp173","dimension"), wide: true }],
  },
  tamp163: {
    intro: ["The TAMP163 is a high-performance multi-band 4G LTE/5G antenna engineered to deliver reliable wireless connectivity to both traditional cellular tower networks and emerging Direct-to-Satellite (NTN) services.", "Featuring an optimized dipole design with enhanced overhead pattern characteristics for Band 25, it provides excellent performance for conventional terrestrial communications while improving connectivity to satellite-based cellular networks where tower coverage is limited or unavailable."],
    application: ["The TAMP163 is an ideal solution for next-generation applications requiring seamless connectivity across both terrestrial and satellite networks."],
    featuresTitle: "Mechanics and Electrical Specifications",
    features: ["Operating frequencies: 617-960MHz / 1710-2690MHz / 3300-4200MHz", "Connector: N type male", "Dimension: 250mm x Φ32.87mm", "Weight: 116.2g", "Peak Gain: Up to 6.9 dBi"],
    images: [{ title: "VSWR", src: img("tamp163","vswr") }, { title: "Radiation Pattern @ Band 25 (1850MHz)", src: img("tamp163","radiation") }],
  },
  tamp159: {
    intro: ["The TAMP159 is a high-performance omnidirectional Wi-Fi antenna designed to enhance Wi-Fi 6E and Wi-Fi 7 networks with broader coverage, improved signal quality, and dependable connectivity for client devices."],
    application: ["Any wireless device that requires an antenna covering Wi-Fi frequency bands. Examples Uses – Routers, Gateways, CPEs, Automotive Devices, IoT Devices, etc."],
    features: ["External Antenna with Hinge Covering WiFi 2.4/5/6 GHz Triple Bands", "Antenna Size: 156.1 X Φ13mm", "Connector: SMA male (RP-SMA Available upon request)", "Packaging: Available in a pack of two", "Color: Black / White", "Operating Frequency Bands: 2400~2500MHz, 5100~5900MHz, 5925~7125MHz", "High Efficiency up to 95%", "Peak Gain: 2.2~4.6 dBi", "Operating Temperature Range: -40ºC to +85ºC"],
    tables: [
      { title: "Peak Gain/Efficiency — 2.4GHz Band: 2401–2478 MHz | 5GHz Band: 5150–5855 MHz | 6GHz Band: 5955–7115 MHz", rows: [["Frequency [MHz]","2401","2442","2478","5150","5500","5805","5855","5955","6419","6651","7115"],["Unfolded — Efficiency [%]","79.0","86.4","86.6","72.4","68.4","85.4","73.4","71.6","66.9","64.5","63.7"],["Unfolded — Peak Gain [dBi]","3.31","3.50","3.16","3.41","2.52","3.73","2.99","3.04","2.52","2.95","3.10"],["Folded — Efficiency [%]","86.3","94.6","93.9","78.5","81.1","93.6","88.7","82.7","74.3","72.8","73.7"],["Folded — Peak Gain [dBi]","2.76","2.62","2.27","4.12","4.04","4.63","4.55","4.05","3.15","3.61","3.98"]] },
      kv([["Impedance","50Ω"],["Polarization","Vertical"],["Directivity","Omni Directional"]]),
    ],
    images: [{ title: "VSWR", src: "https://skymirr.com/wp-content/uploads/2026/06/159-vswr.jpg", wide: true }, { title: "Radiation Patterns", src: "https://skymirr.com/wp-content/uploads/2026/06/159-radiation-pattern.jpg", wide: true }, { title: "Dimension (unit: mm)", src: "https://skymirr.com/wp-content/uploads/2026/06/159-dimension.jpg", wide: true }],
  },
  tamp118: {
    intro: ["The TAMP118 is an omnidirectional Wi-Fi external antenna used for connecting wireless communication equipment such as a Wi-Fi 6e, Wi-Fi7 router to client devices."],
    application: ["Any wireless device that requires an antenna covering Wi-Fi frequency bands. Examples Uses – Routers, Gateways, CPEs, Automotive Devices, IoT Devices, etc."],
    features: ["External Antenna with Hinge Covering WiFi 2.4/5/6 GHz Triple Bands", "Antenna Size: 156.4 X Φ13mm", "Connector: SMA male", "Color: Black / White", "Operating Frequency Bands: 2400~2500MHz, 5100~5900MHz, 5925~7125MHz", "High Efficiency up to 90%", "Peak Gain: 1.9~4.1 dBi"],
    tables: [
      { title: "Gain and Efficiency — 2.4GHz Band: 2401–2478 MHz | 5GHz Band: 5150–5855 MHz | 6GHz Band: 5955–7115 MHz", rows: [["Frequency [MHz]","2401","2442","2478","5150","5500","5805","5855","5955","6419","6651","7115"],["Unfolded — Efficiency [%]","68.2","72.7","74.3","63.0","66.8","73.9","77.2","75.3","63.9","64.2","50.5"],["Unfolded — Peak Gain [dBi]","2.70","3.05","3.26","1.88","3.15","2.35","2.70","2.52","2.99","3.40","2.15"],["Folded — Efficiency [%]","79.8","88.2","85.0","67.2","81.5","85.4","89.5","86.1","71.8","71.2","57.5"],["Folded — Peak Gain [dBi]","2.93","3.26","3.11","2.31","3.20","3.91","3.91","3.10","3.57","4.12","3.03"]] },
      kv([["Impedance","50Ω"],["Polarization","Vertical"],["Directivity","Omni Directional"]]),
    ],
    images: [{ title: "VSWR", src: "https://skymirr.com/wp-content/uploads/2026/06/tamp118-vswr.jpg", wide: true }, { title: "Radiation Patterns", src: "https://skymirr.com/wp-content/uploads/2026/06/taep118-radiation-pattern.jpg", wide: true }, { title: "Dimension (unit: mm)", src: "https://skymirr.com/wp-content/uploads/2026/06/tamp118-dimension.jpg", wide: true }],
  },
  taep186: {
    intro: ["TAEP186 is a Low Profile LTCC SMD Type suitable for 2.4GHz Band Operations, Omni-Directional Pattern suitable for use in applications with variable orientation."],
    application: ["Applications are Personal Tracker, Smart Watch, Telematics, OBD Devices etc."],
    featuresTitle: "Mechanics and Electrical Specification",
    features: ["Working Frequency Range: 2450 ± 50 MHz", "Gain (dBi): 2 (Typical)", "VSWR: 2 max.", "Power Capacity: 3 W max.", "Maximum Input Power: 5 Watts for 5 minutes", "Operation Temperature: -40°C ~ +85°C", "Polarization: Linear", "Azimuth Beam width: Omni-directional"],
    tables: [
      { title: "Pin Connection", rows: [["PIN","Connection"],["1","Feeding"],["2","Identification Mark"],["3","Soldering terminal"]] },
      { title: "Matching component value", kv: true, rows: [["Series 1","6.8nH"],["Series 2","-"]] },
      { title: "Dimension (mm)", rows: [["Symbol","Dimension (mm)"],["L","3.20 ± 0.20"],["W","1.60 ± 0.10"],["T","1.20 ± 0.10"],["A","0.25 ± 0.15"]] },
    ],
    images: [{ title: "S11", src: img("taep186","s11") }, { title: "VSWR", src: img("taep186","vswr") }, { title: "Specification:", src: img("taep186","specification"), wide: true }, { title: "Radiation Patterns", src: img("taep186","radiation") }, { title: "Dimension (unit: mm)", src: img("taep186","dimension") }],
  },
  customizedantenna: {
    hero: "SkyMirr provides antenna customization service from antenna design/ sample delivery/ test/measurement/ pilot production to Mass production. SkyMirr customized antennas can perform best in the given form factor and environment.",
    intro: ["SkyMirr provides antenna customization service from antenna design/ sample delivery/ test/measurement/ pilot production to Mass production.", "SkyMirr customized antennas can perform best in the given form factor and environment."],
    application: ["Any wireless/IoT device in any frequency band."],
    featuresTitle: "Key Specifications",
    features: ["Custom Designed Antenna for Any Wireless Device", "Antenna Size: Antennas can be designed in the form factor provided by the client.", "Connector: Any type including SMA, Spring, Pogo pin, Soldering, etc.", "Any Operation Frequency Band:", "4G LTE/ 5G Sub6", "WiFi 5,6,7", "GPS/GNSS", "BT", "NFC", "13.56Mhz (NFC)", "Best Performance in the given environment", "Short Design and Sample Delivery Leadtime"],
    images: [{ title: "Customized Antenna Type", src: img("customizedantenna","type"), wide: true }],
  },
  maep103: {
    frequencyRange: "13.56Mhz (NFC)",
    dimensions: "7.85 x 1.34 x 1.29mm",
    intro: ["MAEP103 is an ultra-small NFC antenna incorporating SkyMirr's patented MuLCAT® technology. It is suitable for cutting-edge devices such as biomedical micro-devices or wearable devices."],
    application: ["Mobile Micro Wearable devices (Smart watches, Earphones)", "Smart phone, Payment terminals", "Medical devices Human and animal implants (glass tubes), (Hearing aids)"],
    applicationList: true,
    features: ["Ferrite Core", "MuLCAT® Technology Maximizes Magnetic Fields Easily Assemblies to Device (Standard SMD device)", "Excellent Performance in Mobile, Medical Device and other IoT Wearable Devices", "Antenna Size : 7.85 x 1.34 x 1.29mm", "Connector : Direct soldering on PCB (SMT)", "Operation Frequency Band", "13.56Mhz (NFC)", "RoHS Compliance"],
    tables: [{ title: "Specifications", rows: [["Recognition Distance","Inductance (uH)","DCR Max. (ohm)"],["26mm","TBD","0.2Ω"],["SRF (MHz)","Q Value","Matching Value"],["TBD","TBD","TBD"]] }],
    images: [{ title: "VSWR", src: img("maep103","vswr") }, { title: "Dimension (unit: mm)", src: img("maep103","dimension") }],
  },
};