import Head from 'next/head'
import Logo from '../components/Logo'
import Footer from '../components/Footer'
import Form from '../components/Form'
import TitleSection from '@/components/TitleSection'

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
				<TitleSection />
				<section className='flex justify-around m-16'>
					<Form />
					<div className='border-dashed border-2 border-gray-300 rounded-lg w-[700px] h-[400px] bg-gray-200'></div>
				</section>
			</main>
			<Footer />
		</>
	)

}
