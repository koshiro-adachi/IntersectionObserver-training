import { useEffect, useState } from "react";

export const useObserve = (ref) => {
  const [showImage, setShowImage] = useState(false);
  useEffect(() => {
    const cb = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShowImage(true);
          //observer.unobserve(entry.target);
        } else {
          setShowImage(false);
        }
      });
    };
    const options = {
      root: null,
      rootMargin: "-600px 0px",
      threshold: 0
    };
    //rootに先祖要素のdomを設定すると監視対象の場所を先祖に設定できる
    const io = new IntersectionObserver(cb, options);
    io.observe(ref.current);
  }, [ref]);
  return { showImage };
};
