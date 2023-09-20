import livro from "../models/Livro.js";

class LivroController {
  static async listarLivros (req, res){
    try {
      const listaLivros = await livro.find({})
      res.status(200).json(listaLivros)
    } catch {
      res.status(500).json({Message:`${erro.message} - falha na requisiçao`})
    }
  }

  static async cadastrarLivros(req, res){
    try {
      const novoLivro = await livro.create(req.body)
      res.status(201).json({Message: 'criado com sucesso', livro: novoLivro})
    } catch (erro){
      res.status(500).json({Message:`${erro.message} - falha ao cadastrar livro`})
    }
  }

  static async listarLivrosPorId (req,res){
    try {
      const id = req.params.id
      const livroEncotrado = await livro.findById(id)
      res.status(200).json(livroEncotrado)
    } catch (erro){
      res.status(500).json({Message:`${erro.message} - falha ao cadastrar livro`})
    }
  }

  static async AtualizarLivro (req,res){
    try {
      const id = req.params.id
      await livro.findByIdAndUpdate(id,req.body)
      res.status(200).json({message: "livro atualizado"})
    } catch (erro){
      res.status(500).json({Message:`${erro.message} - falha ao atualizar livro`})
    }
  }

  static async deletarLivro (req,res){
    try {
      const i = req.params.id
      await livro.findByIdAndDelete(i)
      res.status(200).json({message: 'livro excluido com sucesso'})
    } catch (erro){
      res.status(500).json({Message:`${erro.message} - falha ao excluir livro`})
    }
  }
}

export default LivroController