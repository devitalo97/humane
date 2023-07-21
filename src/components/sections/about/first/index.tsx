import { Inter } from 'next/font/google'
import * as S from './style'

export default function FirstSection() {

  return (
    <S.Container>
      <S.NavGhost />
      <S.Content>
        sobre
      </S.Content>
    </S.Container>
  )
}