'use client'
import { useAppSelector } from '@/hooks/useStore'
import { useImageActions } from '@/hooks/useImageActions'
import uploadImage from '../services/upload.service'
import cloudinary from '@/config/cloudinary'
import { viesusCorrect } from '@cloudinary/url-gen/actions/adjust'

export default function Button() {
	const { uploadImageAction } = useImageActions()
	const { name, url, rawFile } = useAppSelector(state => state.images)
	const handleClick = async () => {
		const resBody = await uploadImage(rawFile)
		console.log(resBody, resBody.secure_url)
		const imageImproved = cloudinary.image(resBody.public_id).adjust(viesusCorrect())
		console.log(imageImproved.toURL())
		const newUrl = imageImproved.toURL()
		uploadImageAction({ url: newUrl, transformed: true, rawFile, name })
	}

	return (
		<button onClick={handleClick} className={url ? 'bg-gradient-to-r from-blue-700 to-blue-800 p-4 mb-20 font-bold text-2xl text-white rounded-xl' : 'bg-gray-600 p-4 mb-20 font-bold text-2xl text-white rounded-xl'}>Improve the image!</button>
	)
}