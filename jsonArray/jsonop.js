
async function fetching() {

      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET',

      })



      return response.json();


}

fetching().then((result) => {


      console.log(result)


      const ans = document.getElementById("ans")
      const table = document.getElementById("table")



      let p = ''


      // first method

      // for (let i = 0; i < result.length; i++) {


      //       for (let key in result[i]) {



      //             p += `${key} : ${result[i][key]} <br />`

      //       }


      // }

      //second method


      for (let i = 0; i < result.length; i++) {



            let x = Object.keys(result[i])




            let y = Object.values(result[i])



            for (var j = 0; j < x.length; j++) {

                  let key = x[j]


                  let value = y[j]


                  p += `${key} : ${value} <br />`

            }

      }



      const fil = Map.groupBy(result, ({ id }) => {
            return id > 5 ? "yes" : "no";

      })


      for (let a of fil.get("yes")) {
            console.log("group by : " + a)
      }

      ans.innerHTML = p


})
