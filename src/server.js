//importamos dependencias de librearías
import express from 'express';
import 'dotenv/config'
import { dbConection } from './database/db.js';
import router from './routes/router.js';



const app = express()

//parsea el body
app.use(express.json())

const PORT = process.env.PORT || 4001;



app.get('/api/healthy', (req, res) =>{
    res.status(200).json(
    {
        success: true,
        message: "Server is healthy"
    }
)
})

app.use('/api', router)


dbConection()
.then(() => {
    console.log("Database connected");
})
.catch(error => {
    console.log(error);
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})