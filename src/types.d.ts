
export interface Image {
    url: string | null;
    name: string;
    transformed: boolean;
    rawFile: string | null | File | Blob
}

export interface FileModel { 
    path: string;
    name: string;
    lastModified: number;
    webkitRelativePath: string;
    size: number;
    type: string
}

export interface CloudinaryUploadResponse {
    access_mode: string;
    asset_id: string;
    bytes: number;
    created_at: string;
    etag: string;
    folder: string;
    format: string;
    height: number;
    original_filename: string;
    placeholder: boolean
    public_id: string
    resource_type: 'image' | 'video';
    secure_url: string
    signature: string
    tags: []
    type: string
    url: string
    version: number
    version_id: string
    width: number
}

export type AcceptedFiles = File[]