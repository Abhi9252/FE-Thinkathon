import { render, screen } from '@testing-library/react'
import Home from '../pages/Home/index'

describe('Test the home component', () => {
  test('Render home text is available or not', () => {
    const { getByText } = render(<Home />)
    const homeText = screen.getByTestId('test-12')
    expect(getByText('Use class to make any table responsive across all viewports. Responsive tables allow tables to be scrolled horizontally with ease.')).toBeTruthy()
  })
})
