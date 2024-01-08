import { Router } from 'express';
import { BooksControllers } from '../controllers/books.controllers';
import { IsBookNameUnique } from '../middlewares/isBookNameUnique.middleware';
import { IsBookValid } from '../middlewares/isBookValid.middleware';
import { ValidateRequest } from '../middlewares/validateRequest.middleware';
import { createBookBodySchema, editBookBodySchema } from '../schemas/BookSchema';

export const booksRouter = Router();

const booksControllers = new BooksControllers();

booksRouter.post('/', ValidateRequest.execute({ body: createBookBodySchema }), IsBookNameUnique.execute, booksControllers.create);
booksRouter.get('/', booksControllers.getMany);
booksRouter.get('/:id', IsBookValid.execute, booksControllers.getOne);
booksRouter.delete('/:id', IsBookValid.execute, booksControllers.delete);

booksRouter.patch('/:id', ValidateRequest.execute({ body: editBookBodySchema }), IsBookNameUnique.execute,IsBookValid.execute, booksControllers.update);
