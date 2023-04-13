'use client'
import { useAppSelector } from '@/hooks/useStore'
import { useState } from 'react'

export default function TransformImages () {
	const [loading, setLoading] = useState<boolean>(false)
	const images = useAppSelector(state => state.images)
	console.log(images)
	return (
		<>
			{
				images.transformed
					? (
						<div className='flex justify-center flex-col'>
							<img src={images.url as string} className='aspect-video w-[800px] h-[450px] rounded-lg' />
							<a download href={images.url as string} className='z-10 cursor-pointer mx-20 text-2xl my-4 font-bold text-white bg-blue-700 rounded-xl text-center p-4 '>Download the image</a>
						</div>
					)
					: <div className='border-dashed border-2 border-gray-300 rounded-lg w-[800px] h-[450px] bg-gray-200'></div>
			}
			
		</>
	)
}