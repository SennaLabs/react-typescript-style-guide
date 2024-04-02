import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/Dialog";
import { indexName, searchClient } from "@/lib/searchClient";
import { Configure, InstantSearch } from "react-instantsearch";
import { CustomSearchBox } from "./components/CustomSearchBox";
import { CustomHits } from "./components/CustomHit";
import { useState } from "react";
import { SearchIcon } from "lucide-react";

export function SearchDialog() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="flex items-center gap-x-[8px] h-[48px] w-[250px] border rounded-lg p-[8px_16px] ml-auto bg-gray-3 text-gray-400 hover:text-primary mobile:justify-center mobile:w-[48px] mobile:rounded-full mobile:p-0">
          <SearchIcon className="shrink-0" />
          <span className="mobile:hidden">Search for docs</span>
        </button>
      </DialogTrigger>
      <DialogContent className="w-[500px] p-0 top-[20%] translate-y-0 bg-transparent border-0 mobile:top-0 mobile:w-full">
        <InstantSearch
          future={{ preserveSharedStateOnUnmount: true }}
          searchClient={searchClient}
          indexName={indexName}>
          <CustomSearchBox />
          <CustomHits
            onClose={() => {
              setIsOpen(false);
            }}
          />
          <Configure attributesToSnippet={["content:7"]} />
        </InstantSearch>
      </DialogContent>
    </Dialog>
  );
}
