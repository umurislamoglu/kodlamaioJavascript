function isPrime(...numbers) {
    numbers.forEach((number) => {
      if (number === 1 || number === 2) {
        console.log(`${number} is Prime Number...`);
      } else {
        let counter = 0;
        for (let idx = 2; idx < number; idx++) {
          if (number % idx == 0) {
            counter++;
          }
        }
        if (counter == 0) {
          console.log(`${number} is Prime Number...`);
        }
      }
    });
  }
  
  isPrime(1,2,3,4,5,6,7,8,9,99)

  function friendNumber(sayi1,sayi2)
  {
      let total1=1
      let total2=1
      for(let i=2;i<(sayi1-1);i++){
         if(sayi1%i==0) 
         {
             total1 +=i
         }
 
      }
      for(let j=2;j<(sayi2-1);j++){
         if(sayi2%j==0) 
         {
             total2 +=j
         }
 
      }
 
      if(total1==sayi2 && total2==sayi1)
      {
          console.log(sayi1+" "+sayi2+" "+" friend number")
      }else{
          console.log(sayi1+" "+sayi2+" "+" not friend number")
      }
 
  }

  friendNumber(220,284)

  function perfectNumber()
  {
      let total=0
      for(let i=1;i<1000;i++){
 
         for(let j=0;j<(i-1);j++)
         if(i%j==0) 
         {
             total +=j
         }
 
         if(total==i)
         {
          console.log(i+" "+" perfect number")
         }
         total=0
      }
 
  }
  perfectNumber()

  function Prime(){
    let bayrak=0
   for(let i=0;i<1000;i++){

       if(i==1 || i==0)
       {
           bayrak=1
       }
       for(let j=2;j<i;j++)
       {
           if(i%j==0)
           {
               bayrak=1
           }
       }
       if(bayrak==0)
       {
          console.log(i+" "+" prime number")
       }
       bayrak=0
       
   }
}
Prime()