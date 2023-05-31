"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function onPageLoad() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Page loaded!"); // Replace with your desired actions
        // Add your code here to perform actions on page load
        let top_box_bottom = document.getElementsByClassName("top_box_bottom");
        for (let i = 0; i < top_box_bottom.length; i++) {
            top_box_bottom[i].innerHTML = 'Testing here';
            // top_box_bottom[i].innerHTML = 'Testing here';
        }
        var result = yield fetch('/home/data');
        var jsonData = yield result.json();
        console.log(jsonData);
    });
}
// Event listener for the page load event
window.addEventListener("load", onPageLoad);
