(function () {

    "use strict";

    var btn = document.querySelector("button");
    var ul = document.querySelector("ul");
    var li;

    function removeItem(event) {

        li = event.target;
        ul.removeChild(li);

    }


    function addItem() {

        li = document.createElement("li");
        li.innerHTML = prompt("Enter a new item for to-do list:");

        if (li.innerHTML != "ctn") {
            var ctn = "content";
            ul.appendChild(li);

            li.addEventListener("click", removeItem);
        }

    }
    btn.addEventListener("click", addItem);

}());

