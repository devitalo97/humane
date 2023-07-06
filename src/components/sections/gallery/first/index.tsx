import { Inter } from 'next/font/google'
import * as S from './style'
import { Carousel } from '@/components/ui/carousel'
import galleryThumb from "@/assets/png/thumb_gallery.png"
import GalleryCard from '@/components/ui/gallery_card'


const inter = Inter({subsets: ['latin']})

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
  ]
  
  return (
    <S.Container>
      <S.NavGhost/>
      <S.Content>
        <Carousel gap={'2em'}>
          {[...cards, ...cards].map((card, index) => <GalleryCard 
              key={index}
              title={card.title}
              thumb={card.thumb}
              description={card.description}
            />)}
        </Carousel>
      </S.Content>
    </S.Container>
  )
}