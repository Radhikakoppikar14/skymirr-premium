import { PRODUCTS_DATA, ProductSpec } from "./skymirrData";
import { ANTENNA_DETAILS } from "./antennaDetails";

export interface CatalogItem {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  badge?: string;
  detailRoute?: string;
}

export const CATALOG_ITEMS: Record<string, CatalogItem[]> = {
  cellular: [
  { id: "tamp-114", name: "TAMP 114", subtitle: "4G LTE / 5G Wideband Omni Antenna", image: "/images/antennas/tamp114.png" },
  { id: "tamp-141", name: "TAMP 141", subtitle: "4G LTE / 5G Ultra Broadband Omni Antenna", image: "/images/antennas/tamp141.png" },
  { id: "tamp-161", name: "TAMP 161", subtitle: "4G LTE / 5G External MIMO Broadband High Performing Omnidirectional Antenna Module", image: "/images/antennas/tamp161-round.png", badge: "NEW", detailRoute: "tamp-161" },
  { id: "tamp-154", name: "TAMP 154", subtitle: "High Gain Broadband 4G/5G External MIMO Directional Antenna Module", image: "/images/antennas/tamp154-round.png", badge: "NEW" },
  { id: "taep-162", name: "TAEP 162", subtitle: "4G LTE/5G Compact Broadband Chip Antenna", image: "/images/antennas/taep162.png", badge: "NEW" },
  { id: "tamp-172", name: "TAMP 172", subtitle: "LTE Omni Antenna With Magnetic Mount", image: "/images/antennas/tamp172.png" },
  { id: "tamp-173", name: "TAMP 173", subtitle: "LTE Low Profile Antenna With Screw Mount", image: "/images/antennas/tamp173.png" },
  { id: "tamp-163", name: "TAMP 163", subtitle: "Direct-To-Satellite 4G/5G Cellular Antenna", image: "/images/antennas/tamp163.png" },
  ],
  wifi: [
  { id: "taep-121", name: "TAEP 121", subtitle: "Wi-Fi 6e/7 Triple Band FPCB Antenna", image: "/images/antennas/temp121.png" },
  { id: "tamp-118", name: "TAMP 118", subtitle: "Wi-Fi 6e/7 External Antenna", image: "/images/antennas/tamp118.png" },
  { id: "taep-169", name: "TAEP 169", subtitle: "Single Feed Multi-Band Chip Antenna", image: "/images/antennas/taep169.png" },
  { id: "tamp-159", name: "TAMP 159", subtitle: "Wi-Fi 6e/7 External Antenna", image: "/images/antennas/tamp159-round.png", badge: "NEW" },
  { id: "tamp-156", name: "TAMP 156", subtitle: "Wi-Fi 6e/7 High Gain Directional Antenna", image: "/images/antennas/tamp156.png" },
  { id: "tamp-176", name: "TAMP 176", subtitle: "Wi-Fi 6e External Antenna", image: "/images/antennas/tamp176.png" },
  ],
  fpcb: [
  { id: "taep-134", name: "TAEP 134", subtitle: "4G LTE/ 5G Sub6 And GNSS L1 Ultra-Broadband FPCB Antenna", image: "/images/antennas/taep134.png" },
  { id: "taep-132", name: "TAEP 132", subtitle: "4G/5G & GNSS-L5 Ultra-Broadband FPCB Antenna", image: "/images/antennas/taep132.png" },
  { id: "taep-131", name: "TAEP 131", subtitle: "4G LTE/5G Ultra-Broadband FPCB Antenna", image: "/images/antennas/taep131.png" },
  { id: "taep-133", name: "TAEP 133", subtitle: "4G/5G Broadband FPCB Antenna", image: "/images/antennas/taep133.png" },
  { id: "taep-135", name: "TAEP 135", subtitle: "WiFi 6e/7 Triple Band FPCB Antenna", image: "/images/antennas/taep135.png" },
  { id: "taep-184", name: "TAEP 184", subtitle: "4G LTE Omni-Directional Antenna", image: "/images/antennas/taep184.png" },
  ],
  embedded: [
  { id: "maep-103", name: "MAEP 103", subtitle: "Ultra Small NFC Antenna", image: "/images/antennas/maep-103.png" },
  ],
  gnss: [
  { id: "cgmp-165", name: "CGMP165", subtitle: "GPS And GLONASS SMD Antenna", image: "/images/antennas/cgmp165.png" },
  { id: "cgmp-166", name: "CGMP166", subtitle: "GPS And GLONASS Patch Antenna", image: "/images/antennas/cgmp166.png" },
  { id: "cgmp-167", name: "CGMP167", subtitle: "GPS And GLONASS Ceramic Patch Antenna", image: "/images/antennas/cgmp167.png" },
  { id: "cgmp-168", name: "CGMP168", subtitle: "Single Feed Multi-Band Patch Antenna", image: "/images/antennas/cgmp168.png" },
  { id: "cgma-174", name: "CGMA174", subtitle: "GPS/GNSS Antenna With Magnet And LNA", image: "/images/antennas/cgma174.png" },
  { id: "cgma-175", name: "CGMA175", subtitle: "GPS/GNSS Antenna With LNA", image: "/images/antennas/cgma175.png" },
  { id: "taep-177", name: "TAEP 177", subtitle: "5G GNSS Antenna", image: "/images/antennas/taep177.png" },
  ],
  customized: [
  { id: "customized-antenna", name: "Customized Antenna", subtitle: "Custom Antenna Design for Any Wireless Device", image: "/images/antennas/customized-antenna.png" },
  ],
  chip: [
  { id: "taep-186", name: "TAEP 186", subtitle: "Multilayer Ceramic Chip Antenna", image: "/images/antennas/taep186.png" },
  ],
};

const norm = (s: string) => s.replace(/[^a-z0-9]/gi, "").toLowerCase();

/** Resolves ANY catalog id to a detail-page product: full data if it exists,
 *  otherwise built from the catalog card + the rich antenna details. */
export function resolveProduct(id: string): ProductSpec | undefined {
  const n = norm(id);
  const base = PRODUCTS_DATA.find((p) => norm(p.id) === n || norm(p.name) === n);
  if (base) {
    const d = ANTENNA_DETAILS[n];
    return { ...base, frequencyRange: base.frequencyRange || d?.frequencyRange || "", dimensions: base.dimensions || d?.dimensions || "" };
  }
  for (const items of Object.values(CATALOG_ITEMS)) {
    const it = items.find((i) => norm(i.id) === n);
    if (it) {
      return {
        id: it.id, name: it.name, category: "antenna", badge: it.badge, image: it.image,
        tagline: it.subtitle, description: ANTENNA_DETAILS[n]?.hero ?? ANTENNA_DETAILS[n]?.intro?.[0] ?? it.subtitle,
        frequencyRange: "", keyFeatures: [], specs: [], dimensions: "",
        certifications: [], applications: [],
      };
    }
  }
  return undefined;
}