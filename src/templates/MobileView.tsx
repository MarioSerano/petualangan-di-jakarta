import React, { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "twin.macro";

import AvatarFrame from "@/components/AvatarFrame";
import characterColors from "@/constants/characterColors";

const LARGEST_FRAME = 150;
const SMALLEST_FRAME = 125;
const Mobileview: FC = (props) => {
  return (
    <div tw="w-full min-h-screen flex justify-center items-center">
      <div tw="relative min-w-[22.5rem] min-h-[40rem]">
        <div tw="pt-[14.875rem] relative flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0.5, y: "200px" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, origin: 1 }}
          >
            <Image
              alt="Monas"
              src="/assets/monas.webp"
              width={200}
              height={221}
            />
          </motion.div>
          <motion.div
            tw="mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Image
              alt="Logo"
              src="/assets/logo.webp"
              width={300}
              height={108}
            />
          </motion.div>
          <motion.h1
            tw="font-bold text-orange text-[1.5rem] leading-[1.375rem] mt-3 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            &quot;Petualangan di Jakarta&quot;
          </motion.h1>
        </div>
        {/* Character (Absolute) Assets */}
        <div tw="w-full h-full absolute top-0 left-0">
          <motion.div
            tw="absolute top-[12.1875rem] left-5"
            initial={{ rotate: 360, y: "-50vh" }}
            animate={{ rotate: 0, y: 0 }}
            transition={{ duration: 1 }}
          >
            <AvatarFrame
              frame={SMALLEST_FRAME}
              imageWidth={63}
              imageHeight={74}
              imageUrl="/characters/luna.webp"
              alt="Luna"
              color={characterColors.luna}
            />
          </motion.div>
          <motion.div
            tw="absolute top-[2.0625rem] left-[3.25rem]"
            initial={{ rotate: -360, y: "-50vh" }}
            animate={{ rotate: 0, y: 0 }}
            transition={{ duration: 1 }}
          >
            <AvatarFrame
              frame={LARGEST_FRAME}
              imageWidth={77}
              imageHeight={91}
              imageUrl="/characters/indah.webp"
              alt="Indah"
              color={characterColors.indah}
            />
          </motion.div>
          <motion.div
            tw="absolute top-[7.5rem] right-2"
            initial={{ rotate: 360, y: "-50vh" }}
            animate={{ rotate: 0, y: 0 }}
            transition={{ duration: 1 }}
          >
            <AvatarFrame
              frame={LARGEST_FRAME}
              imageWidth={84}
              imageHeight={98}
              imageUrl="/characters/rani.webp"
              alt="Rani"
              color={characterColors.rani}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Mobileview;
