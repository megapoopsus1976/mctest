import { FSElement,FSFile,FSDirectory } from "./fselem";

export const FSList:FSElement[] = [
    <FSDirectory>{name: 'files', elements: [
        <FSDirectory>{name: 'images', elements: [
            <FSFile>{name:'image1.txt', 'content' : 'image1.txt content'},
            <FSFile>{name:'image2.txt', 'content' : 'image2.txt content'}
        ]},
        <FSFile>{name:'file1.txt', 'content' : 'file1.txt content'},
        <FSFile>{name:'file2.txt', 'content' : 'file2.txt content'}
    ]},
    <FSFile>{name: 'root_file1.txt', content: 'root_file1.txt content'},
    <FSFile>{name: 'root_file2.txt', content: 'root_file2.txt content'}
]
