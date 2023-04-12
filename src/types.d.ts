
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

export type AcceptedFiles = File[]