import React, { useEffect, useRef, useState } from 'react'
import * as S from './styled'

interface Props {
  children: React.ReactNode[]
}
export const Carousel = (props: Props) => {
  const ref = useRef<any>(null)
  const [onDrag, setOnDrag] = useState<boolean>(false)
  const [clicked, setClicked] = useState<boolean>(false)
  const [dragPoint, setdragPoint] = useState<number>(0)

  const handleForward = (e: any) => {
    e.preventDefault()
    ref.current.scrollLeft+=ref.current.offsetWidth
  }
  
  const handleBack = (e: any) => {
    e.preventDefault()
    ref.current.scrollLeft-=ref.current.offsetWidth
  }

  const handleMouseMove = (e: any) => {
    e.preventDefault()
    if(onDrag){
      const distance = e.clientX - dragPoint;
      ref.current.scrollLeft -= distance;
    }
  }

  const handleMouseDown = (e: any) => {
    e.preventDefault()
    setOnDrag(true)
    setdragPoint(e.clientX)
  }

  const handleMouseUp = (e: any) => {
    e.preventDefault()
    setOnDrag(false)
    setdragPoint(0)
  }

  const handleClick = (e: any) => {
    e.preventDefault()
    setClicked(true)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if(!clicked){
        ref.current.scrollLeft += 280
      }
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [clicked])

  useEffect(() => {
    // Function to handle click outside of ref
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setClicked(false);
      }
    };

    // Add event listener to document
    document.addEventListener('mousedown', handleClickOutside);

    // Remove event listener on cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return <S.Container>
    <S.Wrapper ref={ref}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {props.children.map((item, index) => <S.Item key={index}>{item}</S.Item>)}
    </S.Wrapper>
    {/* <S.Navigation>
      <div onClick={handleBack}>aaaa</div>
      <div onClick={handleForward}>bbbb</div>
    </S.Navigation> */}
  </S.Container>

}