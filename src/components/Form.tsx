'use client'
import { useCallback, useState } from 'react'
import { useDropzone, FileWithPath } from 'react-dropzone'
import { useImageActions } from '@/hooks/useImageActions'

type file = string | null

export default function Form() {
	const [selectedFile, setSelectedFile] = useState<file>(null)
	const { uploadImageAction } = useImageActions()

	const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
		acceptedFiles.forEach(async (file: FileWithPath) => {
			const fileBlob = new Blob([file])
			console.log(fileBlob)
			//Save
			const urlFile = URL.createObjectURL(file)
			setSelectedFile(urlFile)
			uploadImageAction({ name: file.name, url: urlFile, transformed: false, rawFile: fileBlob as Blob })
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
					? <img className='aspect-video w-[800px] h-[450px] rounded-lg'  src={selectedFile} />
					: <div
						{...getRootProps()}
						id='dropzone' 
						role={'form'}
						className="shadow-2xl border-dashed border-2 border-gray-300 rounded-lg aspect-video w-[800px] h-[450px] flex items-center justify-center flex-col"
					>
						<p>Drag or drop some files here, or click to select files</p>
						<input type={'file'} {...getInputProps()} />
					</div>
			}
		</>
	)
}