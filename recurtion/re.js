
const btn=document.getElementById("btn")
btn.addEventListener("click",()=>{
    
    const num = document.getElementById("num").value
    const ans=document.getElementById("ans")
    function recurtion(num) {
        
        if (num === 0) { return 0 }
        else if (num === 1) { return 1 }
        
        let rec = recurtion(num - 1) + recurtion(num - 2)
        
        return rec
    }
    
    
    const ans1=recurtion(Number(num))
    
    ans.innerHTML="answer  =" + ans1
})



