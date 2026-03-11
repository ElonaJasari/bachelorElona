const STORAGE_KEY = 'livsmestring-progress';

export function getProgress(){
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : { videos: {} };
}

export function saveProgress(progress: any){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}