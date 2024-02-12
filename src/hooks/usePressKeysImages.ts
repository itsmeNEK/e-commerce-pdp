import { useEffect, useCallback } from 'react'

type usePressKeysImagesProps = {
  keyPress: string
  handleChange: (val?: number | string) => void
}

const usePressKeysImages = ({
  keyPress,
  handleChange,
}: usePressKeysImagesProps) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === keyPress) {
        handleChange()
      }
    },
    [handleChange, keyPress]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])
}

export default usePressKeysImages
