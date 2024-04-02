import { PropsWithChildren } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";

export function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-full h-full">
      <Header />
      <div className="h-[calc(100dvh-80px)] overflow-y-auto">
        {children}
        <Footer />
      </div>
    </div>
  );
}
