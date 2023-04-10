import { useAppDispatch } from './useStore'
import { Image } from '@/types'
import { uploadImage } from '../store/images/slice'

export function useImageActions () {
	const dispatch = useAppDispatch()

	const uploadImageAction = (image: Image) => {
		dispatch(uploadImage(image))
	}

	return { uploadImageAction }
}