const submitButton = document.getElementById("submit_button")

submitButton.addEventListener("click", () => {

  const firstName = document.getElementById("inputName").value
  const inputFather = document.getElementById("inputFather").value
  const inputMail = document.getElementById("inputMail").value
  const addingkey = document.getElementById("addingkey").value
  const addingvalue = document.getElementById("addingvalue").value
  const ans=document.getElementById("ans")


  const person1 = {
    firstName: "John",
    lastName: "Doe",
    mail: "a@gmail.com"
  };


  const Field = "firstName";
  const Year = "lastName";
  const lang = "mail";
  person1[Field] = firstName;
  person1[Year] = inputFather;
  person1[lang] = inputMail;

  if (addingkey !== "") {

    person1[addingkey] = addingvalue

  }

  console.log(person1);


  p = ""
  for (let key in person1) {

    p += person1[key] + person1.value
  }

  console.log(p)

  ans.innerHTML= p

})
