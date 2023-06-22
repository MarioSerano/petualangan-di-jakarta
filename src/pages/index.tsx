import React from "react";
import Head from "next/head";
import { useWindowSize } from "usehooks-ts";
import "twin.macro";

import DesktopView from "@/templates/DesktopView";
import MobileView from "@/templates/MobileView";

const Home = () => {
  const { width } = useWindowSize();
  const isMobile = width < 1024;
  return (
    <>
      <Head>
        <title>Tiga Sekawan | Petualangan di Jakarta</title>
        <meta
          name="description"
          content="Penasaran dengan kisah Luna, Indah, dan Rani di Jakarta. Lihat kisahnya di dalam Episode pertama dalam cerita ini!"
        />
      </Head>
      <div tw="h-full bg-darkpurple">
        {isMobile ? <MobileView /> : <DesktopView />}
      </div>
    </>
  );
};

export default Home;
