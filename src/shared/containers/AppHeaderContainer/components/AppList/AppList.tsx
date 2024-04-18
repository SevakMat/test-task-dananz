import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

import { RoutesEnum } from "@shared/enums";

import cl from "./AppList.module.css";
import PAGES_LIST from "../../constants/pagesList";

interface IAppListProps {
  onToggleOpen?: () => void;
}

const AppList: FC<IAppListProps> = ({ onToggleOpen }) => {
  const { pathname } = useLocation();

  const isActive = (path: RoutesEnum): boolean => (pathname as RoutesEnum) === path;

  return (
    <ul className={cl.AppList}>
      {PAGES_LIST.map(({ path, name }) => (
        <li key={path} className={`${cl.AppListItem} ${isActive(path) ? cl.isActive : ""}`} onClick={onToggleOpen}>
          <Link to={path} className={path === RoutesEnum.contact ? cl.AppListItemContact : ""}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default AppList;
