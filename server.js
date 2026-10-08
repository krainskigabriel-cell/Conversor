// ============================================================
//  CONVERSOR  -  Conversao e Validacao de Tipos
//  Backend 2DAT2  -  3o Trimestre
//  O frontend ja esta pronto em public/. Complete o TODO.
// ============================================================

const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));


app.post("/calcular", (req, res) => {
 
  const preco = Number(req.body.preco);
  const quantidade = parseInt(req.body.quantidade);
  const percentualDesconto = Number(req.body.desconto);
  if (Number.isNaN(preco) || Number.isNaN(quantidade) || Number.isNaN(percentualDesconto)) {
    return res.status(400).json({ erro: "Digite mumeros validos"});
  }

  const subtotal = preco * quantidade;
  const desconto = subtotal * (percentualDesconto / 100);
  const total = subtotal - desconto;

  res.status(200).json({ subtotal, desconto, total, tipo: typeof total });
});

app.listen(PORT, () => {
  console.log(`Conversor no ar: http://localhost:${PORT}`);
});
