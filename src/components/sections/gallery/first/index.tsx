import { Inter } from 'next/font/google'
import * as S from './style'
import GalleryCard from '@/components/ui/gallery_card'
import GalleryModal from '@/components/ui/gallery_modal'
import { useState } from 'react'
import { Album, gallery } from './data'


const inter = Inter({ subsets: ['latin'] })

export default function FirstSection() {

  const [album, setAlbum] = useState<Album>({} as Album)
  const [isOpen, setIsOpen] = useState(false)

  const handleOnClick = (album: Album) => {
    setIsOpen(true)
    setAlbum(album)
  }

  const handleOnClose = () => {
    setIsOpen(false)
    setAlbum({} as Album)
  }

  return (
    <S.Container>
      <S.NavGhost />
      <S.Content>
        {[...gallery, ...gallery].map((card, index) => <GalleryCard
          key={index}
          title={card.title}
          thumb={card.thumb}
          description={card.description}
          onClick={() => handleOnClick(card)}
        />)}
      </S.Content>
      {isOpen && <GalleryModal album={album} onClose={handleOnClose} />}
    </S.Container>
  )
}