
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


      
      
      // const colm=document.createElement("tr")


      
      console.log(result)




      for(let i=0;i<result.length;i++){

      
            
           let x=Object.keys(result[i])

            
           
           
           let y=Object.values(result[i])


            
            for (var j=0;j<x.length;j++){
                  
                  let key=x[j]

                  
                  let value=y[j]


                  
                  // console.log(key,value);

                  p += `${key} : ${value} <br />`

              }


            // for(let j=0;j<result.length;j++){

            //       console.log(j)

            // }
            
            // console.log(Object.keys(result[i]))


            // console.log(Object.values(result[i]))
           

            


            
      }

          
          // Group by Quantity
          const fil= Map.groupBy(result, ({id})=>{
            return id > 5 ? "yes" :"no";

          })


          for (let a of fil.get("yes")) {
            console.log(a)
          }

       ans.innerHTML = p


})
