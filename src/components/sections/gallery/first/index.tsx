import { Inter } from 'next/font/google'
import * as S from './style'
import { Carousel } from '@/components/ui/carousel'
import galleryThumb from "@/assets/png/thumb_gallery.png"
import GalleryCard from '@/components/ui/gallery_card'
import GalleryCarousel from '@/components/ui/gallery_carousel'
import { useState } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function FirstSection() {
  const cards = [
    {
      title: 'Palestra Apae Nova Venécia',
      description: "Issimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      thumb: galleryThumb
    },
    {
      title: 'Palestra Apae Nova Venécia',
      description: "Issimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      thumb: galleryThumb
    },
    {
      title: 'Palestra Apae Nova Venécia',
      description: "Issimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      thumb: galleryThumb
    },
    {
      title: 'Palestra Apae Nova Venécia',
      description: "Issimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      thumb: galleryThumb
    },
    {
      title: 'Palestra Apae Nova Venécia',
      description: "Issimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      thumb: galleryThumb
    },
    {
      title: 'Palestra Apae Nova Venécia',
      description: "Issimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      thumb: galleryThumb
    },
    {
      title: 'Palestra Apae Nova Venécia',
      description: "Issimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      thumb: galleryThumb
    },
    {
      title: 'Palestra Apae Nova Venécia',
      description: "Issimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      thumb: galleryThumb
    },
    {
      title: 'Palestra Apae Nova Venécia',
      description: "Issimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      thumb: galleryThumb
    }
  ]

  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Container>
      <S.NavGhost />
      <S.Content>
        {[...cards, ...cards].map((card, index) => <GalleryCard
          key={index}
          title={card.title}
          thumb={card.thumb}
          description={card.description}
          onClick={() => setIsOpen(true)}
        />)}
      </S.Content>
      {isOpen && <GalleryCarousel photos={[]} onClose={() => setIsOpen(false)} />}
    </S.Container>
  )
}