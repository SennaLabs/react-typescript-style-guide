import { MarkdownType } from "@/models/MarkdownType";
import {
  Snippet,
  useHits,
  useInstantSearch,
  useSearchBox,
} from "react-instantsearch";
import { Link } from "react-router-dom";
import { LoadingIndicator } from "../LoadingIndicator";
import { CustomHitProps } from "./interface";

export function CustomHits({ onClose }: CustomHitProps) {
  const { hits } = useHits<MarkdownType>();
  const { query } = useSearchBox();
  const { status } = useInstantSearch();

  if (!query.trim()) {
    return null;
  }

  return (
    <div className="overflow-y-auto h-full max-h-[460px] bg-white rounded-b-[8px] mobile:max-h-[80dvh]">
      {status === "loading" || status === "stalled" ? (
        <LoadingIndicator />
      ) : hits.length > 0 ? (
        <ul>
          {hits.map((hit) => (
            <li key={hit.objectID} className="group">
              <Link
                to={`/docs${hit.slug}`}
                onClick={() => {
                  onClose();
                }}>
                <div className="p-[16px] hover:bg-secondary">
                  <h3 className="text-[14px] font-semibold">{hit.title}</h3>
                  <Snippet
                    className="text-[14px]"
                    hit={hit}
                    attribute="content"
                    classNames={{
                      highlighted:
                        "text-primary font-semibold bg-secondary rounded-[2px] underline",
                    }}
                  />
                </div>
                <hr className="mx-[16px] border-b border-secondary group-last-of-type:border-b-0" />
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex items-center justify-center text-[14px] p-[24px]">
          No results found.
        </div>
      )}
    </div>
  );
}
