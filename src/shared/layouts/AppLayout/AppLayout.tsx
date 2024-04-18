import { FC } from "react";
import { Outlet } from "react-router-dom";

import { AppHeaderContainer } from "@shared/containers";

import MainLayout from "../MainLayout";

const AppLayout: FC = () => (
  <div>
    <MainLayout>
      <AppHeaderContainer />
    </MainLayout>
    <Outlet />
  </div>
);

export default AppLayout;
