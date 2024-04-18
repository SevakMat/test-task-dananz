import { FC } from "react";

import AppList from "../../components/AppList";
import cl from "./DesktopContainer.module.css";

const DesktopContainer: FC = () => (
  <div className={cl.DesktopContainer}>
    <AppList />
  </div>
);

export default DesktopContainer;
