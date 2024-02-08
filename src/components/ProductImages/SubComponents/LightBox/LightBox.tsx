import React, { ReactNode, useRef } from 'react'
import Style from './LightBox.module.scss'
import PrimaryButton from '@/components/common/buttons/PrimaryButton'
import CloseSvgIcon from '@/components/common/svg/CloseSvgIcon'
import { useClickOutside } from '@/hooks/useOnClickOutside'

type LightBoxProps = {
  children: ReactNode
  handleClose: () => void
}

export default function LightBox({ children, handleClose }: LightBoxProps) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  useClickOutside([containerRef, closeButtonRef], handleClose)
  return (
    <div className={Style['light-box']}>
      <div
        ref={containerRef}
        className={Style['light-box__container']}
        data-testid='light-box'
      >
        <PrimaryButton
          className={Style['light-box__container__close']}
          ref={closeButtonRef}
          type='button'
          onClick={handleClose}
          aria-label='Close Button'
        >
          <CloseSvgIcon aria-hidden />
        </PrimaryButton>
        {children}
      </div>
    </div>
  )
}
