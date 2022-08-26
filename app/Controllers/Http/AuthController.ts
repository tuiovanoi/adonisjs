import type {HttpContexContract} from '@ioc:Adonis/Core?HttpContex'
import User from 'App/Models/User'
import RegisterUserValidator from '../../Validators/RegisterUserValidator'

export default class AuthController{

 public async register({request}: HttpContexContract) {
     const data = await request.validate(RegisterUserValidator)
     const user = await User.create(data)
     return user
 }

 public async login({ request, auth, response }: HttpContexContract){
     try {
        const { email, password } = request.all()
        const token = await auth.use('api').attempt(email, password, {
            expiresIn: '1day'
        })
        const user = await User.findByOrfail("email", email)
        return { token,user }
     }  catch (error) {
         response.status(401).send("login ou senha icorretos!!!")
     }
 }

}
