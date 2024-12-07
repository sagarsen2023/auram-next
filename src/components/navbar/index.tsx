"use client";

import React from "react";
import dynamic from "next/dynamic";
const ThemeSwitchButtonComponent = dynamic(
  () => import("../buttons/theme-switch-button.component"),
  { ssr: false }
);

function NavBarComponent() {
  return (
    <div>
      <ThemeSwitchButtonComponent />
    </div>
  );
}

export default NavBarComponent;
