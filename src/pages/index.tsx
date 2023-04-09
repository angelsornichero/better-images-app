import Head from 'next/head'
import Logo from '../components/Logo'
import Footer from '../components/Footer'
import Form from '../components/Form'
import TitleSection from '@/components/TitleSection'

export default function Home() {
	// console.log('Hello world')
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
				<TitleSection />
				<section className='flex justify-center'>
					<Form />
				</section>
			</main>
			<Footer />
		</>
	)

}
