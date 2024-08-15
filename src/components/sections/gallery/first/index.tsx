import { Inter } from "next/font/google";
import * as S from "./style";
import GalleryCard from "@/components/ui/gallery_card";
import GalleryModal from "@/components/ui/gallery_modal";
import { useState } from "react";
import { Album, gallery, testimonials } from "./data";
import Modal from "@/components/ui/modal";
import { AnimatePresence } from "framer-motion";
import TestimonialCard from "@/components/ui/testimonials_card";

const inter = Inter({ subsets: ["latin"] });

export default function FirstSection() {
  const [album, setAlbum] = useState<Album>({} as Album);
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = (album: Album) => {
    setIsOpen(true);
    setAlbum(album);
  };

  const handleOnClose = () => {
    setIsOpen(false);
    setAlbum({} as Album);
  };

  return (
    <S.Container>
      <S.NavGhost />
      <div className="px-[5%] py-8">
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Depoimentos
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Confira abaixo alguns depoimentos sobre nossos treinamentos, cursos e
          palestras.
        </p>
      </div>
      {Object.entries(testimonials).map(([title, value]) => (
        <>
          <div className="px-[5%] pb-8 flex flex-wrap gap-8">
            <p className="text-base font-semibold leading-7 text-gray-900">
              {title}
            </p>
          </div>
          <div className="px-[5%] pb-8 flex flex-wrap gap-8">
            {value.map((v, index) => (
              <TestimonialCard
                key={index}
                title={v.title}
                url={v.url}
                date={v.date}
                location={v.location}
                type={v.type}
              />
            ))}
          </div>
        </>
      ))}
      <div className="px-[5%] py-8">
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Galeria
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Confira abaixo videos e fotos dos nossos treinamentos, cursos e
          palestras.
        </p>
      </div>
      <div className="px-[5%] pb-8 flex flex-wrap gap-8">
        {gallery.map((card, index) => (
          <GalleryCard
            key={index}
            title={card.title}
            url={card.url}
            date={card.date}
            location={card.location}
            video={card.video}
            onClick={() => handleOnClick(card)}
          />
        ))}
      </div>
      <AnimatePresence>
        {isOpen ? (
          <Modal>
            <GalleryModal album={album} onClose={handleOnClose} />
          </Modal>
        ) : null}
      </AnimatePresence>
    </S.Container>
  );
}
