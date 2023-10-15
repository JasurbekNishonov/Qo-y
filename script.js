var number =+prompt("Qo'ylar sonini kiriting!");
var sheep="";

/* while(isNaN(number)){
  var issue =+prompt("Iltimos son kiriting!")
  if(!isNaN(issue)){
    var sheep2="";
    for(let j=1; j<=number; j++){
      if(j<2){
        sheep2+=j+" ta qoy...  "
      }
      else{
        sheep2+=j+" ta qoylar...  "
      }
    }
    console.log(sheep2);
  }
} */

for(let i=1; i<=number; i++){
  if(i<2){
    sheep+=i+" ta qoy...  "
  }
  else{
    sheep+=i+" ta qoylar...  "
  }
}
console.log(sheep);