const Reader = require("./lib/utils/reader");
const ExplorerService = require("./lib/services/ExplorerService");
const FizzbuzzService = require("./lib/services/FizzbuzzService");

const explorers = Reader.readJsonFile("explorers.json");

//console.log(explorers);

console.log("The explorers in node mission are: ");
console.log(ExplorerService.filterByMission(explorers, "node"));

console.log("The amount of explorers in node mission are: ");
console.log(ExplorerService.getAmountOfExplorersByMission(explorers, "node"));

console.log("The usernames of explorers in node mission are: ");
console.log(ExplorerService.getExplorersUsernamesByMission(explorers, "node"));



const explorer1 = {name: "Explorer1", score: 1};
const explorer3 = {name: "Explorer3", score: 3};
const explorer5 = {name: "Explorer5", score: 5};
const explorer15 = {name: "Explorer15", score: 15};

console.log(FizzbuzzService.applyValidationInExplorer(explorer1)); // {name: "Explorer1", score: 1, trick: 1}
console.log(FizzbuzzService.applyValidationInExplorer(explorer3)); // {name: "Explorer3", score: 3, trick: "FIZZ"}
console.log(FizzbuzzService.applyValidationInExplorer(explorer5)); // {name: "Explorer5", score: 5, trick: "BUZZ"}
console.log(FizzbuzzService.applyValidationInExplorer(explorer15));// {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}

