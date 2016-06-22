"use strict"
var makeString = (s)=>{
  var mstr = s.split(" ");
  var result=[];
  for(let i in mstr){result+=mstr[i].charAt(0)};
  console.log(result);
}
makeString("The community at Code States might be the biggest asset");
