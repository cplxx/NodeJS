import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get('/livros/', LivroController.listarLivros);
routes.get('/livros/:id', LivroController.listarLivrosPorId);
routes.post('/livros/', LivroController.cadastrarLivros);
routes.put('/livros/:id', LivroController.AtualizarLivro);
routes.delete('/livros/:id', LivroController.deletarLivro)


export default routes