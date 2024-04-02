import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { MenuProps } from "./interface";
import { MenuItem } from "../MenuItem";

export function Menu({ label, subMenu }: MenuProps) {
  return (
    <li>
      <AccordionItem value={label}>
        <AccordionTrigger className="px-4">{label}</AccordionTrigger>
        <AccordionContent className="p-0">
          <ul className="px-4">
            {subMenu.map((item) => (
              <MenuItem key={item.slug} href={item.slug!} label={item.label} />
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </li>
  );
}
