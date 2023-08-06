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