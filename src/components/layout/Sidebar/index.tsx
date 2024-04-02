import { Fragment } from "react/jsx-runtime";
import { Menu } from "../Menu";
import { MenuType } from "../Menu/interface";
import { MenuItem } from "../MenuItem";
import { cn } from "@/lib/utils";
import { SidebarProps } from "./interface";
import { Accordion } from "@/components/ui/Accordion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const menu: MenuType[] = [
  {
    label: "Types",
    subMenu: [
      { slug: "/docs/type-inference", label: "Type Inference" },
      { slug: "/docs/return-types", label: "Return Types" },
      { slug: "/docs/type-guards", label: "Type Guards & Narrowing" },
      { slug: "/docs/template-literal-types", label: "Template Literal Types" },
      { slug: "/docs/type-definition", label: "Type Definition" },
      { slug: "/docs/array-types", label: "Array Types" },
      { slug: "/docs/generic-types", label: "Generic Types" },
    ],
  },
  {
    label: "Functions",
    slug: "/docs/functions",
  },
  {
    label: "Variables",
    slug: "/docs/variables",
  },
  {
    label: "Naming",
    slug: "/docs/naming",
  },
  {
    label: "Source Organization",
    slug: "/docs/source-organization",
  },
  {
    label: "React",
    subMenu: [
      {
        label: "Props To State",
        slug: "/docs/props-to-state",
      },
      {
        label: "Component Conventions",
        slug: "/docs/component-conventions",
      },
      {
        label: "Component Types",
        slug: "/docs/component-types",
      },
    ],
  },
  {
    label: "Tests",
    subMenu: [
      {
        label: "Unit Tests",
        slug: "/docs/unit-tests",
      },
      {
        label: "Automated Tests",
        slug: "/docs/automated-tests",
      },
    ],
  },
];

export function Sidebar({ className }: SidebarProps) {
  const [currentMenu, setCurrentMenu] = useState<string | undefined>(
    menu[0].label
  );
  const { pathname } = useLocation();

  useEffect(() => {
    const item = menu.find(
      (m) => m.slug === pathname || m.subMenu?.some((s) => s.slug === pathname)
    )?.label;
    setCurrentMenu(item);
  }, [pathname]);

  return (
    <aside className={cn("w-[256px] h-full overflow-y-auto", className)}>
      <Accordion
        type="single"
        value={currentMenu}
        collapsible
        onValueChange={setCurrentMenu}>
        <ul className="py-4">
          {menu.map((item) => (
            <Fragment key={item.label}>
              {item.subMenu ? (
                <Menu label={item.label} subMenu={item.subMenu ?? []} />
              ) : (
                <MenuItem
                  className="font-medium"
                  href={item.slug!}
                  label={item.label}
                />
              )}
            </Fragment>
          ))}
        </ul>
      </Accordion>
    </aside>
  );
}
