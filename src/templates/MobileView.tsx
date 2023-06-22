import React, { FC } from "react";
import Image from "next/image";
import "twin.macro";

import AvatarFrame from "@/components/AvatarFrame";
import characterColors from "@/constants/characterColors";

const LARGEST_FRAME = 150;
const SMALLEST_FRAME = 125;
const Mobileview: FC = (props) => {
  return (
    <div tw="w-full min-h-screen flex justify-center items-center">
      <div tw="relative min-w-[22.5rem] min-h-[40rem]">
        {/* MS: Absolute Assets */}
        {/* <div tw="w-full h-full absolute top-0 left-0">
          <div tw="absolute top-0 left-[7.125rem]">
            <Image
              alt="Left Cloud"
              src="/assets/awan-left.png"
              width={387}
              height={265}
            />
          </div>
          <div tw="absolute top-[5.0625rem] right-8">
            <Image
              alt="Right Cloud"
              src="/assets/awan-right.webp"
              width={387}
              height={309}
            />
          </div>
        </div> */}
        {/* Relative assets */}
        <div tw="pt-[14.875rem] relative flex flex-col justify-center items-center">
          <div>
            <Image
              alt="Monas"
              src="/assets/monas.webp"
              width={200}
              height={221}
            />
          </div>
          <div tw="mt-3">
            <Image
              alt="Logo"
              src="/assets/logo.webp"
              width={300}
              height={108}
            />
          </div>
          <h1 tw="font-bold text-orange text-[1.5rem] leading-[1.375rem] mt-3 uppercase">
            &quot;Petualangan di Jakarta&quot;
          </h1>
        </div>
        {/* Character (Absolute) Assets */}
        <div tw="w-full h-full absolute top-0 left-0">
          <div tw="absolute top-[12.1875rem] left-5">
            <AvatarFrame
              frame={SMALLEST_FRAME}
              imageWidth={63}
              imageHeight={74}
              imageUrl="/characters/luna.webp"
              alt="Luna"
              color={characterColors.luna}
            />
          </div>
          <div tw="absolute top-[2.0625rem] left-[3.25rem]">
            <AvatarFrame
              frame={LARGEST_FRAME}
              imageWidth={77}
              imageHeight={91}
              imageUrl="/characters/indah.webp"
              alt="Indah"
              color={characterColors.indah}
            />
          </div>
          <div tw="absolute top-[7.5rem] right-2">
            <AvatarFrame
              frame={LARGEST_FRAME}
              imageWidth={84}
              imageHeight={98}
              imageUrl="/characters/rani.webp"
              alt="Rani"
              color={characterColors.rani}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobileview;
