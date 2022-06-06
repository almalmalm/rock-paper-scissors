function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function computerPlay() {
   let value = getRandomInt(3);
   if(value===0){
       console.log('Rock');
   }else if(value===1){
    console.log('Paper');
   }else {
    console.log('Scissors');
   }
}

computerPlay();