"use client";

import { useState } from "react";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";
import SidebarOverlay from "./SidebarOverlay";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <MobileHeader setSidebarOpen={setSidebarOpen} />
      <DesktopHeader setSidebarOpen={setSidebarOpen} />
      {sidebarOpen && <SidebarOverlay onClose={() => setSidebarOpen(false)} />}
    </>
  );
}
