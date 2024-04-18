import { RoutesEnum } from "@shared/enums";

interface IPagesList {
  path: RoutesEnum;
  name: string;
}

const PAGES_LIST: IPagesList[] = [
  {
    path: RoutesEnum.home,
    name: "Home"
  },
  {
    path: RoutesEnum.about,
    name: "About Us"
  },
  {
    path: RoutesEnum.services,
    name: "Services"
  },
  {
    path: RoutesEnum.ourTeams,
    name: "Our Teams"
  },
  {
    path: RoutesEnum.contact,
    name: "Contact Us"
  }
];

export default PAGES_LIST;
