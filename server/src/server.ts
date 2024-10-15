import express from 'express'
import colors from 'colors'
import morgan from 'morgan'
import swaggerUi from'swagger-ui-express'
import swaggerSpec, {swaggerUiOptions} from './config/swagger'
import router from './router'
import db from './config/db'
import cors, { CorsOptions } from 'cors'

//Conectar base de datos
    export async function connectDb() {
        try{
            await db.authenticate()
            db.sync()
            //console.log(colors.cyan.bold('Buena conexiona a DB'))
        }
        catch(error){
            //console.log(error)
            console.log(colors.red.bold('Error en DB'))
        }
    }
    connectDb()

    //Instancia de express
    const server = express()

    //Permitir Cors
    const corsOptions : CorsOptions = {
        origin: function (origin, callback) {
            if(!origin || origin === process.env.FRONTEND_URL) {
                callback(null, true)
            }else{
                callback(new Error('Error de cors'))
            }
        }
    }
    server.use(cors(corsOptions))



    //Leer datos en consola de formularios
    server.use(express.json())

    server.use(morgan('dev'))
    server.use('/api/products', router)

    //Docs
    server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions))

    export default server 