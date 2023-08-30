document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('inp').addEventListener('keypress',function add(e)
        {
            if(e.key == "Enter" && document.getElementById('inp').value !== "")
            {
                console.log("pressed");
                let liTag = document.createElement("li");

                let checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                
                let paragraph = document.createElement("p");
                paragraph.innerHTML = document.getElementById('inp').value;

                let symbolsClass = document.createElement("div");
                symbolsClass.classList.add("symbols");

                let editIcon = document.createElement("i");
                editIcon.classList.add("fa","fa-edit","edit")

                let trashIcon = document.createElement("i");
                trashIcon.classList.add("fa","fa-trash","del")

                symbolsClass.appendChild(editIcon);
                symbolsClass.appendChild(trashIcon);

                
                liTag.appendChild(checkbox);
                liTag.appendChild(paragraph);
                liTag.appendChild(symbolsClass);

                console.log(liTag);

                const parentElement = document.querySelector('ul'); // Change to your actual parent element
                parentElement.appendChild(liTag);

                document.getElementById('inp').value = "";
            }
        });
    });