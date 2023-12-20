import { IBook } from "../interface/books.interfaces";

export const booksDatabase: IBook[] = [];

let id: number = 0;

export const generateId = () => {
    id++
    return id;
}