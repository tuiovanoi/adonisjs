import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Response from '@ioc:Adonis/Core/Response'
import Filme from 'App/Models/Filme'
import Filme from 'App/Models/Filme'
import Filme from 'App/Models/Filme'
import FilmeValidator from 'App/Validators/FilmeValidator'

export default class FilmesController {
    public async index({ }: HttpContextContract) {
        const Filme = await Filme.all()
        return Filme
}

    public async store({request}: HttpContextContract) {
        const data = await request.validade(FilmeValidator) 
        const data = await Filme.create({...data})
        return Filme
    }

    public async show({ params, response }: HttpContextContract) {
    try {
        const Filme = await Filme.findOrFail(params.id)
        return Filme
    } catch (error) {
        response.status(400).send("Tópico não encontradao!!!")
    }
    }

    public async update({ request, params, response }: HttpContextContract) {
        const {name} = await Filme.findOrfail (params.id)
        Filme.name = name 
        await Filme.save()
        return Filme

    } cath (error) {
        Response.status(400).send("Tópico não encontrado!!!")
    }
}
    public async destroy({ params, response }: HttpContextContract) {
        try{
          const Filme = await Filme.findOrFail(params.id)
          await Filme.delete(
              return Filme
            }  catch (error) {
                response.status(400).send("Tópico não encontrado!!!")
            }
    }
}
          
    