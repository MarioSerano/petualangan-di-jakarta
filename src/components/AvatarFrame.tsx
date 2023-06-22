import React, { FC } from "react";
import Image from "next/image";
import tw, { css } from "twin.macro";

type AvatarFrameProps = {
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
  frame: number;
  color: string;
  alt: string;
};

const AvatarFrame: FC<AvatarFrameProps> = (props) => {
  const { imageUrl, imageWidth, imageHeight, frame, alt, color } = props;

  return (
    <div
      css={[
        css`
          min-width: ${frame}px;
          min-height: ${frame}px;
          width: ${frame}px;
          height: ${frame}px;
          background: ${color};
        `,
        tw`rounded-full flex justify-center items-center`,
      ]}
    >
      <Image alt={alt} src={imageUrl} width={imageWidth} height={imageHeight} />
    </div>
  );
};

export default AvatarFrame;
