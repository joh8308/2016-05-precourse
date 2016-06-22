removeChar=(str)=>{
  var rm_first = /^\w/i;
  var rm_end = /\w$/i;
  str = str.replace(rm_first, "");
  str = str.replace(rm_end, "");
  console.log(str);
}
removeChar("John Smith");
