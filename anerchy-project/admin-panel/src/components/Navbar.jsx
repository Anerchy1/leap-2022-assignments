import { useState } from "react";
import NavbarDropDown from "./Navbar/NavbarDropDown";
import NavbarMenu from "./Navbar/NavbarMenu";
import NavbarWrapper from "./Navbar/NavbarWrapper";

export function Navbar({ onToggle }) {
  const menuItems = [
    { label: "Home", link: "/" },
    { label: "Articles", link: "articles" },
    { label: "Something", link: "something" },
  ];
  const panelItems = [
    { label: "Settings", link: "#" },
    { label: "Profile", link: "/profile" },
    { label: "---", link: "#" },
    { label: "Sign out", link: "/signout" },
  ];
  return (
    <NavbarWrapper>
      <NavbarMenu title="Admin" items={menuItems} onToggle={onToggle} />
      <NavbarDropDown
        img="https://media.licdn.com/dms/image/D560BAQFPaP6vr0IXdg/company-logo_200_200/0/1666631180964?e=2147483647&v=beta&t=Rx1DM6Zdy2gDsFS_324P9RBmeU_5JwM7tey7DXQO53w"
        items={panelItems}
      />
    </NavbarWrapper>
  );
}
