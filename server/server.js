import express from "express"
import cors from 'cors'
import dotenv from 'dotenv'
import ConnectDb from './config/db.js'
import menuRoutes from './routes/menuRoutes.js'
import userRoutes from './routes/userRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
import fileUpload from "express-fileupload"
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
dotenv.config();
const app = express();
ConnectDb();
app.use(cors());
app.use(express.json())
app.use(fileUpload({ useTempFiles: true }));

app.use('/api/menu', menuRoutes);
app.use('/api/users', userRoutes);
app.use('/api/upload', uploadRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))