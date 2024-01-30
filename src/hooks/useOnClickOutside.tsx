import { useCallback, useEffect } from 'react'

export const useClickOutside = (
  refs: React.RefObject<HTMLElement>[],
  callback: (event: MouseEvent) => void
) => {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      const targetElement = event.target as HTMLElement

      if (!refs.some((ref) => ref?.current?.contains(targetElement))) {
        callback(event)
      }
    },
    [refs, callback]
  )

  useEffect(() => {
    if (refs.length === 0) {
      return
    }

    if (typeof window !== 'undefined') {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      if (typeof window !== 'undefined') {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [refs, handleClickOutside])
}
