import { PropsWithChildren } from "react";
import { Sidebar } from "../Sidebar";

export function DocumentLayout({ children }: PropsWithChildren) {
  return (
    <div className="grid grid-cols-[256px_1fr] mx-auto max-w-[1536px] h-[calc(100dvh-80px)] overflow-y-auto tablet-mobile:grid-cols-1">
      <Sidebar className="tablet-mobile:hidden" />
      <div id="appContent" className="h-full overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
