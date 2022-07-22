//IMPORT
import {initialPage} from "./script/redirectors/initial-page.js";

//DOM ELEMENTS
const app = document.querySelector("#app");

//LISTENERS
window.addEventListener("load", initialPage);

//EXPORT
export {app}