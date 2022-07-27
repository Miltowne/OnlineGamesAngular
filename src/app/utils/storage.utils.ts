export class StorageUtil {
    // saves the value to storage
    public static storageSave<T>(key: string, value: T): void
    {
        sessionStorage.setItem(key, JSON.stringify(value));
    }
    // read the value from the storage
    public static storageRead<T>(key: string): T | undefined{
        const storedValue = sessionStorage.getItem(key);
        try {
            if(storedValue){
                return JSON.parse(storedValue) as T;
            }
            else{
                return undefined;
            }
            
        } catch (error) {
            sessionStorage.removeItem(key);
            console.log(error);
            
            return undefined;
        }
    }
}

    
