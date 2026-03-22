import { useRef } from "react";
import Cardlist from "./CardList";

const ScrollBox = () => {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className=" w-full p-6 my-10 ">
      <Cardlist container={containerRef} />
    </div>
  );
};

export default ScrollBox;
