const express = require("express");
const app = express();

//rota com query params
app.get("/consulta/", function (req, res) {
    var cpf = req.query["cpf"]

    if (cpf){
        res.send("retorno consulta: cpf = " + cpf);
    } else {
        res.send("CPF NÃO FOI FORNECIDO")
    }
}
)

app.listen(4000, function (erro) {
    if (erro) {
        console.log("Erro ao Iniciar.");
    } else {
        console.log("Servidor Iniciado.");
    }
}
)