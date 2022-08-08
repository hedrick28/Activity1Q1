var cat: string[] = [];
export const addCat = (data: string) => {
    cat.push(data);
    displayCats();

}

export const displayCats = () => {
    let list = document.getElementById("myList");
    if(list) {
        while(list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }
    cat.forEach((item: string) => {
        let li = document.createElement("li");
        li.innerText = item;
        if(list) {
            list.appendChild(li);
        }
    })
}