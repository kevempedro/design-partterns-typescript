import { LightIntensityCommand } from "./light-intensity-command";
import { LightPowerCommand } from "./light-power-command";
import { SmartHouseApp } from "./smart-house-app";
import { SmartHouseLight } from "./smart-house-light";

// Reciver
const bedroomLight = new SmartHouseLight('Luz Quarto');
const bathroomLight = new SmartHouseLight('Luz Banheiro');

// Command
const bedroomLightPowerCommand = new LightPowerCommand(bedroomLight);
const bathroomLightPowerCommand = new LightPowerCommand(bathroomLight);

const bedroomIntensityCommand = new LightIntensityCommand(bedroomLight);

// Controle - Invoker
const smartHouseApp = new SmartHouseApp();
smartHouseApp.addCommand('btn-1', bedroomLightPowerCommand);
smartHouseApp.executeCommand('btn-1');
smartHouseApp.undoCommand('btn-1');

smartHouseApp.addCommand('btn-2', bathroomLightPowerCommand);
smartHouseApp.executeCommand('btn-2');
smartHouseApp.undoCommand('btn-2');

smartHouseApp.addCommand('btn-3', bedroomIntensityCommand);

for (let i = 0; i < 5; i++) {
    smartHouseApp.executeCommand('btn-3');
}

for (let i = 0; i < 2; i++) {
    smartHouseApp.undoCommand('btn-3');
}
