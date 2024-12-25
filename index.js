import express from "express";
import cors from "cors";
import JoyasRoutes from '/src/routes/JoyasRoutes.js';
import dotenv from "dotenv"; 
import { generarReporte } from './middlewares/reportMiddleware.js';

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.use(generarReporte); 
app.use(JoyasRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });