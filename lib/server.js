const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

//Server básico creado
app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});

//Importado Controller y creado el primer endpoint que recibe la lista de explorers filtrados por el parámetro.
app.get("/v1/explorers/:mission", (request, response) =>
{
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission);
});

//Endpoint que recibe la lista de explorers filtrados por misión y nos da su cantidad.
app.get("/v1/explorers/amount/:mission", (request, response) =>
 {
    const mission = request.params.mission;
    const explorersAmountInMission = ExplorerController.getExplorersAmonutByMission(mission);
    response.json({mission: request.params.mission, quantity: explorersAmountInMission});
});

//Endpoint que recibe el score de los explorers y en base a este asigna fizz buzz o fizzbuzz.
app.get("/v1/fizzbuzz/:score", (request, response) =>
{
    const score = parseInt(request.params.score);
    const fizzbuzzTrick = ExplorerController.applyFizzbuzz(score);
    response.json({ score: score, trick: fizzbuzzTrick });
});
