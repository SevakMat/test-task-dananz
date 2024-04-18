import { FC } from "react";

import DesktopContainer from "./containers/DesktopContainer";
import MobileContainer from "./containers/MobileContainer";
import AppLogo from "./components/AppLogo";
import cl from "./AppHeaderContainer.module.css";

const AppHeaderContainer: FC = () => (
  <div className={cl.AppHeaderContainer}>
    <AppLogo />
    <DesktopContainer />
    <MobileContainer />
  </div>
);

export default AppHeaderContainer;
