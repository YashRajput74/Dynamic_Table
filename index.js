/*Dynamic Data*/
var fields=["Name","Role","Type","Hitpoints","Physical Attack","Mana"];
var data=[
    {
        name:"Lukas",
        role:"Fighter",
        type:"Regen/Damage",
        HitPoint: 2550,
        PhysicalAttack: 119,
        Mana: 0
    },
    {
        name:"Suyou",
        role:"Assassian",
        type:"Chase/Burst",
        HitPoint:2390,
        PhysicalAttack:124,
        Mana: 0
    },
    {
        name:"Zhuxin",
        role:"Mage",
        type:"Damage/Crowd Control",
        HitPoint: 2280,
        PhysicalAttack: 115,
        Mana: 1300
    },
    {
        name:"Chip",
        role:"Tank",
        type:"Support/Crowd Control",
        HitPoint: 2481,
        PhysicalAttack: 112,
        Mana: 500
    },
    {
        name:"Ixia",
        role:"Marksman",
        type:"Finisher/Damage",
        HitPoint: 2320,
        PhysicalAttack: 100,
        Mana: 500
    },
    {
        name:"Arlott",
        role:"Fighter",
        type:"Charge/Burst",
        HitPoint: 2450,
        PhysicalAttack: 120,
        Mana: 0
    },
    {
        name:"Joy",
        role:"Assassian",
        type:"Chase/Damage",
        HitPoint: 2519,
        PhysicalAttack: 119,
        Mana: 0
    },
    {
        name:"Ferdrinn",
        role:"Tank",
        type:"Damage/Chase",
        HitPoint: 2600,
        PhysicalAttack: 125,
        Mana: 0
    },
    {
        name:"Floryn",
        role:"Support",
        type:"Poke/Guard",
        HitPoint: 2280,
        PhysicalAttack: 119,
        Mana: 500
    },
    {
        name:"Edith",
        role:"Tank",
        type:"Control/Burst",
        HitPoint: 2440,
        PhysicalAttack: 110,
        Mana: 0
    },
    {
        name:"Valentina",
        role:"Mage",
        type:"Burst/Finisher",
        HitPoint: 2580,
        PhysicalAttack: 115,
        Mana: 500
    },
    {
        name:"Aulus",
        role:"Fighter",
        type:"Damage/Crowd Control",
        HitPoint: 2580,
        PhysicalAttack: 90,
        Mana: 500
    },
    {
        name:"Phoveus",
        role:"Fighter",
        type:"Regen/Damage",
        HitPoint: 2650,
        PhysicalAttack: 132,
        Mana: 0
    },
    {
        name:"Gloo",
        role:"Tank",
        type:"Regen/Control",
        HitPoint: 2710,
        PhysicalAttack:120 ,
        Mana: 500
    },
    {
        name:"Yve",
        role:"Mage",
        type:"Poke/Burst",
        HitPoint: 2530,
        PhysicalAttack: 115,
        Mana: 500
    },
    {
        name:"Brody",
        role:"Marksman",
        type:"Finisher/Burst",
        HitPoint: 2290,
        PhysicalAttack: 105,
        Mana: 500
    },
    {
        name:"Barats",
        role:"Tank",
        type:"Damage/Crowd Control",
        HitPoint: 2450,
        PhysicalAttack: 135,
        Mana: 500
    },
    {
        name:"Khaleed",
        role:"Fighter",
        type:"Damage/Regen",
        HitPoint: 2600,
        PhysicalAttack: 109,
        Mana: 0
    },
    {
        name:"Bendetta",
        role:"Assassian",
        type:"Chase/Burst",
        HitPoint: 2410,
        PhysicalAttack: 113,
        Mana: 500
    },    
    {
        name:"Luo Yi",
        role:"Mage",
        type:"Support/Crowd Control",
        HitPoint: 2480,
        PhysicalAttack: 107,
        Mana: 500
    },    
    {
        name:"Yu Zhong",
        role:"Fighter",
        type:"Regen/Damage",
        HitPoint: 2520,
        PhysicalAttack: 129,
        Mana: 0
    },
    {
        name:"Cecilion",
        role:"Mage",
        type:"Poke/Burst",
        HitPoint: 2335,
        PhysicalAttack: 105,
        Mana: 700
    },
    {
        name:"Lylia",
        role:"Mage",
        type:"Push/Damage",
        HitPoint: 2380,
        PhysicalAttack: 113,
        Mana: 500
    },
    {
        name:"Guinevere",
        role:"Fighter",
        type:"Burst/Magic Damage",
        HitPoint: 2350,
        PhysicalAttack: 126,
        Mana: 0
    },
    {
        name:"Khufra",
        role:"Tank",
        type:"Inititator/Crowd Control",
        HitPoint: 2670,
        PhysicalAttack: 117,
        Mana: 500
    },
    {
        name:"Badang",
        role:"Fighter",
        type:"Charge/Burst",
        HitPoint: 2530,
        PhysicalAttack: 111,
        Mana: 0
    },
    {
        name:"Faramis",
        role:"Support",
        type:"Guard/Charge",
        HitPoint: 2422,
        PhysicalAttack: 118,
        Mana: 500
    },
    {
        name:"Kadita",
        role:"Mage",
        type:"Burst/Charge",
        HitPoint: 2370,
        PhysicalAttack: 105,
        Mana: 500
    },
    {
        name:"Minsithar",
        role:"Fighter",
        type:"Initiator/Crowd Control",
        HitPoint: 2520,
        PhysicalAttack: 121,
        Mana: 500
    },
    {
        name:"Harith",
        role:"Mage",
        type:"Chase/Damage",
        HitPoint: 2280,
        PhysicalAttack: 114,
        Mana: 500
    },
    {
        name:"Thamuz",
        role:"Fighter",
        type:"Chase/Damage",
        HitPoint: 2580,
        PhysicalAttack: 107,
        Mana: 0
    },
    {
        name:"Hanzo",
        role:"Assassian",
        type:"Poke/Burst",
        HitPoint: 2435,
        PhysicalAttack: 108,
        Mana: 0
    },
    {
        name:"Lunox",
        role:"Mage",
        type:"Burst/Damage",
        HitPoint: 2610,
        PhysicalAttack: 115,
        Mana: 500
    },
    {
        name:"Leomard",
        role:"Fighter",
        type:"Chase/Burst",
        HitPoint: 2560,
        PhysicalAttack: 126,
        Mana: 0
    },
    {
        name:"Vale",
        role:"Mage",
        type:"Burst/Crowd Control",
        HitPoint: 2280,
        PhysicalAttack: 115,
        Mana: 500
    },
    {
        name:"Claude",
        role:"Marksman",
        type:"Burst/Chase",
        HitPoint: 2250,
        PhysicalAttack: 100,
        Mana: 0
    },
    {
        name:"Alduos",
        role:"Fighter",
        type:"Burst/Support",
        HitPoint: 2490,
        PhysicalAttack: 129,
        Mana: 500
    },
    {
        name:"Selena",
        role:"Assassian",
        type:"Initiator/Finisher",
        HitPoint: 2280,
        PhysicalAttack: 110,
        Mana: 500
    },
    {
        name:"Kaja",
        role:"Support/Fighter",
        type:"Control/ Charge",
        HitPoint: 2431,
        PhysicalAttack: 120,
        Mana: 500
    },
    {
        name:"Uranus",
        role:"Tank",
        type:"Regen",
        HitPoint: 2380,
        PhysicalAttack: 115,
        Mana: 500
    },
    {
        name:"Pharsa",
        role:"Mage",
        type:"Burst/Poke",
        HitPoint: 2300,
        PhysicalAttack: 109,
        Mana: 500
    },
    {
        name:"Lancelot",
        role:"Assassian",
        type:"Chase/Burst",
        HitPoint: 2390,
        PhysicalAttack: 124,
        Mana: 500
    },
    {
        name:"Argus",
        role:"Fighter",
        type:"Charge/Burst",
        HitPoint: 2450,
        PhysicalAttack: 111,
        Mana: 0
    },
    {
        name:"Grock",
        role:"Tank",
        type:"Crowd Control/Initiator",
        HitPoint: 2710,
        PhysicalAttack: 135,
        Mana: 0
    },
    {
        name:"Karrie",
        role:"Marksman",
        type:"Finisher/Damage",
        HitPoint: 2278,
        PhysicalAttack: 120,
        Mana: 500
    },
    {
        name:"Roger",
        role:"Fighter",
        type:"Finisher/Burst",
        HitPoint: 2530,
        PhysicalAttack: 128,
        Mana: 500
    },
    {
        name:"Aurora",
        role:"Mage",
        type:"Crowd Control/Poke",
        HitPoint: 2380,
        PhysicalAttack: 110,
        Mana: 500
    },
    {
        name:"Hilda",
        role:"Fighter/Tank",
        type:"Damage/Regen",
        HitPoint: 2680,
        PhysicalAttack: 123,
        Mana: 0
    },
    {
        name:"Johnson",
        role:"Tank",
        type:"Support/Crowd Control",
        HitPoint: 2700,
        PhysicalAttack: 120,
        Mana: 0
    },
    {
        name:"Moskov",
        role:"Marksman",
        type:"Finisher/Chase",
        HitPoint: 2255,
        PhysicalAttack: 125,
        Mana: 500
    },
    {
        name:"Yi Sun Shi",
        role:"Marksman",
        type:"Finisher/Chase",
        HitPoint: 2570,
        PhysicalAttack: 95,
        Mana: 500
    }

];
var values = [10, 15, 25];

/*length of data set for buttons*/
var lengthData=data.length;
console.log(lengthData)

/*default row number*/
var rowNumber=values[0];
var theFilter="";
var newestData="";
var sortedData="";

/*creating a dropdown*/
function createDropdown(values) {
    return `<label for="dropdown"></label>
            <select class="dropdown" id="dropdown" name="dropdown">
            ${values.map(function(value){ 
                return `
                <option value="${value}">${value}</option>`
            }).join('')}
            </select>`;
}
document.querySelector("#dropHere").innerHTML=createDropdown(values);

/*Creating a dropdown for the sorter*/


/*the 5,10,15 button's click events*/
function handleClick(event){
    console.log("click event");
    rowNumber = event.target.value;
    console.log(rowNumber);

    document.querySelector('table').innerHTML=tableRender(data,fields);

    document.querySelector('.pageIcons').innerHTML= dynamicButtons(rowNumber);
    document.querySelectorAll(".pagingButton").forEach(function(buttonPage){
        buttonPage.addEventListener("click",pagingButton);
    })
}

/*This is the Search bar input*/
function handleInput(event) {
    console.log('input event executed');
    theFilter=event.target.value.toLowerCase();
    var newData=data.filter(function(item){
        return (
            item.name.toLowerCase().includes(`${theFilter}`) ||
            item.role.toLowerCase().includes(`${theFilter}`) ||
            item.type.toLowerCase().includes(`${theFilter}`) ||
            String(item.HitPoint).includes(`${theFilter}`) ||
            String(item.PhysicalAttack).includes(`${theFilter}`) ||
            String(item.Mana).includes(`${theFilter}`)
        )
    })

    lengthData=newData.length;
    /*This updates the code for search bar*/
    document.querySelector('table').innerHTML = tableRender(newData, fields);
    /*This updates number of buttons*/
    document.querySelector('.pageIcons').innerHTML = dynamicButtons(rowNumber);
    document.querySelectorAll(".pagingButton").forEach(function(buttonPage){
        buttonPage.addEventListener("click",pagingButton);
    })
}

/*This  function is for table render*/
function tableRender(data,fields){
    return `
        <thead>
            <tr>
                ${
                    fields.map(function(fieldMember){
                        return `
                            <th>${fieldMember}
                            <div class=headButton>
                            <button class="headingButton" onclick="sortStringAsc('${fieldMember}')" >
                            <img src="https://th.bing.com/th?id=OIP.pDmgA1bsIubxvKMWINXJpgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"width="5px" height="5px">
                            </button>
                            <button class="headingButton" onclick="sortStringDsc('${fieldMember}')">
                            <img src="https://th.bing.com/th?id=OIP.aEEk21LpU4JhD3fMOdAEvAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" width="5px" height="5px"></button>
                            </div>
                            </th>
                        `
                    }).join('')
                }
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            ${
                data.map(function(dataMember,index){
                    if(index<rowNumber){
                        return `
                            <tr class="editing">
                                <td>${dataMember.name}</td>
                                <td>${dataMember.role}</td>
                                <td>${dataMember.type}</td>
                                <td>${dataMember.HitPoint}</td>
                                <td>${dataMember.PhysicalAttack}</td>
                                <td>${dataMember.Mana}</td>
                                <td  contenteditable="false"><button class="editActionButton">Edit</button> <button class="deleteActionButton" onClick="deleteButton()">Delete</button></td>
                            </tr>
                    `
                    }
                }).join('')
            }
        </tbody>
        `
}
document.querySelector('table').innerHTML=tableRender(data,fields);


/*When the page loads for first time this function makes buttons of pages for default number of rows that is 10*/
function dynamicButtons(rowNumber){
    var buttonNumber=lengthData/rowNumber;
    if((lengthData%rowNumber)!=0){
        buttonNumber+=1;
    }
    var CodeButtons="";
    for(var i=1;i<=buttonNumber;i++){
        CodeButtons+=`<button class="pagingButton">${i}</button>`
    }
    return CodeButtons;
}
document.querySelector('.pageIcons').innerHTML=dynamicButtons(rowNumber);

/*This event is when we click on page number it will change the page*/
function pagingButton(event){
    console.log('paging button event');
    var pageNumber=event.target.textContent;
    console.log(pageNumber);
    newestData=data.slice((pageNumber-1)*rowNumber,pageNumber*rowNumber);

    var tableData=document.querySelector('table');
    tableData.innerHTML=tableRender(newestData,fields);
}

/*functions for sorting two functions 1 for ascending and 1 for descending*/
function sortStringAsc(param){
    console.log(param);
    if(param=="Name"){
        sortedData=data.sort(function(a,b){
            return a.name.localeCompare(b.name);
        })
    }
    else if(param=="Role"){
        sortedData=data.sort(function(a,b){
            return a.role.localeCompare(b.role);
        })
    }
    else if(param=="Type"){
        sortedData=data.sort(function(a,b){
            return a.type.localeCompare(b.type);
        })
    }
    else if(param=="Hitpoints"){
        sortedData=data.sort(function(a,b){
            return a.HitPoint-b.HitPoint;
        });   
    }
    else if(param=="Physical Attack"){
        sortedData=data.sort(function(a,b){
            return a.PhysicalAttack-b.PhysicalAttack;
        });   
    }
    else if(param=="Mana"){
        sortedData=data.sort(function(a,b){
            return a.Mana-b.Mana;
        });   
    }
    document.querySelector('table').innerHTML=tableRender(sortedData,fields);
}
function sortStringDsc(param){
    console.log(param);
    if(param=="Name"){
        sortedData=data.sort(function(a,b){
            return b.name.localeCompare(a.name);
        })
    }
    else if(param=="Role"){
        sortedData=data.sort(function(a,b){
            return b.role.localeCompare(a.role);
        })
    }
    else if(param=="Type"){
        sortedData=data.sort(function(a,b){
            return b.type.localeCompare(a.type);
        })
    }
    else if(param=="Hitpoints"){
        sortedData=data.sort(function(a,b){
            return b.HitPoint-a.HitPoint;
        });   
    }
    else if(param=="Physical Attack"){
        sortedData=data.sort(function(a,b){
            return b.PhysicalAttack-a.PhysicalAttack;
        });   
    }
    else if(param=="Mana"){
        sortedData=data.sort(function(a,b){
            return b.Mana-a.Mana;
        });   
    }
    document.querySelector('table').innerHTML=tableRender(sortedData,fields);
}

/*function for adding row*/
function addingRow(){
    document.querySelector("#addRow").style.display="grid";
}

/*function for editing row*/
function isEditing(){
    document.querySelector(".editing").setAttribute("contenteditable", "true");
}

/*Adding events to buttons and input according to id*/
document.getElementById("searchInput").addEventListener("input", handleInput);

document.getElementById("dropdown").addEventListener("click", handleClick);

document.querySelectorAll(".pagingButton").forEach(function(buttonPage){
    buttonPage.addEventListener("click",pagingButton);
})

document.querySelector("#addRowButton").addEventListener("click",addingRow);

document.querySelectorAll(".editActionButton").forEach(function(editable){
    editable.addEventListener("click",isEditing);
})
/*
function createDropdown() {
  const values = [5, 10, 15];
  const dropdownHTML = `<select id="dropdown">${values.map(value => `<option value="${value}">${value}</option>`).join('')}</select>`;
  document.body.innerHTML = dropdownHTML;

  const select = document.getElementById('dropdown');
  select.addEventListener('change', function(event) {
    const selectedValue = event.target.value;
    console.log('Selected value:', selectedValue);
  });
}

createDropdown();
*/