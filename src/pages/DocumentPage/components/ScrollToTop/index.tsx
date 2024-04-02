import { useEffect } from "react";
import { useParams } from "react-router-dom";

export function ScrollToTop() {
  const { slug } = useParams();

  useEffect(() => {
    document.querySelector("#appContent")?.scrollTo(0, 0);
  }, [slug]);

  return null;
}
