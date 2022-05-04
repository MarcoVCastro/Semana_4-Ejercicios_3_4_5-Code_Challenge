const ExplorerService = require("../../lib/services/ExplorerService");

describe("Test for ExplorerService",()=>
{
    test ("1). Calculate the numbers of explorers in a mission",()=>
    {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

});