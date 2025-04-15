"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RB2BTracking() {
  const pathname = usePathname();
  const SCRIPT_ID = "rb2b-tracking-script";
  const SCRIPT_KEY = "1N5W0HMJERO5";
  const SCRIPT_BASE_URL = "https://s3-us-west-2.amazonaws.com/b2bjsstore/b/";
  const SCRIPT_URL = `${SCRIPT_BASE_URL}${SCRIPT_KEY}/${SCRIPT_KEY}.js.gz`;

  useEffect(() => {
    const handleRouteChange = () => {
      // Remove the script if it already exists
      const existingScript = document.getElementById(SCRIPT_ID);
      if (existingScript) {
        existingScript.remove();
      }

      // Create and add the new script
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = SCRIPT_URL;
      script.async = true;
      document.body.appendChild(script);
    };

    // Initial load and on route changes
    handleRouteChange();

    // Clean up on component unmount
    return () => {
      const script = document.getElementById(SCRIPT_ID);
      if (script) {
        script.remove();
      }
    };
  }, [pathname, SCRIPT_URL]);

  return null;
}
