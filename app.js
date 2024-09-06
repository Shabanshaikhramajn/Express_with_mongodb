import express from 'express'
import connectDB from './db/connectdb.js'
import web from './routes/web.js'
const app = express()
const port = process.env.PORT || '3000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";


connectDB (DATABASE_URL)

//json
app.use(express.json())



//load routes
app.use("/student",web)




app.listen(port,()=>{
    console.log(`server listening at port http://localhost:${3000}`)
})