"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { pageview } from "../lib/gTagHelper";

export default function RouteChangeListener() {
  const pathname = usePathname();

  useEffect(() => {
    pageview(pathname);
  }, [pathname]);

  return <></>;
}
