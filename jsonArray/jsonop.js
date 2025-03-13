
async function fetching() {

      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET',

      })



      return response.json();


}

fetching().then((result) => {


      // console.log(result)


      const ans = document.getElementById("ans")
      const table=document.getElementById("table")



      let p = ''

      // for (let i = 0; i < result.length; i++) {


      //       for (let key in result[i]) {

                  

      //             p += `${key} : ${result[i][key]} <br />`

      //       }


      // }


      
      
      const colm=document.createElement("tr")


      

      for(let i=0;i<result.length;i++){
            
            
            console.table(result[i])
            
            
            x=Object.keys(result[i])
            
            
            
            for (var j=0;j<x.length;j++){
                  
                  key=x[j]
                  
                  value=result[i][key]
                  
                  // console.log(key,value);

                  p += `${key} : ${value} <br />`

              }


            // for(let j=0;j<result.length;j++){

            //       console.log(j)

            // }
            
            // console.log(Object.keys(result[i]))


            // console.log(Object.values(result[i]))
           

            


            
      }


       ans.innerHTML = p
})
