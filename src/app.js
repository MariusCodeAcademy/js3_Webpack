import add from "./js/add";
import say from "./js/say";
import "./css/style.css"; // itraukiam css faila

import banner from "./banner/ban";
import aside from "./aside/aside";
// const path = require("path");
// console.log(" path", path.resolve(__dirname));
console.log("index.js");

console.log(" add(1, 2, 3) ==== ", add(1, 2, 3));
console.log(' say("nice day")', say("nice day"));

const obj = { age: 30, name: "bob" };
const copy = { ...obj, gender: "male" };

console.log(" copy", copy);

const bestBanner = banner("Dynamic banners are here", "Webpack is here");

const aside1 = aside("THis is our main aside", ["red", "green", "blue"], "Spausti cia");

document.body.append(bestBanner, aside1);
