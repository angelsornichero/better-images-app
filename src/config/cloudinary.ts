import { Cloudinary } from '@cloudinary/url-gen'

const cloudinary = new Cloudinary({
	cloud: {
		cloudName: process.env.NEXT_PUBLIC_CLOUD_NAME,
	},
	url: {
		secure: true
	}
})

export default cloudinary