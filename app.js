    
        
       let userName = [`bob`, `tanya`, `dawn`, `marshall`, `marc`, `james`, `alex`, `trent`, `lucas`, `rae`];
       let  userAge = [36, 26, 47, 45, 12, 34, 32, 30, 17, 29];

    //    Above I have two variables

  
       let counter = -1

       while(counter < userName.length){
             counter++;
            if(userAge[counter] >=18){
            //    Above I have set my counter to -1 and created a while loop and made an if statement. I had to set my counter to -1 because I put my
            // counter++ above my if statment so when my loop starts it already adds 1 to the counter. To make sure my output included bob as he is index 0
            // I had to start at -1
                console.log(userName[counter]);
                console.log(userAge[counter]);
              
            }
        //   My coding above says that if my the ages of my userName are over or equal to 18 console log their name followed by their age.
       
    }

for(let counter = 0; counter < userName.length; counter++){
    if(userAge[counter] <=18) {
        console.log(userName[counter]);
        console.log(userAge[counter]);
    }
}

// Above I have a for loop where my counter starts at 0. My if statement says if my userage is less than or equal to 18 console.log them




