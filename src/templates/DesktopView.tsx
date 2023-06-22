import React, { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "twin.macro";

import AvatarFrame from "@/components/AvatarFrame";
import characterColors from "@/constants/characterColors";

const LARGEST_FRAME = 250;
const SMALLEST_FRAME = 200;
const DesktopView: FC = (props) => {
  return (
    <div tw="w-full min-h-screen flex justify-center items-center">
      <div tw="relative min-w-[64rem] min-h-[48rem]">
        {/* MS: Absolute Assets */}
        <div tw="w-full h-full absolute top-0 left-0">
          <motion.div
            tw="absolute top-0 left-[7.125rem]"
            initial={{ opacity: 0, x: "-120px" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, origin: 1 }}
          >
            <Image
              alt="Left Cloud"
              src="/assets/awan-left.webp"
              width={387}
              height={265}
            />
          </motion.div>
          <motion.div
            tw="absolute top-[5.0625rem] right-8"
            initial={{ opacity: 0, x: "120px" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, origin: 1 }}
          >
            <Image
              alt="Right Cloud"
              src="/assets/awan-right.webp"
              width={387}
              height={309}
            />
          </motion.div>
        </div>
        {/* Relative assets */}
        <div tw="pt-[5.5625rem] relative flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0.5, y: "200px" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, origin: 1 }}
          >
            <Image
              alt="Monas"
              src="/assets/monas.webp"
              width={406}
              height={450}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Image
              alt="Logo"
              src="/assets/logo.webp"
              width={500}
              height={180}
            />
          </motion.div>
          <motion.h1
            tw="font-bold text-orange text-[2.5rem] leading-[2.3125rem] mt-6 uppercase"
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
            tw="absolute bottom-[5.8125rem] left-[1.375rem]"
            initial={{ rotate: 360, x: "-50vw" }}
            animate={{ rotate: 0, x: 0 }}
            transition={{ duration: 1 }}
          >
            <AvatarFrame
              frame={LARGEST_FRAME}
              imageWidth={177}
              imageHeight={208}
              imageUrl="/characters/luna.webp"
              alt="Luna"
              color={characterColors.luna}
            />
          </motion.div>
          <motion.div
            tw="absolute top-[10.3125rem] left-[8.3125rem]"
            initial={{ rotate: -360, x: "-50vw" }}
            animate={{ rotate: 0, x: 0 }}
            transition={{ duration: 1 }}
          >
            <AvatarFrame
              frame={SMALLEST_FRAME}
              imageWidth={150}
              imageHeight={177}
              imageUrl="/characters/indah.webp"
              alt="Indah"
              color={characterColors.indah}
            />
          </motion.div>
          <motion.div
            tw="absolute bottom-[13.625rem] right-[1.375rem]"
            initial={{ rotate: 360, x: "50vw" }}
            animate={{ rotate: 0, x: 0 }}
            transition={{ duration: 1 }}
          >
            <AvatarFrame
              frame={LARGEST_FRAME}
              imageWidth={192}
              imageHeight={227}
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

export default DesktopView;
