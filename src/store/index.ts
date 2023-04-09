import { configureStore } from '@reduxjs/toolkit'
import imagesRedcer from './images/slice'

export const store = configureStore({
	reducer: {
		images: imagesRedcer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch