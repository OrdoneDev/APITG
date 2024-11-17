import express from "express"
import routes from "./routes/index.js"
import cors from 'cors'

const app = express()

app.use((_, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", 'GET,OPTIONS,PUT,POST,DELETE')
    res.header("Access-Control-Allow-Headers", "Authorization, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers")
    app.use(cors())
    next()
})

app.get('/', (req, res) => {
    res.send('API está funcionando!');
});

routes(app)

export default app