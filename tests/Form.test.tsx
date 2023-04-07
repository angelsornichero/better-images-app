import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, afterEach, expect, beforeEach } from 'vitest'
import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import 'dropzone/dist/dropzone.css'

function Form () {
	const [selectedFile, setSelectedFiles] = useState([])

	const onDrop = useCallback((acceptedFiles: any) => {
		setSelectedFiles(acceptedFiles.map((file: any) => {
			Object.assign(file, {
				preview: URL.createObjectURL(file)
			})
		}))
		console.log(selectedFile)
	}, [])

	const { getRootProps, getInputProps } = useDropzone({onDrop})
	

	return (
		<>
			<div
				{...getRootProps()}
				id='dropzone' 
				role={'form'}
				className="shadow-2xl border-dashed border-2 border-gray-300 rounded-lg aspect-video w-96 flex items-center justify-center flex-col"
			>
				<p>Drag or drop some files here, or click to select files</p>
				<input {...getInputProps()} />/rules/no-explicit-any
			</div>
			{
				selectedFile?.map((file: any) => {
					<div key={file.preview}>
						<img src={file.preview} />
					</div>
				})
			}
		</>
	)
}

describe('Cloudinary form', () => {
	afterEach(cleanup)
	beforeEach(() => render(<Form />))
	it('should be a function', () => {
		expect(typeof Form).toBe('function')
	})

	it('Form should render', () => {
		expect(screen.getByRole('form')).toBeDefined()
	})

	it('should be render dropzone', () => {
		expect(screen.getAllByText('Drag or drop some files here, or click to select files')).toBeDefined()
	})
}) 