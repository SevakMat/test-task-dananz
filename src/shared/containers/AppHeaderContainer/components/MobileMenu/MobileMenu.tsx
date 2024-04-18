import { FC } from "react";

import cl from "./MobileMenu.module.css";
import AppLogo from "../AppLogo";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import AppList from "../AppList";

interface IMobileMenuProps {
  isOpen: boolean;
  onToggleOpen: () => void;
}

const MobileMenu: FC<IMobileMenuProps> = ({ isOpen, onToggleOpen }) => (
  <div className={`${cl.MobileMenu} ${isOpen ? cl.isOpen : ""}`}>
    <div className={cl.MobileHeader}>
      <AppLogo onToggleOpen={onToggleOpen} />
      <HamburgerMenu isOpen={isOpen} onToggleOpen={onToggleOpen} />
    </div>
    <AppList onToggleOpen={onToggleOpen} />
  </div>
);

export default MobileMenu;
