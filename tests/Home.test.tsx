import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, afterEach } from 'vitest'

const Home = () => {
	return (
		<>
			<main>
				<h1>Better images</h1>
			</main>
			<footer>
				<span>Hecho con cloudinary</span>
			</footer>
		</>
	)
}

describe('Home', () => {
	afterEach(cleanup)
    
	it('should render', () => {
		render(<Home />)
	})

	it('should render title', () => {
		render(<Home/>)
		screen.getByText('Better images')
	})
})