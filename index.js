import express from 'express';
import congeRoutes from './Projet-Web/Routes/Employeroutes.js';
import employeRoutes from './Projet-Web/Routes/Employeroutes.js';
import retardRoutes from './Projet-Web/Routes/retardroutes.js';

dotenv.config();
const app = express();
app.use(express.json());

// Usar as rotas
app.use('/api/conges', congeRoutes);
app.use('/api/employes', employeRoutes);
app.use('/api/retards', retardRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
