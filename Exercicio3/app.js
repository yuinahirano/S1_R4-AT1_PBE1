const express = require(`express`);//importa módulo do Express pra usar suas funcionalidades
const app = express();
const PORT = 8081;

app.get("/operacao/:tipo", (req, res) => {
    try {
        const { tipo } = req.params;
        const { numUm } = req.query;
        const { numDois } = req.query;

        if (numUm == undefined || numUm == "" || isNaN(numUm) || numDois == undefined || numDois == "" || isNaN(numDois)) {
            return res.status(400).send(`Campos obrigatórios não preenchidos ou incorretos!`);

        }
        let resultado = 0;

        //usado o switch case para controlar condições e executar codigos especificos para cada situação
        switch (tipo) {
            case "soma":
                resultado = parseFloat(numUm) + parseFloat(numDois);

                break;

            case "subtracao":
                resultado = parseFloat(numUm) - parseFloat(numDois);
                break;

            case "multiplicacao":
                resultado = parseFloat(numUm) * parseFloat(numDois);
                break;

            case "divisao":
                if (numUm == 0 || numDois == 0) {
                    return res.status(400).send(`Operação inválida.`);
                } else {
                    resultado = parseFloat(numUm) / parseFloat(numDois);                   
                }
                break;

            default:
                return res.status(400).send(`Operação inválida.`);
        }
        res.status(200).send(`<h1>O resultado da conta é ${resultado}</h1>`);

    } catch (error) {
        console.error("Erro capturado:", error);
        res.status(500).send(`Erro interno do servidor`);
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});