import { FC, useEffect, useState } from "react";

import { useMediaMatches } from "@shared/hooks";

import cl from "./MobileContainer.module.css";
import HamburgerMenu from "../../components/HamburgerMenu/HamburgerMenu";
import MobileMenu from "../../components/MobileMenu";

const MobileContainer: FC = () => {
  const matches = useMediaMatches(992);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!matches) {
      setIsOpen(false);
    }
  }, [matches]);

  const handleOnToggleOpen = (): void => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className={cl.MobileContainer}>
      <HamburgerMenu isOpen={isOpen} onToggleOpen={handleOnToggleOpen} />
      <MobileMenu isOpen={isOpen} onToggleOpen={handleOnToggleOpen} />
    </div>
  );
};

export default MobileContainer;
