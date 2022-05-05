const Reader = require("../utils/reader");
const ExplorerService = require("../services/ExplorerService");
const FizzbuzzService = require("../services/FizzbuzzService");

class ExplorerController
{
    
    static getExplorersByMission(mission)
    {
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByMission(explorers, mission);
    }

}

module.exports = ExplorerController;