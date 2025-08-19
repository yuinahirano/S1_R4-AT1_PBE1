const express = require(`express`);
const app = express();
const PORT = 8081;

app.get("/adicao/:numUm/:numDois", (req, res)=>{
    try {
        const {numUm} = req.params;
        const {numDois} = req.params;

        if (numUm == undefined || numUm== "" || isNaN(numUm) || numDois == undefined || numDois == "" || isNaN(numDois)) {
            return res.status(400).send(`Campos obrigatórios não preenchidos ou incorretos!`);

        } 
        const soma = parseFloat(numUm) + parseFloat(numDois);

        res.status(200).send(`<h1>A soma dos valores é ${soma}</h1>`);

    } catch (error) {
        console.error("Erro capturado:", error);
        res.status(500).send(`Erro interno do servidor`);
    }
});

app.get("/subtracao/:numUm/:numDois", (req, res)=>{
    try {
        const {numUm} = req.params;
        const {numDois} = req.params;

        if (numUm == undefined || numUm== "" || isNaN(numUm) || numDois == undefined || numDois == "" || isNaN(numDois)) {
            return res.status(400).send(`Campos obrigatórios não preenchidos ou incorretos!`);

        } 
        const subtracao = parseFloat(numUm) - parseFloat(numDois);

        res.status(200).send(`<h1>A soma dos valores é ${subtracao}</h1>`);

    } catch (error) {
        console.error("Erro capturado:", error);
        res.status(500).send(`Erro interno do servidor`);
    }
});


app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})