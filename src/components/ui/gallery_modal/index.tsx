import Image from "next/image";
import * as S from "./style";
import { RiCloseLine } from "react-icons/ri";
import { Album } from "@/components/sections/gallery/first/data";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { animations } from "./data";

interface Props {
  album: Album;
  onClose: Function;
}

export default function GalleryModal({ album, onClose }: Props) {
  const [currentPhoto, setCurrentPhoto] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const photos = album.photos ?? [];
  const handleChangePhoto = (type: "prev" | "next") => {
    switch (type) {
      case "prev":
        setDirection(-1);
        setCurrentPhoto((prev) => {
          if (prev - 1 < 0) return photos.length - 1;
          return prev - 1;
        });
        break;
      case "next":
        setDirection(1);
        setCurrentPhoto((prev) => {
          if (prev + 1 > photos.length - 1) return 0;
          return prev + 1;
        });
        break;
    }
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Header>
          <S.Title>{album?.title}</S.Title>
          <RiCloseLine color="white" onClick={() => onClose()} />
        </S.Header>
        <AnimatePresence initial={false} custom={direction}>
          {album?.photos?.map(
            (card, index) =>
              index === currentPhoto && (
                <S.CardContainer
                  key={index}
                  custom={direction}
                  {...animations().card}
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                >
                  <S.CardContent>
                    <Image
                      src={card.src}
                      fill
                      alt="a"
                      placeholder="blur"
                      blurDataURL={rgbDataURL(9, 33, 80)}
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </S.CardContent>
                  <S.CardFooter>
                    {/* <S.Text>{card.description}</S.Text> */}
                  </S.CardFooter>
                </S.CardContainer>
              )
          )}
          <S.ModalControl>
            <div className="prev" onClick={() => handleChangePhoto("prev")}>
              {"‣"}
            </div>
            <div className="next" onClick={() => handleChangePhoto("next")}>
              {"‣"}
            </div>
          </S.ModalControl>
        </AnimatePresence>
      </S.Wrapper>
    </S.Container>
  );
}

const rgbDataURL = (r: number, g: number, b: number) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

const keyStr =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
