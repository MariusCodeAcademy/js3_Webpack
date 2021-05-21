import add from "./js/add";
import say from "./js/say";
import "./css/style.css"; // itraukiam css faila

import banner from "./banner/ban";
import aside from "./aside/aside";

import sadBot from "./img/img1.jpeg";

const bestBanner = banner("Dynamic banners are here", "Webpack is here");

const aside1 = aside("THis is our main aside", ["red", "green", "blue"], "Spausti cia");

const img1 = document.createElement("img");
img1.src = sadBot;

document.body.append(bestBanner, aside1, img1);
