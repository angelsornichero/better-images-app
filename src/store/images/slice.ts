import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Image } from '@/types'

const initialState: Image = { url: null, name: 'file', transformed: false, rawFile: null }

export const imagesSlice = createSlice({
	name: 'image',
	initialState,
	reducers: {
		uploadImage: (state, action: PayloadAction<Image>) => {
			const { name, url, rawFile } = action.payload
			state.name = name
			state.url = url
			state.rawFile = rawFile
			return state
		}
	} 
})

export default imagesSlice.reducer

export const { uploadImage } = imagesSlice.actions