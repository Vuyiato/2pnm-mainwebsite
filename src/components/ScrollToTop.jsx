// Route scroll behavior: reset internal page navigation to the top while preserving intentional hash links.
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() =>
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" }),
      );
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
