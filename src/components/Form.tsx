'use client'
import { useCallback, useState } from 'react'
// import { Cloudinary } from '@cloudinary/url-gen'
import { useDropzone } from 'react-dropzone'

type file = string | null

export default function Form() {
	const [selectedFile, setSelectedFile] = useState<file>(null)

	const onDrop = useCallback((acceptedFiles: any) => {
		acceptedFiles.forEach((file: any) => {
			const urlFile = URL.createObjectURL(file)
			console.log(urlFile)
			setSelectedFile(urlFile)
		})
		
	}, [])
	const { getRootProps, getInputProps } = useDropzone({
		onDrop, 
		maxFiles:1, 
		accept: 
		{'image/png': ['.png', '.jpg']}
	})
	

	return (
		<>
			{
				selectedFile !== null 
					? <img className='aspect-video w-96'  src={selectedFile} />
					: <div
						{...getRootProps()}
						id='dropzone' 
						role={'form'}
						className="shadow-2xl border-dashed border-2 border-gray-300 rounded-lg aspect-video w-96 flex items-center justify-center flex-col"
					>
						<p>Drag or drop some files here, or click to select files</p>
						<input type={'file'} {...getInputProps()} />
					</div>
			}
		</>
	)
}