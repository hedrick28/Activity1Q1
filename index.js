"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayCats = exports.addCat = void 0;
var cat = [];
const addCat = (data) => {
    cat.push(data);
    (0, exports.displayCats)();
};
exports.addCat = addCat;
const displayCats = () => {
    let list = document.getElementById("myList");
    if (list) {
        while (list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }
    cat.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        if (list) {
            list.appendChild(li);
        }
    });
};
exports.displayCats = displayCats;
