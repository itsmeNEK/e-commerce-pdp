import { useEffect, useCallback } from 'react'

type Props = {
  keyPress: string
  handleChange: (val?: number | string) => void
}

const usePressKeysImages = ({ keyPress, handleChange }: Props) => {
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
