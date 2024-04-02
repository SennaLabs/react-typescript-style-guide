import { Link, useLocation } from "react-router-dom";
import { MenuItemProps } from "./interface";
import { cn } from "@/lib/utils";

export function MenuItem({ className, href, label }: MenuItemProps) {
  const { pathname } = useLocation();
  return (
    <li>
      <Link
        to={href}
        className={cn(
          "block py-2 px-4 text-primary hover:bg-secondary",
          className,
          {
            "font-semibold": pathname === href,
          }
        )}>
        {label}
      </Link>
    </li>
  );
}
