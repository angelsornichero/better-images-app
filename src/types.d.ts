
export interface Image {
    url: string | null;
    name: string
}

export interface File { 
    path: string;
    name: string;
    lastModified: number;
    webkitRelativePath: string;
    size: number;
    type: string
}

export type AcceptedFiles = File[]