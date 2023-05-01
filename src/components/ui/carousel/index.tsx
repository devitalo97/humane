import React, { useState } from 'react'

export const Carousel = (props: {items: React.ReactNode[]}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  return <>
    {props.items.filter((_, index) => index === currentIndex).map(item => 1)}
  </>

}