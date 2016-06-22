"use strict"

function monkeyCount(n) {
  var count=[];
  for(let i=1;i<=n;i++){
    count.push(i);
  }
  return console.log(count);
}

monkeyCount(10);
