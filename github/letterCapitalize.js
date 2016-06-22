"use strict"

var letterCapitalize = (str) => {
  var str = str.split(" ");
  var result=""
  for(let i in str){result = result + str[i][0].toUpperCase() + str[i].slice(1,str[i].length) + " ";}
  return console.log(result);
};

letterCapitalize("javascript in sexy");
