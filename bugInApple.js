"use strict"

var apple=[
 ["A","A","A","A","A"],
 ["A","B","A","A","A"],
 ["A","A","A","A","A"],
 ["A","A","A","A","A"],
 ["A","A","A","A","A"]
 ];

function sc(apple){
  for(let i in apple){
    for(let j in apple[i]){
      if(apple[i][j]=="B"){return console.log(`answer = [${i},${j}]`);}
    }
  }
}

sc(apple);
