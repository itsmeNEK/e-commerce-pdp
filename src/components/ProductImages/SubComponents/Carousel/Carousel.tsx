import Image from 'next/image'
import Style from './Carousel.module.scss'
import IconButton from '@/components/common/buttons/IconButton'
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
    <div className={Style['carousel-container']}>
      {(!isDesktop || lightBox) && (
        <IconButton
          type='button'
          className={`${Style['prev-button']} ${lightBox && Style['prev-button--light-box']}`}
          aria-label='Prev Button'
          onClick={handlePrevClick}
        >
          <PrevSvgIcon aria-hidden />
        </IconButton>
      )}
      <Image
        onClick={handleLightBox}
        priority
        width={500}
        height={500}
        className={Style['large-image']}
        src={images[selectedIndex]?.image as string}
        alt={images[selectedIndex]?.alt as string}
        title='Product Image Large'
      />
      {(!isDesktop || lightBox) && (
        <IconButton
          type='button'
          className={`${Style['next-button']} ${lightBox && Style['next-button--light-box']}`}
          aria-label='Next Button'
          onClick={handleNextClick}
        >
          <NextSvgIcon aria-hidden />
        </IconButton>
      )}
    </div>
  )
}
