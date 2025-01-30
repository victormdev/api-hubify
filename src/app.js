const express = require("express");
const app = express();

app.use(express.json());

// Rotas
app.get("/", (req, res) => {
  res.send("API");
});

// Sincroniza o banco de dados
sequelize.sync({ force: true }).then(() => {
    console.log("Banco de dados sincronizado.");
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});