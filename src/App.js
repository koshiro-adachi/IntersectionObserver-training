import { useRef } from "react";
import "./styles.css";
import { useObserve } from "./useObserve";
import classNames from "classnames";

export default function App() {
  const observeRef = useRef();
  const { showImage } = useObserve(observeRef);
  const sepalateStyle = classNames(
    showImage ? { in: true, out: false } : { in: true, out: true }
  );
  return (
    <div className="App">
      <div ref={observeRef} className={sepalateStyle}></div>
    </div>
  );
}
