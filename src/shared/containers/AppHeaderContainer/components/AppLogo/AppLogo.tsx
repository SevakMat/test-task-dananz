import { FC } from "react";

import AppLogoIcon from "@assets/global/AppLogo.svg?react";
import { useNavigate } from "react-router-dom";
import { RoutesEnum } from "@shared/enums";

interface IAppLogoProps {
  onToggleOpen?: () => void;
}

const AppLogo: FC<IAppLogoProps> = ({ onToggleOpen }) => {
  const navigate = useNavigate();
  const hendleOnNavigate = () => {
    navigate(RoutesEnum.home);
    onToggleOpen && onToggleOpen();
  };

  return (
    <div onClick={hendleOnNavigate} style={{ cursor: "pointer" }}>
      <AppLogoIcon />
    </div>
  );
};

export default AppLogo;
