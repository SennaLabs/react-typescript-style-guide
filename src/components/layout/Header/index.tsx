import { Link, useParams } from "react-router-dom";

import { SearchDialog } from "@/components/layout/SearchDialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/Sheet";
import { Sidebar } from "../Sidebar";
import { useEffect, useState } from "react";
import { MenuIcon } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { slug } = useParams();

  useEffect(() => {
    setIsOpen(false);
  }, [slug]);

  return (
    <header className="h-[80px] w-full sticky top-0 z-50 border-b border-gray-1/40 bg-white/95 backdrop-blur">
      <div className="flex items-center gap-x-[8px] px-[24px] mx-auto max-w-[1536px] h-full mobile:px-[16px]">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="desktop:hidden">
            <MenuIcon />
          </SheetTrigger>
          <SheetContent side="left" className="p-0">
            <SheetHeader className="p-[8px_16px]">
              <Link to="/" className="flex items-center gap-x-[4px]">
                <img
                  className="w-[40px] h-[40px]"
                  src="/images/tech-life-cat.png"
                  alt="Tech life cat"
                />
                <span className="text-[20px] font-semibold">CatKod</span>
              </Link>
            </SheetHeader>
            <Sidebar className="w-full" />
          </SheetContent>
        </Sheet>
        <Link to="/" className="flex items-center gap-x-[4px]">
          <img
            className="w-[40px] h-[40px]"
            src="/images/tech-life-cat.png"
            alt="Tech life cat"
          />
          <span className="text-[20px] font-semibold">CatKod</span>
        </Link>
        <SearchDialog />
      </div>
    </header>
  );
}
