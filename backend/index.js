const express=require('express')
const cors=require('cors')
const testRoutes =require('./routes/testRoutes')
const authRoutes =require('./routes/authRoutes')
const movieRoutes=require('./routes/movieRoutes')

const app=express()

const PORT=process.env.PORT||8000

app.use(express.json())
app.use(cors({
    origin:['https://moviewaveott.vercel.app','http://localhost:3000'],//url of frontend deployment
    credentials:true
}))

app.use('/test',testRoutes)
app.use('/auth',authRoutes)
app.use('/movie',movieRoutes)

require('./config/dbConfig')

app.listen(PORT,()=>{console.log(`App listening on port ${PORT}`)})