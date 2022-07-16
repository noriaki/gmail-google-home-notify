"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const google_home_player_1 = __importDefault(require("google-home-player"));
const config_1 = require("./config");
const fetchMessage_1 = require("./fetchMessage");
const createSpeechText_1 = require("./createSpeechText");
(async () => {
    const config = await (0, config_1.loadConfig)();
    const ts = Math.floor(new Date('2022-07-01').getTime() / 1000);
    const message = await (0, fetchMessage_1.fetchMessage)(ts, config);
    console.log(message?.snippet);
    if (!message)
        return;
    const text = (0, createSpeechText_1.createSpeechText)(message, config);
    console.log(text);
    if (!text)
        return;
    const googleHome = new google_home_player_1.default(config.googleHomeIp, config.speechLanguage);
    if (config.playSoundURL != null) {
        await googleHome.play(config.playSoundURL);
    }
    await googleHome.say(text);
})();
