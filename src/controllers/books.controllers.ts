import { Request, Response } from "express";
import { BooksServices } from "../services/books.services";

interface IBooksControllers {
    create(req: Request, res: Response): Response;
    getMany(req: Request, res: Response): Response;
    getOne(req: Request, res: Response): Response;
    update(req: Request, res: Response): Response;
    delete(req: Request, res: Response): Response;
}

export class BooksControllers implements IBooksControllers {
    
    create(req: Request, res: Response): Response {
        const booksServices = new BooksServices();
        const newBook = booksServices.create(req.body);
        return res.status(201).json(newBook);
    }
    
    getMany(req: Request, res: Response): Response {
        const booksServices = new BooksServices();
        const searchTerm = req.query.search as string | undefined;
        const filteredBooks = searchTerm
            ? booksServices.searchByName(searchTerm)
            : booksServices.getMany();
        return res.status(200).json(filteredBooks || []);
    }

    getOne(req: Request, res: Response): Response {
        const booksServices = new BooksServices();
        const getOne = booksServices.getOne(req.params.id);
        return res.status(200).json(getOne);
    }
    
    update(req: Request, res: Response): Response {
        const booksServices = new BooksServices();
        const update = booksServices.update(req.params.id, req.body);
        return res.status(200).json(update);
    }

    delete(req: Request, res: Response): Response {
        const booksServices = new BooksServices();
        booksServices.delete(req.params.id);
        return res.status(204).send();
    }
}
