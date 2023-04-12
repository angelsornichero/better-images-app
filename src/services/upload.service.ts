import { Image } from '@/types'

export default async function uploadFile (rawFile: Image['rawFile']) {
	const formData = new FormData()
	formData.append('file', rawFile as string)
	formData.append('upload_preset', process.env.NEXT_PUBLIC_UPLOAD_PRESET as string)
	const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`, {
		method: 'POST',
		body: formData
	})
	const body = await res.json()
	console.log(body)
	return body
}