const MessageFormat = require("@messageformat/core");
const compileMessageModule = require("@messageformat/core/lib/compile-module");

const messagePacks = {
  "en-US": {
    utilsDate: "{date, date, ::EEEMMMd}",
    utilsToday: "today",
    utilsTomorrow: "tomorrow",
  },
  "es-MX": {
    utilsDate: "{date, date, ::MMMMd}",
    utilsToday: "hoy",
    utilsTomorrow: "mañana",
  },
};

const mf = new MessageFormat("*");
console.log(compileMessageModule(mf, messagePacks));
