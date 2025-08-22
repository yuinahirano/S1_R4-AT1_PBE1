const express = require(`express`);//importa módulo do Express pra usar suas funcionalidades
const app = express();
const PORT = 8081;

app.get("/imc", (req, res)=>{
    try {
        const {peso} = req.query;
        const {altura} = req.query;

        const imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));

        if (peso == undefined || peso == "" || isNaN(peso) || altura == undefined || altura == "" || isNaN(altura)) {
            return res.status(400).send(`Campos obrigatórios não preenchidos ou incorretos!`);

        } else if (imc < 18.5){               
            res.status(200).send(`<h1>IMC: ${imc.toFixed(2)} - abaixo do peso</h1>`); //toFixed para arredondar o resultado para duas casas depois da vírgula

        }else if (imc >= 18.5 && imc <= 24.99){
            res.status(200).send(`<h1>IMC: ${imc.toFixed(2)} - normal</h1>`);

        }else if (imc >= 25 && imc <= 29.99){
            res.status(200).send(`<h1>IMC: ${imc.toFixed(2)} - sobrepeso</h1>`);

        }else if (imc > 30){
            res.status(200).send(`<h1>IMC: ${imc.toFixed(2)} - obesidade</h1>`);

        }
        
    } catch (error) {
        console.error("Erro capturado:", error);
        res.status(500).send(`Erro interno do servidor`);
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});