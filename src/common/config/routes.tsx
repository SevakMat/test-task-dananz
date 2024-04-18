import { createBrowserRouter } from "react-router-dom";

import HomePage from "@pages/HomePage";
import AboutPage from "@pages/AboutPage";
import ServicesPage from "@pages/ServicesPage";
import OurTeamPage from "@pages/OurTeamPage";
import ContactPage from "@pages/ContactPage";
import { RoutesEnum } from "@shared/enums";

import AppLayout from "../../shared/layouts/AppLayout";

const ROUTES = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: RoutesEnum.home,
        element: <HomePage />
      },
      {
        path: RoutesEnum.about,
        element: <AboutPage />
      },
      {
        path: RoutesEnum.services,
        element: <ServicesPage />
      },
      {
        path: RoutesEnum.ourTeams,
        element: <OurTeamPage />
      },
      {
        path: RoutesEnum.contact,
        element: <ContactPage />
      }
    ]
  }
]);

export default ROUTES;
