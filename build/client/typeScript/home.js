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
function onHomePageLoad() {
    return __awaiter(this, void 0, void 0, function* () {
        let storedValue = localStorage.getItem('sessionKey');
        const url = `/home/data?storedValue=${encodeURIComponent(storedValue)}`;
        var result = yield fetch(url);
        var jsonData = yield result.json();
        console.log(jsonData);
        console.log(jsonData[1]);
        console.log(jsonData[1].end_date);
        // getting user workout routines
        let top_box_bottom = document.getElementById("top_box_bottom");
        if (top_box_bottom != null) {
            // top_box_bottom.innerHTML = '';
            for (let i = 0; i < jsonData.length; i++) {
                const form = document.createElement('form');
                form.action = '/';
                form.method = 'get';
                form.id = 'myForm';
                const routinesDiv = document.createElement('div');
                const nameDiv = document.createElement('div');
                const startDateDiv = document.createElement('div');
                const endDateDiv = document.createElement('div');
                const inputField = document.createElement('input');
                inputField.type = 'hidden';
                inputField.name = 'fieldName';
                inputField.value = jsonData[i].routine_id;
                nameDiv.innerText = jsonData[i].routine_name;
                startDateDiv.innerText = jsonData[i].start_date;
                endDateDiv.innerText = jsonData[i].end_date;
                // // routinesDiv.innerHTML += '<a href="https://www.w3docs.com/"> ';
                // var link = document.createElement('a');
                // link.href = 'https://www.w3docs.com/';
                // link.appendChild(nameDiv);
                // link.appendChild(startDateDiv);
                // link.appendChild(endDateDiv);
                // routinesDiv.appendChild(link);
                // // routinesDiv.innerHTML +="</a>"; 
                // routinesDiv.classList.add('routinesDiv');
                // top_box_bottom.appendChild(routinesDiv);
                form.appendChild(inputField);
                form.appendChild(nameDiv);
                form.appendChild(startDateDiv);
                form.appendChild(endDateDiv);
                routinesDiv.appendChild(form);
                if (routinesDiv != null) {
                    routinesDiv.addEventListener('click', submitForm);
                }
                routinesDiv.classList.add('routinesDiv');
                top_box_bottom.appendChild(routinesDiv);
            }
        }
    });
}
function submitForm() {
    let theForm = document.getElementById('myForm');
    ;
    if (theForm != null) {
        theForm.submit();
    }
}
// Event listener for the page load event
window.addEventListener("load", onHomePageLoad);
