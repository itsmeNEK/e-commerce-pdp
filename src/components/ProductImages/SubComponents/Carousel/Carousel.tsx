import Image from 'next/image'
import Style from './Carousel.module.scss'
import NavigationButton from '@/components/common/buttons/NavigationButton'
import NextSvgIcon from '@/components/common/svg/NextSvgIcon'
import PrevSvgIcon from '@/components/common/svg/PrevSvgIcon'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { TImage } from '@/types/Cart'

type Props = {
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
}: Props) {
  const isMobile = useMediaQuery(765)
  const handleNextClick = () => {
    handleIndexChange(1)
  }
  const handlePrevClick = () => {
    handleIndexChange(-1)
  }
  return (
    <div
      className={`${Style.carousel_container} ${isMobile && Style.carousel_mobile}`}
    >
      {(isMobile || lightBox) && (
        <NavigationButton
          type='button'
          className={`${Style.prev_button} ${lightBox && Style.prev_button_lightbox}`}
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
        className={Style.large_image}
        src={images[selectedIndex]?.image as string}
        alt={images[selectedIndex]?.alt as string}
      />
      {(isMobile || lightBox) && (
        <NavigationButton
          type='button'
          className={`${Style.next_button} ${lightBox && Style.next_button_lightbox}`}
          aria-label='Next Button'
          onClick={handleNextClick}
        >
          <NextSvgIcon aria-hidden />
        </NavigationButton>
      )}
    </div>
  )
}
