import { render, screen, fireEvent } from '@testing-library/react'
import QuantityAddCart from '@/components/ProductDetails/SubComponents/QuantityAddCart/QuantityAddCart'
import { useCartContext } from '@/context/cartContext'

jest.mock('../context/cartContext', () => ({
  __esModule: true,
  useCartContext: jest.fn(),
}))

describe('QuantityAddCart component', () => {
  beforeEach(() => {
    useCartContext.mockReturnValue({
      addToCart: jest.fn(),
    })
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<QuantityAddCart />)
    expect(asFragment()).toMatchSnapshot()
  })
  it('increases quantity when Plus Button is clicked and decreases quantity when Minus Button is clicked', () => {
    render(<QuantityAddCart />)
    const plusButton = screen.getByLabelText('Plus Button')
    const quantityDisplay = screen.getByLabelText('Quantity Count')
    const minusButton = screen.getByLabelText('Minus Button')

    fireEvent.click(plusButton)
    expect(quantityDisplay.textContent).toBe('2')

    fireEvent.click(minusButton)

    expect(quantityDisplay.textContent).toBe('1')
  })

  it('triggers addToCart in the context when Add to cart button is clicked', () => {
    render(<QuantityAddCart />)

    const addToCartButton = screen.getByLabelText('Add to cart')

    fireEvent.click(addToCartButton)

    expect(useCartContext().addToCart).toHaveBeenCalledWith(
      expect.any(Object),
      1
    )

    const quantityDisplay = screen.getByLabelText('Quantity Count')
    expect(quantityDisplay.textContent).toBe('1')
  })
})
