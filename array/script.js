const fstName = document.getElementById("inputName")
const fatName = document.getElementById("inputFather")
const Mail = document.getElementById("inputMail")
const addDetails = document.getElementById("submit_button")
const continer = document.getElementById("continer")
const table = document.getElementById("table")



addDetails.addEventListener("click", () => {
    details = new Array();
    details.push(fstName.value, fatName.value, Mail.value);
    var colm = document.createElement("tr")
    colm.setAttribute("class", "table_row")

    newRows = ""

    for (let i = 0; i < details.length; i++) {
        newRows += `<td> ${details[i]}</td>`
    }


    colm.innerHTML = newRows + `<td><button onclick="deleteDetails(event)">delete</button></td>`;

    table.append(colm)

    console.log(details)
    console.log(details.sort())

    let txt = ""
    details.forEach(eachtest)
    console.log(txt)
    function eachtest(value, index, array) {

        return txt += value
    }

    fstName.value = ""
    fatName.value = ""
    Mail.value = ""
});


function deleteDetails(event) {
    event.target.parentElement.parentElement.remove()
}



// other consols 

const dummydetails = [20, 10, 5, 30, 65]
const dummydetails1 = [21, 10, 55, 30, 65]

console.log(dummydetails.filter((values) => { return values > 30 }));
console.log(dummydetails.map((values) => { return values * 2 }));
console.log(dummydetails.reduce((total, values) => { return total + values }));
console.log(...dummydetails, ...dummydetails1);
console.log(dummydetails.slice(1, 4));

//blocker
console.log(dummydetails.sort());

console.log(dummydetails.splice(2, 0, " 45"));
