import { FC } from "react";

import AppHamburgerIcon from "@assets//global/AppHamburger.svg?react";
import AppCloseIcon from "@assets//global/AppClose.svg?react";

import cl from "./HamburgerMenu.module.css";

interface IHamburgerMenuProps {
  isOpen: boolean;
  onToggleOpen: () => void;
}

const HamburgerMenu: FC<IHamburgerMenuProps> = ({ isOpen, onToggleOpen }) => (
  <div className={cl.HamburgerMenu} onClick={onToggleOpen}>
    {isOpen ? <AppCloseIcon /> : <AppHamburgerIcon />}
  </div>
);

export default HamburgerMenu;
