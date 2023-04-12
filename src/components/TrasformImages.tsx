'use client'
import { useAppSelector } from '@/hooks/useStore'


export default function TransformImages () {
	const images = useAppSelector(state => state.images)
	return (
		<>
			{
				images.transformed
					? <img src={images.url as string} />
					: <div className='border-dashed border-2 border-gray-300 rounded-lg w-[700px] h-[400px] bg-gray-200'></div>
			}
			
		</>
	)
}