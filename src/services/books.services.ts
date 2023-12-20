import { booksDatabase, generateId } from "../database/database";
import { IBook } from "../interface/books.interfaces"; 

interface IBooksServices{
    create(body: Omit<IBook, "id"| "createdAt"| "updatedAt" >): IBook;
    getMany(): IBook[];
    getOne(id: string): IBook;
    update(id: string, body: Partial<{ name?: string; pages?: number; category?: string }>): IBook;
    delete(id: string): void;
}

export class BooksServices implements IBooksServices{
    create(body: Omit<IBook, "id" | "createdAt" | "updatedAt">): IBook {
        const date = new Date();
        const newBook: IBook = {
            id: generateId(),
            name: body.name,
            category: body.category,
            pages: body.pages,
            createdAt: date,
            updatedAt: date,
        };

        booksDatabase.push(newBook);

        return newBook;
    };

    getMany(): IBook[] {
        const bookList = booksDatabase;
        return bookList; 
    };
 
    getOne(id: string): IBook {
        const book = booksDatabase.find(book => book.id === Number(id)) as IBook;

        return book;
    };

    update(id: string, body: Partial<{ name?: string; pages?: number; category?: string }>): IBook {
        const currentBook = booksDatabase.find((book) => book.id === Number(id)) as IBook;

        const date = new Date();

        const newBook = {...currentBook, ...body, updatedAt: date};

        const index = booksDatabase.findIndex(book => book.id === Number(id));

        booksDatabase.splice(index, 1, newBook);

        return newBook;
    };

    delete(id: string): void {
        const index = booksDatabase.findIndex(book => book.id === Number(id));

        booksDatabase.splice(index, 1);
    };

};