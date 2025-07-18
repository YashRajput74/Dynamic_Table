/*length of data set for buttons*/
var lengthData = data.length;

/*default row number*/
var rowNumber = lengthData;
var pageNumber = 1;
var theFilter = "";
var newestData = "";
var sortedData = "";

/*creating a dropdown*/
function createDropdown(values) {
    var tpl= `<label for="dropdown"></label>
            <select class="dropdown" id="dropdown" name="dropdown">
            <option value="All">All</option>
            ${values.map(function (value) {
        return `
                <option value="${value}">${value}</option>`
    }).join('')}
                
            </select>`;
    document.querySelector("#dropHere").innerHTML = tpl;
}

/*Creating a dropdown for the sorter*/


/*the 5,10,15 button's click events*/
function handleClick(event) {
    if(event.target.value=="All"){
        rowNumber=data.length;
    }
    else{
        rowNumber = event.target.value;
    }
    tableBodyRender(data);
    dynamicButtons(rowNumber);
    tagDynamic(pageNumber, rowNumber);
    document.querySelectorAll(".pagingButton").forEach(function (buttonPage) {
        buttonPage.addEventListener("click", pagingButton);
    })
    document.querySelectorAll(".editActionButton").forEach(function (editable) {
        editable.addEventListener("click", isEditing);
    })

    document.querySelectorAll(".deleteActionButton").forEach(function (deleteable) {
        deleteable.addEventListener("click", modalFunction);
    })
}

/*This is the Search bar input*/
function handleInput(event) {
    theFilter = event.target.value.toLowerCase();
    var newData = data.filter(function (item) {
        return (
            item.name.toLowerCase().includes(`${theFilter}`) ||
            item.role.toLowerCase().includes(`${theFilter}`) ||
            item.type.toLowerCase().includes(`${theFilter}`) ||
            String(item.HitPoint).includes(`${theFilter}`) ||
            String(item.PhysicalAttack).includes(`${theFilter}`) ||
            String(item.Mana).includes(`${theFilter}`)
        )
    })
    lengthData = newData.length;

    /*This updates the code for search bar*/
    tableBodyRender(newData);
    tagDynamic(pageNumber, rowNumber);
    /*This updates number of buttons*/
    dynamicButtons(rowNumber);
    document.querySelectorAll(".editActionButton").forEach(function (editable) {
        editable.addEventListener("click", isEditing);
    })

    document.querySelectorAll(".deleteActionButton").forEach(function (deleteable) {
        deleteable.addEventListener("click", modalFunction);
    })
    
    document.querySelectorAll(".pagingButton").forEach(function (buttonPage) {
        buttonPage.addEventListener("click", pagingButton);
    })
}

/*This  function is for table header render*/
function tableHeaderRender(fields) {
    var tpl= `
            <tr>
                ${fields.map(function (fieldMember) {
        return `
                            <th>
                                <div class=headButton>
                                    ${fieldMember}
                                    <div>
                                        <button class="headingButton" id="Ascending" onclick="sortStringAsc('${fieldMember}')">
                                            <img src="https://th.bing.com/th?id=OIP.pDmgA1bsIubxvKMWINXJpgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" width="5px" height="5px">
                                        </button>
                                        <button class="headingButton" id="Descending" onclick="sortStringDsc('${fieldMember}')">
                                            <img src="https://th.bing.com/th?id=OIP.aEEk21LpU4JhD3fMOdAEvAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" width="5px" height="5px">
                                        </button>
                                    </div>
                                </div>
                            </th>
                        `
    }).join('')
        }
                <th>Action</th>
            </tr>`
        document.querySelector('thead').innerHTML = tpl;
}

/*This  function is for table body render*/
function tableBodyRender(dataProvided) {
    var tpl= `
            ${dataProvided.map(function (dataMember, index) {
            if (index < rowNumber) {
                return `
                            <tr class="editing" data-index="${index}">
                                <td>${dataMember.name}</td>
                                <td>${dataMember.role}</td>
                                <td>${dataMember.type}</td>
                                <td>${dataMember.HitPoint}</td>
                                <td>${dataMember.PhysicalAttack}</td>
                                <td>${dataMember.Mana}</td>
                                <td contenteditable="false">
                                    <button class="editActionButton">Edit</button>
                                    <button class="deleteActionButton">Delete</button>
                                </td>
                            </tr>
                    `
            }
        }).join('')}`
        document.querySelector('tbody').innerHTML = tpl;
}

/*functon for dynamic data entries tag */
function tagDynamic(pageNumber,rowNumber) {
    if (lengthData < (pageNumber * rowNumber)) {
        var tpl= `
        <h3>Showing ${(pageNumber - 1) * rowNumber + 1}-${lengthData} of ${lengthData} entries.</h3>
        `
    }
    else {
        var tpl= `
        <h3>Showing ${(pageNumber - 1) * rowNumber + 1}-${pageNumber * rowNumber} of ${lengthData} entries.</h3>
        `
    }
    document.querySelector(".tagDynamic").innerHTML = tpl;
}

/*this function makes buttons*//*done */
function dynamicButtons(rowNumber) {
    var buttonNumber = lengthData / rowNumber;
    if ((lengthData % rowNumber) != 0) {
        buttonNumber += 1;
    }
    var CodeButtons = `<button class="pagingButton"><<</button>
    <button class="pagingButton"><</button>`;
    for (var i = 1; i <= buttonNumber; i++) {
        CodeButtons += `<button class="pagingButton">${i}</button>`
    }
    CodeButtons += `<button class="pagingButton">></button>
    <button class="pagingButton">>></button>`;
    
    document.querySelector('.pageIcons').innerHTML = CodeButtons;
}

/*This event is when we click on page number it will change the page*/
function pagingButton(event) {
    document.querySelectorAll(".pagingButton").forEach(function (buttonPage) {
        buttonPage.style.boxShadow = "";
        buttonPage.style.backgroundColor = "";
    });
    var buttonText = event.target.textContent;
    if (buttonText == `<<`) {
        pageNumber = 1;
    }
    else if (buttonText == `>>`) {
        buttonNumber = Math.ceil(lengthData / rowNumber);
        pageNumber = buttonNumber;
    }
    else if (buttonText == `<`) {
        if (pageNumber > 1) {
            pageNumber--;
        }
    }
    else if (buttonText == `>`) {
        buttonNumber = Math.ceil(lengthData / rowNumber);
        if (pageNumber < buttonNumber) {
            pageNumber++;
        }
    }
    else {
        pageNumber = buttonText;
    }
    newestData = data.slice((pageNumber - 1) * rowNumber, pageNumber * rowNumber);

    tableBodyRender(newestData);
    tagDynamic(pageNumber, rowNumber);
    document.querySelectorAll(".editActionButton").forEach(function (editable) {
        editable.addEventListener("click", isEditing);
    })

    document.querySelectorAll(".deleteActionButton").forEach(function (deleteable) {
        deleteable.addEventListener("click", modalFunction);
    })
    //to complete
    //style.backgroundColor="lightgray";
}

/*functions for sorting two functions 1 for ascending and 1 for descending*/
function sortStringAsc(param) {
    if (param == "Name") {
        sortedData = data.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        })
    }
    else if (param == "Role") {
        sortedData = data.sort(function (a, b) {
            return a.role.localeCompare(b.role);
        })
    }
    else if (param == "Type") {
        sortedData = data.sort(function (a, b) {
            return a.type.localeCompare(b.type);
        })
    }
    else if (param == "Hitpoints") {
        sortedData = data.sort(function (a, b) {
            return a.HitPoint - b.HitPoint;
        });
    }
    else if (param == "Physical Attack") {
        sortedData = data.sort(function (a, b) {
            return a.PhysicalAttack - b.PhysicalAttack;
        });
    }
    else if (param == "Mana") {
        sortedData = data.sort(function (a, b) {
            return a.Mana - b.Mana;
        });
    }
    tableBodyRender(sortedData);
    tagDynamic(pageNumber, rowNumber);
    document.querySelectorAll(".editActionButton").forEach(function (editable) {
        editable.addEventListener("click", isEditing);
    })

    document.querySelectorAll(".deleteActionButton").forEach(function (deleteable) {
        deleteable.addEventListener("click", modalFunction);
    })
}
function sortStringDsc(param) {
    if (param == "Name") {
        sortedData = data.sort(function (a, b) {
            return b.name.localeCompare(a.name);
        })
    }
    else if (param == "Role") {
        sortedData = data.sort(function (a, b) {
            return b.role.localeCompare(a.role);
        })
    }
    else if (param == "Type") {
        sortedData = data.sort(function (a, b) {
            return b.type.localeCompare(a.type);
        })
    }
    else if (param == "Hitpoints") {
        sortedData = data.sort(function (a, b) {
            return b.HitPoint - a.HitPoint;
        });
    }
    else if (param == "Physical Attack") {
        sortedData = data.sort(function (a, b) {
            return b.PhysicalAttack - a.PhysicalAttack;
        });
    }
    else if (param == "Mana") {
        sortedData = data.sort(function (a, b) {
            return b.Mana - a.Mana;
        });
    }
    tableBodyRender(sortedData);
    tagDynamic(pageNumber, rowNumber);
    document.querySelectorAll(".editActionButton").forEach(function (editable) {
        editable.addEventListener("click", isEditing);
    })

    document.querySelectorAll(".deleteActionButton").forEach(function (deleteable) {
        deleteable.addEventListener("click", modalFunction);
    })
}

/*function for adding row*/
function addingRow() {
    var newObject = {
        name: "New Name",
        role: "New Role",
        type: "New Type",
        HitPoint: 0,
        PhysicalAttack: 0,
        Mana: 0
    }
    data.unshift(newObject);
    tableBodyRender(data, fields);
    tagDynamic(pageNumber, rowNumber);
    document.querySelectorAll(".editActionButton").forEach(function (editable) {
        editable.addEventListener("click", isEditing);
    })

    document.querySelectorAll(".deleteActionButton").forEach(function (deleteable) {
        deleteable.addEventListener("click", modalFunction);
    })
}

/*function for editing row*/
function isEditing(event) {
    var oldRow = event.target.closest('tr');
    var rowIndex = oldRow.getAttribute("data-index");
    if (oldRow.querySelector(".editActionButton").textContent == "Edit") {
        var oldCells = oldRow.querySelectorAll("td");
        oldCells.forEach(function (cell, index) {
            if (index < 6) {
                cell.setAttribute("contenteditable", "true");
            }
        })
        oldRow.querySelector(".editActionButton").textContent = "Save";
    }
    else if (oldRow.querySelector(".editActionButton").textContent == "Save") {
        var oldCells = oldRow.querySelectorAll("td");
        var editedRow = {
            name: oldCells[0].textContent,
            role: oldCells[1].textContent,
            type: oldCells[2].textContent,
            HitPoint: oldCells[3].textContent,
            PhysicalAttack: oldCells[4].textContent,
            Mana: oldCells[5].textContent
        };
        data[rowIndex] = editedRow;
        lengthData = data.length;
        oldCells.forEach(function (cell, index) {
            if (index < 6) {
                cell.setAttribute("contenteditable", "false");
            }
        })
        oldRow.querySelector(".editActionButton").textContent = "Edit";
        tableBodyRender(data);
        tagDynamic(pageNumber, rowNumber);
        document.querySelectorAll(".editActionButton").forEach(function (editable) {
            editable.addEventListener("click", isEditing);
        })
        document.querySelectorAll(".deleteActionButton").forEach(function (deleteable) {
            deleteable.addEventListener("click", modalFunction);
        })
    }
    // document.querySelector(".editing").setAttribute("contenteditable", "true");
}

/*modal*/
function modalFunction(event){
    var oldRow = event.target.closest('tr');
    var rowIndex = oldRow.getAttribute("data-index");
    document.querySelector(".modal-overlay").classList.add("show");
    var tpl=`
    <div class="deletionModal">
        <form>
            <h2>Are you sure you want to delete this row?</h2>
            <div>
                <p>Name: ${data[rowIndex].name}</p>
                <p>Role: ${data[rowIndex].role}</p>
                <p>Type: ${data[rowIndex].type}</p>
                <p>Hitpoints: ${data[rowIndex].HitPoint}</p>
                <p>Physical Attack: ${data[rowIndex].PhysicalAttack}</p>
                <p>Mana: ${data[rowIndex].Mana}</p>
            </div>
            <h3>Deleted data can not be restored in anyway.</h3>
            <label for="deleteInput">Type "Delete" to delete the row</label>
            <input id="deleteInput" type="text">
            <h4 class="additionalText"></h4>
        </form>
        <button class="cancelButton">Cancel</button>
    </div>
    `;
    document.querySelector(".modal-overlay").innerHTML=tpl;
    document.querySelector(".cancelButton").addEventListener('click', () => {
        document.querySelector(".modal-overlay").classList.remove('show');
    });
    document.querySelector("#deleteInput").addEventListener("keydown",function(event){
        if(event.key==="Enter"){
            event.preventDefault();
            var textInput=document.querySelector("#deleteInput").value;
            if(textInput==="Delete"){
                deleteRow(event,rowIndex);
                document.querySelector(".modal-overlay").classList.remove('show');
            }
            else{
                document.querySelector(".additionalText").textContent=`Please type "Delete" and then press enter key to delete the row.`;
            }
            document.querySelector("#deleteInput").value="";
        }
    })
}
/*function for deleting row*/
function deleteRow(event,rowIndex) {
    data.splice(rowIndex, 1);
    lengthData = data.length;
    tableBodyRender(data);
    tagDynamic(pageNumber, rowNumber);
    document.querySelectorAll(".editActionButton").forEach(function (editable) {
        editable.addEventListener("click", isEditing);
    })
    document.querySelectorAll(".deleteActionButton").forEach(function (deleteable) {
        deleteable.addEventListener("click", modalFunction);
    })
}

function renderPage(){
    createDropdown(values);
    tableHeaderRender(fields);
    tableBodyRender(data);
    tagDynamic(pageNumber, rowNumber);
    dynamicButtons(rowNumber);
}

function attachEvents(){
    /*Adding events to buttons and input according to id*/
    document.getElementById("searchInput").addEventListener("input", handleInput);
    document.getElementById("dropdown").addEventListener("click", handleClick);
    document.querySelectorAll(".pagingButton").forEach(function (buttonPage) {
        buttonPage.addEventListener("click", pagingButton);
    })
    document.querySelector(".addButton").addEventListener("click", addingRow);
    /*Whenever the table is rendered these two functions must be called to attach these two events to the new edit and delete buttons */
    document.querySelectorAll(".editActionButton").forEach(function (editable) {
        editable.addEventListener("click", isEditing);
    })
    document.querySelectorAll(".deleteActionButton").forEach(function (deleteable) {
        deleteable.addEventListener("click", modalFunction);
    })
    document.querySelector(".modal-overlay").addEventListener('click', function(event){
        var modalOverlay=document.querySelector(".modal-overlay");
        if (event.target === modalOverlay) {
            document.querySelector(".modal-overlay").classList.remove('show');
        }
    })
    /* document.querySelectorAll("#Ascending").forEach(function(button){
        button.addEventListener("click",sortStringAsc('${fieldMember}'))
    })
    document.querySelectorAll("#Descending").forEach(function(button){
        button.addEventListener("click",sortStringDsc('${fieldMember}'))
    }) */
}

renderPage();
attachEvents();