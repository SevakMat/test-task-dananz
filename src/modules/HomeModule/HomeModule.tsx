import { FC } from "react";

import { MainLayout } from "@shared/layouts";

import TopContainer from "./containers/TopContainer";
import DescContainer from "./containers/DescContainer";
import FooterContainer from "./containers/FooterContainer";
import HomeLayout from "./layouts/HomeLayout";

const HomeModule: FC = () => (
  <HomeLayout>
    <MainLayout>
      <HomeLayout>
        <TopContainer />
        <DescContainer />
      </HomeLayout>
    </MainLayout>
    <FooterContainer />
  </HomeLayout>
);

export default HomeModule;
