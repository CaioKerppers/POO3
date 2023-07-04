import IPlatform from "./platforms/IPlatform";
import Twitch from "./platforms/Twitch";
import Youtube from "./platforms/Youtube";
import Live from "./transmissions/Live";
import Facebook from "./platforms/Facebook";

function startLive(platform : IPlatform){
    console.log("Aguarde...");
    const live = new Live(platform);
    live.broadcasting();
    live.result();
}

function AdvancedLive(platform : IPlatform){
    console.log("Aguarde...");
    const live = new AdvancedLive(platform);
    live.broadcasting();
    live.result();
    live.subtitles();
    live.comments();
}

startLive(new Youtube());
startLive(new Twitch());
startLive(new Facebook());