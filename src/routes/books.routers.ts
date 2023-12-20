import { Router } from 'express';
import { BooksControllers } from '../controllers/books.controllers';
import { IsBookNameUnique } from '../middlewares/isBookNameUnique.middleware';
import { IsBookValid } from '../middlewares/isBookValid.middleware';

export const booksRouter = Router();

const booksControllers = new BooksControllers();

booksRouter.post('/', IsBookNameUnique.execute, booksControllers.create);
booksRouter.get('/', booksControllers.getMany);

booksRouter.get('/:id', IsBookValid.execute, booksControllers.getOne);
booksRouter.delete('/:id', IsBookValid.execute, booksControllers.delete);
booksRouter.patch('/:id', IsBookNameUnique.execute,IsBookValid.execute, booksControllers.update);
