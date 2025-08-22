const express = require(`express`);//importa módulo do Express pra usar suas funcionalidades
const app = express();
const PORT = 8081;

app.get("/saudacao/:nome", (req, res)=>{
    try {
        const {nome} = req.params;
        const {hora} = req.query;

        if (hora == undefined || hora == "" || isNaN(hora)) {
            return res.status(400).send(`Campos obrigatórios não preenchidos ou incorretos!`);

        } else if (hora >= 0 && hora < 12) {
            res.status(200).send(`<h1>Boa dia, ${nome}!</h1>`);
            
        } else if (hora >= 12 && hora < 18) {
            res.status(200).send(`<h1>Boa tarde, ${nome}!</h1>`);
            
        } else if (hora >=18 && hora < 23){
            res.status(200).send(`<h1>Boa noite, ${nome}!</h1>`);

        }


    } catch (error) {
        console.error("Erro capturado:", error);
        res.status(500).send(`Erro interno do servidor`);
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});