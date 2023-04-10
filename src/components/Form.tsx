'use client'
import { useCallback, useState } from 'react'
import { useDropzone, FileWithPath } from 'react-dropzone'
import { useImageActions } from '@/hooks/useImageActions'

type file = string | null

export default function Form() {
	const [selectedFile, setSelectedFile] = useState<file>(null)
	const { uploadImageAction } = useImageActions()

	const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
		acceptedFiles.forEach((file: FileWithPath) => {
			const urlFile = URL.createObjectURL(file)
			console.log(urlFile)
			setSelectedFile(urlFile)
			uploadImageAction({ name: file.name, url: urlFile })
		})
		
	}, [])

	const { getRootProps, getInputProps } = useDropzone({
		onDrop, 
		maxFiles:1, 
		accept: 
		{'image/png': ['.png', '.jpg', '.webpg']}
	})
	

	return (
		<>
			{
				selectedFile !== null 
					? <img className='aspect-video w-[700px] h-[400px] rounded-lg'  src={selectedFile} />
					: <div
						{...getRootProps()}
						id='dropzone' 
						role={'form'}
						className="shadow-2xl border-dashed border-2 border-gray-300 rounded-lg aspect-video w-[700px] h-[400px] flex items-center justify-center flex-col"
					>
						<p>Drag or drop some files here, or click to select files</p>
						<input type={'file'} {...getInputProps()} />
					</div>
			}
		</>
	)
}