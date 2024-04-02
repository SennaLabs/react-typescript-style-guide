export type MenuType = {
  label: string;
  slug?: string;
  subMenu?: MenuType[];
};

export interface MenuProps {
  label: string;
  subMenu: MenuType[];
}
