
const addtables = document.getElementById("addtable")


addtables.addEventListener("click", (e) => {
    
    const row = document.getElementsByClassName("continer_input_row")[0].value
    const column = document.getElementsByClassName("continer_input_column")[0].value
    const status=document.getElementsByClassName("status")[0].textContent
    
    console.log(row)
    console.log(column)
    
    colm=""
    for(i=0;i<column;i++){
       
        colm+=`<td>${i}</td>`
    }
    
    for(j=0;j<row;j++){
        
        var crRow=document.createElement("tr")
        crRow.setAttribute("class","continer_input_row") 
        crRow.innerHTML=colm
        table.append(crRow)

    }


    status.textContent="status: submitted"

    
    
 
})