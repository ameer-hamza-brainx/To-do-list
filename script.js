document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('inp').addEventListener('keypress',function add(e)
        {
            if(e.key == "Enter" && document.getElementById('inp').value !== "")
            {
                let liTag = document.createElement("li");

                let checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.id = "checkbox";
                
                let paragraph = document.createElement("p");
                paragraph.id = "text";
                paragraph.innerHTML = document.getElementById('inp').value;

                let symbolsClass = document.createElement("div");
                symbolsClass.classList.add("symbols");

                let editIcon = document.createElement("i");
                editIcon.classList.add("fa","fa-edit","edit");
                editIcon.id = "editIcon";

                let trashIcon = document.createElement("i");
                trashIcon.classList.add("fa","fa-trash","del")
                trashIcon.id = "delIcon"

                symbolsClass.appendChild(editIcon);
                symbolsClass.appendChild(trashIcon);

                
                liTag.appendChild(checkbox);
                liTag.appendChild(paragraph);
                liTag.appendChild(symbolsClass);


                const parentElement = document.querySelector('ul');
                parentElement.appendChild(liTag);

                document.getElementById('inp').value = "";
            }
        });
        document.getElementById('tasks').addEventListener('click',function(e){
            if(e.target.id === "delIcon"){
                e.target.parentElement.parentElement.remove();
            }
            else if(e.target.id === "editIcon")
            {
                let inputElement = e.target.parentElement.previousElementSibling.previousElementSibling;
                if(inputElement.type === "checkbox")
                {
                    
                    inputElement.type = "text";
                    let para = e.target.parentElement.previousElementSibling;
                    inputElement.value = para.innerHTML;
                    para.innerHTML = "";
                    inputElement.addEventListener('keypress',function(e){
                        if(e.key === "Enter" && inputElement.value !== "")
                        {   e.preventDefault()
                            para.innerHTML = inputElement.value;
                            inputElement.type = "checkbox";
                            inputElement.blur();
                        }
                        else if(e.key === "Enter" && inputElement.value === ""){
                            alert("Add some tasks");
                        }
                    });
                }
            }
            else if(e.target.id==="checkbox")
            {
                const para = e.target.nextElementSibling;
                if(e.target.checked){
                    para.classList.add("cut-text");
                }
                else{
                    para.classList.remove("cut-text");
                }
            }
        })
    });