export interface FSElement {
    name: string;
}

export interface FSFile extends FSElement {
    content:string;
}

export interface FSDirectory extends FSElement {
    elements:FSElement[];
}

export const FSElementEmpty:FSElement = {name: ''};

export class FSUtil {
    static isDir(elem:FSElement):boolean {
        return 'elements' in elem;      
    }
}
