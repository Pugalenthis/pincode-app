async function foo() {
    try {

        let userinp = document.getElementById("userinput").value
        
        if(userinp.length == 6){
        

        let res = await fetch(`https://api.postalpincode.in/pincode/${userinp}`)
        let result = await res.json()
        console.log(result)

        
         document.getElementById("area").innerHTML=`AREA : ${result[0].PostOffice[0].Name}`
         document.getElementById("district").innerHTML=`DISTRICT : ${result[0].PostOffice[0].District}`
         document.getElementById("state").innerHTML=`STATE : ${result[0].PostOffice[0].State}`
       
        }
        else{
           alert("Pincode should have only 6 numbers.")
        }
    } catch (error) {
      console.log(error)  
    }
}


