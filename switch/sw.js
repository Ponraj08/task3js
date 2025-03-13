const btn = document.getElementById("btn")




btn.addEventListener("click", () => {
   
   let num1 = document.getElementById("num1").value
   let num2 = document.getElementById("num2").value
   let opp = document.getElementById("opp").value
   let ans = document.getElementById("ans")
   
   console.log(ans)
   
   switch (num1, num2, opp) {

      case "frontend":
         ans.innerHTML = "answer = " + (Number(num1) + Number(num2)) + "html css js";
         break;

      case "-":
         ans.innerHTML = "answer = " + (Number(num1) - Number(num2));
         break;
         
         
         case "*":
            ans.innerHTML = "answer = " + (Number(num1) * Number(num2));
            break;
            
            
            case "/":
               ans.innerHTML = "answer = " + (Number(num1) / Number(num2));
               break;
            }
            
            
            
         })
         
const clrBtn=document.getElementById("clrBtn")

clrBtn.addEventListener("click",()=>{
   
   
   document.getElementById("num1").value = ""
   document.getElementById("num2").value = ""
   document.getElementById("opp").value = ""
   document.getElementById("ans").textContent=""
   
})
