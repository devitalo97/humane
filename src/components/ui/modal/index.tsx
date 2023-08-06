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
    const modalElement = document.getElementById('__modal')
    if (modalElement) {
      modalElement.style.position = 'absolute'
      modalElement.style.inset = '0'
      modalElement.style.zIndex = '2000'
    }
    return () => {
      if (modalElement) {
        modalElement.style.position = 'unset'
        modalElement.style.inset = 'unset'
        modalElement.style.zIndex = 'unset'
      } 
      body && (body.style.overflow = 'auto')
    };
  }, []);
  return ReactDOM.createPortal(
    <S.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <S.Wrapper>
        {children}
      </S.Wrapper>
    </S.Container>,
    document.getElementById('__modal') as HTMLElement
  );
}