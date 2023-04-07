import Head from 'next/head'
import Logo from '../components/Logo'
import Footer from '../components/Footer'
import Form from '../components/Form'

export default function Home() {
	return (
		<>
			<Head>
				<title>Better Images</title>
				<meta name="description" content="An app for enhancment your images with IA" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Logo />
			<main>
				<section>
					<h1 className='text-7xl font-bold text-center p-5 '>Better Images</h1>
					<h3 className='text-4xl font-medium text-center p-4 text-blue-800'>Improve your images and make them lovely</h3>
				</section>
				<section className='flex justify-center'>
					<Form />
				</section>
			</main>
			<Footer />
		</>
	)

}
