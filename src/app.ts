import express, {Application, Request,Response} from 'express'
const app:Application = express()
import cors from "cors"
// const port = 5000

// parser 

app.use(express.json())
app.use( cors())

app.get('/', (req:Request, res:Response) => {
 const a= 10
  res.send(a)
})

export default app;