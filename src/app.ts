import express, { json } from "express";
import { booksRouter } from "./routes/books.routers";
import { HandleErrors } from "./errors/handleErrors.middlewares";

export const app = express();

app.use(json());

app.use("/books", booksRouter);

app.use(HandleErrors.execute);
