
export interface Photos {
    list: Photo[];
    total: number;
    page: number;
}

export interface Photo {
    id: string;
    url: string;
    title: string;
}
