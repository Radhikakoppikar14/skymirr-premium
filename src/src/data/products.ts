// Single source of truth for the Products section.
// Replaces antennaDetails.ts (merge its content here). Keep non-product data in skymirrData.ts.

export type CategoryId = 'cellular' | 'wifi' | 'gnss' | 'fpcb' | 'chip' | 'embedded';

export interface Category {
  id: CategoryId;
  label: string;
}

export interface Product {
  slug: string;                 // used in /products/:slug
  model: string;                // e.g. "TAEP184"
  category: CategoryId;         // exactly one primary category
  tags: string[];               // secondary filters, see tagLabels
  title: string;                // e.g. "4G LTE Omni-Directional Antenna"
  image: string;                // path under /public, e.g. /products/taep184.png
  badge?: string;               // e.g. "Now available"
  keySpecs?: { label: string; value: string }[]; // 2–3 shown on the card
  overview?: string;
  applications?: string;
  specs?: { label: string; value: string }[];
  note?: string;
  performance?: { label: string; src: string }[]; // VSWR, radiation pattern, efficiency images
  datasheetUrl?: string;
}

export const categories: Category[] = [
  { id: 'cellular', label: 'Cellular' },
  { id: 'wifi', label: 'Wi-Fi' },
  { id: 'gnss', label: 'GNSS / GPS' },
  { id: 'fpcb', label: 'FPCB' },
  { id: 'chip', label: 'Chip' },
  { id: 'embedded', label: 'Embedded' },
];

export const tagLabels: Record<string, string> = {
  fpcb: 'FPCB',
  external: 'External',
  chip: 'Chip',
  patch: 'Patch',
  magnetic: 'Magnetic mount',
  omni: 'Omni-directional',
  directional: 'Directional',
  module: 'Module',
  '4g': '4G LTE',
  '5g': '5G',
  gnss: 'GNSS',
  wifi: 'Wi-Fi',
  iot: 'IoT',
};

const img = (slug: string) => `/products/${slug}.png`; // TODO: add images to /public/products/

export const products: Product[] = [
  // ---------- Cellular ----------
  {
    slug: 'taep184', model: 'TAEP184', category: 'cellular', tags: ['fpcb', '4g', 'omni', 'iot'],
    title: '4G LTE Omni-Directional Antenna', image: img('taep184'), badge: 'Now available',
    keySpecs: [
      { label: 'Frequency', value: '824–960 / 1710–2690 MHz' },
      { label: 'Gain', value: '4.35 dBi max' },
      { label: 'Size', value: '40 × 20 × 0.25 mm' },
    ],
    overview:
      'TAEP184 is a small form factor 4G cellular antenna, typically suitable for applications with small form factor IoT devices. Comes with micro coaxial cable & MHF 1 connector.',
    applications: 'Telematics, vehicle tracking system, infotainment, data loggers, asset trackers, smart meters etc.',
    specs: [
      { label: 'Frequency range', value: '824–960 / 1710–2690 MHz' },
      { label: 'Impedance', value: '50 Ω' },
      { label: 'VSWR', value: '690–960 MHz ≤ 6.5, 1710–2690 MHz ≤ 5' },
      { label: 'Gain', value: '4.35 dBi (max)' },
      { label: 'Dimensions', value: '40 × 20 × 0.25 mm' },
      { label: 'Connector', value: 'IPEX-I' },
      { label: 'Radome material', value: 'FPC' },
      { label: 'Working temperature', value: '-40 °C ~ +85 °C' },
    ],
    note: 'Easy configurations on cable & connector available.',
  },
  { slug: 'taep134', model: 'TAEP134', category: 'cellular', tags: ['fpcb', '4g', '5g'], title: '4G LTE / 5G Sub6 and GNSS L1 Ultra-Broadband FPCB Antenna', image: img('taep134') },
  { slug: 'taep132', model: 'TAEP132', category: 'cellular', tags: ['fpcb', '4g', '5g', 'gnss'], title: '4G/5G & GNSS-L5 Ultra-Broadband FPCB Antenna', image: img('taep132') },
  { slug: 'taep131', model: 'TAEP131', category: 'cellular', tags: ['fpcb', '4g', '5g'], title: '4G LTE/5G Ultra-Broadband FPCB Antenna', image: img('taep131') },
  { slug: 'taep133', model: 'TAEP133', category: 'cellular', tags: ['fpcb', '4g', '5g'], title: '4G/5G Broadband FPCB Antenna', image: img('taep133') },
  { slug: 'tamp161', model: 'TAMP161', category: 'cellular', tags: ['module', 'omni', '4g', '5g'], title: '4G LTE / 5G MIMO Omnidirectional Antenna Module', image: img('tamp161') },
  { slug: 'tamp154', model: 'TAMP154', category: 'cellular', tags: ['module', 'directional', '4g', '5g'], title: '4G/5G MIMO Directional Antenna Module', image: img('tamp154') },
  { slug: 'tamp172', model: 'TAMP172', category: 'cellular', tags: ['external', 'magnetic', 'omni', '4g'], title: 'LTE Omni Antenna With Magnetic Mount', image: img('tamp172') },
  { slug: 'tamp173', model: 'TAMP173', category: 'cellular', tags: ['external', '4g'], title: 'LTE Low Profile Antenna With Screw Mount', image: img('tamp173') },
  { slug: 'tamp163', model: 'TAMP163', category: 'cellular', tags: ['external', '4g', '5g'], title: 'Direct-To-Satellite 4G/5G Cellular Antenna', image: img('tamp163') },

  // ---------- Wi-Fi ----------
  { slug: 'taep121', model: 'TAEP121', category: 'wifi', tags: ['fpcb', 'wifi'], title: 'Wi-Fi 6e/7 Triple Band FPCB Antenna', image: img('taep121') },
  { slug: 'taep135', model: 'TAEP135', category: 'wifi', tags: ['fpcb', 'wifi'], title: 'Wi-Fi 6e/7 Triple Band FPCB Antenna', image: img('taep135') },
  { slug: 'tamp118', model: 'TAMP118', category: 'wifi', tags: ['external', 'wifi'], title: 'Wi-Fi 6e/7 External Antenna', image: img('tamp118') },
  { slug: 'tamp159', model: 'TAMP159', category: 'wifi', tags: ['external', 'wifi'], title: 'Wi-Fi 6e/7 External Antenna', image: img('tamp159') },
  { slug: 'tamp156', model: 'TAMP156', category: 'wifi', tags: ['external', 'directional', 'wifi'], title: 'Wi-Fi 6e/7 High Gain Directional Antenna', image: img('tamp156') },
  { slug: 'tamp169', model: 'TAMP169', category: 'wifi', tags: ['chip', 'wifi'], title: 'Single Feed Multi-Band Chip Antenna', image: img('tamp169') },
  { slug: 'tamp176', model: 'TAMP176', category: 'wifi', tags: ['wifi'], title: 'TAMP176', image: img('tamp176') }, // TODO: add the real title

  // ---------- GNSS ----------
  { slug: 'cgmp165', model: 'CGMP165', category: 'gnss', tags: ['patch', 'gnss'], title: 'GPS And GLONASS SMD Antenna', image: img('cgmp165') },
  { slug: 'cgmp166', model: 'CGMP166', category: 'gnss', tags: ['patch', 'gnss'], title: 'GPS And GLONASS Patch Antenna', image: img('cgmp166') },
  { slug: 'cgmp167', model: 'CGMP167', category: 'gnss', tags: ['patch', 'gnss'], title: 'GPS And GLONASS Ceramic Patch Antenna', image: img('cgmp167') },
  { slug: 'cgmp168', model: 'CGMP168', category: 'gnss', tags: ['gnss'], title: 'Single Feed Multi-Band Patch Antenna', image: img('cgmp168') },
  { slug: 'cgma174', model: 'CGMA174', category: 'gnss', tags: ['external', 'magnetic', 'gnss'], title: 'GPS/GNSS Antenna With Magnet And LNA', image: img('cgma174') },

  // ---------- Chip ----------
  {
    slug: 'taep186', model: 'TAEP186', category: 'chip', tags: ['chip', 'omni', 'iot'],
    title: 'Low Profile LTCC SMD Antenna (2.4 GHz)', image: img('taep186'),
    keySpecs: [
      { label: 'Frequency', value: '2450 ± 50 MHz' },
      { label: 'Gain', value: '2 dBi (typical)' },
      { label: 'Pattern', value: 'Omni-directional' },
    ],
    overview: 'TAEP186 is a Low Profile LTCC SMD type suitable for 2.4 GHz band operations. Omni-directional pattern suitable for use in applications with variable orientation.',
    applications: 'Personal tracker, smart watch, telematics, OBD devices etc.',
    specs: [
      { label: 'Working frequency range', value: '2450 ± 50 MHz' },
      { label: 'Gain', value: '2 dBi (typical)' },
      { label: 'VSWR', value: '2 max.' },
      { label: 'Power capacity', value: '3 W max.' },
      { label: 'Maximum input power', value: '5 W for 5 minutes' },
      { label: 'Operating temperature', value: '-40 °C ~ +85 °C' },
      { label: 'Polarization', value: 'Linear' },
      { label: 'Azimuth beam width', value: 'Omni-directional' },
    ],
  },
];

export const getProduct = (slug?: string) => products.find((p) => p.slug === slug);
export const getCategoryLabel = (id: CategoryId) => categories.find((c) => c.id === id)?.label ?? id;