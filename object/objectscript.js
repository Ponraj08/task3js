const submitButton = document.getElementById("submit_button")
const deleteBtn=document.getElementById("delete_button")
const ans = document.getElementById("ans")

const person1 = {
  firstName: "John",
  lastName: "Doe",
  mail: "a@gmail.com"
};

function printing(){

  p = ""
  for (let key in person1) {
  
    p += `${key + " : " + person1[key]}<br>`
  }
  
  ans.innerHTML = p
}

printing()


const Name = "firstName";
const lname = "lastName";
const email = "mail";

submitButton.addEventListener("click", () => {
  
  const firstName = document.getElementById("inputName").value
  const inputFather = document.getElementById("inputFather").value
  const inputMail = document.getElementById("inputMail").value
  const addingkey = document.getElementById("addingkey").value
  const addingvalue = document.getElementById("addingvalue").value
  
  ans.innerHTML = p
  
  if(firstName || inputFather || inputMail ===""){
    
    alert("enter all fildes or it will clear others")

  }
  person1[Name] = firstName;
  person1[lname] = inputFather;
  person1[email] = inputMail;
  
  if (addingkey!== "") {
    
    person1[addingkey] = addingvalue
    
  }
  
  printing()

  console.log(person1)
})


deleteBtn.addEventListener("click",()=>{

  const inputDelete=document.getElementById("inputDelete").value

  delete person1[inputDelete]

  printing()
})


 document.getElementById("inputName").value=""
document.getElementById("inputFather").value=""
document.getElementById("inputMail").value=""
 document.getElementById("addingkey").value=""
document.getElementById("addingvalue").value=""
document.getElementById("inputDelete").value=""