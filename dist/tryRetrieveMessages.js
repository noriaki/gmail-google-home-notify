"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
})();
