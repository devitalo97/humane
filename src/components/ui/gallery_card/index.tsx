import Image, { StaticImageData } from "next/image";
import * as S from "./style";
import { Inter } from "next/font/google";
import { useAnimation } from "framer-motion";
import { CalendarIcon, MapPinIcon } from "@heroicons/react/24/outline";

interface Props {
  title: string;
  url: StaticImageData | string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  video?: boolean;
  date: string;
  location: string;
}
const inter = Inter({ subsets: ["latin"] });

export default function GalleryCard({
  title,
  url,
  onClick,
  date,
  location,
  video,
}: Props) {
  const animation = useAnimation();
  return (
    <S.Container>
      <S.Wrapper onClick={!video ? onClick : undefined}>
        {!video && (
          <div style={{ position: "relative" }}>
            <Image
              src={url}
              alt="icon"
              fill
              style={{
                borderRadius: "1em",
                border: "none",
                objectFit: "cover",
              }}
            />
          </div>
        )}
        {video && (
          <div
            style={{
              position: "relative",
              overflow: "hidden",
            }}
          >
            <video
              controls
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                borderRadius: "1em",
              }}
            >
              <source src={url as string} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        <S.TextContent bottom={!video}>
          <S.TextLG style={inter.style}>{title}</S.TextLG>
          <div
            style={{ display: "flex", justifyItems: "flex-start", gap: ".5em" }}
          >
            <S.TextSM
              style={{
                ...inter.style,
                display: "flex",
                justifyItems: "flex-start",
                gap: ".5em",
              }}
            >
              <CalendarIcon style={{ width: "16px", height: "16px" }} />
              {date}
            </S.TextSM>
            <S.TextSM
              style={{
                ...inter.style,
                display: "flex",
                justifyItems: "flex-start",
                gap: ".5em",
              }}
            >
              <MapPinIcon style={{ width: "16px", height: "16px" }} />{" "}
              {location}
            </S.TextSM>
          </div>
        </S.TextContent>
      </S.Wrapper>
    </S.Container>
  );
}
