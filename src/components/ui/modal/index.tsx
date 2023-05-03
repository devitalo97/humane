import { useEffect } from 'react'
import ReactDOM from "react-dom";
import * as S from './style'

interface Props {
  children: React.ReactNode
}

export default function Modal({ 
  children 
}: Props) {
  useEffect(() => {
    const body = document.querySelector('body');
    body && (body.style.overflow = 'hidden')
    return () => {
      body && (body.style.overflow = 'auto')
    };
  }, []);
    return <>
      <S.Container>
        <S.Wrapper>
          {children}
        </S.Wrapper>
      </S.Container>,
    </>
  }