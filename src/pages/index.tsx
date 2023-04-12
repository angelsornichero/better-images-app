import Head from 'next/head'
import Logo from '../components/Logo'
import Footer from '../components/Footer'
import Form from '../components/Form'
import TitleSection from '@/components/TitleSection'
import TransformImages from '@/components/TrasformImages'
import TransformButton from '@/components/ButtonTransformer'

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
				<section>
					<div className='flex justify-around m-12'>
						<Form />
						<TransformImages />
					</div>
					<div className='flex justify-center'>
						<TransformButton />
					</div>
				</section>
			</main>
			<Footer />
		</>
	)

}
