const btn=document.getElementById("btn")


btn.addEventListener("click",()=>{

    let num1= document.getElementById("num1").value
            let num2= document.getElementById("num2").value
            let opp= document.getElementById("opp").value
            let ans=document.getElementById("ans")
    
            switch(num1,num2,opp){

                 case "+":
                    ans.innerHTML="answer = " + (Number(num1)+Number(num2));
                   break;
    
                case"-":
                ans.innerHTML="answer = " +(Number(num1)-Number(num2));
                   break;
    
                
                case"*":
                ans.innerHTML="answer = " +(Number(num1)*Number(num2));
                   break;
    
                
                case"/":
                ans.innerHTML="answer = " +(Number(num1)/Number(num2));
                   break;
    }

    num1.value=""
    num2.value=""
    opp.value=""
})
