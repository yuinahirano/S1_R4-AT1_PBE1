const express = require(`express`);
const app = express();
const PORT = 8081;

app.get("/ano/:ano", (req, res)=>{
    try {
        const { ano } = req.params;

        if (ano == undefined || ano == "" || isNaN(ano)) {
            return res.status(400).send(`Campos obrigatórios não preenchidos ou incorretos!`);

        } else if (ano%4 == 0) {
            res.status(200).send(`<h1>O ano ${ano} é bissexto!</h1>`);
            
        } else {
            res.status(200).send(`<h1>O ano ${ano} NÃO é bissexto!</h1>`);
            
        }
            
    } catch (error) {
        console.error("Erro capturado:", error);
        res.status(500).send(`Erro interno do servidor`);
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});