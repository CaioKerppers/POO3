import IConsole from "./console/IConsole";
import PlayStation from "./console/Playstation";
import Xbox from "./console/Xbox";
import Zeebo from "./console/Zeebo";
import Game from "./play/Game";

function startGame(platform : IConsole){
    console.log("Aguarde...");
    const game = new Game(platform);
    game.playing();
    game.result();
}

function AdvancedPlay(platform : IConsole){
   console.log("Aguarde...");
    const game = new AdvancedPlay(platform);
    game.playing();
    game.result();
    game.challenge();
}

startGame(new Xbox());
startGame(new PlayStation());
startGame(new Zeebo());