const fstName = document.getElementById("inputName")
const fatName = document.getElementById("inputFather")
const  Mail =document.getElementById("inputMail")
const addDetails =document.getElementById("submit_button")
const continer=document.getElementById("continer")
const table=document.getElementById("table")



addDetails.addEventListener("click",()=>{
    details = new Array();
    details.push(fstName.value,fatName.value,Mail.value);
    var colm=document.createElement("tr")
    colm.setAttribute("class","table_row")
    
    colm.innerHTML=`<td> ${details[0]}</td>
    <td> ${details[1]}</td>
    <td>${details[2]}"</td>
    <td><button onclick="deleteDetails(event)">delete</button></td>`

    table.append(colm)


    fstName.value=""
    fatName.value=""
    Mail.value=""
});


function deleteDetails(event){
    event.target.parentElement.parentElement.remove()
}



// Create two Person objects
  