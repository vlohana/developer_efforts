let myProm = new Promise( (myresolve, myReject)=> {
  let x = 10;
  if(x === 0){
    myresolve('OVINOK')
  }
  else{
    myReject('ERROR')
  }
});

function print(val){
    console.log(val)
}

myProm.
then((val)=> {print(val);})
.catch((val)=>{print(val)})


