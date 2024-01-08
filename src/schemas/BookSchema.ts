import { z } from "zod";

export const bookSchema = z.object({
    id: z.number().positive(),
    name: z.string().min(3),
    pages: z.number().min(1),
    category: z.string().optional()
})

export const createBookBodySchema = bookSchema.omit({ id: true });

export const editBookBodySchema = bookSchema.omit({ id: true }).partial();