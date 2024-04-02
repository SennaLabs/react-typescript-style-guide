import { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";
import { Navigate, useLocation, useParams } from "react-router-dom";
import { PreBlock } from "./components/PreBlock";
import { ScrollToTop } from "./components/ScrollToTop";
import { documents } from "@/content";

export function DocumentPage() {
  const [markdown, setMarkdown] = useState("");
  const { slug } = useParams();
  const { pathname } = useLocation();
  const hasDocument = documents.some((doc) => doc.slug === pathname);

  useEffect(() => {
    if (!hasDocument) return;

    import(`@/content/${slug}.md`).then((res) => {
      setMarkdown(res.markdown);
    });
  }, [slug, hasDocument]);

  if (!hasDocument) {
    return <Navigate to="404" />;
  }

  return (
    <div className="markdown-body p-[24px_40px_40px] mobile:p-[16px]">
      <ScrollToTop />
      <Markdown
        options={{
          overrides: {
            pre: PreBlock,
          },
        }}>
        {markdown}
      </Markdown>
    </div>
  );
}
