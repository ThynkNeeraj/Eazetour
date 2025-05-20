import Landing from "../components/Landing";
import CanonicalURL from "../components/CanonicalURL";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "India Best Tour Packages for USA Travelers - Eaze Tours",
  description:
    "Explore incredible India with our trips to India packages. Eaze Tours offers the best India tours packages tailored for an unforgettable journey.",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-video-preview": -1,
    "max-image-preview": "large",
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "Onwjmct_4h7Zidg3dgn_ybMwxYsipyAREOHgDHawUKs",
  },
};
export default function Home() {
  return <Landing />;
}
