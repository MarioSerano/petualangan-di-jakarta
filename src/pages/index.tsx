import React from "react";
import { useWindowSize } from "usehooks-ts";
import "twin.macro";

import DesktopView from "@/templates/DesktopView";
import MobileView from "@/templates/MobileView";

const Home = () => {
  const { width } = useWindowSize();
  const isMobile = width < 1024;
  return (
    <div tw="h-full bg-darkpurple">
      {isMobile ? <MobileView /> : <DesktopView />}
    </div>
  );
};

export default Home;
