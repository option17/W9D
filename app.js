    
        
       let userName = [`bob`, `tanya`, `dawn`, `marshall`, `marc`, `james`, `alex`, `trent`, `lucas`, `rae`];
       let  userAge = [36, 26, 47, 45, 12, 34, 32, 30, 17, 29];

  
       let counter = -1

       while(counter < userName.length){
             counter++;
            if(userAge[counter] >=18){
               
                console.log(userName[counter]);
                console.log(userAge[counter]);
              
            }
          
       
    }

for(let counter = 0; counter < userName.length; counter++){
    if(userAge[counter] <=18) {
        console.log(userName[counter]);
        console.log(userAge[counter]);
    }
}






