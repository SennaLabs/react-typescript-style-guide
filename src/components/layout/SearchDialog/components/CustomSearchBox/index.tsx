import { useSearchBox } from "react-instantsearch";
import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils";
import { SearchIcon, XIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function CustomSearchBox() {
  const [searchText, setSearchText] = useState("");
  const timer = useRef<NodeJS.Timeout | undefined>(undefined);
  const { refine, clear } = useSearchBox();

  useEffect(() => {
    timer.current = setTimeout(() => {
      refine(searchText);
    }, 300);

    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, [searchText]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(e.currentTarget.value);
  }

  return (
    <div className="relative h-max">
      <SearchIcon
        className="absolute top-1/2 -translate-y-1/2 left-[16px]"
        width="20"
        height="20"
      />
      <Input
        className={cn("px-[44px] h-[48px] mobile:rounded-t-[0px]", {
          "rounded-b-[0px]": !!searchText.trim(),
        })}
        placeholder="Search for docs"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        value={searchText}
        maxLength={256}
        autoFocus
        onChange={handleChange}
      />
      {!!searchText.trim() && (
        <button
          className="absolute top-1/2 -translate-y-1/2 right-[16px]"
          type="button"
          onClick={() => {
            clear();
          }}>
          <XIcon width="16" height="16" />
        </button>
      )}
    </div>
  );
}
