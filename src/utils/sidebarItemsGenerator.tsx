import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type TSidebars = {
  key: string;
  label: ReactNode;
  children?: TSidebars[];
};

type TUserPath = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPath[];
};

export const sidebarGenerator = (items: TUserPath[],role): TSidebars[] => {
  const sidebarItems = items.reduce((acc: TSidebars[], item) => {
    if (item.name && item.path) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }
    if (item.children) {
      acc.push({
        key: item.name,
        label: <div>{item.name}</div>,
        children: item.children.map((child) => ({
          key: child.name,
          label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
        })),
      });
    }
    return acc;
  }, []);

  return sidebarItems;
};
