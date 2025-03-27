import express from 'express'
import cors from 'cors'

const app = express();

app.use(express.json())
app.use(cors())

//Basic Route to check server
app.get('/', async (req, res) => {
    res.status(200).json({
        message: "Hello from Express",
    })
})

//Error Handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json({ error: 'Something went wrong!' })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`)
})