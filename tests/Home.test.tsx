import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, afterEach, beforeEach } from 'vitest'
import Home from '../src/pages/index'


describe('Home', () => {
	afterEach(cleanup)
	beforeEach(() => render(<Home />))
	
	it('should render title', () => {
		screen.getByText('Better Images')
	})

	it('should render footer', () => {
		screen.getByText('Made with')
	})
})