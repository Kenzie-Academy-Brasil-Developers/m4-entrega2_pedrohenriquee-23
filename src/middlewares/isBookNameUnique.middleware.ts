import { Request, Response, NextFunction } from 'express';
import { booksDatabase } from '../database/database';

export class IsBookNameUnique {
  static execute(req: Request, res: Response, next: NextFunction) {
    const { name } = req.body;

    // Verifica se já existe um livro com o mesmo nome na base de dados
    const isUnique = !booksDatabase.some((book) => book.name === name);

    if (!isUnique) {
      return res.status(409).json({ error: 'Book already registered.' });
    }

    next();
  }
}
