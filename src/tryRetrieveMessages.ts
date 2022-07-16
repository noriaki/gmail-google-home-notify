import { loadConfig } from "./config";
import { fetchMessage } from "./fetchMessage";
import { createSpeechText } from "./createSpeechText";

(async () => {
  const config = await loadConfig();
  const ts = Math.floor(new Date('2022-07-01').getTime() / 1000);

  const message = await fetchMessage(ts, config);
  console.log(message?.snippet);
  if (!message) return;

  const text = createSpeechText(message, config);
  console.log(text);
  if (!text) return;
})();
