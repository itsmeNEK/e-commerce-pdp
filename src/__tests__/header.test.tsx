import { render, screen, fireEvent } from '@testing-library/react'
import Header from '@/components/Header/Header'
import { useCartContext } from '@/context/cartContext'
import { TCartItems } from '@/types/Cart'
import '@testing-library/jest-dom/jest-globals'
import '@testing-library/jest-dom'

jest.mock('../context/cartContext')
jest.mock('../hooks/useMediaQuery', () => ({
  useMediaQuery: jest.fn(() => true),
}))
const mockCartItem: TCartItems = {
  product: {
    id: 1,
    company: 'Sneaker Company',
    title: 'Test Product',
    description: 'Test Description',
    price: 100,
    discount: 0.5,
    thumbnail: { image: '', alt: '' },
  },
  quantity: 1,
}
describe('Header component', () => {
  beforeEach(() => {
    useCartContext.mockReturnValue({
      cartItems: [],
      deleteToCart: jest.fn(),
      addToCart: jest.fn(),
    })
  })

  it('renders correctly', () => {
    const { asFragment } = render(<Header />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('displays Menu Button if screen size is less than 765', () => {
    render(<Header />)
    const menuButton = screen.getByLabelText('Menu Button')
    expect(menuButton).toBeInTheDocument()
  })

  it('clicking Close and Menu Button to open and closes sidebar', () => {
    render(<Header />)
    const menuButton = screen.getByLabelText('Menu Button')

    fireEvent.click(menuButton)
    const sidebar = screen.getByTitle('sidebar')
    expect(sidebar).toBeInTheDocument()

    const closeButton = screen.getByLabelText('Close Button')
    fireEvent.click(closeButton)
    expect(sidebar).not.toBeInTheDocument()
  })

  it('useClickOutside to close sidebar', () => {
    render(<Header />)

    const menuButton = screen.getByLabelText('Menu Button')
    fireEvent.click(menuButton)

    const sidebar = screen.getByTitle('sidebar')
    expect(sidebar).toBeInTheDocument()

    fireEvent.mouseDown(document.body)
    expect(sidebar).not.toBeInTheDocument()
  })

  it('clicking Cart Button toggles cart visibility', () => {
    render(<Header />)
    const cartButton = screen.getByLabelText('Cart Button')
    fireEvent.click(cartButton)

    const cartCard = screen.getByTitle('Cart Card')
    expect(cartCard).toBeInTheDocument()

    fireEvent.click(cartButton)
    expect(cartCard).not.toBeInTheDocument()
  })

  it('useClickOutside closes cart', () => {
    render(<Header />)
    const cartButton = screen.getByLabelText('Cart Button')
    fireEvent.click(cartButton)
    const cartCard = screen.getByTitle('Cart Card')
    expect(cartCard).toBeInTheDocument()

    fireEvent.mouseDown(document.body)
    expect(cartCard).not.toBeInTheDocument()
  })

  it('mocks cartItems for CartItems component and check if cart item is in the document', () => {
    useCartContext.mockReturnValue({
      cartItems: [mockCartItem],
    })

    render(<Header />)
    const cartButton = screen.getByLabelText('Cart Button')
    fireEvent.click(cartButton)

    const cartItems = screen.getByTitle('Cart Items')
    expect(cartItems).toBeInTheDocument()
  })
  it('check if cart item is in the document clicking Delete Button calls deleteToCart', () => {
    useCartContext.mockReturnValue({
      cartItems: [mockCartItem],
      deleteToCart: jest.fn(),
    })

    render(<Header />)
    const cartButton = screen.getByLabelText('Cart Button')
    fireEvent.click(cartButton)

    const deleteButton = screen.getByLabelText('Delete Button')
    fireEvent.click(deleteButton)
    expect(useCartContext().deleteToCart).toHaveBeenCalledWith(1)
  })
})
