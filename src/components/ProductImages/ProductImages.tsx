'use client'
import { useCallback, useState } from 'react'
import Style from './ProductImages.module.scss'
import Carousel from './SubComponents/Carousel/Carousel'
import GridImages from './SubComponents/GridImages/GridImages'
import LightBox from './SubComponents/LightBox/LightBox'
import { useCartContext } from '@/context/cartContext'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import usePressKeysImages from '@/hooks/usePressKeysImages'

export default function ProductImages() {
  const { smallImages, largeImages } = useCartContext()
  const [selectedIndex, setSelectedIndex] = useState(0)
  const isDesktop = useMediaQuery(765)
  const [showLightBox, setShowLightBox] = useState(false)

  const handleSelectIndex = (index: number) => {
    setSelectedIndex(index)
  }
  const handleIndexChange = useCallback(
    (increment: number) => {
      setSelectedIndex((prev) => {
        const newIndex =
          (prev + increment + largeImages.length) % largeImages.length
        return newIndex
      })
    },
    [largeImages]
  )
  const handleClose = (val?: boolean) => {
    if (!val || !isDesktop) {
      return setShowLightBox(false)
    }
    setShowLightBox(!showLightBox)
  }

  usePressKeysImages({
    keyPress: 'ArrowLeft',
    handleChange: () => handleIndexChange(-1),
  })
  usePressKeysImages({
    keyPress: 'ArrowRight',
    handleChange: () => handleIndexChange(1),
  })
  usePressKeysImages({
    keyPress: 'Escape',
    handleChange: () => handleClose(false),
  })

  return (
    <section className={Style['product-images-container']}>
      {largeImages?.length > 0 && (
        <Carousel
          handleLightBox={handleClose}
          handleIndexChange={handleIndexChange}
          selectedIndex={selectedIndex}
          images={largeImages}
        />
      )}
      {isDesktop && (
        <GridImages
          selectedIndex={selectedIndex}
          images={smallImages}
          handleSelectIndex={handleSelectIndex}
        />
      )}
      {isDesktop && showLightBox && (
        <LightBox handleClose={handleClose}>
          {largeImages?.length > 0 && (
            <>
              <Carousel
                lightBox={showLightBox}
                handleIndexChange={handleIndexChange}
                selectedIndex={selectedIndex}
                images={largeImages}
              />
              <GridImages
                selectedIndex={selectedIndex}
                images={smallImages}
                handleSelectIndex={handleSelectIndex}
              />
            </>
          )}
        </LightBox>
      )}
    </section>
  )
}
