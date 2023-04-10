import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Image } from '@/types'

const initialState: Image = {url: null, name: 'file'}

export const imagesSlice = createSlice({
	name: 'image',
	initialState,
	reducers: {
		uploadImage: (state, action: PayloadAction<Image>) => {
			const { name, url } = action.payload
			state.name = name
			state.url = url
			return state
		}
	} 
})

export default imagesSlice.reducer

export const { uploadImage } = imagesSlice.actions