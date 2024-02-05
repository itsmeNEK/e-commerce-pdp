import Image from 'next/image'
import Style from './Carousel.module.scss'
import NavigationButton from '@/components/common/buttons/NavigationButton'
import NextSvgIcon from '@/components/common/svg/NextSvgIcon'
import PrevSvgIcon from '@/components/common/svg/PrevSvgIcon'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { TImage } from '@/types/Cart'

type CarouselProps = {
  selectedIndex: number
  images: TImage[]
  lightBox?: boolean
  handleIndexChange: (increment: number) => void
  handleLightBox?: () => void
}

export default function Carousel({
  selectedIndex,
  lightBox,
  images,
  handleIndexChange,
  handleLightBox,
}: CarouselProps) {
  const isDesktop = useMediaQuery(765)
  const handleNextClick = () => {
    handleIndexChange(1)
  }
  const handlePrevClick = () => {
    handleIndexChange(-1)
  }
  return (
    <div
      className={`${Style['carousel-container']} ${isDesktop && Style['carousel-desktop']}`}
    >
      {(!isDesktop || lightBox) && (
        <NavigationButton
          type='button'
          className={`${Style['prev-button']} ${lightBox && Style['prev-button--lightbox']}`}
          aria-label='Prev Button'
          onClick={handlePrevClick}
        >
          <PrevSvgIcon aria-hidden />
        </NavigationButton>
      )}
      <Image
        onClick={handleLightBox}
        priority
        width={500}
        height={700}
        className={Style['large-image']}
        src={images[selectedIndex]?.image as string}
        alt={images[selectedIndex]?.alt as string}
      />
      {(!isDesktop || lightBox) && (
        <NavigationButton
          type='button'
          className={`${Style['next-button']} ${lightBox && Style['next-button--lightbox']}`}
          aria-label='Next Button'
          onClick={handleNextClick}
        >
          <NextSvgIcon aria-hidden />
        </NavigationButton>
      )}
    </div>
  )
}
