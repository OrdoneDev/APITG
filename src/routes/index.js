import bodyParser from 'body-parser'
import entidadeRouter from './entidadeRouter.js'
import amizadeRouter from './amizadeRouter.js'
import loginRouter from './loginRouter.js'
import fotoRouter from './fotoRouter.js'
import publicacaoRouter from './publicacaoRouter.js'
import comentarioRouter from './comentarioRouter.js'
import arquivoCompartilhadoRouter from './arquivoCompartilhadoRouter.js'
import avaliacaoArquivoRouter from './avaliacaoArquivoRouter.js'
import membroComunidadeRouter from './membroComunidadeRouter.js'

const routes = (app) => {
    app.use(
        bodyParser.json(),
        entidadeRouter,
        amizadeRouter,
        loginRouter,
        fotoRouter,
        publicacaoRouter,
        comentarioRouter,
        arquivoCompartilhadoRouter,
        avaliacaoArquivoRouter,
        membroComunidadeRouter,
    )
}

export default routes