import Image from 'next/image'
import Style from './GridImages.module.scss'
import { TImage } from '@/types/Cart'

type Props = {
  selectedIndex: number
  images: TImage[]
  handleSelectIndex: (index: number) => void
}

export default function GridImages({
  selectedIndex,
  images,
  handleSelectIndex,
}: Props) {
  const onImageClick = (event: React.MouseEvent<HTMLImageElement>) => {
    const index = parseInt(event.currentTarget.dataset.index || '0', 10)
    handleSelectIndex(index)
  }

  return (
    <div className={Style.grind_images_container}>
      {images.map((item: TImage, index: number) => {
        return (
          <Image
            priority
            key={index}
            onClick={onImageClick}
            width={85}
            height={85}
            style={{ objectFit: 'contain' }}
            className={`${Style.grind_images_container__image} ${selectedIndex === index && Style.grind_images_container__image__selected}`}
            src={images[index]?.image as string}
            alt={images[index]?.alt as string}
            data-index={index}
          />
        )
      })}
    </div>
  )
}
